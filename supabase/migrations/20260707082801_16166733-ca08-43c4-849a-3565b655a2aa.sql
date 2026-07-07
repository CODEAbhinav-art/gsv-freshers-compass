
CREATE TABLE public.site_stats (
  id int PRIMARY KEY DEFAULT 1,
  visitor_count bigint NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT site_stats_singleton CHECK (id = 1)
);

GRANT SELECT ON public.site_stats TO anon, authenticated;
GRANT ALL ON public.site_stats TO service_role;

ALTER TABLE public.site_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read site stats"
  ON public.site_stats FOR SELECT
  TO anon, authenticated
  USING (true);

-- Seed with current visit count
INSERT INTO public.site_stats (id, visitor_count)
VALUES (1, (SELECT count(*) FROM public.website_visits))
ON CONFLICT (id) DO UPDATE SET visitor_count = EXCLUDED.visitor_count;

-- Trigger to increment counter on new visit (runs as table owner)
CREATE OR REPLACE FUNCTION public.increment_site_visitor_count()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.site_stats
     SET visitor_count = visitor_count + 1,
         updated_at = now()
   WHERE id = 1;
  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION public.increment_site_visitor_count() FROM PUBLIC, anon, authenticated;

CREATE TRIGGER trg_increment_site_visitor_count
AFTER INSERT ON public.website_visits
FOR EACH ROW EXECUTE FUNCTION public.increment_site_visitor_count();

-- Remove the publicly-executable SECURITY DEFINER function
DROP FUNCTION IF EXISTS public.get_visitor_count();

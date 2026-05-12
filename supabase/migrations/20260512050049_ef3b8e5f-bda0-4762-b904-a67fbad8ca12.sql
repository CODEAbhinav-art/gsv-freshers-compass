
CREATE TABLE public.branch_survival_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  branch TEXT NOT NULL,
  section TEXT NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_name TEXT,
  author_user_id UUID,
  is_anonymous BOOLEAN NOT NULL DEFAULT false,
  status public.moderation_status NOT NULL DEFAULT 'pending',
  upvotes_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_bse_branch ON public.branch_survival_entries(branch);
CREATE INDEX idx_bse_status ON public.branch_survival_entries(status);

ALTER TABLE public.branch_survival_entries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view approved entries"
  ON public.branch_survival_entries FOR SELECT
  USING (status = 'approved');

CREATE POLICY "Authors can view their own entries"
  ON public.branch_survival_entries FOR SELECT
  USING (auth.uid() IS NOT NULL AND auth.uid() = author_user_id);

CREATE POLICY "Moderators can view all entries"
  ON public.branch_survival_entries FOR SELECT
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'moderator'));

CREATE POLICY "Anyone can submit entries"
  ON public.branch_survival_entries FOR INSERT
  WITH CHECK (status = 'pending' AND (author_user_id IS NULL OR author_user_id = auth.uid()));

CREATE POLICY "Moderators can update entries"
  ON public.branch_survival_entries FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'moderator'))
  WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'moderator'));

CREATE POLICY "Moderators can delete entries"
  ON public.branch_survival_entries FOR DELETE
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'moderator'));

CREATE TRIGGER trg_bse_updated_at
  BEFORE UPDATE ON public.branch_survival_entries
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.survival_upvotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entry_id UUID NOT NULL REFERENCES public.branch_survival_entries(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (entry_id, user_id)
);

ALTER TABLE public.survival_upvotes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view survival upvotes"
  ON public.survival_upvotes FOR SELECT USING (true);

CREATE POLICY "Authenticated users can upvote entries"
  ON public.survival_upvotes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove their own survival upvote"
  ON public.survival_upvotes FOR DELETE
  USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.update_survival_upvotes_count()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.branch_survival_entries SET upvotes_count = upvotes_count + 1 WHERE id = NEW.entry_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.branch_survival_entries SET upvotes_count = GREATEST(upvotes_count - 1, 0) WHERE id = OLD.entry_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$;

CREATE TRIGGER trg_survival_upvotes_count
  AFTER INSERT OR DELETE ON public.survival_upvotes
  FOR EACH ROW EXECUTE FUNCTION public.update_survival_upvotes_count();

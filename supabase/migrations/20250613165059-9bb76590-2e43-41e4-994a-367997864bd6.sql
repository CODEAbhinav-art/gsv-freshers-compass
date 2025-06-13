
-- Create a table to track website visits
CREATE TABLE public.website_visits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visited_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_agent TEXT,
  ip_address INET
);

-- Create an index for faster queries on the timestamp
CREATE INDEX idx_website_visits_visited_at ON public.website_visits(visited_at);

-- Enable real-time updates for the visits table
ALTER TABLE public.website_visits REPLICA IDENTITY FULL;

-- Add the table to the real-time publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.website_visits;

-- Create a function to get current visitor count (visits in last 24 hours)
CREATE OR REPLACE FUNCTION public.get_visitor_count()
RETURNS INTEGER
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN (
    SELECT COUNT(*)
    FROM public.website_visits
    WHERE visited_at >= NOW() - INTERVAL '24 hours'
  );
END;
$$;

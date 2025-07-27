
-- Phase 1: Critical Database Security Fixes

-- 1. Enable RLS on website_visits table and add appropriate policies
ALTER TABLE public.website_visits ENABLE ROW LEVEL SECURITY;

-- Allow public INSERT for visitor tracking (anonymous users can track visits)
CREATE POLICY "Allow public insert for visitor tracking" 
ON public.website_visits 
FOR INSERT 
WITH CHECK (true);

-- Only allow authenticated users to view visitor data
CREATE POLICY "Authenticated users can view visitor data" 
ON public.website_visits 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- 2. Fix database function security to prevent search path manipulation attacks

-- Update get_visitor_count function with security definer and safe search path
CREATE OR REPLACE FUNCTION public.get_visitor_count()
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
BEGIN
  RETURN (
    SELECT COUNT(*)
    FROM public.website_visits
  );
END;
$function$;

-- Update update_likes_count function with security definer and safe search path
CREATE OR REPLACE FUNCTION public.update_likes_count()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.forum_posts 
    SET likes_count = likes_count + 1 
    WHERE id = NEW.post_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.forum_posts 
    SET likes_count = likes_count - 1 
    WHERE id = OLD.post_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$function$;

-- Update update_replies_count function with security definer and safe search path
CREATE OR REPLACE FUNCTION public.update_replies_count()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.forum_posts 
    SET replies_count = replies_count + 1 
    WHERE id = NEW.post_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.forum_posts 
    SET replies_count = replies_count - 1 
    WHERE id = OLD.post_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$function$;

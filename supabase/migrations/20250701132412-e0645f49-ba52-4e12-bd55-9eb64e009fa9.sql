
-- Modify the get_visitor_count function to return lifetime count instead of 24 hours
CREATE OR REPLACE FUNCTION public.get_visitor_count()
 RETURNS integer
 LANGUAGE plpgsql
AS $function$
BEGIN
  RETURN (
    SELECT COUNT(*)
    FROM public.website_visits
  );
END;
$function$

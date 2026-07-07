
-- Profiles: restrict SELECT to owner only
DROP POLICY IF EXISTS "Profiles viewable by authenticated users" ON public.profiles;
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- survival_upvotes: restrict SELECT to authenticated
DROP POLICY IF EXISTS "Anyone can view survival upvotes" ON public.survival_upvotes;
CREATE POLICY "Authenticated users can view survival upvotes"
  ON public.survival_upvotes FOR SELECT
  TO authenticated
  USING (true);
REVOKE SELECT ON public.survival_upvotes FROM anon;

-- wisdom_upvotes: restrict SELECT to authenticated
DROP POLICY IF EXISTS "Anyone can view upvotes" ON public.wisdom_upvotes;
CREATE POLICY "Authenticated users can view wisdom upvotes"
  ON public.wisdom_upvotes FOR SELECT
  TO authenticated
  USING (true);
REVOKE SELECT ON public.wisdom_upvotes FROM anon;

-- Revoke EXECUTE on SECURITY DEFINER functions from anon/authenticated/public.
-- Trigger functions run as table owner regardless; has_role is invoked from
-- other SECURITY DEFINER functions/policies which retain access.
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_likes_count() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_replies_count() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_wisdom_upvotes_count() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_survival_upvotes_count() FROM PUBLIC, anon, authenticated;


-- 1. Profiles: restrict SELECT to authenticated users
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;
CREATE POLICY "Profiles viewable by authenticated users"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (true);
REVOKE SELECT ON public.profiles FROM anon;

-- 2. Forum likes: require auth + email must match jwt
DROP POLICY IF EXISTS "Public can insert forum_likes" ON public.forum_likes;
CREATE POLICY "Authenticated users can insert their own forum_likes"
  ON public.forum_likes FOR INSERT
  TO authenticated
  WITH CHECK (user_email = (auth.jwt() ->> 'email'));

-- 3. Forum posts: require auth + author_email must match jwt + length limits
DROP POLICY IF EXISTS "Public can insert forum_posts" ON public.forum_posts;
CREATE POLICY "Authenticated users can insert their own forum_posts"
  ON public.forum_posts FOR INSERT
  TO authenticated
  WITH CHECK (
    author_email = (auth.jwt() ->> 'email')
    AND length(title) BETWEEN 1 AND 300
    AND length(content) BETWEEN 1 AND 10000
    AND length(author_name) BETWEEN 1 AND 200
    AND length(category) BETWEEN 1 AND 100
  );

-- 4. Forum replies: same
DROP POLICY IF EXISTS "Public can insert forum_replies" ON public.forum_replies;
CREATE POLICY "Authenticated users can insert their own forum_replies"
  ON public.forum_replies FOR INSERT
  TO authenticated
  WITH CHECK (
    author_email = (auth.jwt() ->> 'email')
    AND length(content) BETWEEN 1 AND 10000
    AND length(author_name) BETWEEN 1 AND 200
  );

-- 5. Questions: replace always-true INSERT with bounded validation
DROP POLICY IF EXISTS "Allow public insert on questions" ON public.questions;
CREATE POLICY "Public can submit bounded questions"
  ON public.questions FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 1 AND 200
    AND length(email) BETWEEN 3 AND 320
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND length(category) BETWEEN 1 AND 100
    AND length(question) BETWEEN 1 AND 5000
    AND (status IS NULL OR status = 'pending')
    AND answer IS NULL
    AND admin_id IS NULL
  );

-- 6. Website visits: replace always-true with bounded validation
DROP POLICY IF EXISTS "Allow public insert for visitor tracking" ON public.website_visits;
CREATE POLICY "Public can insert bounded visitor rows"
  ON public.website_visits FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    (user_agent IS NULL OR length(user_agent) <= 2000)
  );

-- 7. Lock down SECURITY DEFINER function EXECUTE privileges
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_likes_count() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_replies_count() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_wisdom_upvotes_count() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_survival_upvotes_count() FROM PUBLIC, anon, authenticated;

-- get_visitor_count is intentionally callable by the public visitor counter
REVOKE EXECUTE ON FUNCTION public.get_visitor_count() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_visitor_count() TO anon, authenticated;

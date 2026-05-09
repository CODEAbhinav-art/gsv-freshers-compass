
-- Tighten RLS on questions table: remove public SELECT/UPDATE
DROP POLICY IF EXISTS "Allow public read access on questions" ON public.questions;
DROP POLICY IF EXISTS "Allow public update on questions" ON public.questions;

CREATE POLICY "Authenticated can read questions"
ON public.questions FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated can update questions"
ON public.questions FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Tighten RLS on forum_posts: remove ALL-public policy, split by command
DROP POLICY IF EXISTS "Allow public access on forum_posts" ON public.forum_posts;

CREATE POLICY "Authenticated can read forum_posts"
ON public.forum_posts FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Public can insert forum_posts"
ON public.forum_posts FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated can update forum_posts"
ON public.forum_posts FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated can delete forum_posts"
ON public.forum_posts FOR DELETE
TO authenticated
USING (true);

-- Tighten RLS on forum_replies
DROP POLICY IF EXISTS "Allow public access on forum_replies" ON public.forum_replies;

CREATE POLICY "Authenticated can read forum_replies"
ON public.forum_replies FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Public can insert forum_replies"
ON public.forum_replies FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated can update forum_replies"
ON public.forum_replies FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated can delete forum_replies"
ON public.forum_replies FOR DELETE
TO authenticated
USING (true);

-- Tighten RLS on forum_likes
DROP POLICY IF EXISTS "Allow public access on forum_likes" ON public.forum_likes;

CREATE POLICY "Authenticated can read forum_likes"
ON public.forum_likes FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Public can insert forum_likes"
ON public.forum_likes FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated can delete forum_likes"
ON public.forum_likes FOR DELETE
TO authenticated
USING (true);

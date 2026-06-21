
-- FORUM_POSTS
DROP POLICY IF EXISTS "Authenticated can read forum_posts" ON public.forum_posts;
DROP POLICY IF EXISTS "Authenticated can update forum_posts" ON public.forum_posts;
DROP POLICY IF EXISTS "Authenticated can delete forum_posts" ON public.forum_posts;

CREATE POLICY "Moderators can read forum_posts" ON public.forum_posts
  FOR SELECT TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'moderator'::app_role));
CREATE POLICY "Moderators can update forum_posts" ON public.forum_posts
  FOR UPDATE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'moderator'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'moderator'::app_role));
CREATE POLICY "Moderators can delete forum_posts" ON public.forum_posts
  FOR DELETE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'moderator'::app_role));

-- FORUM_REPLIES
DROP POLICY IF EXISTS "Authenticated can read forum_replies" ON public.forum_replies;
DROP POLICY IF EXISTS "Authenticated can update forum_replies" ON public.forum_replies;
DROP POLICY IF EXISTS "Authenticated can delete forum_replies" ON public.forum_replies;

CREATE POLICY "Moderators can read forum_replies" ON public.forum_replies
  FOR SELECT TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'moderator'::app_role));
CREATE POLICY "Moderators can update forum_replies" ON public.forum_replies
  FOR UPDATE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'moderator'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'moderator'::app_role));
CREATE POLICY "Moderators can delete forum_replies" ON public.forum_replies
  FOR DELETE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'moderator'::app_role));

-- FORUM_LIKES
DROP POLICY IF EXISTS "Authenticated can read forum_likes" ON public.forum_likes;
DROP POLICY IF EXISTS "Authenticated can delete forum_likes" ON public.forum_likes;

CREATE POLICY "Moderators can read forum_likes" ON public.forum_likes
  FOR SELECT TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'moderator'::app_role));
CREATE POLICY "Moderators can delete forum_likes" ON public.forum_likes
  FOR DELETE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'moderator'::app_role));

-- QUESTIONS
DROP POLICY IF EXISTS "Authenticated can read questions" ON public.questions;
DROP POLICY IF EXISTS "Authenticated can update questions" ON public.questions;

CREATE POLICY "Moderators can read questions" ON public.questions
  FOR SELECT TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'moderator'::app_role));
CREATE POLICY "Moderators can update questions" ON public.questions
  FOR UPDATE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'moderator'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'moderator'::app_role));
CREATE POLICY "Moderators can delete questions" ON public.questions
  FOR DELETE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'moderator'::app_role));

-- WEBSITE_VISITS — remove realtime + restrict reads to admins
ALTER PUBLICATION supabase_realtime DROP TABLE public.website_visits;

DROP POLICY IF EXISTS "Authenticated users can view visitor data" ON public.website_visits;

CREATE POLICY "Admins can view visitor data" ON public.website_visits
  FOR SELECT TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

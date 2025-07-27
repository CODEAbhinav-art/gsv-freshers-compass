
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Users, Plus, MessageCircle, Heart, Clock, Filter, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  validateEmail, 
  validateName, 
  validatePostTitle, 
  validatePostContent, 
  sanitizeInput, 
  rateLimitCheck 
} from "@/utils/validation";

interface ForumPost {
  id: string;
  title: string;
  content: string;
  author_name: string;
  category: string;
  likes_count: number;
  replies_count: number;
  created_at: string;
}

export const CommunityForum = () => {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author_name: "",
    author_email: "",
    category: ""
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const categories = [
    "All",
    "Academic Help",
    "Campus Life",
    "Study Groups",
    "Events & Activities",
    "Internships",
    "Career Guidance",
    "General Discussion",
    "Lost & Found",
    "Accommodation"
  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      let query = supabase
        .from('forum_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (selectedCategory !== "All") {
        query = query.eq('category', selectedCategory);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast({
        title: "Error",
        description: "Failed to load forum posts.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [selectedCategory]);

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!validateName(newPost.author_name)) {
      errors.author_name = "Name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes";
    }

    if (!validateEmail(newPost.author_email)) {
      errors.author_email = "Please enter a valid email address";
    }

    if (!validatePostTitle(newPost.title)) {
      errors.title = "Title must be 5-200 characters long";
    }

    if (!validatePostContent(newPost.content)) {
      errors.content = "Content must be 10-5000 characters long";
    }

    if (!newPost.category) {
      errors.category = "Please select a category";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    if (!rateLimitCheck('forum_post', 3, 300000)) { // 3 posts per 5 minutes
      toast({
        title: "Rate Limit Exceeded",
        description: "Please wait before creating another post.",
        variant: "destructive",
      });
      return;
    }

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Sanitize inputs
      const sanitizedPost = {
        title: sanitizeInput(newPost.title),
        content: sanitizeInput(newPost.content),
        author_name: sanitizeInput(newPost.author_name),
        author_email: newPost.author_email.toLowerCase().trim(),
        category: newPost.category
      };

      const { error } = await supabase
        .from('forum_posts')
        .insert([sanitizedPost]);

      if (error) {
        throw error;
      }

      toast({
        title: "Post Created!",
        description: "Your post has been published successfully.",
      });

      setNewPost({
        title: "",
        content: "",
        author_name: "",
        author_email: "",
        category: ""
      });
      setValidationErrors({});
      setShowCreateForm(false);
      fetchPosts();
    } catch (error) {
      console.error('Error creating post:', error);
      toast({
        title: "Error",
        description: "Failed to create post. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleLike = async (postId: string, userEmail: string) => {
    if (!userEmail) {
      toast({
        title: "Email Required",
        description: "Please provide your email to like posts.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(userEmail)) {
      toast({
        title: "Invalid Email",
        description: "Please provide a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Rate limiting for likes
    if (!rateLimitCheck('forum_like', 10, 60000)) { // 10 likes per minute
      toast({
        title: "Rate Limit Exceeded",
        description: "Please wait before liking more posts.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('forum_likes')
        .insert([{ post_id: postId, user_email: userEmail.toLowerCase().trim() }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already Liked",
            description: "You have already liked this post.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        fetchPosts(); // Refresh to show updated like count
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderValidationError = (field: string) => {
    if (validationErrors[field]) {
      return <p className="text-sm text-red-600 mt-1">{validationErrors[field]}</p>;
    }
    return null;
  };

  return (
    <section id="community" className="py-16 bg-background relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Users className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Community Forum
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow students, share experiences, ask questions, and help each other succeed at GSV!
          </p>
          <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 mr-1" />
            <span>Protected by security measures</span>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button 
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="leetcode-btn"
          >
            <Plus className="mr-2 h-4 w-4" />
            Create New Post
          </Button>
          
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Create Post Form */}
        {showCreateForm && (
          <Card className="mb-8 backdrop-blur-sm bg-card/95">
            <CardHeader>
              <CardTitle>Create New Post</CardTitle>
              <CardDescription>
                Share your thoughts, ask questions, or start a discussion with the community.
                All content is moderated for safety.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreatePost} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="author_name">Your Name *</Label>
                    <Input
                      id="author_name"
                      value={newPost.author_name}
                      onChange={(e) => setNewPost({...newPost, author_name: e.target.value})}
                      placeholder="Enter your name"
                      required
                      maxLength={50}
                    />
                    {renderValidationError('author_name')}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="author_email">Your Email *</Label>
                    <Input
                      id="author_email"
                      type="email"
                      value={newPost.author_email}
                      onChange={(e) => setNewPost({...newPost, author_email: e.target.value})}
                      placeholder="your.email@example.com"
                      required
                      maxLength={100}
                    />
                    {renderValidationError('author_email')}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Post Title *</Label>
                    <Input
                      id="title"
                      value={newPost.title}
                      onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                      placeholder="Enter post title"
                      required
                      maxLength={200}
                    />
                    {renderValidationError('title')}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="post_category">Category *</Label>
                    <select
                      id="post_category"
                      value={newPost.category}
                      onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    >
                      <option value="">Select a category</option>
                      {categories.slice(1).map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    {renderValidationError('category')}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Content *</Label>
                  <Textarea
                    id="content"
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    placeholder="Write your post content here..."
                    rows={4}
                    required
                    maxLength={5000}
                  />
                  <div className="text-sm text-muted-foreground">
                    {newPost.content.length}/5000 characters
                  </div>
                  {renderValidationError('content')}
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="leetcode-btn">
                    <Plus className="mr-2 h-4 w-4" />
                    Publish Post
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowCreateForm(false)}
                    className="leetcode-btn"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Posts List */}
        <div className="space-y-6">
          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="text-muted-foreground mt-2">Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <Card className="text-center py-12 backdrop-blur-sm bg-card/95">
              <CardContent>
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No posts yet</h3>
                <p className="text-muted-foreground mb-4">
                  Be the first to start a conversation in this category!
                </p>
                <Button onClick={() => setShowCreateForm(true)} className="leetcode-btn">
                  <Plus className="mr-2 h-4 w-4" />
                  Create First Post
                </Button>
              </CardContent>
            </Card>
          ) : (
            posts.map((post) => (
              <Card key={post.id} className="backdrop-blur-sm bg-card/95 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>By {post.author_name}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatDate(post.created_at)}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4 whitespace-pre-wrap">{post.content}</p>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        const email = prompt("Enter your email to like this post:");
                        if (email) handleLike(post.id, email);
                      }}
                      className="leetcode-btn text-muted-foreground hover:text-red-500"
                    >
                      <Heart className="h-4 w-4 mr-1" />
                      {post.likes_count}
                    </Button>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.replies_count} replies</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

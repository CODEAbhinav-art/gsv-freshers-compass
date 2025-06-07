
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageSquareQuestion, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AskQuestion = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const categories = [
    "Academic Queries",
    "Hostel & Accommodation",
    "Campus Life",
    "Internships",
    "Placements & Careers",
    "City Guide",
    "General Discussion",
    "Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !question || !category) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Question Submitted!",
        description: "Your question has been submitted successfully. We'll get back to you soon.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setCategory("");
      setQuestion("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="ask-question" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <MessageSquareQuestion className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ask a Question
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question that's not covered in our FAQs? Ask our community of seniors and staff members who are here to help you!
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquareQuestion className="h-5 w-5 text-primary" />
              <span>Submit Your Question</span>
            </CardTitle>
            <CardDescription>
              Fill out the form below and we'll connect you with someone who can help. Your question might also help other freshers facing similar doubts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Question Category *</Label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="question">Your Question *</Label>
                <Textarea
                  id="question"
                  placeholder="Describe your question in detail. The more specific you are, the better we can help you!"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  rows={5}
                  required
                />
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> We aim to respond to all questions within 24-48 hours. 
                  For urgent matters, please contact us directly using the emergency contacts provided.
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Question
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Community Guidelines */}
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-3 text-foreground">Community Guidelines</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>• Be respectful and courteous in your questions</li>
                <li>• Search existing FAQs before asking</li>
                <li>• Provide context for better answers</li>
              </ul>
              <ul className="space-y-2">
                <li>• Use clear and specific subject lines</li>
                <li>• Be patient while waiting for responses</li>
                <li>• Share your solutions to help others</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

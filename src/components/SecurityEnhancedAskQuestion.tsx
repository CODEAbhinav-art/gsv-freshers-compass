
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Send, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  validateEmail, 
  validateName, 
  validateQuestionContent, 
  sanitizeInput, 
  rateLimitCheck 
} from "@/utils/validation";

export const SecurityEnhancedAskQuestion = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    question: ""
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const categories = [
    "Academic Support",
    "Career Guidance", 
    "Campus Life",
    "Technical Issues",
    "Administrative",
    "Events & Activities",
    "Other"
  ];

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!validateName(formData.name)) {
      errors.name = "Name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes";
    }

    if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.category) {
      errors.category = "Please select a category";
    }

    if (!validateQuestionContent(formData.question)) {
      errors.question = "Question must be 10-1000 characters long";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    if (!rateLimitCheck('ask_question', 2, 300000)) { // 2 questions per 5 minutes
      toast({
        title: "Rate Limit Exceeded",
        description: "Please wait before asking another question.",
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

    setIsSubmitting(true);

    try {
      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: formData.email.toLowerCase().trim(),
        category: formData.category,
        question: sanitizeInput(formData.question)
      };

      const { error } = await supabase
        .from('questions')
        .insert([sanitizedData]);

      if (error) {
        throw error;
      }

      toast({
        title: "Question Submitted!",
        description: "Your question has been received and will be answered soon.",
      });

      setFormData({
        name: "",
        email: "",
        category: "",
        question: ""
      });
      setValidationErrors({});
    } catch (error) {
      console.error('Error submitting question:', error);
      toast({
        title: "Error",
        description: "Failed to submit question. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderValidationError = (field: string) => {
    if (validationErrors[field]) {
      return <p className="text-sm text-red-600 mt-1">{validationErrors[field]}</p>;
    }
    return null;
  };

  return (
    <section id="ask-question" className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ask a Question
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question about GSV? Our team is here to help you succeed!
          </p>
          <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 mr-1" />
            <span>Your information is protected and secure</span>
          </div>
        </div>

        <Card className="backdrop-blur-sm bg-card/95 shadow-lg">
          <CardHeader>
            <CardTitle>Submit Your Question</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible. 
              All fields are required and your data is protected.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    required
                    maxLength={50}
                  />
                  {renderValidationError('name')}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@example.com"
                    required
                    maxLength={100}
                  />
                  {renderValidationError('email')}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => setFormData({...formData, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {renderValidationError('category')}
              </div>

              <div className="space-y-2">
                <Label htmlFor="question">Your Question *</Label>
                <Textarea
                  id="question"
                  value={formData.question}
                  onChange={(e) => setFormData({...formData, question: e.target.value})}
                  placeholder="Please describe your question in detail..."
                  rows={5}
                  required
                  maxLength={1000}
                />
                <div className="text-sm text-muted-foreground">
                  {formData.question.length}/1000 characters
                </div>
                {renderValidationError('question')}
              </div>

              <Button 
                type="submit" 
                className="w-full leetcode-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
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
      </div>
    </section>
  );
};

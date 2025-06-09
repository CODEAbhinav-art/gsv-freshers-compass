
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, ExternalLink } from "lucide-react";

export const AskQuestion = () => {
  const handleOpenGoogleForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeRTcJSaN4XZxJz0LJmiVK1HM2ltPQMpO6KEpjA3gCQoJhquA/viewform?usp=dialog', '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-background relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ask a Question
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question that's not covered in our FAQs? Ask our community of seniors and staff members who are here to help you!
          </p>
        </div>

        <Card className="shadow-lg backdrop-blur-sm bg-card/95">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span>Submit Your Question</span>
            </CardTitle>
            <CardDescription>
              Click the button below to open our Google Form and submit your question. Your question will be answered by our community of seniors and staff members.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center py-8">
            <Button 
              onClick={handleOpenGoogleForm}
              size="lg" 
              className="text-lg px-8 group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ExternalLink className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              Open Question Form
            </Button>
            
            <div className="mt-8 bg-muted/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> We aim to respond to all questions within 24-48 hours. 
                For urgent matters, please contact us directly using the emergency contacts provided.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Community Guidelines */}
        <Card className="mt-8 bg-primary/5 border-primary/20 backdrop-blur-sm">
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

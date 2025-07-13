
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const BranchwiseMentors = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/10 to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">
              Branchwise Mentors (Seniors)
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect with experienced seniors from your branch for personalized guidance and support
          </p>
          
          <Card className="max-w-4xl mx-auto mb-8 border-2 border-primary/30 bg-card/95 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-left text-lg text-foreground">
                📢 Important Note
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left">
              <p className="text-foreground/90 mb-3">
                Feel free to reach out to your branchwise seniors in case of <strong>GENUINE doubts</strong> related to:
              </p>
              <div className="grid md:grid-cols-2 gap-2 text-foreground/80 mb-4">
                <div>• Career guidance and planning</div>
                <div>• Club-related queries</div>
                <div>• Exam preparation strategies</div>
                <div>• College administration matters</div>
                <div>• Faculty and academic concerns</div>
                <div>• General counselling and support</div>
              </div>
              <div className="bg-muted/50 border border-border rounded-lg p-4 mt-4">
                <p className="text-sm text-foreground/90 font-medium">
                  <strong>Note:</strong> Be respectful and genuine while asking your questions. This is for your help and these mentors are unofficial. Seniors are volunteering for this as a helping hand. Apart from these, the college will allot faculty mentors, who will be in-charge of signing documents like medical-leave approval etc.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Button 
            onClick={() => navigate("/branchwise-mentors")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg border-2 border-primary/30"
          >
            Connect with Branch Mentors
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

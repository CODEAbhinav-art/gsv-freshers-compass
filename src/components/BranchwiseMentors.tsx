
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const BranchwiseMentors = () => {
  const navigate = useNavigate();
  const ref = useScrollReveal();

  return (
    <section className="py-24 bg-secondary/30 dark:bg-secondary/10" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Branchwise Mentors (Seniors)
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Connect with experienced seniors from your branch for personalized guidance and support
          </p>
        </div>

        <Card className="max-w-3xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="text-lg">📢 Important Note</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Feel free to reach out to your branchwise seniors in case of <strong className="text-foreground">GENUINE doubts</strong> related to:
            </p>
            <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> Career guidance and planning</div>
              <div className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> Club-related queries</div>
              <div className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> Exam preparation strategies</div>
              <div className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> College administration matters</div>
              <div className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> Faculty and academic concerns</div>
              <div className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> General counselling and support</div>
            </div>
            <div className="bg-secondary/50 dark:bg-secondary/30 border rounded-lg p-4">
              <p className="text-xs text-muted-foreground">
                <strong className="text-foreground">Note:</strong> Be respectful and genuine while asking your questions. These mentors are unofficial volunteers. The college will allot faculty mentors separately.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            onClick={() => navigate("/branchwise-mentors")}
            size="lg"
            className="hover:scale-[1.02] transition-all duration-200 shadow-md"
          >
            Connect with Branch Mentors
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

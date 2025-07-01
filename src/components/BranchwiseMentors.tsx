
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const BranchwiseMentors = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-gray-900">
              Branchwise Mentors (Seniors)
            </h2>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Connect with experienced seniors from your branch for personalized guidance and support
          </p>
          
          <Card className="max-w-4xl mx-auto mb-8 border-l-4 border-l-primary shadow-lg">
            <CardHeader>
              <CardTitle className="text-left text-lg text-blue-900">
                📢 Important Note
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left">
              <p className="text-blue-800 mb-3">
                Feel free to reach out to your branchwise seniors in case of <strong>GENUINE doubts</strong> related to:
              </p>
              <div className="grid md:grid-cols-2 gap-2 text-blue-800">
                <div>• Career guidance and planning</div>
                <div>• Club-related queries</div>
                <div>• Exam preparation strategies</div>
                <div>• College administration matters</div>
                <div>• Faculty and academic concerns</div>
                <div>• General counselling and support</div>
              </div>
            </CardContent>
          </Card>
          
          <Button 
            onClick={() => navigate("/branchwise-mentors")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Connect with Branch Mentors
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

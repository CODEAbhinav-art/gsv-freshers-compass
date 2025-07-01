
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, MessageCircle, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BranchwiseMentors = () => {
  const navigate = useNavigate();

  const branches = [
    {
      name: "AI-DS Mentors",
      fullName: "Artificial Intelligence & Data Science",
      icon: "🤖",
      description: "Connect with AI-DS seniors for guidance on machine learning, data science projects, and career paths in tech industry."
    },
    {
      name: "ECE Mentors", 
      fullName: "Electronics & Communication Engineering",
      icon: "📡",
      description: "Get mentorship from ECE seniors on electronics projects, communication systems, and opportunities in telecom sector."
    },
    {
      name: "EE Mentors",
      fullName: "Electrical Engineering", 
      icon: "⚡",
      description: "Reach out to EE seniors for guidance on power systems, electrical projects, and career opportunities in electrical domain."
    },
    {
      name: "ME Mentors",
      fullName: "Mechanical Engineering",
      icon: "⚙️", 
      description: "Connect with ME seniors for mechanical design projects, manufacturing processes, and core mechanical industry insights."
    },
    {
      name: "AE Mentors",
      fullName: "Aerospace Engineering",
      icon: "✈️",
      description: "Get guidance from AE seniors on aerospace projects, aviation industry trends, and career paths in aerospace sector."
    },
    {
      name: "CE Mentors", 
      fullName: "Civil Engineering",
      icon: "🏗️",
      description: "Reach out to CE seniors for construction projects, infrastructure development, and opportunities in civil engineering field."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Users className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold text-gray-900">
                Branchwise Mentors (Seniors)
              </h1>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <MessageCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Note</h3>
                  <p className="text-blue-800 leading-relaxed">
                    Feel free to reach out to your branchwise seniors in case of <strong>GENUINE doubts</strong> related to:
                  </p>
                  <ul className="list-disc list-inside mt-3 text-blue-800 space-y-1">
                    <li>Career guidance and planning</li>
                    <li>Exam preparation strategies</li>
                    <li>Club-related queries and opportunities</li>
                    <li>College administration matters</li>
                    <li>Faculty and academic concerns</li>
                    <li>General counselling and support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-l-primary"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">{branch.icon}</div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {branch.name}
                </CardTitle>
                <CardDescription className="text-sm font-medium text-muted-foreground">
                  {branch.fullName}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {branch.description}
                </p>
                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    <span>Connect through college groups or ask current seniors for contact details</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchwiseMentors;

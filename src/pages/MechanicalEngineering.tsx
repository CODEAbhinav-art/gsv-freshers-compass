
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, ExternalLink, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const MechanicalEngineering = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Mechanical Engineering Exam Papers
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access previous year question papers for Mechanical Engineering students
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 1st Semester Papers */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-orange-500/70 bg-orange-50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-3 bg-orange-500/30 rounded-lg border border-orange-500/50">
                    <Settings className="h-6 w-6 text-orange-700 font-bold" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-orange-700 font-bold">1st Semester Papers</CardTitle>
                    <Badge className="bg-orange-500 text-white mt-1 font-semibold border-orange-600">
                      ME - 1st Sem
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-800 mb-4 font-semibold">
                  Access first semester mechanical engineering exam papers
                </p>
                <Button
                  variant="default"
                  className="w-full mb-3 bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-lg"
                  asChild
                >
                  <a 
                    href="https://drive.google.com/file/d/1nJpIXuI0nbQi9GNxd5HcKCYGahvzauF9/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View 1st Sem Papers
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* 2nd Semester Papers */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-orange-500/70 bg-orange-50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-3 bg-orange-500/30 rounded-lg border border-orange-500/50">
                    <Settings className="h-6 w-6 text-orange-700 font-bold" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-orange-700 font-bold">2nd Semester Papers</CardTitle>
                    <Badge className="bg-orange-500 text-white mt-1 font-semibold border-orange-600">
                      ME - 2nd Sem
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-800 mb-4 font-semibold">
                  Access second semester mechanical engineering exam papers
                </p>
                <Button
                  variant="default"
                  className="w-full mb-3 bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-lg"
                  asChild
                >
                  <a 
                    href="https://drive.google.com/file/d/1JXDKgoiaFmCSHRw90mOEsKU-U_vrca6s/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View 2nd Sem Papers
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Credits Section */}
          <div className="mt-12">
            <Card className="border-2 border-orange-300 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-center text-orange-800">Credits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-orange-800 font-bold">
                    <strong>Contributed by:</strong> Ved Vyas [ME-II Yr]
                  </p>
                  <p className="text-sm text-orange-700 mt-2">
                    Thank you for organizing and providing these valuable resources for mechanical engineering students.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MechanicalEngineering;

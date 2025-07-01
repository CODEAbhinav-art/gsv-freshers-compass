
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Users, MapPin, Building2, GraduationCap, ExternalLink, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ImportantLinks = () => {
  const navigate = useNavigate();
  const [isBatchmatesOpen, setIsBatchmatesOpen] = useState(false);
  const [isMessMenuOpen, setIsMessMenuOpen] = useState(false);

  return (
    <section className="py-16 bg-muted/50" id="important-links">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Important Links & Resources</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick access to all essential resources, portals, and information you'll need during your time at GSV.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1st Year Exam Papers */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary/30 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-xl text-primary">1st Year Exam Papers</CardTitle>
                  <Badge className="bg-red-100 text-red-800 border-red-200 mt-1">
                    Important
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Access previous year question papers for better exam preparation
              </p>
              <Button
                variant="default"
                className="w-full mb-2 bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="https://drive.google.com/file/d/164-p3SOpgocOJUkK2zDGvE4V9IP_0vTa/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Exam Papers
                </a>
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Credits: Pratik Ranjan (ECE-II)
              </p>
            </CardContent>
          </Card>

          {/* Get Advantage Before Joining College */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">Get advantage before joining college</CardTitle>
              </div>
              <Badge className="bg-purple-100 text-purple-800 w-fit">Essential</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Start your learning journey early with curated programming resources
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Programming Languages (Python, Java, C++)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Data Structures & Algorithms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Machine Learning Fundamentals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Web Development Basics</span>
                </div>
              </div>
              <Button 
                onClick={() => navigate("/learning-resources")}
                className="w-full mb-3"
              >
                Explore Learning Resources
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              
              {/* Batchmates Connect with sub-button */}
              <Collapsible open={isBatchmatesOpen} onOpenChange={setIsBatchmatesOpen}>
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-green-300 bg-gradient-to-r from-green-50 to-blue-50 hover:from-green-100 hover:to-blue-100"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Batchmates Connect
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${isBatchmatesOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="mt-2 space-y-2">
                    <Button 
                      variant="default"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a 
                        href="https://docs.google.com/spreadsheets/d/1BrFwxqFIp1-ib_VUbJ-DadvquVuxIH8zWlMeBefEowg/edit?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        View Batchmates List
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a 
                        href="https://forms.gle/6DDDakotWGf1aqHh9"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Update Your Info
                      </a>
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Credits: Mandeep Nehra
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Exam Preparation Guide */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FileText className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">Exam Preparation Guide</CardTitle>
              </div>
              <Badge className="bg-blue-100 text-blue-800 w-fit">Academic</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive guide for first-year exams and study strategies
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Subject-wise preparation tips</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Important topics and chapters</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Previous year questions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Study schedule templates</span>
                </div>
              </div>
              <Button 
                onClick={() => navigate("/exam-preparation")}
                className="w-full"
              >
                Explore Exam Preparation
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* GSV Mess Menu Samples */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Building2 className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">GSV Mess Menu Samples</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                View sample mess menus to know what to expect
              </p>
              <Collapsible open={isMessMenuOpen} onOpenChange={setIsMessMenuOpen}>
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline"
                    className="w-full"
                  >
                    <Building2 className="mr-2 h-4 w-4" />
                    View Mess Menus
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${isMessMenuOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="mt-2 space-y-2">
                    <Button 
                      variant="default"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a 
                        href="https://drive.google.com/file/d/1-D3T2OaSNkFwX430Rr6cEft6UncY9C3R/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Special Dinner Menu
                      </a>
                    </Button>
                    <Button 
                      variant="default"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a 
                        href="https://drive.google.com/file/d/1-6c1cBVXtXk_qBjsAl7UI8Q7FpbRpaMB/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        General Menu
                      </a>
                    </Button>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

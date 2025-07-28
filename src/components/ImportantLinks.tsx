import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, MapPin, Building2, GraduationCap, ExternalLink, ChevronDown, Briefcase, Video, Home, Code2, Trophy, Settings } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ImportantLinks = () => {
  const navigate = useNavigate();
  const [isMessMenuOpen, setIsMessMenuOpen] = useState(false);
  const [isHackathonOpen, setIsHackathonOpen] = useState(false);
  const [isMechanicalOpen, setIsMechanicalOpen] = useState(false);

  return (
    <section className="py-16 bg-muted/30" id="important-links">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Important Links & Resources</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick access to all essential resources, portals, and information you'll need during your time at GSV.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1st Year Exam Papers */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-red-500/70 bg-red-50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-3 bg-red-500/30 rounded-lg border border-red-500/50">
                  <FileText className="h-6 w-6 text-red-700 font-bold" />
                </div>
                <div>
                  <CardTitle className="text-xl text-red-700 font-bold">1st Year Exam Papers</CardTitle>
                  <Badge className="bg-red-500 text-white mt-1 font-semibold border-red-600">
                    Important
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-800 mb-4 font-semibold">
                Access previous year question papers for better exam preparation
              </p>
              <Button
                variant="default"
                className="w-full mb-3 bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg"
                asChild
              >
                <a href="https://drive.google.com/file/d/164-p3SOpgocOJUkK2zDGvE4V9IP_0vTa/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Exam Papers
                </a>
              </Button>
              <div className="bg-red-100 border border-red-300 rounded-lg p-3">
                <p className="text-xs text-red-800 font-bold text-center">
                  <strong>Credits:</strong> Pratik Ranjan (ECE-II)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mechanical Engineering Exam Papers */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-orange-500/70 bg-orange-50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-3 bg-orange-500/30 rounded-lg border border-orange-500/50">
                  <Settings className="h-6 w-6 text-orange-700 font-bold" />
                </div>
                <div>
                  <CardTitle className="text-xl text-orange-700 font-bold">Mechanical Engineering</CardTitle>
                  <Badge className="bg-orange-500 text-white mt-1 font-semibold border-orange-600">
                    Branch Specific
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-800 mb-4 font-semibold">
                Access mechanical engineering specific exam papers
              </p>
              <Collapsible open={isMechanicalOpen} onOpenChange={setIsMechanicalOpen}>
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-orange-300 bg-white hover:bg-orange-50 text-orange-800 font-semibold mb-3"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    View ME Papers
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${isMechanicalOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="space-y-2 mb-3">
                    <Button 
                      variant="default"
                      size="sm"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold"
                      asChild
                    >
                      <a 
                        href="https://drive.google.com/file/d/1nJpIXuI0nbQi9GNxd5HcKCYGahvzauF9/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        1st Sem Papers
                      </a>
                    </Button>
                    <Button 
                      variant="default"
                      size="sm"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold"
                      asChild
                    >
                      <a 
                        href="https://drive.google.com/file/d/1JXDKgoiaFmCSHRw90mOEsKU-U_vrca6s/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        2nd Sem Papers
                      </a>
                    </Button>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                <p className="text-xs text-orange-800 font-bold text-center">
                  <strong>Credits:</strong> Ved Vyas (ME-II Yr)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Get Advantage Before Joining College */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary/30 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground font-bold">Get advantage before joining college</CardTitle>
              </div>
              <Badge className="bg-primary/20 text-primary w-fit border border-primary/30 font-semibold">Essential</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4 font-medium">
                Start your learning journey early with curated programming resources
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Programming Languages (Python, Java, C++)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Data Structures & Algorithms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Machine Learning Fundamentals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Web Development Basics</span>
                </div>
              </div>
              <Button 
                onClick={() => navigate("/learning-resources")}
                className="w-full mb-3 font-semibold"
              >
                Explore Learning Resources
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Hackathon Postings */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-purple-500/50 bg-purple-50/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Trophy className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-purple-800 font-bold">Hackathon Postings</CardTitle>
              </div>
              <Badge className="bg-purple-100 text-purple-800 w-fit border border-purple-300 font-semibold">Competition</Badge>
              <Badge className="bg-orange-100 text-orange-800 border-orange-200 font-semibold">
                Updated
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4 font-medium">
                Discover and participate in exciting hackathons and coding competitions
              </p>
              <Collapsible open={isHackathonOpen} onOpenChange={setIsHackathonOpen}>
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-purple-300 bg-white hover:bg-purple-50 text-purple-800 font-semibold"
                  >
                    <Code2 className="mr-2 h-4 w-4" />
                    View Hackathon Platforms
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHackathonOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="mt-2 space-y-2">
                    <Button 
                      variant="default"
                      size="sm"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold"
                      asChild
                    >
                      <a 
                        href="https://hack2skill.com/dashboard/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Hack2Skill Dashboard
                      </a>
                    </Button>
                    <Button 
                      variant="default"
                      size="sm"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold"
                      asChild
                    >
                      <a 
                        href="https://devfolio.co/discover?auth=signin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Devfolio Discover
                      </a>
                    </Button>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Exam Preparation Guide */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary/30 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground font-bold">Exam Preparation Guide</CardTitle>
              </div>
              <Badge className="bg-secondary/20 text-secondary w-fit border border-secondary/30 font-semibold">Academic</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4 font-medium">
                Comprehensive guide for first-year exams and study strategies
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Subject-wise preparation tips</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Important topics and chapters</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Previous year questions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Study schedule templates</span>
                </div>
              </div>
              <Button 
                onClick={() => navigate("/exam-preparation")}
                className="w-full font-semibold"
              >
                Explore Exam Preparation
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* GSV Mess Menu Samples */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary/30 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground font-bold">GSV Mess Menu Samples</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4 font-medium">
                View sample mess menus to know what to expect
              </p>
              <Collapsible open={isMessMenuOpen} onOpenChange={setIsMessMenuOpen}>
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-primary/30 bg-card hover:bg-primary/10 font-semibold"
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
                      className="w-full font-semibold"
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
                      className="w-full font-semibold"
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

          {/* Future GSV Campus */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary/30 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Home className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground font-bold">Future GSV Campus</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4 font-medium">
                Explore the future vision of GSV campus development
              </p>
              <Button
                variant="default"
                className="w-full font-semibold"
                asChild
              >
                <a href="https://www.linkedin.com/posts/durgeshlegha_%F0%9D%90%84%F0%9D%90%AF%F0%9D%90%9E%F0%9D%90%AB-%F0%9D%90%A2%F0%9D%90%A6%F0%9D%90%9A%F0%9D%90%A0%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%9E%F0%9D%90%9D-%F0%9D%90%B0%F0%9D%90%A2%F0%9D%90%AD%F0%9D%90%A7%F0%9D%90%9E%F0%9D%90%AC%F0%9D%90%AC%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A0-ugcPost-7330174411821441024-I3pj?utm_source=share&utm_medium=member_android&rcm=ACoAAEGJ6lMB6_f4vAk7pvF_mBuWzkqcBTb8JEc" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Future Campus
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* GSV Campus Tour */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary/30 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Video className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground font-bold">GSV Campus Tour</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4 font-medium">
                Take a virtual tour of the GSV campus
              </p>
              <Button
                variant="default"
                className="w-full font-semibold"
                asChild
              >
                <a href="https://youtu.be/O9JHRjcw1kE?feature=shared" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Watch Campus Tour
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Jobs and Internships Updates */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary/30 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground font-bold">Jobs and Internships Updates</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4 font-medium">
                Stay updated with latest job and internship opportunities
              </p>
              <Button
                variant="default"
                className="w-full font-semibold"
                asChild
              >
                <a href="https://www.talentd.in/redirect.php?url=whatsapp-community" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Join Updates Community
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* First Year Hostel Location */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary/30 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground font-bold">First Year Hostel (Stanza) Location</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4 font-medium">
                Find the exact location of first year hostel on maps
              </p>
              <Button
                variant="default"
                className="w-full font-semibold"
                asChild
              >
                <a href="https://maps.app.goo.gl/hL6FYQFcRfZ91rJq6" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on Maps
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Calculator Recommendation */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary/50 bg-primary/5 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground font-bold">Which Calculator to Buy?</CardTitle>
              </div>
              <Badge className="bg-primary text-primary-foreground w-fit font-semibold">
                Recommended
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4 font-medium">
                Essential calculator for engineering studies
              </p>
              <Button
                variant="default"
                className="w-full mb-2 bg-primary hover:bg-primary/90 font-semibold"
                asChild
              >
                <a href="https://amzn.in/d/1luAcMr" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Calculator
                </a>
              </Button>
              <div className="bg-red-100 border border-red-300 rounded-lg p-3">
                <p className="text-xs text-red-800 font-bold text-center">
                  📌 This model is strictly recommended
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Heart, Users, Target, Code2, Camera, Star, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50" id="about-me">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about this platform, its creators, and our mission to help GSV students
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Credits Section */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary/30 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground font-bold">Credits</CardTitle>
              </div>
              <Badge className="bg-primary/20 text-primary w-fit border border-primary/30 font-semibold">Team</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Ideation and Maintainers */}
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Ideation and Maintainers
                </h4>
                <div className="text-sm text-blue-800 space-y-1">
                  <p>• Abhinav Mishra [AI-DS II Yr]</p>
                  <p>• Pratik Ranjan [ECE-II Yr]</p>
                </div>
              </div>

              {/* Exam Papers */}
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                  <Code2 className="h-4 w-4 mr-2" />
                  Exam Papers
                </h4>
                <div className="text-sm text-green-800 space-y-1">
                  <p>• Ved Vyas [ME-II Yr]</p>
                  <p>• Pratik Ranjan [ECE-II Yr]</p>
                </div>
              </div>

              {/* Pictures and Videos */}
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2 flex items-center">
                  <Camera className="h-4 w-4 mr-2" />
                  Pictures and Videos
                </h4>
                <div className="text-sm text-purple-800">
                  <p>• Harivarun Bandi [ECE-II Yr]</p>
                </div>
              </div>

              {/* Additional Features */}
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-2 flex items-center">
                  <Star className="h-4 w-4 mr-2" />
                  Additional Features
                </h4>
                <div className="text-sm text-orange-800 space-y-1">
                  <p>• Mandeep Nehra [AI-DS II Yr]</p>
                  <p>• Tushar Sabharwal [AI-DS II Yr]</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What is the need of this website? */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary/30 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground font-bold">What is the need of this website?</CardTitle>
              </div>
              <Badge className="bg-secondary/20 text-secondary w-fit border border-secondary/30 font-semibold">Our Mission</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-gray-700 space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>To provide a centralized, one-stop resource platform for all first-year students.</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>To increase awareness of important campus events, academic deadlines, and essential information.</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>To facilitate connections with senior students for guidance and query resolution through multiple channels.</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>To foster a culture of collaboration and community support among current and future GSV students. This platform is a legacy passed down through batches, and the 2025-2029 batch will be responsible for continuing this tradition for their juniors.</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800 font-medium">
                  <strong>Note:</strong> The selection process for new student maintainers from the incoming batch will commence during their second semester. Application details will be announced in due course.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* GitHub Repo Link */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary/30 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground font-bold">GitHub Repo Link</CardTitle>
              </div>
              <Badge className="bg-green-100 text-green-800 w-fit border border-green-300 font-semibold">Open Source</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4 font-medium">
                This project is open source and available on GitHub. Feel free to contribute, report issues, or suggest improvements!
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>✨ Open Source Project</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>🔧 Built with React & TypeScript</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>🎨 Styled with Tailwind CSS</span>
                </div>
              </div>

              <Button
                variant="default"
                className="w-full mt-4 font-semibold"
                asChild
              >
                <a href="https://github.com/gsv-studentportal" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Heart, Users, Target, Code2, Camera, Star, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/20" id="about-me">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Credits Section */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary/50 bg-card backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground font-bold">Credits</CardTitle>
              </div>
              <Badge className="bg-primary/30 text-primary-foreground w-fit border border-primary/50 font-semibold">Team</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Ideation and Maintainers */}
              <div className="p-3 bg-primary/10 rounded-lg border border-primary/30">
                <h4 className="font-semibold text-primary mb-2 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Creators and Maintainers
                </h4>
                <div className="text-sm text-foreground space-y-1">
                  <p>• Abhinav Mishra [AI-DS II Yr]</p>
                  <p>• Pratik Ranjan [ECE-II Yr]</p>
                </div>
              </div>

              {/* Exam Papers */}
              <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/30">
                <h4 className="font-semibold text-secondary-foreground mb-2 flex items-center">
                  <Code2 className="h-4 w-4 mr-2" />
                  Exam Papers
                </h4>
                <div className="text-sm text-foreground space-y-1">
                  <p>• Ved Vyas [ME-II Yr]</p>
                  <p>• Pratik Ranjan [ECE-II Yr]</p>
                </div>
              </div>

              {/* Pictures and Videos */}
              <div className="p-3 bg-accent/10 rounded-lg border border-accent/30">
                <h4 className="font-semibold text-accent-foreground mb-2 flex items-center">
                  <Camera className="h-4 w-4 mr-2" />
                  Pictures and Videos
                </h4>
                <div className="text-sm text-foreground">
                  <p>• Harivarun Bandi [ECE-II Yr]</p>
                </div>
              </div>

              {/* Additional Features */}
              <div className="p-3 bg-muted/20 rounded-lg border border-muted/40">
                <h4 className="font-semibold text-muted-foreground mb-2 flex items-center">
                  <Star className="h-4 w-4 mr-2" />
                  Additional Features
                </h4>
                <div className="text-sm text-foreground space-y-1">
                  <p>• Mandeep Nehra [AI-DS II Yr]</p>
                  <p>• Tushar Sabharwal [AI-DS II Yr]</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What is the need of this website? */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary/50 bg-card backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground font-bold">What is the need of this website?</CardTitle>
              </div>
              <Badge className="bg-secondary/30 text-secondary-foreground w-fit border border-secondary/50 font-semibold">Our Mission</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-foreground space-y-3">
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
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <p className="text-sm text-foreground font-medium">
                  <strong>Note:</strong> The selection process for new student maintainers from the incoming batch will commence during their second semester. Application details will be announced in due course.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* GitHub Repo Link */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary/50 bg-card backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground font-bold">GitHub Repo Link</CardTitle>
              </div>
              <Badge className="bg-secondary/30 text-secondary-foreground w-fit border border-secondary/50 font-semibold">Open Source</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground mb-4 font-medium">
                This project is open source and available on GitHub. Feel free to contribute, report issues, or suggest improvements!
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>✨ Open Source Project</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>🔧 Built with React & TypeScript</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>🎨 Styled with Tailwind CSS</span>
                </div>
              </div>

              <Button
                variant="default"
                className="w-full mt-4 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="https://github.com/CODEAbhinav-art/gsv-freshers-compass.git" target="_blank" rel="noopener noreferrer">
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

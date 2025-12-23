
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, ExternalLink, FileText, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const FeaturedSections = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: "learning-resources",
      title: "Get advantage before joining college",
      description: "Start your learning journey early with curated programming resources",
      icon: <BookOpen className="h-6 w-6" />,
      badge: "Essential",
      badgeColor: "bg-purple-100 text-purple-800",
      route: "/learning-resources",
      highlights: [
        "Programming Languages (Python, Java, C++)",
        "Data Structures & Algorithms",
        "Machine Learning Fundamentals",
        "Web Development Basics"
      ]
    },
    {
      id: "exam-preparation",
      title: "Exam Preparation Guide",
      description: "Comprehensive guide for first-year exams and study strategies",
      icon: <FileText className="h-6 w-6" />,
      badge: "Academic",
      badgeColor: "bg-blue-100 text-blue-800",
      route: "/exam-preparation",
      highlights: [
        "Subject-wise preparation tips",
        "Important topics and chapters",
        "Previous year questions",
        "Study schedule templates"
      ]
    },
    {
      id: "placement-resources",
      title: "Placement and Internship Resources",
      description: "Essential resources for internships and placements preparation",
      icon: <Briefcase className="h-6 w-6" />,
      badge: "Career",
      badgeColor: "bg-green-100 text-green-800",
      externalLink: "https://www.notion.so/Engineering-Milestones-off-campus-2cb5ee4946da8059be4cc1c316badfbe?source=copy_link",
      note: "Useful from the 2nd Semester",
      highlights: [
        "Off-campus opportunities",
        "Engineering milestones",
        "Career preparation tips",
        "Industry resources"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Learning Sections</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Essential resources to get you started on the right track at GSV
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <Card 
              key={section.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-l-primary"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {section.icon}
                  </div>
                  <Badge className={section.badgeColor}>
                    {section.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {section.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {section.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
                {section.note && (
                  <p className="text-sm text-amber-600 font-medium mb-4 flex items-center">
                    <span className="mr-2">📌</span> {section.note}
                  </p>
                )}
                <div className="space-y-3">
                  {section.route ? (
                    <Button 
                      onClick={() => navigate(section.route!)}
                      className="w-full"
                    >
                      Explore {section.title}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  ) : section.externalLink && (
                    <Button 
                      className="w-full"
                      asChild
                    >
                      <a 
                        href={section.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Explore {section.title}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {section.id === "learning-resources" && (
                    <Button 
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <a 
                        href="https://docs.google.com/spreadsheets/d/1BrFwxqFIp1-ib_VUbJ-DadvquVuxIH8zWlMeBefEowg/edit?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Users className="mr-2 h-4 w-4" />
                        Batchmates Connect
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

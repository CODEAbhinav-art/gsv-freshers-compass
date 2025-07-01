
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Users, MapPin, Building2, GraduationCap } from "lucide-react";

export const ImportantLinks = () => {
  const linkSections = [
    {
      title: "Academic Resources",
      icon: <BookOpen className="h-5 w-5" />,
      links: [
        {
          name: "BEE Book",
          url: "https://drive.google.com/file/d/16lbDHcxvfr5FKMUemUFnvSGNyD2tLzFv/view?usp=drivesdk",
          description: "Basic Electrical Engineering textbook"
        },
        {
          name: "Engineering Mathematics Notes",
          url: "https://drive.google.com/drive/folders/1-2QvXxY4Z5A6B7C8D9E0F",
          description: "Comprehensive math notes for first year"
        },
        {
          name: "Physics Lab Manual",
          url: "https://drive.google.com/drive/folders/physics-lab-manual",
          description: "Complete physics laboratory experiments guide"
        }
      ]
    },
    {
      title: "Administrative",
      icon: <FileText className="h-5 w-5" />,
      links: [
        {
          name: "Student Portal",
          url: "https://gsvstudent.portal.edu.in",
          description: "Access your academic records and announcements"
        },
        {
          name: "Fee Payment",
          url: "https://gsv.fees.payment.edu.in",
          description: "Online fee payment system"
        },
        {
          name: "Scholarship Forms",
          url: "https://scholarships.gsv.edu.in",
          description: "Apply for various scholarship programs"
        }
      ]
    },
    {
      title: "Campus Life",
      icon: <Users className="h-5 w-5" />,
      links: [
        {
          name: "Club Registration",
          url: "https://clubs.gsv.edu.in/register",
          description: "Join technical and cultural clubs"
        },
        {
          name: "Event Calendar",
          url: "https://events.gsv.edu.in",
          description: "Stay updated with campus events"
        },
        {
          name: "Library Resources",
          url: "https://library.gsv.edu.in",
          description: "Access digital library and e-books"
        }
      ]
    },
    {
      title: "City Guide",
      icon: <MapPin className="h-5 w-5" />,
      links: [
        {
          name: "Vadodara Transportation",
          url: "https://vtcl.gujarat.gov.in",
          description: "City bus routes and schedules"
        },
        {
          name: "Local Services",
          url: "#city-services",
          description: "Essential services around campus"
        },
        {
          name: "Food & Entertainment",
          url: "#food-guide",
          description: "Best places to eat and hang out"
        }
      ]
    },
    {
      title: "Hostel Information",
      icon: <Building2 className="h-5 w-5" />,
      links: [
        {
          name: "Hostel Rules & Regulations",
          url: "https://gsv.edu.in/hostel-rules",
          description: "Complete hostel guidelines"
        },
        {
          name: "Mess Menu",
          url: "https://gsv.edu.in/mess-menu",
          description: "Weekly mess menu and timings"
        },
        {
          name: "Room Allocation",
          url: "https://gsv.edu.in/room-allotment",
          description: "Check your room assignment"
        }
      ]
    },
    {
      title: "Placements & Careers",
      icon: <GraduationCap className="h-5 w-5" />,
      links: [
        {
          name: "Placement Cell",
          url: "https://placements.gsv.edu.in",
          description: "Career guidance and placement opportunities"
        },
        {
          name: "Resume Building",
          url: "https://career.gsv.edu.in/resume",
          description: "Templates and tips for resume building"
        },
        {
          name: "Internship Portal",
          url: "https://internships.gsv.edu.in",
          description: "Find and apply for internships"
        }
      ]
    }
  ];

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
          {linkSections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {section.icon}
                  </div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="border-l-2 border-primary/20 pl-4">
                      <Button
                        variant="link"
                        className="p-0 h-auto font-medium text-left justify-start"
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.name}
                        </a>
                      </Button>
                      <p className="text-sm text-muted-foreground mt-1">
                        {link.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

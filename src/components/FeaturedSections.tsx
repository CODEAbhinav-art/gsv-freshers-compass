
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Star, TrendingUp } from "lucide-react";

export const FeaturedSections = () => {
  const featuredContent = [
    {
      title: "Admission Checklist",
      description: "Complete post-admission formalities with our step-by-step guide",
      status: "Essential",
      icon: CheckCircle,
      items: ["Document verification", "Fee payment", "Medical certificates", "Anti-ragging affidavit"]
    },
    {
      title: "Orientation Schedule",
      description: "Don't miss important orientation sessions and welcome events",
      status: "Upcoming",
      icon: Clock,
      items: ["Department introduction", "Campus tour", "Mentor assignment", "Student activities fair"]
    },
    {
      title: "Popular Student Clubs",
      description: "Join vibrant communities and pursue your interests",
      status: "Trending",
      icon: TrendingUp,
      items: ["Technical societies", "Cultural clubs", "Sports teams", "Entrepreneurship cell"]
    },
    {
      title: "Campus Facilities",
      description: "Explore world-class infrastructure and amenities",
      status: "Featured",
      icon: Star,
      items: ["Modern laboratories", "Central library", "Sports complex", "Wi-Fi campus"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Essential": return "bg-red-100 text-red-800 border-red-200";
      case "Upcoming": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Trending": return "bg-green-100 text-green-800 border-green-200";
      case "Featured": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Information for New Students
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Essential information curated specifically for incoming freshers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredContent.map((item) => (
            <Card key={item.title} className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="mt-1">{item.description}</CardDescription>
                    </div>
                  </div>
                  <Badge className={getStatusColor(item.status)} variant="outline">
                    {item.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {item.items.map((listItem, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{listItem}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">What Current Students Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya Sharma",
                year: "2nd Year B.Tech",
                quote: "The hostel facilities are excellent, and the mess food is really good. The campus Wi-Fi works great for online classes too!"
              },
              {
                name: "Rahul Patel",
                year: "1st Year MBA",
                quote: "The orientation program helped me settle in quickly. The senior mentors are very supportive and always ready to help."
              },
              {
                name: "Anjali Verma",
                year: "3rd Year B.Tech",
                quote: "Vadodara is a great city for students. There are many places to explore, and the local food is amazing!"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <blockquote className="text-sm italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

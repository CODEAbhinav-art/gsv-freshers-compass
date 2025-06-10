
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Star, TrendingUp } from "lucide-react";

export const FeaturedSections = () => {
  const featuredContent = [
    {
      title: "Admission Checklist",
      description: "Complete post-admission formalities with our step-by-step guide",
      status: "Essential",
      icon: CheckCircle,
      items: ["Document verification", "Fee payment", "Medical certificates", "Anti-ragging affidavit"],
      gradient: "from-red-400 to-pink-500"
    },
    {
      title: "Orientation Schedule",
      description: "Don't miss important orientation sessions and welcome events",
      status: "Upcoming",
      icon: Clock,
      items: ["Department introduction", "Campus tour", "Mentor assignment", "Student activities fair"],
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      title: "Popular Student Clubs",
      description: "Join vibrant communities and pursue your interests",
      status: "Trending",
      icon: TrendingUp,
      items: ["Technical societies", "Cultural clubs", "Sports teams", "Entrepreneurship cell"],
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "Campus Facilities",
      description: "Explore world-class infrastructure and amenities",
      status: "Featured",
      icon: Star,
      items: ["Modern laboratories", "Central library", "Sports complex", "Wi-Fi campus"],
      gradient: "from-purple-400 to-violet-500"
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
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full animate-blob"></div>
        <div className="absolute top-20 right-10 w-24 h-24 bg-purple-200/20 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-pink-200/20 rounded-full animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center items-center gap-3 mb-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Information for New Students
            </h2>
            <Badge className="bg-orange-100 text-orange-800 border-orange-200 animate-pulse-soft">
              Upcoming
            </Badge>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Essential information curated specifically for incoming freshers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredContent.map((item, index) => (
            <Card 
              key={item.title} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:-translate-y-1 animate-fade-in-staggered"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 bg-gradient-to-r ${item.gradient} rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="mt-1 text-gray-700">
                        {item.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(item.status)} animate-pulse-soft`} variant="outline">
                    {item.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {item.items.map((listItem, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="flex items-center space-x-3 text-sm group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${itemIndex * 50}ms` }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-900">{listItem}</span>
                    </li>
                  ))}
                </ul>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${item.gradient} translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

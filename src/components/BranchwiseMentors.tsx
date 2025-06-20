
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, MessageCircle } from "lucide-react";

export const BranchwiseMentors = () => {
  const mentorBranches = [
    {
      id: 1,
      branch: "AI-DS Mentors",
      fullName: "Artificial Intelligence & Data Science",
      color: "bg-blue-500",
      textColor: "text-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      branch: "ECE Mentors", 
      fullName: "Electronics & Communication Engineering",
      color: "bg-green-500",
      textColor: "text-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      branch: "EE Mentors",
      fullName: "Electrical Engineering", 
      color: "bg-yellow-500",
      textColor: "text-yellow-700",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      id: 4,
      branch: "ME Mentors",
      fullName: "Mechanical Engineering",
      color: "bg-red-500", 
      textColor: "text-red-700",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      id: 5,
      branch: "AE Mentors",
      fullName: "Aerospace Engineering",
      color: "bg-purple-500",
      textColor: "text-purple-700", 
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      id: 6,
      branch: "CE Mentors",
      fullName: "Civil Engineering",
      color: "bg-orange-500",
      textColor: "text-orange-700",
      bgColor: "bg-orange-50", 
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-indigo-200/20 rounded-full animate-blob"></div>
        <div className="absolute bottom-32 left-16 w-32 h-32 bg-pink-200/20 rounded-full animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center items-center gap-3 mb-4">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Branchwise Mentors (Seniors)
            </h2>
            <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200 animate-pulse-soft">
              Connect & Learn
            </Badge>
          </div>
          
          {/* Important Note */}
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <MessageCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-blue-800 font-medium mb-2">Important Note:</p>
                    <p className="text-blue-700 leading-relaxed">
                      Feel free to reach out to your branchwise seniors in case of <strong>GENUINE doubts</strong> related to Career, Exam Preps, Club related, College Administration related, Faculty, General Counselling, etc...
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mentor Branches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentorBranches.map((mentor, index) => (
            <Card 
              key={mentor.id}
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-staggered ${mentor.bgColor} ${mentor.borderColor} border-2`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-4 h-4 rounded-full ${mentor.color}`}></div>
                  <CardTitle className={`text-lg group-hover:scale-105 transition-transform duration-300 ${mentor.textColor}`}>
                    {mentor.branch}
                  </CardTitle>
                </div>
                <p className={`text-sm ${mentor.textColor} opacity-80`}>
                  {mentor.fullName}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className={`h-4 w-4 ${mentor.textColor}`} />
                    <span className={`text-sm font-medium ${mentor.textColor}`}>
                      Available Mentors
                    </span>
                  </div>
                  <Badge className={`${mentor.color} text-white hover:opacity-90 transition-opacity`}>
                    Connect
                  </Badge>
                </div>
                
                <div className="mt-4 p-3 bg-white/60 rounded-lg">
                  <p className={`text-xs ${mentor.textColor} opacity-75`}>
                    Get guidance from experienced seniors in your branch
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-delayed-3">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Need Guidance?</h3>
            <p className="text-lg mb-6 opacity-90">
              Connect with your senior mentors for academic and career guidance
            </p>
            <div className="flex justify-center">
              <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-2">
                Mentorship Program Active
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

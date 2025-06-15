import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, MapPin, Youtube, Code, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ImportantLinks = () => {
  const navigate = useNavigate();

  const importantLinks = [
    {
      title: "General College Review",
      description: "Comprehensive review and insights about GSV Vadodara",
      url: "https://www.collegepravesh.com/engineering-colleges/gsv-vadodara/",
      icon: FileText,
      category: "College Info"
    },
    {
      title: "Freshers Video 2023",
      description: "Watch the official freshers orientation video",
      url: "https://youtu.be/eeCyC_nQ__4?feature=shared",
      icon: Youtube,
      category: "Orientation"
    },
    {
      title: "GSV Official Website",
      description: "Refer to GSV website for faculties and curriculum",
      url: "https://gsv.ac.in",
      icon: FileText,
      category: "Official"
    },
    {
      title: "First Year Hostel (STANZA)",
      description: "Location of double sharing rooms hostel - 10 km from college",
      url: "https://maps.app.goo.gl/oqnL2wPQQEjnG1ed6",
      icon: MapPin,
      category: "Location"
    },
    {
      title: "GSV Campus Location",
      description: "Main campus location with directions",
      url: "https://maps.app.goo.gl/p4gN3Gi8eyNaKrzb9",
      icon: MapPin,
      category: "Location"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Important Links Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Important Links & Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential links every GSV fresher should bookmark
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantLinks.map((link) => (
              <Card key={link.title} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <link.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-600 font-medium mb-1">{link.category}</div>
                      <CardTitle className="text-lg">{link.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="mb-4 text-sm">
                    {link.description}
                  </CardDescription>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Link
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}

            {/* Highlighted Exam Papers Button */}
            <Card className="border-2 border-orange-300 bg-gradient-to-r from-orange-50 to-yellow-50 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full font-medium">
                Credits: Pratik Ranjan(ECE-II)
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg animate-pulse">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-orange-600 font-bold mb-1 uppercase tracking-wide">IMPORTANT</div>
                    <CardTitle className="text-lg text-gray-900">1st Year Exam Papers Link</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="mb-4 text-sm font-medium text-gray-700">
                  Access previous year exam papers for better preparation
                </CardDescription>
                <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold shadow-md">
                  <a href="https://drive.google.com/file/d/164-p3SOpgocOJUkK2zDGvE4V9IP_0vTa/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Access Exam Papers
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* GSV Exam Preparation Resources Button */}
            <Card className="border-2 border-green-300 bg-gradient-to-r from-green-50 to-teal-50 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full font-medium">
                Credits: Pratik Ranjan(ECE-II)
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-green-600 font-bold mb-1 uppercase tracking-wide">STUDY MATERIALS</div>
                    <CardTitle className="text-lg text-gray-900">GSV Exam Preparation Resources</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="mb-4 text-sm font-medium text-gray-700">
                  Access comprehensive study materials, e-books, and subject-wise resources
                </CardDescription>
                <Button 
                  onClick={() => navigate('/exam-preparation')}
                  className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold shadow-md"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Access Resources
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">🚌 Transportation Info</h4>
            <p className="text-sm text-blue-800">
              Daily 3 AC buses run 3-4 times from STANZA hostel to GSV campus due to different class and practical lab timings of various branches.
            </p>
          </div>
        </div>

        {/* Get Advantage Before Joining Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Advantage Before Joining College
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prepare yourself with essential programming skills and knowledge
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="max-w-md w-full border-2 border-purple-300 bg-gradient-to-r from-purple-50 to-pink-50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-purple-600 font-bold mb-1 uppercase tracking-wide">LEARNING HUB</div>
                    <CardTitle className="text-lg text-gray-900">Start Learning Now</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="mb-4 text-sm font-medium text-gray-700">
                  Access our curated list of tutorials and courses for programming, DSA, ML, and more.
                </CardDescription>
                <Button 
                  onClick={() => navigate('/learning-resources')}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-md"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Explore Learning Hub
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

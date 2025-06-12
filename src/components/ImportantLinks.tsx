
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, MapPin, Youtube, Code, BookOpen, GraduationCap } from "lucide-react";

export const ImportantLinks = () => {
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

  const programmingResources = [
    {
      title: "Programming Fundamentals",
      url: "https://youtu.be/sPM2WiwA1us?feature=shared",
      language: "General"
    },
    {
      title: "GSOC Info",
      url: "https://youtu.be/sPM2WiwA1us?feature=shared",
      language: "Open Source"
    },
    {
      title: "LinkedIn Profile Guide",
      url: "https://youtu.be/lzuiuRgwwrc?feature=shared",
      language: "Professional"
    },
    {
      title: "Python Programming - CodeWithHarry",
      url: "https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&feature=shared",
      language: "Python"
    },
    {
      title: "Python Complete Course",
      url: "https://youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&feature=shared",
      language: "Python"
    },
    {
      title: "C Programming",
      url: "https://youtu.be/sPM2WiwA1us?feature=shared",
      language: "C"
    },
    {
      title: "C++ Programming",
      url: "https://youtu.be/e7sAf4SbS_g?feature=shared",
      language: "C++"
    },
    {
      title: "Java Programming",
      url: "https://youtu.be/BGTx91t8q50?feature=shared",
      language: "Java"
    },
    {
      title: "GitHub Tutorial",
      url: "https://youtu.be/Ez8F0nW6S-w?feature=shared",
      language: "Git/GitHub"
    }
  ];

  const mustWatchVideos = [
    {
      title: "Essential Fresher Guide - Part 1",
      url: "https://youtu.be/l4JlCnDX7wM?feature=shared"
    },
    {
      title: "Essential Fresher Guide - Part 2",
      url: "https://youtu.be/Pt1KGG26RKU?feature=shared"
    },
    {
      title: "Essential Fresher Guide - Part 3",
      url: "https://youtu.be/ySEQoryxoF8?feature=shared"
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

          {/* Highlighted Exam Papers Button */}
          <div className="mb-8 flex justify-center">
            <Card className="border-2 border-orange-300 bg-gradient-to-r from-orange-50 to-yellow-50 shadow-lg hover:shadow-xl transition-all duration-300 max-w-md">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg animate-pulse">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-orange-600 font-bold mb-1 uppercase tracking-wide">IMPORTANT</div>
                    <CardTitle className="text-xl text-gray-900">1st Year Exam Papers Link</CardTitle>
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

          {/* Programming Languages */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Code className="h-6 w-6 mr-2 text-blue-600" />
              Learn Programming Languages
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {programmingResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                        {resource.language}
                      </span>
                      <Youtube className="h-4 w-4 text-red-600" />
                    </div>
                    <h4 className="font-semibold text-sm mb-3">{resource.title}</h4>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-2" />
                        Watch
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Must Watch Videos */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-purple-600" />
              Must Watch for Freshers
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {mustWatchVideos.map((video, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Youtube className="h-5 w-5 text-red-600 mr-2" />
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full font-medium">
                        Essential
                      </span>
                    </div>
                    <h4 className="font-semibold mb-4">{video.title}</h4>
                    <Button asChild className="w-full">
                      <a href={video.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Watch Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

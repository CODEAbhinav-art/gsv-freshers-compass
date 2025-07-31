import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Youtube, Code, BookOpen, ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const mustWatchResources = [
  {
    title: "DSA in C++ (Recommended)",
    url: "https://youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&feature=shared",
    language: "DSA"
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
    title: "GitHub Tutorial",
    url: "https://youtu.be/Ez8F0nW6S-w?feature=shared",
    language: "Git/GitHub"
  }
];

const programmingResources = [
  {
    title: "DSA in JAVA (For ICSE Students)",
    url: "https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&feature=shared",
    language: "DSA"
  },
  {
    title: "Machine Learning - Krish Naik (Recommended)",
    url: "https://youtube.com/playlist?list=PLTDARY42LDV7WGmlzZtY-w9pemyPrKNUZ&feature=shared",
    language: "ML"
  },
  {
    title: "Machine Learning - Campus X (Detailed)",
    url: "https://youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH&feature=shared",
    language: "ML"
  },
  {
    title: "Machine Learning - Andrew Ng Course",
    url: "https://youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU&feature=shared",
    language: "ML"
  },
  {
    title: "Blockchain/Web 3",
    url: "https://youtu.be/gyMwXuJrbJQ?feature=shared",
    language: "Blockchain"
  },
  {
    title: "Web Development - Course 1",
    url: "https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&feature=shared",
    language: "Web Dev"
  },
  {
    title: "Web Development - Course 2",
    url: "https://youtube.com/playlist?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&feature=shared",
    language: "Web Dev"
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
    url: "https://youtu.be/irqbmMNs2Bo?feature=shared",
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

const LearningResources = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Button asChild variant="ghost">
            <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </Button>
          <div className="flex items-center gap-3">
            <h1 className="text-xl md:text-2xl font-bold text-slate-900">Learning Hub</h1>
            <Badge className="bg-orange-100 text-orange-800 border-orange-200">
              Updated
            </Badge>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Must Watch Before Joining College */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center text-center">
            <AlertTriangle className="h-8 w-8 mr-3 text-red-600" />
            Must Watch Before Joining College
          </h2>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6 mb-8 max-w-4xl mx-auto shadow-lg">
            <p className="text-yellow-900 text-center font-semibold text-lg">
              Don't be overwhelmed by these much resources, that are optional for exploring various fields, 
              but make sure to must watch this category tutorials before September-2025
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mustWatchResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 flex flex-col border-2 border-red-300 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 shadow-lg hover:scale-105">
                <CardContent className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs px-3 py-1.5 rounded-full font-bold border-2 ${
                      resource.language === 'DSA'
                        ? 'bg-red-100 text-red-800 border-red-300'
                        : resource.language === 'Open Source'
                          ? 'bg-purple-100 text-purple-800 border-purple-300'
                          : resource.language === 'Professional'
                            ? 'bg-blue-100 text-blue-800 border-blue-300'
                            : 'bg-green-100 text-green-800 border-green-300'
                    }`}>
                      {resource.language}
                    </span>
                    <Youtube className="h-5 w-5 text-red-600" />
                  </div>
                  <h4 className="font-bold text-sm mb-4 flex-grow text-slate-800">{resource.title}</h4>
                  <Button 
                    asChild 
                    variant="default"
                    size="sm" 
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Watch Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Programming Languages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center text-center">
            <Code className="h-8 w-8 mr-3 text-blue-600" />
            Learn Programming Languages
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {programmingResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300 flex flex-col">
                <CardContent className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      resource.language === 'DSA'
                        ? 'bg-red-100 text-red-800'
                        : resource.language === 'ML'
                          ? 'bg-blue-100 text-blue-800'
                          : resource.language === 'Blockchain'
                            ? 'bg-yellow-100 text-yellow-800'
                            : resource.language === 'Web Dev'
                              ? 'bg-indigo-100 text-indigo-800'
                              : 'bg-green-100 text-green-800'
                    }`}>
                      {resource.language}
                    </span>
                    <Youtube className="h-4 w-4 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-sm mb-3 flex-grow">{resource.title}</h4>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                  >
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center text-center">
            <BookOpen className="h-8 w-8 mr-3 text-purple-600" />
            Must Watch for Freshers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mustWatchVideos.map((video, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300 flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <Youtube className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full font-medium">
                      Essential
                    </span>
                  </div>
                  <h4 className="font-semibold mb-4 flex-grow">{video.title}</h4>
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
      </main>
    </div>
  );
};

export default LearningResources;

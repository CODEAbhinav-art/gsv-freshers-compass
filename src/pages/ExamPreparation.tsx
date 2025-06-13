
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, BookOpen, ExternalLink, ChevronDown, Youtube, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExamPreparation = () => {
  const navigate = useNavigate();
  const [openEBooks, setOpenEBooks] = useState(false);
  const [openYoutube, setOpenYoutube] = useState(false);

  const eBooks = [
    {
      title: "C Language Book",
      url: "https://drive.google.com/file/d/16_ZfK8nQ0ehKT0bcnwOvSK0uTzJwODyN/view?usp=drivesdk"
    },
    {
      title: "Maths Book", 
      url: "https://drive.google.com/file/d/16Yup4ki5CnVuK9rOatrAnRc24Tsq7iYc/view?usp=drivesdk"
    },
    {
      title: "BEE Book",
      url: "https://drive.google.com/file/d/16eT1NBO3i-vQg-IZwJTa6PZ4rLyGg0fU/view?usp=drivesdk"
    },
    {
      title: "BEE Book Solutions",
      url: "https://drive.google.com/file/d/16eT1NBO3i-vQg-IZwJTa6PZ4rLyGg0fU/view?usp=drivesdk"
    }
  ];

  const youtubeChannels = [
    {
      subject: "Mathematics",
      channels: [
        { name: "Gajendra Purohit", url: "https://youtube.com/@gajendrapurohit?si=TXdMk_Z3X0gt9_ob" },
        { name: "Pradeep Giri Academy", url: "https://youtube.com/@pradeepgiriacademy?si=HQ0VDBYBUNcviQaT" }
      ]
    },
    {
      subject: "BEE (Basic Electrical Engineering)",
      channels: [
        { name: "Perfect Computer Engineer", url: "https://youtube.com/@perfectcomputerengineer?si=_UMMc_6jDfz-NQmG" },
        { name: "Ardi Satriawan", url: "https://youtube.com/@ardisatriawan?si=_OGkZADkay-AJLoM" },
        { name: "BEE Playlist", url: "https://youtube.com/playlist?list=PL7-gxZsYKwehJ9eZxq8OFj5H4oTj3VFAF&si=7zK56XxAwM6L07Mx" },
        { name: "Zen Murali Sachithanantham", url: "https://youtube.com/@zenmuralisachithanandam8189?si=dbEdlJJmeO8LnbyC" }
      ]
    },
    {
      subject: "IMCE (Introduction to Mechanical & Civil Engineering)",
      channels: [
        { name: "Manoj Kumar Sahoo", url: "https://youtube.com/@manojkumarsahoo?si=twyr_0kQcMgDxD98" },
        { name: "Tikles Academy", url: "https://youtube.com/@tiklesacademy?si=2PSA63sQUxxkA3SM" },
        { name: "Gautam Varde", url: "https://youtube.com/@gautamvarde?si=S7bk-4PQzel_rJQ-" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Button 
          onClick={() => navigate('/')} 
          variant="outline" 
          className="mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            GSV Exam Preparation Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive study materials, e-books, and subject-wise resources to help you excel in your exams
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* E-Books Section */}
          <Card className="border-2 border-blue-200 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Download className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">E-Books Link</CardTitle>
                  <CardDescription>Download essential textbooks and reference materials</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Collapsible open={openEBooks} onOpenChange={setOpenEBooks}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <span>View Available E-Books ({eBooks.length})</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openEBooks ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-3">
                  {eBooks.map((book, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{book.title}</span>
                        <Button asChild size="sm" variant="outline">
                          <a href={book.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Download
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* YouTube Channels Section */}
          <Card className="border-2 border-red-200 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Youtube className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Subject wise YouTube Channels/Playlist</CardTitle>
                  <CardDescription>Curated video content for each subject</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Collapsible open={openYoutube} onOpenChange={setOpenYoutube}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <span>View Subject Channels</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openYoutube ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-4">
                  {/* Important Note */}
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">📚 Study Strategy</h4>
                    <p className="text-sm text-yellow-800">
                      "Attending classes Regularly + Making Notes + Question Practice from E-Books + Solving previous year papers 3 days before exam" is more than enough to score 9+ SGPA. Refer to these channels when unable to attend class due to genuine reasons.
                    </p>
                  </div>
                  
                  {youtubeChannels.map((subject, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">{subject.subject}</h4>
                      <div className="space-y-2">
                        {subject.channels.map((channel, channelIndex) => (
                          <div key={channelIndex} className="flex items-center justify-between">
                            <span className="text-sm">{channel.name}</span>
                            <Button asChild size="sm" variant="outline">
                              <a href={channel.url} target="_blank" rel="noopener noreferrer">
                                <Youtube className="h-3 w-3 mr-1" />
                                Watch
                              </a>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">📚 Study Tips</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Download e-books for offline studying</li>
              <li>• Follow the YouTube playlists for comprehensive understanding</li>
              <li>• Practice regularly with the provided solutions</li>
              <li>• Create a study schedule and stick to it</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExamPreparation;

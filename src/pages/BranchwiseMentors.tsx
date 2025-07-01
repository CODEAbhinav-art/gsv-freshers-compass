
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, MessageCircle, GraduationCap, ExternalLink, Mail, Phone, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BranchwiseMentors = () => {
  const navigate = useNavigate();

  const branches = [
    {
      name: "AI-DS Mentors",
      fullName: "Artificial Intelligence & Data Science",
      icon: "🤖",
      description: "Connect with AI-DS seniors for guidance on machine learning, data science projects, and career paths in tech industry.",
      mentors: {
        males: [
          {
            name: "Abhinav Bhaiya",
            details: "Ex Class Representative(CR), Domain Head-profile development domain(Technocrats), Co-Coordinator of D&Q Club, 8.5+ SGPA, Dron-a-thon 3rd position",
            contacts: {
              instagram: "abhinav.msh",
              linkedin: "https://www.linkedin.com/in/abhinavamishra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              email: "2005.abhinavmishra@gmail.com"
            }
          },
          {
            name: "Abhinav Bhaiya",
            details: "9 CGPA, Hult Prize OC, Internship Coordinator(AI-DS), In Top 5 Hult Prize GSV 2025",
            contacts: {
              linkedin: "https://www.linkedin.com/in/abhinavrmishra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              email: "abhinav15102003@gmail.com",
              telegram: "https://t.me/Arceus45"
            }
          }
        ],
        females: [
          {
            name: "Sakshi Didi",
            details: "Dronathon Winner, Lead Singer of Music Club(MALHAR), 8.5+ SGPA",
            contacts: {
              linkedin: "https://www.linkedin.com/in/sakshi-salot"
            }
          }
        ]
      }
    },
    {
      name: "ECE Mentors",
      fullName: "Electronics & Communication Engineering",
      icon: "📡",
      description: "Get mentorship from ECE seniors on electronics projects, communication systems, and opportunities in telecom sector.",
      mentors: {
        males: [
          {
            name: "Pratik Bhaiya",
            details: "9.8 SGPA(GSV Highest(males)), Technocrats(Programming)",
            contacts: {
              linkedin: "https://www.linkedin.com/in/pratik-ranjan3011?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              email: "pratikranjan3011@gmail.com",
              phone: "6202269313"
            }
          },
          {
            name: "Aditya Bhaiya",
            details: "9+ SGPA",
            contacts: {
              linkedin: "https://www.linkedin.com/in/aditya-raj-74a426327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              email: "adifzd87@gmail.com"
            }
          }
        ],
        females: [
          {
            name: "Devika Didi",
            details: "9.9 SGPA(GSV Highest), Hult Prize OC",
            contacts: {
              linkedin: "https://www.linkedin.com/in/devika-gulia-525598327",
              email: "devikagulia2023@gmail.com"
            }
          }
        ]
      }
    },
    {
      name: "EE Mentors",
      fullName: "Electrical Engineering",
      icon: "⚡",
      description: "Reach out to EE seniors for guidance on power systems, electrical projects, and career opportunities in electrical domain.",
      mentors: {
        males: [
          {
            name: "Atulya Bhaiya",
            details: "9+ CGPA, Internship coordinator(EE), Co-coordinator Technocrats",
            contacts: {
              linkedin: "https://www.linkedin.com/in/atulyabharat?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              phone: "8252632832"
            }
          },
          {
            name: "Anshul Bhaiya",
            details: "9+ CGPA, Ex CR (EE), Literary Club, Business Club",
            contacts: {
              linkedin: "https://www.linkedin.com/in/anshulpareek54?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
          }
        ],
        females: [
          {
            name: "Anusha Didi",
            details: "9+ CGPA, SAE member, Business Club, Literary Club",
            contacts: {
              linkedin: "https://www.linkedin.com/in/anusha-sharma-92a833215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              instagram: "https://www.instagram.com/anusha.654305?igsh=amJsemN5bWw5eGNu",
              email: "sharma65anusha@gmail.com"
            }
          }
        ]
      }
    },
    {
      name: "AE Mentors",
      fullName: "Aviation Engineering",
      icon: "✈️",
      description: "Get guidance from AE seniors on aerospace projects, aviation industry trends, and career paths in aerospace sector.",
      mentors: {
        males: [
          {
            name: "Rupesh Bhaiya",
            details: "8.5+ CGPA, Co-coordinator EMC, Technocrats(programming)",
            contacts: {
              linkedin: "https://www.linkedin.com/in/rupesh-kumar-2627772a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              instagram: "https://www.instagram.com/apt_rupesh?igsh=MWw3bjJ1Mzd2ZWVuncw==",
              twitter: "https://x.com/helloiamrupesh?t=n7yrHD66rSb55WEMNTAP2A&s=09",
              phone: "7488335578"
            }
          }
        ],
        females: [
          {
            name: "Shreya Didi",
            details: "8.5+ CGPA, Internship coordinator (AE), Technocrats(programming)",
            contacts: {
              linkedin: "https://www.linkedin.com/in/shreya-singh-106b30312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
          },
          {
            name: "Hrishita Didi",
            details: "Lead Singer of MALHAR, 8+ SGPA",
            contacts: {
              linkedin: "https://www.linkedin.com/in/hrishita-saswade-023455370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
          }
        ]
      }
    },
    {
      name: "ME Mentors",
      fullName: "Mechanical Engineering",
      icon: "⚙️",
      description: "Connect with ME seniors for mechanical design projects, manufacturing processes, and core mechanical industry insights.",
      mentors: {
        males: [
          {
            name: "Ved Bhaiya",
            details: "9+ CGPA, Dronathon winner, SAE Member, Literary Club",
            contacts: {
              linkedin: "https://www.linkedin.com/in/ved-vyas-0bb560322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              email: "vedvyas2468@gmail.com",
              telegram: "https://t.me/Invisible_V9"
            }
          },
          {
            name: "Pushpal Bhaiya",
            details: "CR (ME), Music Composer, AAI intern, Malhaar club, Literary Club - Highly Responsive and Probably the best senior to reach out for Admission related Queries",
            contacts: {
              linkedin: "https://www.linkedin.com/in/pushpalgsv?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              phone: "6299549112"
            }
          }
        ],
        females: [
          {
            name: "Aarti Didi",
            details: "Internship Coordinator (ME), 8+ CGPA, EMC",
            contacts: {
              linkedin: "https://www.linkedin.com/in/aarti-sinha-198273346"
            }
          }
        ]
      }
    },
    {
      name: "CE Mentors",
      fullName: "Civil Engineering",
      icon: "🏗️",
      description: "Reach out to CE seniors for construction projects, infrastructure development, and opportunities in civil engineering field.",
      mentors: {
        males: [
          {
            name: "Shashank Bhaiya",
            details: "Internship Coordinator (CE), 8+ CGPA, Technocrats(programming)",
            contacts: {
              linkedin: "https://www.linkedin.com/in/shashank-savarkar-a001a5328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              phone: "7410075050"
            }
          }
        ],
        females: [
          {
            name: "Amisha Didi",
            details: "8.5+ CGPA, SAE Member, Hult Prize OC, Edharth(B-Club)",
            contacts: {
              linkedin: "https://www.linkedin.com/in/amisha-singh-82b48b327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
          }
        ]
      }
    }
  ];

  const renderContactButton = (type: string, value: string) => {
    const getIcon = () => {
      switch (type) {
        case 'linkedin': return <ExternalLink className="h-4 w-4" />;
        case 'email': return <Mail className="h-4 w-4" />;
        case 'phone': return <Phone className="h-4 w-4" />;
        case 'instagram': return <Instagram className="h-4 w-4" />;
        case 'telegram': return <MessageCircle className="h-4 w-4" />;
        case 'twitter': return <ExternalLink className="h-4 w-4" />;
        default: return <ExternalLink className="h-4 w-4" />;
      }
    };

    const getLabel = () => {
      switch (type) {
        case 'linkedin': return 'LinkedIn';
        case 'email': return 'Email';
        case 'phone': return 'Phone';
        case 'instagram': return 'Instagram';
        case 'telegram': return 'Telegram';
        case 'twitter': return 'Twitter';
        default: return 'Contact';
      }
    };

    const getHref = () => {
      switch (type) {
        case 'email': return `mailto:${value}`;
        case 'phone': return `tel:${value}`;
        default: return value;
      }
    };

    return (
      <Button
        key={type}
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
        asChild
      >
        <a 
          href={getHref()}
          target={type !== 'email' && type !== 'phone' ? "_blank" : undefined}
          rel={type !== 'email' && type !== 'phone' ? "noopener noreferrer" : undefined}
        >
          {getIcon()}
          {getLabel()}
        </a>
      </Button>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Users className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold text-gray-900">
                Branchwise Mentors (Seniors)
              </h1>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Connect with experienced seniors from your branch for personalized guidance and support
            </p>
            
            <Card className="max-w-4xl mx-auto mb-8 border-l-4 border-l-primary shadow-lg">
              <CardHeader>
                <CardTitle className="text-left text-lg text-blue-900">
                  📢 Important Note
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <p className="text-blue-800 mb-3">
                  Feel free to reach out to your branchwise seniors in case of <strong>GENUINE doubts</strong> related to:
                </p>
                <div className="grid md:grid-cols-2 gap-2 text-blue-800 mb-4">
                  <div>• Career guidance and planning</div>
                  <div>• Club-related queries</div>
                  <div>• Exam preparation strategies</div>
                  <div>• College administration matters</div>
                  <div>• Faculty and academic concerns</div>
                  <div>• General counselling and support</div>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> Be respectful and genuine while asking your questions. This is for your help and these mentors are unofficial. Seniors are volunteering for this as a helping hand. Apart from these, the college will allot faculty mentors, who will be in-charge of signing documents like medical-leave approval etc.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-l-primary"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">{branch.icon}</div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {branch.name}
                </CardTitle>
                <CardDescription className="text-sm font-medium text-muted-foreground">
                  {branch.fullName}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {branch.description}
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="mentors">
                    <AccordionTrigger className="text-sm font-medium">
                      View Mentors Contact Details
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        {branch.mentors.males.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-sm mb-2 text-blue-700">For Males:</h4>
                            <div className="space-y-3">
                              {branch.mentors.males.map((mentor, mentorIndex) => (
                                <div key={mentorIndex} className="bg-blue-50 p-3 rounded-lg">
                                  <h5 className="font-medium text-sm mb-1">{mentor.name}</h5>
                                  <p className="text-xs text-gray-600 mb-2">{mentor.details}</p>
                                  <div className="flex flex-wrap gap-1">
                                    {Object.entries(mentor.contacts).map(([type, value]) => 
                                      renderContactButton(type, value as string)
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {branch.mentors.females.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-sm mb-2 text-pink-700">For Females:</h4>
                            <div className="space-y-3">
                              {branch.mentors.females.map((mentor, mentorIndex) => (
                                <div key={mentorIndex} className="bg-pink-50 p-3 rounded-lg">
                                  <h5 className="font-medium text-sm mb-1">{mentor.name}</h5>
                                  <p className="text-xs text-gray-600 mb-2">{mentor.details}</p>
                                  <div className="flex flex-wrap gap-1">
                                    {Object.entries(mentor.contacts).map(([type, value]) => 
                                      renderContactButton(type, value as string)
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchwiseMentors;

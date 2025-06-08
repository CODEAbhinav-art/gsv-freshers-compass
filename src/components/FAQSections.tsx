
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, BookOpen, Users, Briefcase, TrendingUp } from "lucide-react";
import { useState } from "react";

export const FAQSections = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const faqCategories = [
    {
      id: "academic-faqs",
      title: "Academic FAQs",
      icon: BookOpen,
      description: "Everything about courses, exams, and academic procedures",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-500",
      faqs: [
        {
          question: "What is the credit system at GSV?",
          answer: "GSV follows a credit-based system where each course has specific credit points. You need to complete the required credits for your program to graduate. Typically, a B.Tech program requires 160-180 credits over 4 years."
        },
        {
          question: "How do I access my course syllabus?",
          answer: "You can access your course syllabus through the student portal on the GSV website. Login with your enrollment number and password provided during admission."
        },
        {
          question: "What is the examination pattern?",
          answer: "The examination pattern includes continuous assessment (30%), mid-semester exam (30%), and end-semester exam (40%). There are also practical exams for lab courses."
        },
        {
          question: "Can I change my branch after first year?",
          answer: "Branch change is possible based on your first-year performance and seat availability. You need to maintain a minimum CGPA as specified by the university guidelines."
        },
        {
          question: "How do I register for elective courses?",
          answer: "Elective registration is done online through the student portal during the specified registration period at the beginning of each semester."
        }
      ]
    },
    {
      id: "non-academic-faqs",
      title: "Non-Academic FAQs",
      icon: Users,
      description: "Campus life, facilities, and general student queries",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-500",
      faqs: [
        {
          question: "What are the hostel facilities available?",
          answer: "GSV provides on-campus hostels with AC/Non-AC rooms, 24/7 Wi-Fi, mess facilities, recreational rooms, laundry services, and 24/7 security. Rooms are typically twin or triple sharing."
        },
        {
          question: "What are the mess timings and menu?",
          answer: "Breakfast: 7:30-9:30 AM, Lunch: 12:30-2:30 PM, Snacks: 5:00-6:00 PM, Dinner: 7:30-9:30 PM. The menu includes both vegetarian and non-vegetarian options with regional variety."
        },
        {
          question: "Is there medical facility on campus?",
          answer: "Yes, there's an on-campus medical center with a qualified doctor and nurse available during working hours. For emergencies, tie-ups with nearby hospitals are maintained."
        },
        {
          question: "What sports facilities are available?",
          answer: "GSV has a well-equipped sports complex with facilities for cricket, football, basketball, volleyball, badminton, table tennis, gym, and indoor games."
        },
        {
          question: "Are there any restrictions on outside food?",
          answer: "Outside food delivery is allowed in designated areas during specific hours. However, cooking in hostel rooms is not permitted for safety reasons."
        }
      ]
    },
    {
      id: "internship-faqs",
      title: "GSV Internship Related FAQs",
      icon: Briefcase,
      description: "Internship opportunities, procedures, and guidelines",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-500",
      faqs: [
        {
          question: "When should I start applying for internships?",
          answer: "Internship applications typically start in the 6th semester for summer internships. However, you can start preparing and networking from the 4th semester onwards."
        },
        {
          question: "Does GSV have industry partnerships for internships?",
          answer: "Yes, GSV has MoUs with various industries including railways, logistics, and infrastructure companies that offer internship opportunities to students."
        },
        {
          question: "Is internship mandatory for graduation?",
          answer: "Yes, internship is a mandatory component for all programs. You need to complete a minimum 6-8 week internship and submit a detailed report for evaluation."
        },
        {
          question: "Can I do internships abroad?",
          answer: "International internships are allowed with prior approval from the academic department and international relations office. Proper documentation and insurance are required."
        },
        {
          question: "How is internship evaluation done?",
          answer: "Internship evaluation is based on the company supervisor's feedback, your internship report, and a presentation to the faculty panel. It carries academic credits."
        }
      ]
    },
    {
      id: "placements-careers",
      title: "Placements & Careers",
      icon: TrendingUp,
      description: "Job opportunities, career guidance, and placement process",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-500",
      faqs: [
        {
          question: "What is the placement record of GSV?",
          answer: "GSV has a good placement record with students placed in various sectors including railways, logistics, IT, consulting, and government organizations. The placement percentage varies by department and year."
        },
        {
          question: "Which companies visit GSV for placements?",
          answer: "Major recruiters include Indian Railways, IRCTC, TCS, Infosys, Wipro, L&T, KPMG, Deloitte, and various PSUs related to transportation and logistics."
        },
        {
          question: "What is the average package offered?",
          answer: "The average package varies by program and specialization. B.Tech graduates typically receive packages ranging from 4-12 LPA, while MBA graduates can expect 6-15 LPA."
        },
        {
          question: "How does the placement process work?",
          answer: "The placement process includes pre-placement talks, online tests, group discussions, technical interviews, and HR interviews. Students need to register through the placement cell."
        },
        {
          question: "Is there career counseling available?",
          answer: "Yes, GSV has a dedicated career counseling cell that provides guidance on career choices, skill development, resume building, and interview preparation."
        }
      ]
    }
  ];

  return (
    <section id="faqs" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-extrabold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-semibold">
            Get answers to the most common questions from GSV freshers
          </p>
        </div>

        <div className="grid gap-8">
          {faqCategories.map((category) => (
            <Card key={category.id} id={category.id} className="space-card-light border-2 bg-white/95">
              <Collapsible 
                open={openSections.includes(category.id)}
                onOpenChange={() => toggleSection(category.id)}
              >
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-black/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg shadow-sm border border-blue-400/30">
                          <category.icon className={`h-6 w-6 ${category.iconColor}`} />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-xl text-gray-900 font-bold">{category.title}</CardTitle>
                          <CardDescription className="mt-1 text-gray-700 font-semibold">{category.description}</CardDescription>
                        </div>
                      </div>
                      <ChevronDown 
                        className={`h-5 w-5 transition-transform text-gray-900 ${
                          openSections.includes(category.id) ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {category.faqs.map((faq, index) => (
                        <Card key={index} className="bg-white/90 border shadow-sm">
                          <CardContent className="p-4">
                            <h4 className="font-bold text-gray-900 mb-2 text-base">{faq.question}</h4>
                            <p className="text-sm text-gray-800 leading-relaxed font-medium">{faq.answer}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <Button variant="outline" className="leetcode-btn bg-black/80 text-white font-bold hover:bg-black/90 border-blue-400/50">
                        <category.icon className={`h-4 w-4 mr-2 ${category.iconColor}`} />
                        View More {category.title}
                      </Button>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

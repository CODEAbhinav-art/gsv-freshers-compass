
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, BookOpen, Users, Briefcase, TrendingUp, Building2, Code, Calendar } from "lucide-react";
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
      id: "placements",
      title: "Placements & Career Stats",
      icon: TrendingUp,
      description: "Complete placement statistics and career guidance for GSV students",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-500",
      faqs: [
        {
          question: "What are the median placement packages for 2025 batch?",
          answer: "Civil Engineering: 4.0 LPA, ECE: 4.8 LPA, Mechanical Engineering: 5.0 LPA"
        },
        {
          question: "What are the highest CTC packages achieved?",
          answer: "Civil Engineering: 5.0 LPA, ECE: 6.57 LPA, Mechanical Engineering: 6.57 LPA"
        },
        {
          question: "When will the first batch of AI-DS and Electrical Engineering graduate?",
          answer: "The first batch of AI-DS and Electrical Engineering branch started in 2023, will graduate in 2027."
        },
        {
          question: "When will Aviation Engineering students graduate?",
          answer: "The Aviation Engineering (30 seats) branch started in 2024, will graduate in 2028."
        },
        {
          question: "Do GSV students get extra reservation at Indian Railways?",
          answer: "MYTHBUSTER: GSV students are neither guaranteed nor get any extra reservation at any job in INDIAN RAILWAYS. One has to qualify the traditional examinations conducted by RRB."
        },
        {
          question: "Which companies visit GSV for placements?",
          answer: "To know about companies visiting GSV, refer to the Admission Brochure above for detailed information."
        },
        {
          question: "If the college is good, why are placements not up to that reputation?",
          answer: "GSV established in 2022 (formerly NRTI). So the higher percentiles/rank students started joining after that and the JOSAA mode of admission started in 2024. Therefore the first batch of students who joined GSV not NRTI will have their placements from 2026 afterwards."
        },
        {
          question: "Do good companies visit GSV?",
          answer: "Yes, refer to the admission brochure and more good companies are expected to visit at the time of AI-DS graduation."
        },
        {
          question: "Does GSV guarantee me a placement?",
          answer: "No, Any college can't assure your placement except your own dedicated efforts like Networking with other people, improving the communication skills, domain specific expertise, building a strong resume/cv, a good CGPA (8+). These are some of the things a RECRUITER looks into a candidate, interestingly these skills rely on your own motivated efforts."
        }
      ]
    },
    {
      id: "admission-process",
      title: "After CSAB Admission Process",
      icon: BookOpen,
      description: "Everything you need to know after getting a seat in CSAB",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-500",
      faqs: [
        {
          question: "How many days of physical reporting after CSAB allocation?",
          answer: "Last year, the CSAB round 2 ended on 10th August, we were asked to do physical reporting on 3rd September onwards for hostel allotment and induction programme on 5th September, so one gets enough time to make ticket and travel arrangements."
        }
      ]
    },
    {
      id: "coding-culture",
      title: "Coding Culture & Technical Activities",
      icon: Code,
      description: "Technical clubs, coding culture, and skill development opportunities",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-500",
      faqs: [
        {
          question: "How is the coding culture in GSV?",
          answer: "It is decent, the AI branch started in 2023 due to which coding oriented people are constantly growing every year. Lot of great seniors will be there for guidance from 3rd and 2nd year."
        },
        {
          question: "What about Technocrats club?",
          answer: "The tech club of GSV and probably the most active club of GSV in tech with 3 domains: 1)Programming, 2) Profile Development, 3)Robotics. In programming Domain Junior seniors are formed in a team especially to help juniors gain exposure with seniors for a group project. THEREFORE A MUST JOIN FOR CODING ORIENTED PEOPLE."
        },
        {
          question: "Do people try for GSOC (Google Summer of Code)?",
          answer: "Yes, GSOC is actively promoted. Meanwhile GSV is yet to get its first GSOC Qualifier. If interested upskill yourself in a particular tech stack, Web development (Django, MERN stack), Web 3, Machine Learning, etc."
        }
      ]
    },
    {
      id: "general-faqs",
      title: "General College Information",
      icon: Building2,
      description: "Dress code, scholarships, academic guidance, and general policies",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-500",
      faqs: [
        {
          question: "Any dress code in college?",
          answer: "No, casuals are allowed but Formals are recommended during project presentations."
        },
        {
          question: "How to apply for scholarships?",
          answer: "For scholarships, refer to college website: gsv.ac.in and admission brochure, all the scholarships are NEED CUM MERIT BASED."
        },
        {
          question: "Which branch should I choose for easier scholarships?",
          answer: "AVIATION. Airbus last year gave scholarships to all aviation students whoever applied, if seats get vacant then get distributed among other branch students like AI(4 seats), ECE(4 seats), etc."
        },
        {
          question: "Can I develop extra skills alongside academics?",
          answer: "Yes, It depends on your time management skills and dedication."
        },
        {
          question: "What do students do during free time when class is not happening?",
          answer: "Some Study in the library, some play sports, some go and sleep in the high speed hostel common rooms."
        },
        {
          question: "How is the alumni network?",
          answer: "Check out the GSV LinkedIn Page/people section."
        },
        {
          question: "How are the professors? Are they helpful towards students?",
          answer: "Professors are mostly cool and chill. They are helpful towards students in every possible way. Until you're sincere and respectful with them, no need to worry. But crossing the line is never recommended. Medium workload one can expect, neither too much nor too less."
        },
        {
          question: "Are there chess tournaments?",
          answer: "Yes in the AUJUSYA(Sports fest), lot of good chess players are there in GSV like up to 1500 elo types."
        },
        {
          question: "Do we receive funding for projects using electronics? What about lab equipment?",
          answer: "Sufficient equipment is there in the labs according to COURSE CURRICULUM. Also a new LAB Building Under construction for better facilities. For funding, do reach out to respective faculties if they find your work and thesis genuine, you're sure to receive funding. E-CELL of GSV provides seed funding of up to Rs 1 Lakh/-."
        }
      ]
    },
    {
      id: "hostel-facilities",
      title: "Hostel & Campus Facilities",
      icon: Users,
      description: "Accommodation, mess, library, and campus amenities information",
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-500",
      faqs: [
        {
          question: "Do we get single rooms? What about roommate allocation?",
          answer: "As of now, nobody is given single rooms with current infra. Since the new hostel building is under construction, this facility will be given to 4th year students once completed. Roommate Allotment is random process based on your reporting time and day, if you wish to change roommate get signature from warden and submit to stanza caretaker."
        },
        {
          question: "What are the library timings?",
          answer: "8:30 Am to 7:30 Pm Monday-Friday. Timing and days get increased during exam times. Library has a vast collection of books from multiple genres. One can issue the books for a maximum of 10 days, then submit/extend for another 10 day else pay a fine 5 Rs/day if not submitted/extended within 10 days."
        },
        {
          question: "What about hostel facilities - washing machines and mess food?",
          answer: "There are 5 washing machines in stanza hostels. Mess food will feel good in the starting, later one gets bored. The food is absolutely normal, no added sugar in all stuff. Non veg is not served in stanza mess but in GSV mess, nearby shops are there in front of college."
        },
        {
          question: "Is hostel wifi unlimited or is there a monthly limit?",
          answer: "75 GB per day/24 hours."
        },
        {
          question: "Are newspapers available in English?",
          answer: "Multiple newspapers and magazines are available in the library, all in English language only! If you wish to add any book in library, write a formal mail to the library incharge."
        }
      ]
    },
    {
      id: "certification-events",
      title: "Certifications & College Events",
      icon: Calendar,
      description: "Certification courses, college events, and extracurricular activities",
      color: "bg-yellow-50 border-yellow-200",
      iconColor: "text-yellow-500",
      faqs: [
        {
          question: "What certification courses does the college provide?",
          answer: "There is a NVIDIA course provided by the college itself if yes then how many processes does the college provide in a whole academy year? The course is provided by Respected. Vipul sir(Associate professor, AI-DS) as he is a NVIDIA DEEP LEARNING INSTITUTE(DLI) Ambassador. There are other certification courses provided by the college also but for senior years not for the first year."
        },
        {
          question: "What are the major college events?",
          answer: "AGNEE(CULTURAL FEST): https://www.youtube.com/live/SJAm2a6KGOM?feature=shared, https://www.youtube.com/live/90y5nvQmPH4?feature=shared. EPITOME(Tech fest): https://www.youtube.com/live/oSykTGbwvv4?feature=shared. GSV YT channel: https://youtube.com/@gsv.vadodara?feature=shared"
        }
      ]
    }
  ];

  return (
    <section id="faqs" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-extrabold">
            Comprehensive GSV Student Guide
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-semibold">
            Complete information for GSV freshers - From admissions to placements
          </p>
        </div>

        <div className="grid gap-8">
          {faqCategories.map((category) => (
            <Card key={category.id} id={category.id} className="space-card-light border-2 bg-white/95 shadow-lg">
              <Collapsible 
                open={openSections.includes(category.id)}
                onOpenChange={() => toggleSection(category.id)}
              >
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
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
                            <p className="text-sm text-gray-800 leading-relaxed font-medium whitespace-pre-line">{faq.answer}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <Button variant="outline" className="leetcode-btn bg-blue-600 text-white font-bold hover:bg-blue-700 border-blue-400/50">
                        <category.icon className="h-4 w-4 mr-2 text-white" />
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

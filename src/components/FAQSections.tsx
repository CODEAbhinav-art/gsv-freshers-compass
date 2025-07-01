
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Home, Briefcase } from "lucide-react";

export const FAQSections = () => {
  const faqSections = [
    {
      id: "academic-faqs",
      title: "Academic FAQs",
      icon: <GraduationCap className="h-6 w-6" />,
      description: "Everything about academics, exams, and studies",
      faqs: [
        {
          question: "What is the grading system at GSV?",
          answer: "GSV follows a 10-point CGPA system. The grading scale includes: O (Outstanding) = 10, A+ = 9, A = 8, B+ = 7, B = 6, C = 5, F (Fail) = 0. You need a minimum CGPA of 5.0 to pass each semester."
        },
        {
          question: "How many subjects are there in the first year?",
          answer: "First year typically has 8-10 subjects per semester including core subjects like Mathematics, Physics, Chemistry, Basic Electrical Engineering, Engineering Drawing, and Communication Skills along with practical/lab sessions."
        },
        {
          question: "What is the attendance requirement?",
          answer: "Minimum 75% attendance is mandatory for each subject. Students with less than 75% attendance may not be allowed to appear for end-semester examinations. Medical leaves are considered separately with proper documentation."
        },
        {
          question: "Are there any inter college sports events or any intra college branch wise competition?",
          answer: "Inter College sports events are very rare but intra college branch wise competitions happen every semester."
        },
        {
          question: "Will Airbus provide internships to aviation branch students if yes then in which semesters?",
          answer: "Yes, specific semesters are yet to be declared by the college authorities."
        },
        {
          question: "Are the professors well qualified and do they teach well?",
          answer: "Yes they all are mostly from IITs or reputed industry veterans. But teaching skills has nothing to do with qualification, it's a subjective thing, some students always complain while there are also students who never. So it's how you perceive the surroundings depending upon your interest and caliber."
        }
      ]
    },
    {
      id: "non-academic-faqs",
      title: "Campus Life FAQs",
      icon: <Home className="h-6 w-6" />,
      description: "Hostel, mess, campus facilities, and daily life",
      faqs: [
        {
          question: "What are the hostel facilities available?",
          answer: "GSV provides separate hostels for boys and girls with basic amenities including WiFi, mess facility, common rooms, and study areas. Rooms are typically shared (2-3 students per room) with basic furniture provided."
        },
        {
          question: "What is the mess food like?",
          answer: "The mess serves vegetarian meals with a rotating weekly menu. The food quality is decent with North Indian and Gujarati cuisine. Mess timings are usually: Breakfast (7:30-9:30 AM), Lunch (12:30-2:30 PM), Snacks (4:30-6:00 PM), Dinner (7:30-9:30 PM)."
        },
        {
          question: "Are mobile phones allowed in hostels?",
          answer: "Yes, mobile phones are allowed in hostels. However, there might be restrictions during study hours or late night hours as per hostel rules. WiFi is available in most hostel areas."
        },
        {
          question: "What are the library facilities and timings?",
          answer: "The central library is well-equipped with textbooks, reference books, journals, and digital resources. Library timings are usually 8:00 AM to 8:00 PM on weekdays and 9:00 AM to 5:00 PM on weekends. Students can issue up to 3-4 books at a time."
        },
        {
          question: "How are the medical facilities in gsv campus and in the first year hostel for students in case of sickness?",
          answer: "For Males, Sumandeep Hospital(A government medical college, approx 5 km from stanza, towards parul university) is nearest to them, a medical store and clinic(morning:-9-12, evening:- 3-5) is also opposite to stanza. Also while in college one can go and get medicines from a GSV doctor for free AND in case of severe sickness railway command hospital is accessible by GSV Students only after being referred by GSV doctor.\n\nFemales:- except sumandeep point rest is the same for girls, and also since college in the main city one can go to manjalpur and get treated in private clinics in case college doctor is not available."
        },
        {
          question: "What are the in-campus hostel restrictions.. like is it allowed to stay outside campus for full day-night or any sort?!",
          answer: "In GSV Campus strict 12 AM night.\nIn stanza:- refer to seniors."
        },
        {
          question: "Do college students hold any authority like does college elect sports general captains.. or the general secretary of college who holds authority over the things in college?",
          answer: "Yes, GSV Has its Student Council , you can reach out to him whenever needed. Especially our student cell president (vivek bhaiya-4th year(ex coordinator-Technocrats)) is very helpful in nature. The club heads and other positions are elected by the current seniormost person of that particular club who is going to retire from that position (It's like passing the baton on to the next trusted teammate). Meanwhile in GSV Clubs, collaboration and collective growth is the utmost priority therefore club positions are insignificant, every club member holds his/her voice equally in constructive manner whether he is coordinator or a support member. These positions are meant to guide the juniors and take the final decisions since they are the most experienced in the club."
        },
        {
          question: "I have heard in some reviews that college only allows for a certain time inside a sports complex. Does somebody else also share that with us?!",
          answer: "It was until this 31st march which was shared with NAIR officials, Now NAIR has completely left the college and handed over all the infrastructure to GSV including that sports complex, new code of conduct for the sports facilities will be announced in the upcoming Induction/orientation program."
        }
      ]
    },
    {
      id: "internship-faqs",
      title: "Internship & Placement FAQs",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Career guidance, internships, and placement information",
      faqs: [
        {
          question: "When do internships start for first-year students?",
          answer: "First-year students typically get opportunities for summer internships after completing their first year. However, some voluntary internships and workshops are available throughout the year. The college placement cell organizes orientation sessions about internships."
        },
        {
          question: "What companies visit GSV for placements?",
          answer: "GSV has partnerships with various railway companies, engineering firms, and tech companies. Major recruiters include Indian Railways, BHEL, L&T, TCS, Infosys, and several core engineering companies. The placement cell regularly updates the list of visiting companies."
        },
        {
          question: "Is there support for competitive exam preparation?",
          answer: "Yes, GSV provides guidance and resources for competitive exams like GATE, ESE, and railway recruitment exams. There are faculty members who provide additional coaching and the library has relevant study materials."
        },
        {
          question: "What is the average package offered to GSV graduates?",
          answer: "The average package varies by branch and market conditions. Core engineering branches typically see packages ranging from 3-8 LPA, while some students in specialized fields or through off-campus placements achieve higher packages. The placement cell provides detailed statistics annually."
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-background" id="faqs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to the most common questions about life at GSV, academics, and campus facilities.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {faqSections.map((section) => (
            <Card key={section.id} className="shadow-lg">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {section.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                    <CardDescription className="text-base mt-1">
                      {section.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {section.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`${section.id}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground whitespace-pre-line">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

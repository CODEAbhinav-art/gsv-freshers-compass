import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Home, Briefcase, ExternalLink } from "lucide-react";

export const FAQSections = () => {
  const faqSections = [
    {
      id: "academic-faqs",
      title: "Academic FAQs", 
      icon: <GraduationCap className="h-6 w-6" />,
      description: "Everything about academics, exams, and studies",
      faqs: [
        {
          question: "How many subjects are there in the first year?",
          answer: "First year typically has 8-10 subjects per semester including core subjects like Mathematics, Physics, Chemistry, Basic Electrical Engineering, Engineering Drawing, and Communication Skills along with practical/lab sessions."
        },
        {
          question: "What is the attendance requirement?",
          answer: "Minimum 75% attendance is mandatory for each subject. Students with less than 75% attendance may not be allowed to appear for end-semester examinations. Medical leaves are considered separately with proper documentation."
        },
        {
          question: "Are the professors well qualified and do they teach well?",
          answer: "Yes they all are mostly from IITs or reputed industry veterans. But teaching skills has nothing to do with qualification, it's a subjective thing, some students always complain while there are also students who never. So it's how you perceive the surroundings depending upon your interest and caliber."
        },
        {
          question: "Can we change our branch after getting 9 cgpa in the first year? If yes, can you please suggest/ recommend anything to get 9 cgpa for example which chapter I can study in advance from YouTube?",
          answer: "Branch Change depends on two things:-\nNo of Vacant Seats in that particular branch out of total branch strength that is 60. (For aviation=40)\n9+ CGPA (especially to get AI-DS)\n2nd Factor is in my control, to get 9+ CGPA in GSV :-\nI'll Attend Classes Regularly with faculty interaction like asking genuine doubts(This builds my Face Value).\nI'll Make Proper Notes(Especially In subjects like Physics, IMCE, Mechanics, Design Thinking),80-90% of exam paper comes from notes directly most of the time.\nThe remaining 10-20% will get covered by Solving PYQ and some question practice from side books(For subjects like BEE ,Maths).\nFor things to do in Advance before joining College:-\nRefer to \"Get advantage before joining College\" section on the freshers website.\nScoring 9+ CGPA in GSV just requires a consistent study of 2 hours daily right from the start, don't get in the trap of \"baad me toh kar hi lenge, abhi toh college life start hui hai\" , I have to maintain balance between academics and non academics. Going Extreme will always hurt me."
        },
        {
          question: "What happens when someone fails in an exam? What is the Re test charge and process?",
          answer: "Step 1:- Supplementary exam next month, if failed this also then semester back… means now you'll be able to reappear for this particular subject exam in next to next semester (for 1st sem back you'll be able to give exam in 3rd sem[odd sem back odd sem exam and same for even sem])\nStep 2:- Pass this backlog exam in maximum 2 attempts else your B-TECH degree might be cancelled according to UGC Guidelines."
        }
      ]
    },
    {
      id: "campus-life-faqs",
      title: "Campus Life FAQs",
      icon: <Home className="h-6 w-6" />,
      description: "Hostel, mess, campus facilities, and daily life",
      faqs: [
        {
          question: "What are the hostel facilities available?",
          answer: "Double Sharing AC rooms in stanza hostels(males)\nSame for females but the hostels will be in campus(Pahune)"
        },
        {
          question: "What is the mess food like?",
          answer: "Refer to Mess Menu and student handbook for detailed response"
        },
        {
          question: "How are the medical facilities in gsv campus and in the first year hostel for students in case of sickness?",
          answer: "For Males, Sumandeep Hospital(A government medical college, approx 5 km from stanza, towards parul university) is nearest to them, a medical store and clinic(morning:-9-12, evening:- 3-5) is also opposite to stanza. Also while in college one can go and get medicines from a GSV doctor for free AND in case of severe sickness railway command hospital is accessible by GSV Students only after being referred by GSV doctor.\n\nFemales:- except sumandeep point rest is the same for girls, and also since college in the main city one can go to manjalpur and get treated in private clinics in case college doctor is not available."
        },
        {
          question: "What are the in-campus hostel restrictions.. like is it allowed to stay outside campus for full day-night or any sort?!",
          answer: "In GSV Campus strict 12 AM night.\nIn stanza:- refer to seniors.\nIf a student has a train/flight to catch in early morning 12:00-4:00 AM,they can show their ticket to the guard in the hostel and at the security gate."
        },
        {
          question: "Do college students hold any authority like does college elect sports general captains.. or the general secretary of college who holds authority over the things in college?",
          answer: "Yes, GSV Has its Student Council , you can reach out to him whenever needed. Especially our student cell president (vivek bhaiya-4th year(ex coordinator-Technocrats)) is very helpful in nature. The club heads and other positions are elected by the current senior most person of that particular club who is going to retire from that position (It's like passing the baton on to the next trusted teammate). Meanwhile in GSV Clubs, collaboration and collective growth is the utmost priority therefore club positions are insignificant, every club member holds his/her voice equally in constructive manner whether he is coordinator or a support member. These positions are meant to guide the juniors and take the final decisions since they are the most experienced in the club."
        },
        {
          question: "I have heard in some reviews that college only allows for a certain time inside a sports complex. Does somebody else also share that with us?!",
          answer: "It was until this 31st march which was shared with NAIR officials, Now NAIR has completely left the college and handed over all the infrastructure to GSV including that sports complex, new code of conduct for the sports facilities will be announced in the upcoming Induction/orientation program."
        },
        {
          question: "In gsv website fee structure, the hostel electricity charge is 6000/year , so does that mean we can use ac freely without considering additional electricity charges?",
          answer: "Yes, during our 1st year(2024-25) we didn't have any restrictions on AC usage. But as a responsible person, consider turning off the AC when not in use to avoid wasting electricity."
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
          answer: "Refer to gsv website and brochure for detailed list"
        },
        {
          question: "What is the average package offered to GSV graduates?",
          answer: "Refer to Freshers handbook Placements Section"
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
          question: "For off Campus placement , companies see specialization in rail as a hindrance ?",
          answer: "A Big No, specialisation in Railways or Transportation and logistics is like a minor of your B-TECH, Major is still your core Branch studies, In the current hiring scenario it's my strong resume that'll matter the projects I'll build the internships that I'll do, those things will make my resume standout and get the job."
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-background" id="faqs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            <Badge className="bg-orange-100 text-orange-800 border-orange-200">
              Updated
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Find answers to the most common questions about life at GSV, academics, and campus facilities.
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg border-2 border-blue-300"
          >
            <a 
              href="https://docs.google.com/document/d/13YuD2ca50u0O9QdQvL57jnYND2_IguF97lpmH1xK2Xo/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Freshers Handbook (More FAQs)
            </a>
          </Button>
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

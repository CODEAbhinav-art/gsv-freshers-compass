import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Home, Briefcase, ExternalLink } from "lucide-react";

export const FAQSections = () => {
  const faqSections = [
    {
      id: "academic-faqs",
      title: "Academic FAQs",
      icon: <GraduationCap className="h-5 w-5" />,
      description: "Everything about academics, exams, and studies",
      faqs: [
        { question: "How many subjects are there in the first year?", answer: "First year typically has 8-10 subjects per semester including core subjects like Mathematics, Physics, Chemistry, Basic Electrical Engineering, Engineering Drawing, and Communication Skills along with practical/lab sessions." },
        { question: "What is the attendance requirement?", answer: "Minimum 75% attendance is mandatory for each subject. Students with less than 75% attendance may not be allowed to appear for end-semester examinations. Medical leaves are considered separately with proper documentation." },
        { question: "Are the professors well qualified?", answer: "Yes they all are mostly from IITs or reputed industry veterans. Teaching skills vary — it's subjective and depends on your interest and caliber." },
        { question: "Can we change our branch after getting 9 CGPA?", answer: "Branch Change depends on: No. of vacant seats in the branch (out of 60, aviation=40) and 9+ CGPA. To achieve 9+: attend classes regularly, make proper notes (80-90% of exam comes from notes), solve PYQs, and maintain consistent 2 hours of daily study from the start." },
        { question: "What happens when someone fails an exam?", answer: "Step 1: Supplementary exam next month. If failed again, semester back (reappear in the next matching semester). Step 2: Pass within maximum 2 attempts or your B.Tech degree may be cancelled per UGC Guidelines." },
      ],
    },
    {
      id: "campus-life-faqs",
      title: "Campus Life FAQs",
      icon: <Home className="h-5 w-5" />,
      description: "Hostel, mess, campus facilities, and daily life",
      faqs: [
        { question: "What are the hostel facilities?", answer: "Double Sharing AC rooms in Stanza hostels (males). Same for females but hostels will be in campus (Pahune)." },
        { question: "What is the mess food like?", answer: "Refer to Mess Menu and student handbook for detailed response." },
        { question: "How are the medical facilities?", answer: "For males: Sumandeep Hospital (~5 km from Stanza) is nearest. A clinic is opposite Stanza (morning 9-12, evening 3-5). GSV doctor provides free medicines. Railway command hospital is accessible after referral. For females: similar except for Sumandeep, with private clinics available in Manjalpur." },
        { question: "What are the hostel restrictions?", answer: "In GSV Campus: strict 12 AM curfew. In Stanza: refer to seniors. Students with early morning trains/flights can show tickets to the guard." },
        { question: "Is AC usage free in hostels?", answer: "Yes, during 2024-25 there were no restrictions on AC usage. Please be responsible and turn off AC when not in use." },
      ],
    },
    {
      id: "internship-faqs",
      title: "Internship & Placement FAQs",
      icon: <Briefcase className="h-5 w-5" />,
      description: "Career guidance, internships, and placement information",
      faqs: [
        { question: "When do internships start?", answer: "First-year students get opportunities for summer internships after completing first year. Some voluntary internships are available throughout the year." },
        { question: "What companies visit GSV?", answer: "Refer to GSV website and brochure for the detailed list." },
        { question: "Will Airbus provide internships to aviation students?", answer: "Yes, specific semesters are yet to be declared by the college authorities." },
        { question: "Is rail specialization a hindrance for off-campus placements?", answer: "No. Rail/Transportation specialization is like a minor — your major is still your core branch. A strong resume with projects and internships is what matters." },
      ],
    },
  ];

  return (
    <section className="py-20 bg-secondary/30" id="faqs">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Find answers to the most common questions about life at GSV
          </p>
          <Button asChild>
            <a href="https://docs.google.com/document/d/13YuD2ca50u0O9QdQvL57jnYND2_IguF97lpmH1xK2Xo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> Freshers Handbook (More FAQs)
            </a>
          </Button>
        </div>

        <div className="space-y-6">
          {faqSections.map((section) => (
            <Card key={section.id} className="overflow-hidden">
              <CardHeader className="bg-secondary/50 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary">
                    {section.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                    <CardDescription className="text-sm mt-0.5">{section.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <Accordion type="single" collapsible className="w-full">
                  {section.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`${section.id}-${index}`} className="border-border/60">
                      <AccordionTrigger className="text-left text-sm hover:no-underline py-3">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
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

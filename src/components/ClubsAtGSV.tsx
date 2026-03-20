import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import garudaLogo from "@/assets/clubs/garuda-aeromodelling.png";
import technocratsLogo from "@/assets/clubs/technocrats.png";
import businessLogo from "@/assets/clubs/business-club.png";
import malhaarLogo from "@/assets/clubs/malhaar-music.png";
import nrityaLogo from "@/assets/clubs/nritya-dance.png";
import literaryLogo from "@/assets/clubs/literary-club.png";
import mediaTechLogo from "@/assets/clubs/media-tech.png";
import debateQuizLogo from "@/assets/clubs/debate-quiz.png";
import saeLogo from "@/assets/clubs/saeindia.png";
import emcLogo from "@/assets/clubs/emc.png";

const clubs = [
  {
    name: "Aeromodelling Club (Garuda)",
    logo: garudaLogo,
    objectives: [
      "Developing hands-on technical skills in aeromodelling",
      "Physical model design and fabrication",
      "Fostering teamwork and collaboration",
      "Promoting industrial safety practices",
    ],
  },
  {
    name: "TechnoCrats",
    logo: technocratsLogo,
    objectives: [
      "Programming and software development",
      "Robotics and automation projects",
      "Professional development workshops",
      "Motto: 'Innovate, Create, Elevate'",
    ],
  },
  {
    name: "Business Club (Siddhartha)",
    logo: businessLogo,
    objectives: [
      "Fostering entrepreneurship and startup culture",
      "Practical business exposure in Finance & Marketing",
      "Building industry connections and networking",
      "Organizing business case competitions",
    ],
  },
  {
    name: "Malhaar — The Music Club",
    logo: malhaarLogo,
    objectives: [
      "Providing a platform for music enthusiasts",
      "Talent cultivation across genres",
      "Cultural engagement through events like 'Agnee'",
      "Collaborative music performances and jam sessions",
    ],
  },
  {
    name: "Nritya — Dance Club",
    logo: nrityaLogo,
    objectives: [
      "Promoting dance arts from classical to western styles",
      "Encouraging artistic expression and creativity",
      "Organizing dance workshops and performances",
      "Building a vibrant dance community on campus",
    ],
  },
  {
    name: "SAEINDIA Collegiate Club",
    logo: saeLogo,
    objectives: [
      "Technical excellence in automotive engineering",
      "Participation in national events like BAJA SAE",
      "Hands-on vehicle design and fabrication",
      "Industry mentorship and skill development",
    ],
  },
  {
    name: "Event Management Club (EMC)",
    logo: emcLogo,
    objectives: [
      "Specializing in event logistics and execution",
      "Fostering leadership and organizational skills",
      "Managing flagship campus events",
      "Training in professional event coordination",
    ],
  },
  {
    name: "Literary Club",
    logo: literaryLogo,
    objectives: [
      "Fostering a reading and writing culture",
      "Enhancing communication and language skills",
      "Organizing events like 'Kahi Ankahi Kahaniyaan'",
      "Hosting poetry slams, book discussions and debates",
    ],
  },
  {
    name: "Media and Tech (M&T)",
    logo: mediaTechLogo,
    objectives: [
      "Acting as the 'face' of GSV across platforms",
      "Managing social media presence and content",
      "Photography, videography and digital storytelling",
      "Digital marketing and brand strategy",
    ],
  },
  {
    name: "Debate and Quiz Club",
    logo: debateQuizLogo,
    objectives: [
      "Enhancing oratory and public speaking skills",
      "Developing critical thinking and argumentation",
      "Broadening knowledge through competitive quizzing",
      "Hosting inter-college debate and quiz events",
    ],
  },
];

export const ClubsAtGSV = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
            Student Life: Clubs at GSV
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Explore the vibrant student community — find your passion, build skills, and make lasting connections.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <Card
              key={club.name}
              className="group bg-card border-border/60 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 overflow-hidden"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-background border border-border/40 flex items-center justify-center mb-4 group-hover:border-primary/30 transition-colors duration-300">
                  <img
                    src={club.logo}
                    alt={`${club.name} logo`}
                    className="w-20 h-20 object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                  {club.name}
                </h3>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="objectives" className="border-border/40">
                    <AccordionTrigger className="text-sm text-muted-foreground hover:text-foreground hover:no-underline py-2 justify-center gap-2">
                      View Objectives
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="text-left space-y-2 text-sm text-muted-foreground pt-1">
                        {club.objectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

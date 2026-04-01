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
import aaghazLogo from "@/assets/clubs/aaghaz-drama.png";

const clubs = [
  { name: "Aeromodelling Club", logo: garudaLogo, objectives: ["Hands-on technical skills in aeromodelling", "Physical model design and fabrication", "Fostering teamwork and collaboration", "Promoting industrial safety practices"] },
  { name: "TechnoCrats", logo: technocratsLogo, objectives: ["Programming and software development", "Robotics and automation projects", "Professional development workshops", "Motto: 'Innovate, Create, Elevate'"] },
  { name: "Business Club", logo: businessLogo, objectives: ["Fostering entrepreneurship and startup culture", "Practical business exposure in Finance & Marketing", "Building industry connections", "Organizing business case competitions"] },
  { name: "Malhaar — The Music Club", logo: malhaarLogo, objectives: ["Platform for music enthusiasts", "Talent cultivation across genres", "Cultural events like 'Agnee'", "Collaborative jam sessions"] },
  { name: "Nritya — Dance Club", logo: nrityaLogo, objectives: ["Classical to western dance styles", "Artistic expression and creativity", "Dance workshops and performances", "Vibrant dance community"] },
  { name: "SAEINDIA Collegiate Club", logo: saeLogo, objectives: ["Automotive engineering excellence", "National events like BAJA SAE", "Hands-on vehicle design", "Industry mentorship"] },
  { name: "Event Management Club", logo: emcLogo, objectives: ["Event logistics and execution", "Leadership and organizational skills", "Managing flagship campus events", "Professional event coordination"] },
  { name: "Literary Club", logo: literaryLogo, objectives: ["Reading and writing culture", "Communication and language skills", "Events like 'Kahi Ankahi Kahaniyaan'", "Poetry slams and book discussions"] },
  { name: "Media and Tech", logo: mediaTechLogo, objectives: ["GSV's digital face across platforms", "Social media and content management", "Photography and videography", "Digital marketing and brand strategy"] },
  { name: "Debate and Quiz Club", logo: debateQuizLogo, objectives: ["Oratory and public speaking", "Critical thinking development", "Competitive quizzing", "Inter-college debate events"] },
  { name: "Aaghaz — The Drama Club", logo: aaghazLogo, objectives: ["Acting, scriptwriting, and stagecraft", "Public speaking and emotional intelligence", "Bridging students from 22+ states", "Street plays and stage dramas"] },
];

export const ClubsAtGSV = () => {
  return (
    <section className="py-20" id="clubs">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Student Life: Clubs at GSV
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Find your passion, build skills, and make lasting connections
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clubs.map((club) => (
            <Card
              key={club.name}
              className="group hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              <CardContent className="p-5 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-secondary border border-border flex items-center justify-center mb-4 group-hover:border-primary/30 transition-colors">
                  <img src={club.logo} alt={`${club.name} logo`} className="w-16 h-16 object-contain" loading="lazy" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{club.name}</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="objectives" className="border-border/40">
                    <AccordionTrigger className="text-xs text-muted-foreground hover:text-foreground hover:no-underline py-2 justify-center gap-1.5">
                      View Objectives
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="text-left space-y-1.5 text-sm text-muted-foreground pt-1">
                        {club.objectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
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

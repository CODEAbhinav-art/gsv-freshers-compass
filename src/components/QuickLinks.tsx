
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MapPin } from "lucide-react";

export const QuickLinks = () => {
  const quickLinks = [
    {
      title: "Campus Life",
      description: "Clubs, events, and student activities",
      icon: Users,
      href: "#clubs",
      details: [
        "9 different clubs for all interests",
        "Weekly events by student clubs",
        "Rich campus greenery and flora",
      ],
    },
    {
      title: "Vadodara Guide",
      description: "City exploration and local amenities",
      icon: MapPin,
      href: "#faqs",
      details: [
        "Laxmi Vilas Palace — larger than Buckingham Palace",
        "Sayaji Baug — garden, zoo, museum & planetarium",
        "EME Temple — unique all-aluminum temple",
      ],
    },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="quick-links" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Quick Access
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Jump directly to the information you need most as a new student
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {quickLinks.map((link) => (
            <Card
              key={link.title}
              onClick={() => scrollTo(link.href)}
              className="cursor-pointer group hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{link.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="mb-4">{link.description}</CardDescription>
                <ul className="space-y-2">
                  {link.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

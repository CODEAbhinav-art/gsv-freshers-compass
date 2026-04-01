
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ExternalLink, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

export const BatchmatesConnect = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20" id="batchmates">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Connect with Your Batchmates
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Build connections with fellow students and create lasting friendships
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mx-auto mb-3">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">Batchmates Directory</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Connect with students from your batch early
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger asChild>
                  <Button className="w-full">
                    <Users className="h-4 w-4 mr-2" />
                    Batchmates Connect
                    <ChevronDown className={`ml-auto h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-3 space-y-2">
                    <Button size="sm" className="w-full" asChild>
                      <a href="https://docs.google.com/spreadsheets/d/1BrFwxqFIp1-ib_VUbJ-DadvquVuxIH8zWlMeBefEowg/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> View Batchmates List
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="https://forms.gle/6DDDakotWGf1aqHh9" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> Update Your Info
                      </a>
                    </Button>
                    <p className="text-xs text-muted-foreground text-center pt-1">Credits: Mandeep Nehra</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

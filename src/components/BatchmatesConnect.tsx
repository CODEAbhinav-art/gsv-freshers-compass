
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, ExternalLink, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

export const BatchmatesConnect = () => {
  const [isBatchmatesOpen, setIsBatchmatesOpen] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">
              Connect with Your Batchmates
            </h2>
            <Badge className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Build connections with your fellow students and create lasting friendships
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/30 bg-card/95 backdrop-blur-sm shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-foreground mb-4">
                GSV Batchmates Directory
              </CardTitle>
              <p className="text-muted-foreground">
                Connect with students from your batch and build your network early
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Collapsible open={isBatchmatesOpen} onOpenChange={setIsBatchmatesOpen}>
                <CollapsibleTrigger asChild>
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground border-2 border-primary/30 shadow-lg"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Batchmates Connect
                    <ChevronDown className={`ml-2 h-5 w-5 transition-transform duration-300 ${isBatchmatesOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="mt-4 space-y-3">
                    <Button 
                      variant="default"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a 
                        href="https://docs.google.com/spreadsheets/d/1BrFwxqFIp1-ib_VUbJ-DadvquVuxIH8zWlMeBefEowg/edit?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Batchmates List
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="w-full border-2 border-primary/30 bg-card hover:bg-primary/10"
                      asChild
                    >
                      <a 
                        href="https://forms.gle/6DDDakotWGf1aqHh9"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Update Your Info
                      </a>
                    </Button>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
                      <p className="text-sm text-foreground font-medium text-center">
                        <strong>Credits:</strong> Mandeep Nehra
                      </p>
                    </div>
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

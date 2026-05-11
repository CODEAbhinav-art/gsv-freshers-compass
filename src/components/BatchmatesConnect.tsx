import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Users, ExternalLink, FileText } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SHEET_ID = "1AS9VR1LUKlNAFpF6EcaM86SXOM6HXup9WOb3W9WRDYQ";
const SHEET_VIEW_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit?usp=sharing`;


const FORM_VIEW_URL = "https://forms.gle/UjwycnRMwZxU2Smt8";
const FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfN2To_btwHggPJkxPpxM9XfqqTYdcdZRkwf5LlBPCielmIEw/viewform?embedded=true";

export const BatchmatesConnect = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24" id="batchmates" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Connect with Your Batchmates
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Build connections with fellow students and create lasting friendships
          </p>
          <p className="text-sm text-primary/90 mt-3 max-w-2xl mx-auto">
            Fill out the form to be added to the directory and connect with your fellow GSV students!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mx-auto mb-3">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">Batchmates Directory</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Connect with students from your batch early
              </p>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="list" className="w-full">
                <TabsList className="grid grid-cols-2 w-full mb-4">
                  <TabsTrigger value="list">
                    <Users className="h-4 w-4 mr-2" />
                    Batchmates List
                  </TabsTrigger>
                  <TabsTrigger value="update">
                    <FileText className="h-4 w-4 mr-2" />
                    Update Your Info
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="list" className="space-y-4">
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 text-center space-y-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mx-auto">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground">Batchmates Directory</h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                      View the full list of batchmates and their contact details in our shared Google Sheet.
                    </p>
                    <Button size="lg" asChild>
                      <a href={SHEET_VIEW_URL} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Full List
                      </a>
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="update" className="space-y-3">
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 text-center space-y-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mx-auto">
                      <FileText className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground">Update Your Info</h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                      Add or update your details in the batchmates directory by filling out our Google Form.
                    </p>
                    <Button size="lg" asChild>
                      <a href={FORM_VIEW_URL} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> Open Form
                      </a>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

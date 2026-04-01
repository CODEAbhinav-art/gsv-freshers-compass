import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, ExternalLink, Play } from "lucide-react";

export const EntrepreneurSection = () => {
  return (
    <section className="py-20 bg-secondary/30" id="entrepreneur-section">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            For Aspiring Entrepreneurs
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Embark on your entrepreneurial journey with global competitions
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mx-auto mb-3">
                <Trophy className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">Hult Prize</CardTitle>
              <Badge className="mx-auto mt-2">World's Largest Student Startup Competition</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                GSV Hult Prize may happen in January-February 2026. Get ready to pitch your innovative ideas!
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.canva.com/design/DAGecT6cmmU/jRfJyfzlHi4x465iKIWFew/edit?utm_content=DAGecT6cmmU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> Hult Prize Design
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href="https://youtube.com/playlist?list=PLgQiedPDknpVGfSaYaNjJJLVOn6tqHRSA&feature=shared" target="_blank" rel="noopener noreferrer">
                    <Play className="h-3.5 w-3.5 mr-1.5" /> Pitching Tutorial
                  </a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center bg-secondary rounded-lg p-3">
                💡 <strong>Tip:</strong> Start preparing your ideas now! The competition focuses on solving world's most pressing challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, ExternalLink, Play } from "lucide-react";

export const EntrepreneurSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 to-slate-900" id="entrepreneur-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">For Aspiring Entrepreneurs</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Embark on your entrepreneurial journey with global competitions and opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-400/30 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-lg">
                  <Trophy className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl text-white mb-2">Hult Prize</CardTitle>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-400/30 text-lg px-4 py-1">
                World's Largest Student Startup Competition
              </Badge>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-slate-200 text-lg leading-relaxed">
                  GSV Hult Prize may happen in January-February 2026. Get ready to pitch your 
                  innovative ideas and compete on a global stage!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-2 border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
                  asChild
                >
                  <a 
                    href="https://www.canva.com/design/DAGecT6cmmU/jRfJyfzlHi4x465iKIWFew/edit?utm_content=DAGecT6cmmU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Hult Prize Design
                  </a>
                </Button>
                
                <Button
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg"
                  asChild
                >
                  <a 
                    href="https://youtube.com/playlist?list=PLgQiedPDknpVGfSaYaNjJJLVOn6tqHRSA&feature=shared" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Pitching Tutorial
                  </a>
                </Button>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <p className="text-slate-300 text-sm text-center">
                  💡 <strong>Tip:</strong> Start preparing your innovative ideas now! 
                  The competition focuses on solving world's most pressing challenges.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
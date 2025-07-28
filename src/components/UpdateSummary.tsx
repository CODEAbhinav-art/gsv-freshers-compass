
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, ChevronDown, Info } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

export const UpdateSummary = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const updates = [
    "Added Mechanical Engineering exam papers section with 1st and 2nd semester papers",
    "Created comprehensive 'About Me' section with team credits and mission statement",
    "Enhanced exam preparation resources with branch-specific materials",
    "Added GitHub repository link for open-source contributions",
    "Improved navigation and user experience across all sections",
    "Updated contributor credits and acknowledgments"
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-between p-4 text-left border-2 border-primary/20 hover:bg-primary/5"
            >
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-semibold text-primary">Updates Info - Version 2025.7.28</span>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  <Info className="h-3 w-3 mr-1" />
                  Major Updates
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  Next Update: August 15, 2025
                </Badge>
              </div>
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <Card className="mt-4 border-2 border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-600" />
                  New Features & Content Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {updates.map((update, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{update}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800 font-medium">
                    🎉 Major content update with new exam papers, About Me section, and enhanced user experience. Special thanks to all contributors!
                  </p>
                </div>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

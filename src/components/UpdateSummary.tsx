
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, ChevronDown, Info } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

export const UpdateSummary = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const updates = [
    "Created dedicated Mechanical Engineering exam papers page with 1st and 2nd semester papers",
    "Moved About section to a dedicated page with enhanced navigation",
    "Added direct navigation buttons for better user experience",
    "Updated GitHub repository link to the correct URL",
    "Enhanced exam papers section with better organization and credits",
    "Improved platform structure with dedicated pages for major sections"
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
                <span className="font-semibold text-primary">Updates Info - Version 2025.8.10</span>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  <Info className="h-3 w-3 mr-1" />
                  Navigation Updates
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  Next Update: August 10, 2025
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
                  Platform Structure & Navigation Updates
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
                    🎉 Major platform restructure with dedicated pages for better organization and user experience. New navigation system makes it easier to find specific resources!
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

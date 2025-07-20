
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

export const UpdateSummary = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const updates = [
    "Added 8 new beautiful images to GSV Gallery showcasing campus life, activities, and facilities",
    "Created new 'Hackathon Postings' section with links to Hack2Skill and Devfolio platforms",
    "Enhanced text visibility across all sections with improved font weights and color contrasts",
    "Updated 1st Year Exam Papers section with stronger visual emphasis and better readability",
    "Improved visibility for all card titles and descriptions throughout the application",
    "Added 'Updated' badges to modified sections for better user awareness",
    "Enhanced button styling with better font weights and hover effects",
    "Strengthened color schemes for improved accessibility and readability"
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
                <span className="font-semibold text-primary">Updates Info - Version 2025.7.20</span>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Next Update: July 25, 2025
                </Badge>
              </div>
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <Card className="mt-4 border-2 border-primary/20 shadow-lg">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {updates.map((update, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{update}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

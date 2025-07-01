
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle } from "lucide-react";

export const UpdateSummary = () => {
  const updates = [
    "Added new FAQs from June 15 - July 1, 2025",
    "Updated Branch Wise Mentors with detailed contact information",
    "Added new GSV Gallery images",
    "Created Batchmates Connect feature",
    "Updated website last modified date and ribbon",
    "Restored 'Get advantage before joining college' section",
    "Fixed Important Links section to original form"
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-2 border-primary/20 shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center gap-3 mb-2">
              <Calendar className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl font-bold text-primary">
                Update Version 2025.7.01
              </CardTitle>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200 mx-auto">
              Next Update: July 7, 2025
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {updates.map((update, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{update}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

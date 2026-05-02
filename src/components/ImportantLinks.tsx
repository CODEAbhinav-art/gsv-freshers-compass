
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, MapPin, Building2, GraduationCap, ExternalLink, ChevronDown, Briefcase, Video, Home, Code2, Trophy, Settings, DollarSign } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const ImportantLinks = () => {
  const navigate = useNavigate();
  const ref = useScrollReveal();
  const [isMessMenuOpen, setIsMessMenuOpen] = useState(false);
  const [isHackathonOpen, setIsHackathonOpen] = useState(false);
  const [isScholarshipOpen, setIsScholarshipOpen] = useState(false);

  const cardClass = "hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300";

  return (
    <section className="py-24 bg-secondary/30 dark:bg-secondary/10" id="important-links" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Important Links & Resources
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Quick access to all essential resources, portals, and information you'll need.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1st Year Exam Papers */}
          <Card className={cardClass}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-destructive/10 text-destructive">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">1st Year Exam Papers</CardTitle>
                  <Badge variant="destructive" className="mt-1 text-xs">Important</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-2.5">
              <p className="text-sm text-muted-foreground">Access previous year question papers for exam prep</p>
              <Button size="sm" className="w-full" asChild>
                <a href="https://drive.google.com/file/d/164-p3SOpgocOJUkK2zDGvE4V9IP_0vTa/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> View General Papers
                </a>
              </Button>
              <Button variant="outline" size="sm" className="w-full" onClick={() => navigate("/mechanical-engineering")}>
                <Settings className="h-3.5 w-3.5 mr-1.5" /> Mechanical Engineering
              </Button>
              <p className="text-xs text-muted-foreground text-center pt-1">Credits: Pratik Ranjan (ECE-II)</p>
            </CardContent>
          </Card>

          {/* Scholarship */}
          <Card className={cardClass}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400">
                  <DollarSign className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">Scholarship Documents</CardTitle>
                  <Badge className="mt-1 text-xs bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">Financial Aid</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-2.5">
              <p className="text-sm text-muted-foreground">Essential documents and timeline for scholarship applications</p>
              <Collapsible open={isScholarshipOpen} onOpenChange={setIsScholarshipOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                    <ChevronDown className={`ml-auto h-3.5 w-3.5 transition-transform duration-200 ${isScholarshipOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-3 space-y-3 text-sm">
                    <div className="rounded-lg border bg-secondary/50 dark:bg-secondary/20 p-3">
                      <p className="font-medium text-foreground mb-1.5">Required Documents</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Income Tax Return (FY 2026-2027) [Mandatory]</li>
                        <li>• Aay Praman Patra (Income Certificate)</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-2 p-2 bg-background rounded border">
                        <strong>Note:</strong> Even if income &lt; ₹1 Lakh, ITR is required. Reach out to a CA.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-secondary/50 dark:bg-secondary/20 p-3">
                      <p className="font-medium text-foreground mb-1.5">Timeline</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• <strong>Nov-Dec:</strong> Applications open</li>
                        <li>• <strong>January:</strong> Shortlist announced via Gmail</li>
                        <li>• <strong>Jan-Feb:</strong> Refunds to student accounts</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border bg-secondary/50 dark:bg-secondary/20 p-3">
                      <p className="font-medium text-foreground mb-1.5">Shortlisting Criteria</p>
                      <p className="text-muted-foreground">1st Year: JEE Mains Percentile. 2nd Year+: CGPA. Maintain CGPA &gt; 8 and no backlogs for eligibility.</p>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Learning Resources */}
          <Card className={cardClass}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">Pre-College Learning</CardTitle>
                  <Badge className="mt-1 text-xs">Essential</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-2.5">
              <p className="text-sm text-muted-foreground">Start your learning journey early with curated resources</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> Python, Java, C++</li>
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> Data Structures & Algorithms</li>
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> Web Development Basics</li>
              </ul>
              <Button size="sm" className="w-full" onClick={() => navigate("/learning-resources")}>
                Explore Resources <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
              </Button>
            </CardContent>
          </Card>

          {/* Hackathon */}
          <Card className={cardClass}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">Hackathon Postings</CardTitle>
                  <Badge className="mt-1 text-xs bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800">Competition</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-2.5">
              <p className="text-sm text-muted-foreground">Discover and participate in hackathons and coding competitions</p>
              <Collapsible open={isHackathonOpen} onOpenChange={setIsHackathonOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full">
                    <Code2 className="h-3.5 w-3.5 mr-1.5" /> View Platforms
                    <ChevronDown className={`ml-auto h-3.5 w-3.5 transition-transform duration-200 ${isHackathonOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-2 space-y-2">
                    <Button size="sm" className="w-full" asChild>
                      <a href="https://hack2skill.com/dashboard/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1.5" /> Hack2Skill
                      </a>
                    </Button>
                    <Button size="sm" className="w-full" asChild>
                      <a href="https://devfolio.co/discover?auth=signin" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1.5" /> Devfolio
                      </a>
                    </Button>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Exam Prep */}
          <Card className={cardClass}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Exam Preparation Guide</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-2.5">
              <p className="text-sm text-muted-foreground">Comprehensive guide for first-year exams and study strategies</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> Subject-wise tips</li>
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> Previous year questions</li>
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> Study schedule templates</li>
              </ul>
              <Button size="sm" className="w-full" onClick={() => navigate("/exam-preparation")}>
                Explore Guide <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
              </Button>
            </CardContent>
          </Card>

          {/* Mess Menu */}
          <Card className={cardClass}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <Building2 className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Mess Menu Samples</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-2.5">
              <p className="text-sm text-muted-foreground">View sample mess menus to know what to expect</p>
              <Collapsible open={isMessMenuOpen} onOpenChange={setIsMessMenuOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full">
                    View Menus
                    <ChevronDown className={`ml-auto h-3.5 w-3.5 transition-transform duration-200 ${isMessMenuOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-2 space-y-2">
                    <Button size="sm" className="w-full" asChild>
                      <a href="https://drive.google.com/file/d/1-D3T2OaSNkFwX430Rr6cEft6UncY9C3R/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1.5" /> Special Dinner Menu
                      </a>
                    </Button>
                    <Button size="sm" className="w-full" asChild>
                      <a href="https://drive.google.com/file/d/1-6c1cBVXtXk_qBjsAl7UI8Q7FpbRpaMB/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1.5" /> General Menu
                      </a>
                    </Button>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Future Campus */}
          <Card className={cardClass}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <Home className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Future GSV Campus</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-2.5">
              <p className="text-sm text-muted-foreground">Explore the future vision of GSV campus development</p>
              <Button size="sm" className="w-full" asChild>
                <a href="https://www.linkedin.com/posts/durgeshlegha_%F0%9D%90%84%F0%9D%90%AF%F0%9D%90%9E%F0%9D%90%AB-%F0%9D%90%A2%F0%9D%90%A6%F0%9D%90%9A%F0%9D%90%A0%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%9E%F0%9D%90%9D-%F0%9D%90%B0%F0%9D%90%A2%F0%9D%90%AD%F0%9D%90%A7%F0%9D%90%9E%F0%9D%90%AC%F0%9D%90%AC%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A0-ugcPost-7330174411821441024-I3pj" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> View Future Campus
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Campus Tour */}
          <Card className={cardClass}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <Video className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">GSV Campus Tour</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-2.5">
              <p className="text-sm text-muted-foreground">Take a virtual tour of the GSV campus</p>
              <Button size="sm" className="w-full" asChild>
                <a href="https://youtu.be/O9JHRjcw1kE?feature=shared" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> Watch Tour
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Jobs & Internships */}
          <Card className={cardClass}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Jobs & Internships</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-2.5">
              <p className="text-sm text-muted-foreground">Stay updated with latest job and internship opportunities</p>
              <Button size="sm" className="w-full" asChild>
                <a href="https://www.talentd.in/redirect.php?url=whatsapp-community" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> Join Community
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Hostel Location */}
          <Card className={cardClass}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Hostel (Stanza) Location</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-2.5">
              <p className="text-sm text-muted-foreground">Find the exact hostel location on maps</p>
              <Button size="sm" className="w-full" asChild>
                <a href="https://maps.app.goo.gl/hL6FYQFcRfZ91rJq6" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> View on Maps
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Calculator */}
          <Card className={cardClass}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">CGPA Calculator</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-2.5">
              <p className="text-sm text-muted-foreground">Calculate your CGPA easily with our tool</p>
              <Button size="sm" className="w-full" asChild>
                <a href="https://drive.google.com/file/d/16nGkCJvz8VUQ2ULYx-ZN5bG2Dj5Tj1YI/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> Open Calculator
                </a>
              </Button>
              <p className="text-xs text-muted-foreground text-center pt-1">Credits: Harsh Rajpurohit</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

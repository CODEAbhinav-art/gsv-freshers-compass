
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutMe } from "@/components/AboutMe";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              About GSV Freshers Compass
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn more about this platform, its creators, and our mission to help GSV students
            </p>
          </div>
        </div>
      </div>
      
      <AboutMe />
      <Footer />
    </div>
  );
};

export default About;

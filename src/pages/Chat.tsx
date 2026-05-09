import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const CHATBOT_URL =
  "https://interfaces.zapier.com/embed/chatbot/cmox7opgw002xw2l8xd9qvxtz";

const Chat = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 flex items-center justify-center section-container py-16">
        <section className="relative w-full max-w-3xl mx-auto text-center">
          {/* Glow backdrop */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          </div>

          <div className="rounded-3xl border border-border bg-card/60 backdrop-blur-sm shadow-2xl shadow-primary/10 p-10 sm:p-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Powered by AI
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Meet the{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                GSV AI Assistant
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Get instant answers about admissions, campus life, academics, and
              everything you need to know as a fresher at GSV.
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                asChild
                size="lg"
                className="text-base px-8 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-200"
              >
                <a
                  href={CHATBOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Launch GSV AI Assistant
                  <ArrowRight className="ml-1 h-5 w-5" />
                </a>
              </Button>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Opens in a new tab
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Chat;

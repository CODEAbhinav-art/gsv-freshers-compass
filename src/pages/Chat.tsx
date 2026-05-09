import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const CHATBOT_URL =
  "https://zapier.com/app/chatbots/cmox7opgw002xw2l8xd9qvxtz";

const Chat = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Gradient background — GSV blue & white */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-background to-primary/10 dark:from-primary/30 dark:via-background dark:to-primary/10" />
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <div className="h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-[120px]" />
        </div>

        <section className="section-container py-20 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Powered by AI
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Meet the{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                GSV AI Assistant
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Get instant answers about campus life, the AIDS department, and
              university clubs.
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                asChild
                size="lg"
                className="text-base px-8 h-14 rounded-full shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.03] transition-all duration-200"
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

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CHAT_URL = "https://gsv-bot-d85263.zapier.app";

const Chat = () => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 section-container py-8">
        <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">GSV Chatbot</h1>
            <p className="text-muted-foreground text-sm mt-1">
              Ask questions and get instant answers from our assistant.
            </p>
          </div>
          <Button asChild variant="outline">
            <a href={CHAT_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Open Chat in New Tab
            </a>
          </Button>
        </div>

        <div className="relative rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 overflow-hidden h-[calc(100vh-16rem)] min-h-[500px]">
          {!loaded && !failed && (
            <div className="absolute inset-0 flex items-center justify-center bg-card z-10">
              <div className="text-muted-foreground text-sm animate-pulse">
                Loading chat…
              </div>
            </div>
          )}

          {failed ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
              <p className="text-muted-foreground">
                The chat couldn't load in this view.
              </p>
              <Button asChild>
                <a href={CHAT_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Open Chat
                </a>
              </Button>
            </div>
          ) : (
            <iframe
              src={CHAT_URL}
              title="GSV Zapier Chatbot"
              className="w-full h-full border-0 block"
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
              allow="clipboard-write; microphone"
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Chat;

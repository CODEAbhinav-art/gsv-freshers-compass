import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SCRIPT_SRC =
  "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";

const Chat = () => {
  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.type = "module";
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 section-container py-8">
        <div className="mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">GSV Chatbot</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Ask questions and get instant answers from our assistant.
          </p>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 overflow-hidden p-2 sm:p-4">
          <zapier-interfaces-chatbot-embed
            is-popup="false"
            chatbot-id="d85263"
            height="650px"
            width="100%"
          ></zapier-interfaces-chatbot-embed>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Chat;

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const WhatsAppCommunity = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20" ref={ref}>
      <div className="section-container">
        <div className="relative overflow-hidden rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-background p-8 sm:p-12 shadow-lg">
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-green-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-emerald-400/15 blur-3xl" />

          <div className="relative flex flex-col items-center text-center max-w-2xl mx-auto space-y-6">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-green-500/15 text-green-600 dark:text-green-400">
              <MessageCircle className="h-7 w-7" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Connect with Your Seniors on WhatsApp 💬
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              All branches. All years. One group. Get your doubts answered,
              find your people, and never feel lost — join the official GSV
              seniors community group.
            </p>

            <div className="relative inline-flex">
              <span className="absolute inset-0 rounded-md bg-green-500/60 animate-ping opacity-40" />
              <Button
                size="lg"
                asChild
                className="relative bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-200 h-12 px-8 text-base font-semibold"
              >
                <a
                  href="https://chat.whatsapp.com/F8fahoj3YVY2hMb2q4uYbC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Join the WhatsApp Group
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              ⚠️ This is the only official GSV seniors group. Beware of fake groups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

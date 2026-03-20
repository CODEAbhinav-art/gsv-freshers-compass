
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const GsvFutureSection = () => {
  return (
    <section className="py-16 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
          GSV: Shaping the Future of Transportation
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Video */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-border">
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/Zre_mE5xjKM"
                title="GSV: Shaping the Future of Transportation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </AspectRatio>
          </div>

          {/* Text */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-primary">
              Building a Viksit Bharat
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Gati Shakti Vishwavidyalaya (GSV), India's first university dedicated to the Transportation and Logistics sectors, is shaping the workforce that will drive the nation's growth. In just three years, GSV has emerged as an innovation-led and industry-driven institution, developing future-ready professionals skilled in technology, management and policy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With strong collaboration across defence forces, leading industries and global institutions, GSV is empowering youth with experiential learning, advanced research and hands-on training. This is the story of how GSV is preparing the next generation of leaders to build a Viksit Bharat — a developed, globally connected and future-ready India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

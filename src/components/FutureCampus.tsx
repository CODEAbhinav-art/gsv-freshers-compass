import { useScrollReveal } from "@/hooks/useScrollReveal";
import img15 from "@/assets/future-campus/campus-15.jpeg.asset.json";
import img16 from "@/assets/future-campus/campus-16.jpeg.asset.json";
import img17 from "@/assets/future-campus/campus-17.jpeg.asset.json";
import img17b from "@/assets/future-campus/campus-17b.jpeg.asset.json";
import img18 from "@/assets/future-campus/campus-18.jpeg.asset.json";
import img19 from "@/assets/future-campus/campus-19.jpeg.asset.json";
import img20 from "@/assets/future-campus/campus-20.jpeg.asset.json";
import img21 from "@/assets/future-campus/campus-21.jpeg.asset.json";
import img22 from "@/assets/future-campus/campus-22.jpeg.asset.json";
import img23 from "@/assets/future-campus/campus-23.jpeg.asset.json";

// Swap captions / images freely. Each item maps to one tile in the masonry grid.
const tiles: { src: string; caption: string; span: string }[] = [
  { src: img17b.url, caption: "Main Academic Block", span: "md:col-span-2 md:row-span-2" },
  { src: img15.url, caption: "Faculty & Research Wing", span: "" },
  { src: img18.url, caption: "Heritage Façade Detail", span: "" },
  { src: img17.url, caption: "Central Plaza & Selfie Point", span: "md:col-span-2" },
  { src: img16.url, caption: "Innovation Hub (Ground Floor)", span: "" },
  { src: img23.url, caption: "1000-Seater Auditorium", span: "" },
  { src: img22.url, caption: "Lecture Theatres", span: "md:col-span-2" },
  { src: img21.url, caption: "Reading Rooms & Library", span: "" },
  { src: img20.url, caption: "Common Rooms & Lounges", span: "" },
  { src: img19.url, caption: "Sports & Recreation Block", span: "md:col-span-2" },
];

export const FutureCampus = () => {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 600px at 20% 0%, hsl(220 70% 18%) 0%, transparent 60%), radial-gradient(900px 500px at 90% 100%, hsl(215 80% 22%) 0%, transparent 55%), linear-gradient(180deg, #060a1a 0%, #0a1228 100%)",
      }}
    >
      {/* Animated glow blobs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full opacity-30 blur-3xl animate-pulse"
        style={{ background: "radial-gradient(circle, hsl(210 100% 55%) 0%, transparent 70%)", animationDuration: "8s" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-32 w-[520px] h-[520px] rounded-full opacity-25 blur-3xl animate-pulse"
        style={{ background: "radial-gradient(circle, hsl(190 90% 60%) 0%, transparent 70%)", animationDuration: "10s" }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative section-container">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-widest text-white/70 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Coming soon · Vadodara, Gujarat
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Our Future Home <span className="inline-block">🏛️</span>
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Gati Shakti Vishwavidyalaya is building a world-class campus in Vadodara, Gujarat —
            and this is what awaits you.
          </p>
        </div>

        {/* Quote banner */}
        <figure className="max-w-4xl mx-auto mb-14">
          <blockquote className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-8 py-8 sm:px-12 sm:py-10">
            <span className="absolute -top-5 left-6 text-6xl leading-none text-blue-300/60 font-serif select-none">“</span>
            <p className="italic text-xl sm:text-2xl text-white/90 leading-relaxed font-serif">
              Every great university began with a dream and a foundation stone.
              Ours is being laid right now — and you're part of it from day one.
            </p>
          </blockquote>
        </figure>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 sm:gap-4">
          {tiles.map((t, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-xl ${t.span}`}
            >
              <img
                src={t.src}
                alt={t.caption}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-sm sm:text-base font-semibold drop-shadow">
                  {t.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent leading-tight">
            You're not just joining a university.
            <br className="hidden sm:block" />
            <span className="text-white"> You're helping build one. 🚀</span>
          </p>
        </div>
      </div>
    </section>
  );
};

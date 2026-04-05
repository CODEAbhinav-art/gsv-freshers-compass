
import { CosmicBackground } from "./CosmicBackground";

export const AnimatedBackground = () => {
  return (
    <>
      {/* CSS nebula glow zones */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none motion-reduce:!animate-none motion-reduce:[&_*]:!animate-none">
        <div className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vh] rounded-full blur-[120px] opacity-[0.07] dark:opacity-[0.12] bg-[hsl(240,60%,45%)] animate-cosmic-drift" />
        <div className="absolute top-1/2 -right-1/4 w-[50vw] h-[50vh] rounded-full blur-[100px] opacity-[0.05] dark:opacity-[0.10] bg-[hsl(270,50%,40%)] animate-cosmic-drift-reverse" />
        <div className="absolute -bottom-1/4 left-1/3 w-[40vw] h-[40vh] rounded-full blur-[90px] opacity-[0.04] dark:opacity-[0.08] bg-[hsl(220,70%,50%)] animate-cosmic-drift animation-delay-4000" />
      </div>

      {/* 3D starfield */}
      <CosmicBackground />
    </>
  );
};

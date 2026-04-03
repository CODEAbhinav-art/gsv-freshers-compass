
export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/[0.03] dark:bg-primary/[0.06] rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-primary/[0.04] dark:bg-primary/[0.05] rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-40 left-1/3 w-72 h-72 bg-primary/[0.03] dark:bg-primary/[0.04] rounded-full blur-3xl animate-blob animation-delay-4000" />
    </div>
  );
};

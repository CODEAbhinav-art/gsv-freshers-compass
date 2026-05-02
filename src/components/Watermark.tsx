
import { Heart } from "lucide-react";

export const Watermark = () => {
  return (
    <div className="bg-secondary/30 dark:bg-secondary/10 py-4 border-t">
      <div className="section-container">
        <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
          Made with <Heart className="h-3 w-3 text-destructive fill-current" /> and
          <span className="font-medium text-primary">Lovable</span> for
          <span className="font-medium">Freshers of 2026</span> by
          <span className="font-semibold text-foreground">GSV Seniors</span>
        </p>
      </div>
    </div>
  );
};

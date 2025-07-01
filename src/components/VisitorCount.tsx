
import { useVisitorCount } from '@/hooks/useVisitorCount';
import { Users, TrendingUp } from 'lucide-react';

export const VisitorCount = () => {
  const { visitorCount, loading } = useVisitorCount();

  return (
    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
      <div className="flex items-center space-x-1">
        <Users className="h-4 w-4" />
        <span>Total Visitors:</span>
      </div>
      <div className="flex items-center space-x-1 font-semibold text-primary">
        {loading ? (
          <div className="animate-pulse bg-muted rounded w-8 h-4"></div>
        ) : (
          <>
            <TrendingUp className="h-3 w-3" />
            <span>{visitorCount.toLocaleString()}</span>
          </>
        )}
      </div>
    </div>
  );
};

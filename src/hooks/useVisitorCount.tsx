import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useVisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const trackVisit = async () => {
      try {
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (!hasVisited) {
          await supabase.from('website_visits').insert({
            user_agent: navigator.userAgent,
          });
          sessionStorage.setItem('hasVisited', 'true');
        }
      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };

    const fetchCount = async () => {
      try {
        const { data, error } = await supabase
          .from('site_stats')
          .select('visitor_count')
          .eq('id', 1)
          .maybeSingle();
        if (error) {
          console.error('Error getting visitor count:', error);
          setVisitorCount(0);
        } else {
          setVisitorCount(Number(data?.visitor_count ?? 0));
        }
      } catch (error) {
        console.error('Error getting visitor count:', error);
        setVisitorCount(0);
      } finally {
        setLoading(false);
      }
    };

    trackVisit();
    fetchCount();

    const channel = supabase
      .channel('site-stats-updates')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'site_stats' },
        (payload: any) => {
          const next = payload?.new?.visitor_count;
          if (typeof next === 'number' || typeof next === 'bigint') {
            setVisitorCount(Number(next));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { visitorCount, loading };
};


import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useVisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Track the current visit
    const trackVisit = async () => {
      try {
        await supabase.from('website_visits').insert({
          user_agent: navigator.userAgent,
        });
      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };

    // Get initial visitor count
    const getVisitorCount = async () => {
      try {
        const { data, error } = await supabase.rpc('get_visitor_count');
        if (error) throw error;
        setVisitorCount(data || 0);
        setLoading(false);
      } catch (error) {
        console.error('Error getting visitor count:', error);
        setLoading(false);
      }
    };

    // Track this visit and get initial count
    trackVisit();
    getVisitorCount();

    // Set up real-time subscription for new visits
    const channel = supabase
      .channel('visitor-tracking')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'website_visits'
        },
        async () => {
          // When a new visit is recorded, update the count
          const { data, error } = await supabase.rpc('get_visitor_count');
          if (!error && data !== null) {
            setVisitorCount(data);
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

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * AnalyticsTracker component for React Single Page Applications (SPAs).
 * Listens for route changes and notifies GoatCounter of each pageview.
 */
export default function AnalyticsTracker() {
  const location = useLocation();
  const retryTimerRef = useRef(null);

  useEffect(() => {
    const fullPath = location.pathname + location.search + location.hash;

    const trackPageview = () => {
      if (typeof window !== 'undefined' && window.goatcounter && typeof window.goatcounter.count === 'function') {
        window.goatcounter.count({ path: fullPath });
        return true;
      }
      return false;
    };

    // If GoatCounter is already loaded, track immediately
    if (!trackPageview()) {
      // If the script is still downloading async, retry every 100ms for up to 5s
      let elapsed = 0;
      if (retryTimerRef.current) {
        clearInterval(retryTimerRef.current);
      }
      retryTimerRef.current = setInterval(() => {
        elapsed += 100;
        if (trackPageview() || elapsed >= 5000) {
          clearInterval(retryTimerRef.current);
          retryTimerRef.current = null;
        }
      }, 100);
    }

    return () => {
      if (retryTimerRef.current) {
        clearInterval(retryTimerRef.current);
      }
    };
  }, [location]);

  return null;
}

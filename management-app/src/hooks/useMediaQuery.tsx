import { useEffect, useState } from 'react';

export default function useMediaQuery(query: string): boolean|undefined {
  const [matches, setMatches] = useState<boolean|undefined>(undefined);
  useEffect(
    () => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
      const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
      if(mediaQuery.addEventListener !== undefined) {
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
      }
    },
    [query]
  );
  return matches;
}
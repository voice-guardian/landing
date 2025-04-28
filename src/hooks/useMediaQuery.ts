import { useState, useEffect } from 'react';

/**
 * Custom hook that returns whether the current viewport matches a media query
 * @param query The media query to check against
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Create a media query list
    const media = window.matchMedia(query);
    
    // Set the initial value
    setMatches(media.matches);

    // Define listener function
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add the listener
    media.addEventListener('change', listener);

    // Clean up
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}

/**
 * Custom hook that returns whether the current viewport is mobile size
 * @returns Boolean indicating if the screen is mobile size
 */
export function useMobile(): boolean {
  return useMediaQuery('(max-width: 767px)');
}

/**
 * Custom hook that returns whether the current viewport is tablet size or larger
 * @returns Boolean indicating if the screen is tablet size or larger
 */
export function useTabletAndUp(): boolean {
  return useMediaQuery('(min-width: 768px)');
} 
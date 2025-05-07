import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import SpotifyWebApi from "spotify-web-api-js";
import SearchResults from "./SearchResults";
import posthog from 'posthog-js';

// Initialize Spotify API
const spotifyApi = new SpotifyWebApi();

// Simplified interface that matches the structure we need
interface SpotifySearchResults {
  artists?: {
    items: any[];
  };
  tracks?: {
    items: any[];
  };
}

interface SearchBarProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  onFindUses: (artistId?: string) => void;
  isVisible: boolean;
}

const SearchBar = ({ searchTerm, onSearchTermChange, onFindUses, isVisible }: SearchBarProps) => {
  const [searchResults, setSearchResults] = useState<SpotifySearchResults | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedArtistId, setSelectedArtistId] = useState<string | undefined>(undefined);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to fetch token
    const fetchToken = async () => {
      try {
        const clientId = import.meta.env.VITE_SPOTIFY_ID;
        const clientSecret = import.meta.env.VITE_SPOTIFY_SECRET;
        
        if (!clientId || !clientSecret) {
          console.error("Spotify credentials are missing");
          return;
        }
        
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
          },
          body: 'grant_type=client_credentials'
        });
        
        const data = await response.json();
        if (data.access_token) {
          spotifyApi.setAccessToken(data.access_token);
        }
      } catch (error) {
        console.error("Failed to fetch Spotify token:", error);
      }
    };
    
    fetchToken();

    // Add event listener to close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  // Handle input change with debounce
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    onSearchTermChange(query);
    setSelectedArtistId(undefined);
    
    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (query.length < 3) {
      setSearchResults(null);
      setShowDropdown(false);
      return;
    }

    // Set new timeout (debounce for 500ms)
    searchTimeoutRef.current = setTimeout(() => {
      searchArtists(query);
    }, 500);
  };

  // Function to call Spotify API directly
  const searchArtists = async (query: string) => {
    if (query.length < 3) return;
    
    // PostHog analytics event
    posthog.capture('spotify_search', { query });

    setIsLoading(true);
    try {
      // Search for both artists and tracks
      const results = await spotifyApi.search(query, ['artist', 'track'], { limit: 5 });
      
      setSearchResults(results as SpotifySearchResults);
      setShowDropdown(true);
    } catch (error) {
      console.error("Error searching Spotify:", error);
      setSearchResults(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle artist selection
  const handleSelectItem = (name: string, itemId: string, isArtist: boolean) => {
    onSearchTermChange(name);
    if (isArtist) {
      setSelectedArtistId(itemId);
    } else {
      setSelectedArtistId(undefined);
    }
    setShowDropdown(false);
  };

  // Handle find uses button click
  const handleFindUses = () => {
    onFindUses(selectedArtistId);
  };

  return (
    <div className="relative w-full z-[1000]">
      <input
        ref={searchInputRef}
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full h-14 rounded-full bg-gray-800/50 border-none text-white px-8 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-xs xs:placeholder:text-sm md:placeholder:text-base placeholder:text-gray-400"
        placeholder="Search artist or song..."
      />
      
      {isLoading && (
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2">
          <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
        </div>
      )}
      
      <Button 
        variant="outline"
        onClick={handleFindUses}
        className={`absolute right-0 top-0 h-14 rounded-r-full rounded-l-none px-3 sm:px-4 md:px-8 bg-white text-black hover:bg-gray-100 border-none font-medium text-xs sm:text-sm md:text-base transition-all duration-500 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "900ms" }}
      >
        <span className="hidden sm:inline">Go</span>
        <span className="sm:hidden">Find</span>
      </Button>
      
      {/* Search Results Dropdown */}
      {showDropdown && searchResults && (
        <div className="absolute w-full left-0 top-full z-[1010]">
          <SearchResults
            ref={dropdownRef}
            searchTerm={searchTerm}
            searchResults={searchResults}
            onSelectItem={handleSelectItem}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar; 
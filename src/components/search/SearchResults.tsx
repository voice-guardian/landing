import React, { forwardRef } from "react";

interface SearchResultsProps {
  searchTerm: string;
  searchResults: {
    artists?: {
      items: any[];
    };
    tracks?: {
      items: any[];
    };
  };
  onSelectItem: (name: string, id: string, isArtist: boolean) => void;
}

const SearchResults = forwardRef<HTMLDivElement, SearchResultsProps>(
  ({ searchTerm, searchResults, onSelectItem }, ref) => {
    return (
      <div 
        ref={ref}
        className="mt-2 bg-[#1a1a1a] rounded-xl overflow-hidden shadow-xl border border-gray-800 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
      >
        {/* Artists Section */}
        {searchResults.artists && searchResults.artists.items.length > 0 && (
          <div>
            <div className="px-4 py-2 text-xs text-gray-400 border-b border-gray-800 sticky top-0 bg-[#1a1a1a]">
              Artists
            </div>
            {searchResults.artists.items.map((artist) => (
              <div 
                key={artist.id}
                className="flex items-center p-3 hover:bg-[#282828] cursor-pointer transition-colors duration-200"
                onClick={() => onSelectItem(artist.name, artist.id, true)}
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden bg-gray-700">
                  {artist.images && artist.images.length > 0 ? (
                    <img 
                      src={artist.images[0].url} 
                      alt={artist.name} 
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gray-800 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-white text-sm">{artist.name}</p>
                  <p className="text-gray-400 text-xs">Artist</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Tracks Section */}
        {searchResults.tracks && searchResults.tracks.items.length > 0 && (
          <div>
            <div className="px-4 py-2 text-xs text-gray-400 border-b border-gray-800 sticky top-0 bg-[#1a1a1a]">
              Songs
            </div>
            {searchResults.tracks.items.map((track) => (
              <div 
                key={track.id}
                className="flex items-center p-3 hover:bg-[#282828] cursor-pointer transition-colors duration-200"
                onClick={() => onSelectItem(track.name, track.id, false)}
              >
                <div className="flex-shrink-0 h-10 w-10 rounded overflow-hidden bg-gray-700">
                  {track.album.images && track.album.images.length > 0 ? (
                    <img 
                      src={track.album.images[0].url} 
                      alt={track.name} 
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gray-800 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-white text-sm">{track.name}</p>
                  <p className="text-gray-400 text-xs">
                    {track.artists.map(a => a.name).join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* No Results */}
        {(!searchResults.artists?.items.length && !searchResults.tracks?.items.length) && (
          <div className="p-4 text-center text-gray-400">
            No results found for "{searchTerm}"
          </div>
        )}
      </div>
    );
  }
);

SearchResults.displayName = "SearchResults";

export default SearchResults; 
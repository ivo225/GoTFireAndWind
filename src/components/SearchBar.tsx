import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { locations } from "@/data/locations";
import { houses } from "@/data/houses";
import { characters } from "@/data/characters";

interface SearchResult {
  id: string;
  name: string;
  type: string;
  description: string;
  route: string;
  category: 'location' | 'house' | 'character';
}

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Format all data for search
  const searchData: SearchResult[] = [
    ...locations.map(loc => ({
      id: loc.id,
      name: loc.name,
      type: loc.type,
      description: loc.description,
      route: `/locations/${loc.id}`,
      category: 'location' as const
    })),
    ...houses.map(house => ({
      id: house.id,
      name: house.name,
      type: house.type,
      description: house.description,
      route: `/houses/${house.id}`,
      category: 'house' as const
    })),
    ...characters.map(char => ({
      id: char.id,
      name: char.name,
      type: `House ${char.house}`,
      description: char.description,
      route: `/characters/${char.id}`,
      category: 'character' as const
    }))
  ];

  const filteredResults = searchQuery
    ? searchData.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSelect = (result: SearchResult) => {
    setSearchQuery("");
    setShowResults(false);
    navigate(result.route);
  };

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="max-w-lg mx-auto relative" ref={searchRef}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setShowResults(true);
        }}
        onFocus={() => setShowResults(true)}
        placeholder="Search locations, houses, or characters..."
        className="w-full px-6 py-4 rounded-full border-2 border-stone/20 focus:border-primary focus:outline-none shadow-sm text-lg"
      />
      <Search 
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-stone/50" 
      />

      {/* Search Results Dropdown */}
      {showResults && searchQuery && (
        <div className="absolute top-full left-0 right-0 mt-2 max-h-96 overflow-y-auto bg-white rounded-lg shadow-lg border border-stone/10 z-50">
          {filteredResults.length === 0 ? (
            <div className="p-4 text-sm text-muted-foreground">No results found.</div>
          ) : (
            <div className="py-2">
              {filteredResults.map(result => (
                <button
                  key={result.id}
                  onClick={() => handleSelect(result)}
                  className="w-full px-4 py-3 hover:bg-muted/50 transition-colors text-left flex flex-col gap-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl mr-1">
                      {result.category === 'location' ? '🗺️' :
                       result.category === 'house' ? '⚔️' : '👤'}
                    </span>
                    <span className="font-medium">{result.name}</span>
                    <span className="text-xs text-muted-foreground capitalize px-2 py-0.5 bg-muted rounded-full">
                      {result.type}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground line-clamp-2">{result.description}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

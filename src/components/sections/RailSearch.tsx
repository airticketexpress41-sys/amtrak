"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, Train, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface RouteAgency {
  agency_name: string;
  agency_id: string;
}

interface Route {
  route_id: string;
  route_short_name: string;
  route_long_name: string;
  route_type: number;
  route_color: string;
  route_text_color: string;
  route_desc: string;
  route_url: string;
  onestop_id: string;
  agency: RouteAgency;
}

interface RailResponse {
  routes: Route[];
  meta?: {
    after?: number;
    next?: string;
  };
}

interface StopSuggestion {
  stop_name: string;
  onestop_id: string;
  place?: {
    adm0_name?: string;
    adm1_name?: string;
  };
  feed_version?: {
    feed?: {
      onestop_id?: string;
    };
  };
}

interface StopsResponse {
  stops: StopSuggestion[];
}

const ROUTE_TYPE_LABELS: Record<number, string> = {
  2: "Rail",
  100: "Railway Service",
  101: "High Speed Rail",
  102: "Long Distance",
  103: "Inter Regional Rail",
  106: "Regional Rail",
  109: "Suburban Railway",
};

function getRouteTypeLabel(type: number): string {
  return ROUTE_TYPE_LABELS[type] || `Type ${type}`;
}

function RouteCard({ route }: { route: Route }) {
  const color = route.route_color ? `#${route.route_color}` : "#167FA6";
  const textColor = route.route_text_color ? `#${route.route_text_color}` : "#FFFFFF";

  return (
    <div className="bg-white rounded-xl shadow-md border border-amtrak-border overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-4 lg:p-6">
        <div className="flex items-center gap-4 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: color, color: textColor }}
          >
            <Train className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              {route.route_short_name && (
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded"
                  style={{ backgroundColor: color, color: textColor }}
                >
                  {route.route_short_name}
                </span>
              )}
              <h3 className="text-base font-semibold text-amtrak-dark truncate">
                {route.route_long_name || route.route_short_name || "Unnamed Route"}
              </h3>
            </div>
            <p className="text-xs text-amtrak-gray mt-1">{route.agency?.agency_name || "Unknown Agency"}</p>
          </div>
          <span className="text-xs font-medium text-amtrak-gray bg-amtrak-light px-2 py-1 rounded">
            {getRouteTypeLabel(route.route_type)}
          </span>
        </div>

        {route.route_desc && (
          <p className="text-sm text-amtrak-gray mb-3 line-clamp-2">{route.route_desc}</p>
        )}

        <div className="flex items-center gap-4 text-xs text-amtrak-gray">
          <span className="truncate max-w-[200px]" title={route.onestop_id}>
            ID: {route.onestop_id}
          </span>
          {route.route_url && (
            <a
              href={route.route_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amtrak-primary hover:underline ml-auto"
            >
              More Info
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function RailSearch() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<RailResponse | null>(null);
  const [allRoutes, setAllRoutes] = useState<Route[]>([]);
  const [suggestions, setSuggestions] = useState<StopSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedStop, setSelectedStop] = useState<StopSuggestion | null>(null);
  const [currentFeedId, setCurrentFeedId] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const fetchRoutes = async (searchQuery: string, append = false) => {
    if (append) {
      setLoadingMore(true);
    } else {
      setLoading(true);
      setAllRoutes([]);
      setCurrentFeedId(null);
    }
    setError(null);

    const queryParam = searchQuery.trim();

    try {
      const params = new URLSearchParams();
      if (queryParam) params.set("search", queryParam);
      params.set("limit", "50");
      if (append && results?.meta?.after) {
        params.set("after", String(results.meta.after));
      }

      const res = await fetch(`/api/rail?${params.toString()}`);

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to fetch rail routes");
        return;
      }

      const data: RailResponse = await res.json();
      if (append) {
        setAllRoutes((prev) => [...prev, ...data.routes]);
      } else {
        setAllRoutes(data.routes);
      }
      setResults(data);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const fetchSuggestions = async (value: string) => {
    if (value.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setLoadingSuggestions(true);
    try {
      const res = await fetch(`/api/rail?type=stops&search=${encodeURIComponent(value.trim())}&limit=8`);
      if (!res.ok) return;
      const data: StopsResponse = await res.json();
      const seen = new Set<string>();
      const unique = data.stops.filter((s) => {
        const key = s.stop_name.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      setSuggestions(unique);
      setShowSuggestions(unique.length > 0);
    } catch {
      setSuggestions([]);
    } finally {
      setLoadingSuggestions(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedStop(null);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestions(value), 300);
  };

  const deriveSearchQuery = (stop: StopSuggestion): string => {
    const name = stop.stop_name;
    const parts = name.split(/[,;-]+/).map((s) => s.trim()).filter(Boolean);

    if (parts.length >= 2) {
      const locationPart = parts.slice(1).join(" ").replace(/\s+/g, " ").trim();
      const cityMatch = locationPart.match(/\b([A-Za-z\s]+?)\s+[A-Z]{2}\b/);
      if (cityMatch) return cityMatch[1].trim();
      const first = locationPart.split(/[\s,]+/)[0];
      if (first && first.length > 1) return first;
    }

    const stopWords = ["station", "union", "marc", "amtrak", "stop", "st", "ave", "rd", "blvd", "ln", "ct", "dr", "pl", "wb", "eb", "nb", "sb", "outbound", "inbound"];
    const words = name.split(/[\s,.-]+/).filter((w) => w.length > 1);
    const meaningful = words.filter((w) => !stopWords.includes(w.toLowerCase()));
    return meaningful.slice(0, 3).join(" ") || name;
  };

  const fetchRoutesByFeed = async (feedOnestopId: string, append = false) => {
    if (append) { setLoadingMore(true); } else { setLoading(true); setAllRoutes([]); }
    setError(null);
    setCurrentFeedId(feedOnestopId);
    try {
      const params = new URLSearchParams({ feed_onestop_id: feedOnestopId, limit: "50" });
      if (append && results?.meta?.after) params.set("after", String(results.meta.after));
      const res = await fetch(`/api/rail?${params.toString()}`);
      if (!res.ok) { setError("Failed to fetch routes for this station"); setLoading(false); setLoadingMore(false); return; }
      const data: RailResponse = await res.json();
      if (append) { setAllRoutes((prev) => [...prev, ...data.routes]); } else { setAllRoutes(data.routes); }
      setResults(data);
    } catch { setError("Network error"); }
    finally { setLoading(false); setLoadingMore(false); }
  };

  const selectSuggestion = (stop: StopSuggestion) => {
    setQuery(stop.stop_name);
    setSelectedStop(stop);
    setShowSuggestions(false);
    setSuggestions([]);
    const feedId = stop.feed_version?.feed?.onestop_id;
    if (feedId) {
      fetchRoutesByFeed(feedId);
    } else {
      fetchRoutes(deriveSearchQuery(stop));
    }
  };

  useEffect(() => {
    fetchRoutes("Amtrak");
    setQuery("Amtrak");
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
          inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedStop) {
      const feedId = selectedStop.feed_version?.feed?.onestop_id;
      if (feedId) {
        fetchRoutesByFeed(feedId);
      } else {
        fetchRoutes(deriveSearchQuery(selectedStop));
      }
    } else {
      fetchRoutes(query);
    }
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setQuery("");
    setSelectedStop(null);
    setCurrentFeedId(null);
    setSuggestions([]);
    setShowSuggestions(false);
    fetchRoutes("");
  };

  const routes = allRoutes;

  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-light text-amtrak-dark mb-2">
              Rail Route Explorer
            </h1>
            <p className="text-amtrak-gray">
              Search for rail routes across North America using TransitLand data
            </p>
          </div>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8 relative">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amtrak-gray" />
                <Input
                  ref={inputRef}
                  placeholder="Search rail routes (e.g., Amtrak, Caltrain, Metrolink)..."
                  value={query}
                  onChange={handleInputChange}
                  onFocus={() => { if (suggestions.length > 0) setShowSuggestions(true); }}
                  className="w-full pl-10 pr-10 h-12 border-amtrak-border focus:border-amtrak-primary"
                />
                {query && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-amtrak-gray hover:text-amtrak-dark"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <Button
                type="submit"
                className="h-12 px-6 bg-amtrak-primary hover:bg-amtrak-blue text-white font-bold tracking-wider"
                disabled={loading}
              >
                {loading ? "Searching..." : "Search"}
              </Button>
            </div>

            {showSuggestions && (
              <div
                ref={dropdownRef}
                className="absolute left-0 right-[130px] top-full mt-1 bg-white border border-amtrak-border rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto"
              >
                {loadingSuggestions && (
                  <div className="p-4 text-center text-sm text-amtrak-gray">
                    Loading suggestions...
                  </div>
                )}
                {!loadingSuggestions && suggestions.map((stop) => {
                  const location = [stop.place?.adm1_name, stop.place?.adm0_name]
                    .filter(Boolean)
                    .join(", ");
                  return (
                    <button
                      key={stop.onestop_id}
                      type="button"
                      onClick={() => selectSuggestion(stop)}
                      className="w-full text-left px-4 py-3 hover:bg-amtrak-light transition-colors border-b border-amtrak-border last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-amtrak-primary flex-shrink-0" />
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-amtrak-dark truncate">
                            {stop.stop_name}
                          </div>
                          {location && (
                            <div className="text-xs text-amtrak-gray truncate">
                              {location}
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </form>

          {loading && (
            <div className="flex justify-center py-12">
              <div className="w-8 h-8 border-4 border-amtrak-border border-t-amtrak-primary rounded-full animate-spin" />
            </div>
          )}

          {error && (
            <div className="max-w-2xl mx-auto mb-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
                {error}
              </div>
            </div>
          )}

          {!loading && !error && results && routes.length === 0 && (
            <div className="bg-amtrak-light rounded-xl p-8 text-center max-w-2xl mx-auto">
              <MapPin className="w-12 h-12 text-amtrak-gray mx-auto mb-3" />
              <p className="text-amtrak-gray text-lg">
                {query
                  ? `No rail routes found for "${query}". Try a different search term.`
                  : "No rail routes found. Try a search to get started."}
              </p>
            </div>
          )}

          {routes.length > 0 && (
            <>
              <div className="text-sm text-amtrak-gray mb-4">
                Found {routes.length} rail route{routes.length !== 1 ? "s" : ""}
                {query && <> for &ldquo;{query}&rdquo;</>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {routes.map((route, i) => (
                  <RouteCard key={route.onestop_id || route.route_id || i} route={route} />
                ))}
              </div>
              {results?.meta?.after && (
                <div className="flex justify-center mt-8">
                  <Button
                    onClick={() => {
                      if (currentFeedId) {
                        fetchRoutesByFeed(currentFeedId, true);
                      } else {
                        fetchRoutes(query, true);
                      }
                    }}
                    disabled={loadingMore}
                    className="px-8 h-12 bg-amtrak-primary hover:bg-amtrak-blue text-white font-bold tracking-wider"
                  >
                    {loadingMore ? "Loading..." : "Load More Routes"}
                  </Button>
                </div>
              )}
            </>
          )}

          {!loading && !error && !results && (
            <div className="text-center py-12">
              <Train className="w-16 h-16 text-amtrak-gray mx-auto mb-4 opacity-50" />
              <p className="text-amtrak-gray text-lg">
                Enter a search term above to find rail routes
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

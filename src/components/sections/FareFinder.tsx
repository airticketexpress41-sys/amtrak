"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type TripType = "one-way" | "round-trip" | "rail-passes";

interface StopSuggestion {
  onestop_id: string;
  stop_name: string;
  stop_id: string;
  stop_code: string | null;
  feed_onestop_id: string;
  place: { adm0_name: string; adm1_name: string } | null;
}

export default function FareFinder() {
  const router = useRouter();
  const [tripType, setTripType] = useState<TripType>("round-trip");
  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [fromSuggestions, setFromSuggestions] = useState<StopSuggestion[]>([]);
  const [toSuggestions, setToSuggestions] = useState<StopSuggestion[]>([]);
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  const [selectedFromStop, setSelectedFromStop] = useState<StopSuggestion | null>(null);
  const [selectedToStop, setSelectedToStop] = useState<StopSuggestion | null>(null);
  const [loadingFromSugg, setLoadingFromSugg] = useState(false);
  const [loadingToSugg, setLoadingToSugg] = useState(false);

  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);
  const debounceFromRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const debounceToRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const fetchSuggestions = async (query: string, field: "from" | "to") => {
    if (!query || query.length < 2) {
      if (field === "from") setFromSuggestions([]);
      else setToSuggestions([]);
      return;
    }
    if (field === "from") setLoadingFromSugg(true);
    else setLoadingToSugg(true);
    try {
      const res = await fetch(`/api/rail?type=stops&search=${encodeURIComponent(query)}&limit=8`);
      if (res.ok) {
        const data = await res.json();
        const suggs: StopSuggestion[] = (data.stops || []).map((s: { onestop_id: string; stop_name: string; stop_id: string; stop_code: string | null; feed_version?: { feed?: { onestop_id: string } }; place: { adm0_name: string; adm1_name: string } | null }) => ({
          onestop_id: s.onestop_id,
          stop_name: s.stop_name,
          stop_id: s.stop_id,
          stop_code: s.stop_code,
          feed_onestop_id: s.feed_version?.feed?.onestop_id || "",
          place: s.place || null,
        }));
        if (field === "from") setFromSuggestions(suggs);
        else setToSuggestions(suggs);
      }
    } catch { /* ignore */ }
    finally {
      if (field === "from") setLoadingFromSugg(false);
      else setLoadingToSugg(false);
    }
  };

  const handleFromChange = (value: string) => {
    setFromQuery(value);
    setSelectedFromStop(null);
    setShowFromSuggestions(true);
    clearTimeout(debounceFromRef.current);
    debounceFromRef.current = setTimeout(() => fetchSuggestions(value, "from"), 250);
  };

  const handleToChange = (value: string) => {
    setToQuery(value);
    setSelectedToStop(null);
    setShowToSuggestions(true);
    clearTimeout(debounceToRef.current);
    debounceToRef.current = setTimeout(() => fetchSuggestions(value, "to"), 250);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (fromRef.current && !fromRef.current.contains(e.target as Node)) setShowFromSuggestions(false);
      if (toRef.current && !toRef.current.contains(e.target as Node)) setShowToSuggestions(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fromText = selectedFromStop ? formatStopLabel(selectedFromStop) : fromQuery;
    const toText = selectedToStop ? formatStopLabel(selectedToStop) : toQuery;
    if (!fromText.trim() || !toText.trim()) return;

    const params = new URLSearchParams();
    params.set("from", fromText);
    params.set("to", toText);
    params.set("date", departDate);

    router.push(`/search?${params.toString()}`);
  };

  const swapStations = () => {
    setFromQuery(toQuery);
    setToQuery(fromQuery);
    setSelectedFromStop(selectedToStop);
    setSelectedToStop(selectedFromStop);
  };

  const formatStopLabel = (s: StopSuggestion): string => {
    const parts = [s.stop_name];
    if (s.stop_code) parts.push(`(${s.stop_code})`);
    if (s.place?.adm1_name) parts.push(s.place.adm1_name);
    return parts.join(" - ");
  };

  return (
    <section className="relative z-20 -mt-16 lg:-mt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="flex flex-wrap bg-amtrak-dark">
            {[
              { key: "one-way", label: "One-Way" },
              { key: "round-trip", label: "Round-Trip" },
              { key: "rail-passes", label: "Rail Passes" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setTripType(tab.key as TripType)}
                className={`flex-1 min-w-[100px] px-4 py-3 text-sm font-semibold tracking-wider transition-colors ${
                  tripType === tab.key
                    ? "bg-amtrak-primary text-white"
                    : "bg-amtrak-dark text-white/70 hover:bg-amtrak-primary/80 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4 lg:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-end">
              {/* From */}
              <div className="lg:col-span-3" ref={fromRef}>
                <label className="block text-xs font-semibold text-amtrak-dark mb-1 tracking-wider">FROM</label>
                <div className="relative">
                  <Input
                    placeholder="Departure station or city"
                    value={fromQuery}
                    onChange={(e) => handleFromChange(e.target.value)}
                    onFocus={() => { if (fromSuggestions.length > 0) setShowFromSuggestions(true); }}
                    className="w-full border-amtrak-border focus:border-amtrak-primary h-12"
                  />
                  {loadingFromSugg && (
                    <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-amtrak-gray" />
                  )}
                  {showFromSuggestions && fromSuggestions.length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-amtrak-border rounded-lg shadow-xl max-h-48 overflow-y-auto">
                      {fromSuggestions.map((s) => (
                        <button
                          key={s.onestop_id}
                          type="button"
                          className="w-full px-3 py-2 text-left text-sm hover:bg-amtrak-light transition-colors border-b border-amtrak-border/50 last:border-0"
                          onClick={() => {
                            setFromQuery(formatStopLabel(s));
                            setSelectedFromStop(s);
                            setShowFromSuggestions(false);
                          }}
                        >
                          <span className="font-medium">{s.stop_name}</span>
                          {s.stop_code && <span className="text-amtrak-gray ml-1">({s.stop_code})</span>}
                          {s.place?.adm1_name && <span className="text-amtrak-gray ml-1">- {s.place.adm1_name}</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Swap */}
              <div className="lg:col-span-1 flex justify-center">
                <button
                  type="button"
                  onClick={swapStations}
                  className="w-10 h-10 rounded-full border-2 border-amtrak-border flex items-center justify-center hover:border-amtrak-primary hover:bg-amtrak-primary/5 transition-colors"
                  aria-label="Switch departure and arrival stations"
                >
                  <ArrowRightLeft className="w-4 h-4 text-amtrak-primary" />
                </button>
              </div>

              {/* To */}
              <div className="lg:col-span-3" ref={toRef}>
                <label className="block text-xs font-semibold text-amtrak-dark mb-1 tracking-wider">TO</label>
                <div className="relative">
                  <Input
                    placeholder="Arrival station or city"
                    value={toQuery}
                    onChange={(e) => handleToChange(e.target.value)}
                    onFocus={() => { if (toSuggestions.length > 0) setShowToSuggestions(true); }}
                    className="w-full border-amtrak-border focus:border-amtrak-primary h-12"
                  />
                  {loadingToSugg && (
                    <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-amtrak-gray" />
                  )}
                  {showToSuggestions && toSuggestions.length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-amtrak-border rounded-lg shadow-xl max-h-48 overflow-y-auto">
                      {toSuggestions.map((s) => (
                        <button
                          key={s.onestop_id}
                          type="button"
                          className="w-full px-3 py-2 text-left text-sm hover:bg-amtrak-light transition-colors border-b border-amtrak-border/50 last:border-0"
                          onClick={() => {
                            setToQuery(formatStopLabel(s));
                            setSelectedToStop(s);
                            setShowToSuggestions(false);
                          }}
                        >
                          <span className="font-medium">{s.stop_name}</span>
                          {s.stop_code && <span className="text-amtrak-gray ml-1">({s.stop_code})</span>}
                          {s.place?.adm1_name && <span className="text-amtrak-gray ml-1">- {s.place.adm1_name}</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Depart Date */}
              <div className="lg:col-span-2">
                <label className="block text-xs font-semibold text-amtrak-dark mb-1 tracking-wider">DEPART DATE</label>
                <Input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} className="w-full border-amtrak-border focus:border-amtrak-primary h-12" />
              </div>

              {/* Return Date */}
              {tripType === "round-trip" && (
                <div className="lg:col-span-2">
                  <label className="block text-xs font-semibold text-amtrak-dark mb-1 tracking-wider">RETURN DATE</label>
                  <Input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className="w-full border-amtrak-border focus:border-amtrak-primary h-12" />
                </div>
              )}

              {/* Find Trains */}
              <div className={tripType === "round-trip" ? "lg:col-span-1" : "lg:col-span-3"}>
                <Button type="submit" className="w-full h-12 bg-amtrak-primary hover:bg-amtrak-blue text-white font-bold text-sm tracking-wider">
                  FIND TRAINS
                </Button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs">
              <Link href="/rail" className="text-amtrak-primary font-semibold hover:underline">
                Browse All Rail Routes →
              </Link>
              <Link href="#" className="text-amtrak-primary font-semibold hover:underline">
                Group Travel
              </Link>
              <Link href="#" className="text-amtrak-primary font-semibold hover:underline">
                Employee Pass Rider
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

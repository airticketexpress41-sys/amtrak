"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, ChevronDown, ChevronUp, Phone } from "lucide-react";

interface FareClass {
  name: string;
  price: number | null;
}

interface TrainTrip {
  trainNumber: string;
  trainName: string;
  isAcela?: boolean;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  fromStation: string;
  toStation: string;
  fares: FareClass[];
  lowestFare?: boolean;
}

const DEMO_SCHEDULES: Record<string, TrainTrip[]> = {
  "nyp-phl": [
    { trainNumber: "179", trainName: "Northeast Regional", departureTime: "12:11a", arrivalTime: "1:39a", duration: "1h 28m", fromStation: "NYP", toStation: "PHL", fares: [{ name: "Coach", price: 95 }, { name: "Business", price: 217 }, { name: "Private Rooms", price: null }] },
    { trainNumber: "109", trainName: "Northeast Regional", departureTime: "5:35a", arrivalTime: "7:03a", duration: "1h 28m", fromStation: "NYP", toStation: "PHL", fares: [{ name: "Coach", price: 95 }, { name: "Business", price: 137 }, { name: "Private Rooms", price: null }] },
    { trainNumber: "89", trainName: "Palmetto", departureTime: "6:02a", arrivalTime: "7:26a", duration: "1h 24m", fromStation: "NYP", toStation: "PHL", fares: [{ name: "Coach", price: 68 }, { name: "Business", price: 114 }, { name: "Private Rooms", price: null }] },
    { trainNumber: "2201", trainName: "Acela", isAcela: true, departureTime: "6:55a", arrivalTime: "8:08a", duration: "1h 13m", fromStation: "NYP", toStation: "PHL", fares: [{ name: "Coach", price: null }, { name: "Business", price: 93 }, { name: "First", price: 186 }], lowestFare: true },
    { trainNumber: "661", trainName: "Keystone Service", departureTime: "7:00a", arrivalTime: "8:25a", duration: "1h 25m", fromStation: "NYP", toStation: "PHL", fares: [{ name: "Coach", price: 48 }, { name: "Business", price: null }, { name: "Private Rooms", price: null }] },
    { trainNumber: "79", trainName: "Carolinian", departureTime: "7:04a", arrivalTime: "8:49a", duration: "1h 45m", fromStation: "NYP", toStation: "PHL", fares: [{ name: "Coach", price: 95 }, { name: "Business", price: 137 }, { name: "Private Rooms", price: null }] },
    { trainNumber: "101", trainName: "Northeast Regional", departureTime: "7:49a", arrivalTime: "9:14a", duration: "1h 25m", fromStation: "NYP", toStation: "PHL", fares: [{ name: "Coach", price: 68 }, { name: "Business", price: 114 }, { name: "Private Rooms", price: null }] },
    { trainNumber: "2203", trainName: "Acela", isAcela: true, departureTime: "7:57a", arrivalTime: "9:12a", duration: "1h 15m", fromStation: "NYP", toStation: "PHL", fares: [{ name: "Coach", price: null }, { name: "Business", price: 180 }, { name: "First", price: 296 }] },
  ],
  "was-nyp": [
    { trainNumber: "216", trainName: "Acela", isAcela: true, departureTime: "5:00a", arrivalTime: "7:35a", duration: "2h 35m", fromStation: "WAS", toStation: "NYP", fares: [{ name: "Business", price: 129 }, { name: "First", price: 249 }], lowestFare: true },
    { trainNumber: "194", trainName: "Northeast Regional", departureTime: "6:00a", arrivalTime: "9:30a", duration: "3h 30m", fromStation: "WAS", toStation: "NYP", fares: [{ name: "Coach", price: 69 }, { name: "Business", price: 179 }, { name: "Private Rooms", price: null }] },
    { trainNumber: "2200", trainName: "Acela", isAcela: true, departureTime: "7:00a", arrivalTime: "9:35a", duration: "2h 35m", fromStation: "WAS", toStation: "NYP", fares: [{ name: "Business", price: 159 }, { name: "First", price: 289 }] },
    { trainNumber: "86", trainName: "Northeast Regional", departureTime: "8:00a", arrivalTime: "11:35a", duration: "3h 35m", fromStation: "WAS", toStation: "NYP", fares: [{ name: "Coach", price: 59 }, { name: "Business", price: 149 }, { name: "Private Rooms", price: null }] },
    { trainNumber: "2202", trainName: "Acela", isAcela: true, departureTime: "9:00a", arrivalTime: "11:30a", duration: "2h 30m", fromStation: "WAS", toStation: "NYP", fares: [{ name: "Business", price: 189 }, { name: "First", price: 329 }] },
    { trainNumber: "176", trainName: "Northeast Regional", departureTime: "10:00a", arrivalTime: "1:30p", duration: "3h 30m", fromStation: "WAS", toStation: "NYP", fares: [{ name: "Coach", price: 79 }, { name: "Business", price: 189 }, { name: "Private Rooms", price: null }] },
  ],
  "nyp-was": [
    { trainNumber: "174", trainName: "Northeast Regional", departureTime: "5:00a", arrivalTime: "8:10a", duration: "3h 10m", fromStation: "NYP", toStation: "WAS", fares: [{ name: "Coach", price: 110 }, { name: "Business", price: 230 }, { name: "Private Rooms", price: null }] },
    { trainNumber: "2150", trainName: "Acela", isAcela: true, departureTime: "6:00a", arrivalTime: "8:35a", duration: "2h 35m", fromStation: "NYP", toStation: "WAS", fares: [{ name: "Coach", price: null }, { name: "Business", price: 149 }, { name: "First", price: 289 }], lowestFare: true },
    { trainNumber: "66", trainName: "Northeast Regional", departureTime: "7:00a", arrivalTime: "10:15a", duration: "3h 15m", fromStation: "NYP", toStation: "WAS", fares: [{ name: "Coach", price: 75 }, { name: "Business", price: 195 }, { name: "Private Rooms", price: null }] },
    { trainNumber: "2152", trainName: "Acela", isAcela: true, departureTime: "8:00a", arrivalTime: "10:30a", duration: "2h 30m", fromStation: "NYP", toStation: "WAS", fares: [{ name: "Coach", price: null }, { name: "Business", price: 209 }, { name: "First", price: 349 }] },
    { trainNumber: "80", trainName: "Northeast Regional", departureTime: "9:00a", arrivalTime: "12:15p", duration: "3h 15m", fromStation: "NYP", toStation: "WAS", fares: [{ name: "Coach", price: 85 }, { name: "Business", price: 205 }, { name: "Private Rooms", price: null }] },
  ],
  "was-phl": [
    { trainNumber: "179", trainName: "Northeast Regional", departureTime: "12:11a", arrivalTime: "1:39a", duration: "1h 28m", fromStation: "WAS", toStation: "PHL", fares: [{ name: "Coach", price: 95 }, { name: "Business", price: 217 }, { name: "Private Rooms", price: null }] },
    { trainNumber: "2201", trainName: "Acela", isAcela: true, departureTime: "5:30a", arrivalTime: "6:48a", duration: "1h 18m", fromStation: "WAS", toStation: "PHL", fares: [{ name: "Coach", price: null }, { name: "Business", price: 93 }, { name: "First", price: 186 }], lowestFare: true },
    { trainNumber: "89", trainName: "Palmetto", departureTime: "6:02a", arrivalTime: "7:26a", duration: "1h 24m", fromStation: "WAS", toStation: "PHL", fares: [{ name: "Coach", price: 68 }, { name: "Business", price: 114 }, { name: "Private Rooms", price: null }] },
    { trainNumber: "661", trainName: "Keystone Service", departureTime: "7:00a", arrivalTime: "8:25a", duration: "1h 25m", fromStation: "WAS", toStation: "PHL", fares: [{ name: "Coach", price: 48 }, { name: "Business", price: null }, { name: "Private Rooms", price: null }] },
    { trainNumber: "79", trainName: "Carolinian", departureTime: "7:04a", arrivalTime: "8:49a", duration: "1h 45m", fromStation: "WAS", toStation: "PHL", fares: [{ name: "Coach", price: 95 }, { name: "Business", price: 137 }, { name: "Private Rooms", price: null }] },
  ],
  "phl-nyp": [
    { trainNumber: "180", trainName: "Northeast Regional", departureTime: "6:10a", arrivalTime: "7:40a", duration: "1h 30m", fromStation: "PHL", toStation: "NYP", fares: [{ name: "Coach", price: 49 }, { name: "Business", price: 109 }, { name: "Private Rooms", price: null }], lowestFare: true },
    { trainNumber: "2200", trainName: "Acela", isAcela: true, departureTime: "7:15a", arrivalTime: "8:30a", duration: "1h 15m", fromStation: "PHL", toStation: "NYP", fares: [{ name: "Business", price: 99 }, { name: "First", price: 199 }] },
    { trainNumber: "148", trainName: "Keystone Service", departureTime: "8:00a", arrivalTime: "9:25a", duration: "1h 25m", fromStation: "PHL", toStation: "NYP", fares: [{ name: "Coach", price: 39 }, { name: "Business", price: null }, { name: "Private Rooms", price: null }] },
    { trainNumber: "90", trainName: "Palmetto", departureTime: "8:30a", arrivalTime: "9:54a", duration: "1h 24m", fromStation: "PHL", toStation: "NYP", fares: [{ name: "Coach", price: 58 }, { name: "Business", price: 104 }, { name: "Private Rooms", price: null }] },
    { trainNumber: "2202", trainName: "Acela", isAcela: true, departureTime: "9:20a", arrivalTime: "10:30a", duration: "1h 10m", fromStation: "PHL", toStation: "NYP", fares: [{ name: "Business", price: 139 }, { name: "First", price: 239 }] },
  ],
  "nyp-bos": [
    { trainNumber: "2150", trainName: "Acela", isAcela: true, departureTime: "6:00a", arrivalTime: "9:30a", duration: "3h 30m", fromStation: "NYP", toStation: "BOS", fares: [{ name: "Business", price: 179 }, { name: "First", price: 319 }], lowestFare: true },
    { trainNumber: "173", trainName: "Northeast Regional", departureTime: "7:10a", arrivalTime: "11:35a", duration: "4h 25m", fromStation: "NYP", toStation: "BOS", fares: [{ name: "Coach", price: 69 }, { name: "Business", price: 189 }, { name: "Private Rooms", price: null }] },
    { trainNumber: "2154", trainName: "Acela", isAcela: true, departureTime: "9:00a", arrivalTime: "12:15p", duration: "3h 15m", fromStation: "NYP", toStation: "BOS", fares: [{ name: "Business", price: 209 }, { name: "First", price: 359 }] },
    { trainNumber: "193", trainName: "Northeast Regional", departureTime: "10:30a", arrivalTime: "3:05p", duration: "4h 35m", fromStation: "NYP", toStation: "BOS", fares: [{ name: "Coach", price: 59 }, { name: "Business", price: 169 }, { name: "Private Rooms", price: null }] },
  ],
  "bos-nyp": [
    { trainNumber: "2153", trainName: "Acela", isAcela: true, departureTime: "6:00a", arrivalTime: "9:15a", duration: "3h 15m", fromStation: "BOS", toStation: "NYP", fares: [{ name: "Business", price: 169 }, { name: "First", price: 299 }], lowestFare: true },
    { trainNumber: "172", trainName: "Northeast Regional", departureTime: "7:30a", arrivalTime: "11:55a", duration: "4h 25m", fromStation: "BOS", toStation: "NYP", fares: [{ name: "Coach", price: 59 }, { name: "Business", price: 179 }, { name: "Private Rooms", price: null }] },
    { trainNumber: "2156", trainName: "Acela", isAcela: true, departureTime: "10:00a", arrivalTime: "1:15p", duration: "3h 15m", fromStation: "BOS", toStation: "NYP", fares: [{ name: "Business", price: 229 }, { name: "First", price: 379 }] },
  ],
};

function getRouteKey(from: string, to: string): string {
  const f = from.toLowerCase();
  const t = to.toLowerCase();

  const fromIsNY = /new york|nyp|moynihan|penn station/.test(f);
  const toIsNY = /new york|nyp|moynihan|penn station/.test(t);
  const fromIsWAS = /washington|was|union station/.test(f);
  const toIsWAS = /washington|was|union station/.test(t);
  const fromIsPHL = /philadelphia|phl|30th/.test(f);
  const toIsPHL = /philadelphia|phl|30th/.test(t);
  const fromIsBOS = /boston|bos|south station/.test(f);
  const toIsBOS = /boston|bos|south station/.test(t);

  if (fromIsNY && toIsPHL) return "nyp-phl";
  if (fromIsNY && toIsWAS) return "nyp-was";
  if (fromIsNY && toIsBOS) return "nyp-bos";
  if (fromIsWAS && toIsNY) return "was-nyp";
  if (fromIsWAS && toIsPHL) return "was-phl";
  if (fromIsPHL && toIsNY) return "phl-nyp";
  if (fromIsPHL && toIsWAS) return "was-phl";
  if (fromIsBOS && toIsNY) return "bos-nyp";

  return "";
}

function TrainCard({ trip }: { trip: TrainTrip }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[#167FA6]">{trip.trainNumber}</span>
              <span className="text-sm text-gray-700">{trip.trainName}</span>
            </div>
            {trip.isAcela && (
              <span className="text-[10px] font-bold text-[#702082] tracking-wide uppercase">NextGen Acela</span>
            )}
          </div>
          {trip.lowestFare && (
            <span className="text-[10px] font-bold text-[#167FA6] bg-[#E8F4F8] px-2 py-0.5 rounded">Lowest Fare</span>
          )}
        </div>

        <div className="flex items-start gap-6 mb-3">
          <div className="text-center min-w-[70px]">
            <div className="text-xl font-bold text-gray-900">{trip.departureTime}</div>
            <div className="text-xs text-gray-500">{trip.fromStation}</div>
          </div>
          <div className="flex flex-col items-center flex-1 pt-1">
            <Clock className="w-3 h-3 text-gray-400" />
            <div className="text-[10px] text-gray-500 mt-0.5">{trip.duration}</div>
            <div className="w-full h-px bg-gray-200 mt-1 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-300 rounded-full" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-300 rounded-full" />
            </div>
          </div>
          <div className="text-center min-w-[70px]">
            <div className="text-xl font-bold text-gray-900">{trip.arrivalTime}</div>
            <div className="text-xs text-gray-500">{trip.toStation}</div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-[#167FA6] mb-3">
          <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-1 hover:underline">
            Trip Details {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {trip.fares.map((fare) => (
            <div key={fare.name} className="text-center min-w-[90px] py-2 px-3 rounded border border-gray-200">
              <div className="text-[10px] text-gray-500 uppercase tracking-wide">{fare.name}</div>
              <div className="text-sm font-bold text-gray-900">
                {fare.price !== null ? `from $${fare.price}` : "\u2014"}
              </div>
            </div>
          ))}
          <a
            href="tel:+16477927095"
            className="flex items-center gap-1.5 min-w-[90px] py-2 px-3 rounded border border-[#167FA6] bg-[#167FA6] text-white hover:bg-[#126d8f] transition-colors text-xs font-semibold justify-center"
          >
            <Phone className="w-3 h-3" /> Call to Book
          </a>
        </div>

        {expanded && (
          <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
            <div className="grid grid-cols-2 gap-2">
              <div><span className="font-medium text-gray-700">From:</span> {trip.fromStation}</div>
              <div><span className="font-medium text-gray-700">To:</span> {trip.toStation}</div>
              <div><span className="font-medium text-gray-700">Duration:</span> {trip.duration}</div>
              <div><span className="font-medium text-gray-700">Train:</span> {trip.trainNumber} {trip.trainName}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const fromQuery = searchParams.get("from") || "";
  const toQuery = searchParams.get("to") || "";
  const departDate = searchParams.get("date") || "";

  const routeKey = getRouteKey(fromQuery, toQuery);
  const trips = DEMO_SCHEDULES[routeKey] || [];
  const allDemoRoutes = Object.values(DEMO_SCHEDULES).flat().slice(0, 8);
  const displayTrips = trips.length > 0 ? trips : allDemoRoutes;

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, [fromQuery, toQuery]);

  const formatDate = (dateStr: string): string => {
    if (!dateStr) return "";
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  };

  if (!fromQuery || !toQuery) {
    return (
      <div className="min-h-screen bg-[#F2F4F8]">
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <p className="text-gray-500">Missing search parameters.</p>
          <Link href="/" className="text-[#167FA6] hover:underline mt-2 inline-block">Go back</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F4F8]">
      {/* Header */}
      <div className="bg-[#002B4A] text-white">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <button onClick={() => router.push("/")} className="flex items-center gap-1 text-white/70 hover:text-white text-sm mb-2">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          {departDate && (
            <div className="text-sm text-white/70">Departure &bull; {formatDate(departDate)}</div>
          )}
          <h1 className="text-xl lg:text-2xl font-bold mt-1">
            {fromQuery} to {toQuery}
          </h1>
          {routeKey && (
            <div className="flex items-center gap-3 mt-2 text-sm">
              <span className="bg-white/20 px-2 py-0.5 rounded font-semibold">{displayTrips[0]?.fromStation || ""}</span>
              <span className="text-white/50">to</span>
              <span className="bg-white/20 px-2 py-0.5 rounded font-semibold">{displayTrips[0]?.toStation || ""}</span>
            </div>
          )}
        </div>
      </div>

      {/* Sub-header */}
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-sm text-gray-500">{displayTrips.length} trains</span>
        <span className="text-xs text-gray-400">Compare Fare Types</span>
      </div>

      {/* Loading */}
      {loading && (
        <div className="max-w-3xl mx-auto px-4 flex justify-center py-16">
          <div className="w-8 h-8 border-4 border-gray-200 border-t-[#167FA6] rounded-full animate-spin" />
        </div>
      )}

      {/* Results */}
      {!loading && displayTrips.length > 0 && (
        <div className="max-w-3xl mx-auto px-4 pb-12 space-y-3">
          {displayTrips.map((trip, i) => (
            <TrainCard key={`${trip.trainNumber}-${i}`} trip={trip} />
          ))}
        </div>
      )}

      {/* Book note */}
      {!loading && displayTrips.length > 0 && (
        <div className="max-w-3xl mx-auto px-4 pb-12 text-center">
          <div className="bg-[#E8F4F8] border border-[#C5E3ED] rounded-lg p-4">
            <p className="text-sm text-[#167FA6] font-semibold mb-1">To book this trip, call Amtrak</p>
            <a href="tel:+16477927095" className="text-lg font-bold text-[#002B4A] hover:underline">
              +1 (647) 792-7095
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

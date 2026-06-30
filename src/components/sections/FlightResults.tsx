export interface Flight {
  flights: {
    departure_airport: { name: string; id: string; time: string };
    arrival_airport: { name: string; id: string; time: string };
    airline: string;
    airline_logo: string;
    flight_number: string;
    duration: number;
  }[];
  total_duration: number;
  price: number;
  type: string;
  airline_logo: string;
  carbon_emissions: { this_flight: number };
}

export interface FlightSearchResults {
  best_flights: Flight[];
  other_flights: Flight[];
  price_insights?: {
    lowest_price: number;
    typical_price_range: [number, number];
  };
}

interface FlightResultsProps {
  results: FlightSearchResults | null;
  loading: boolean;
  error: string | null;
}

function formatTime(isoString: string) {
  const date = new Date(isoString);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function formatDuration(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
}

function FlightCard({ flight }: { flight: Flight }) {
  const firstLeg = flight.flights[0];
  const lastLeg = flight.flights[flight.flights.length - 1];
  const stops = flight.flights.length - 1;

  return (
    <div className="bg-white rounded-xl shadow-md border border-amtrak-border overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-4 lg:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {firstLeg.airline_logo && (
              <img
                src={firstLeg.airline_logo}
                alt={firstLeg.airline}
                className="w-8 h-8 object-contain"
              />
            )}
            <span className="text-sm font-semibold text-amtrak-dark">
              {firstLeg.airline} {firstLeg.flight_number}
            </span>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-amtrak-primary">
              ${flight.price}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-lg font-bold text-amtrak-dark">
              {formatTime(firstLeg.departure_airport.time)}
            </div>
            <div className="text-xs text-amtrak-gray font-medium">
              {firstLeg.departure_airport.id}
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center px-2">
            <div className="text-xs text-amtrak-gray font-medium mb-1">
              {formatDuration(flight.total_duration)}
            </div>
            <div className="w-full h-px bg-amtrak-border relative">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between">
                <div className="w-2 h-2 rounded-full bg-amtrak-primary" />
                <div className="w-2 h-2 rounded-full bg-amtrak-primary" />
              </div>
            </div>
            <div className="text-xs text-amtrak-gray font-medium mt-1">
              {stops === 0
                ? "Nonstop"
                : `${stops} ${stops === 1 ? "stop" : "stops"}`}
            </div>
          </div>

          <div className="text-center">
            <div className="text-lg font-bold text-amtrak-dark">
              {formatTime(lastLeg.arrival_airport.time)}
            </div>
            <div className="text-xs text-amtrak-gray font-medium">
              {lastLeg.arrival_airport.id}
            </div>
          </div>
        </div>

        {flight.carbon_emissions && (
          <div className="mt-3 pt-3 border-t border-amtrak-border text-xs text-amtrak-gray">
            {flight.carbon_emissions.this_flight} kg CO₂
          </div>
        )}
      </div>
    </div>
  );
}

export default function FlightResults({
  results,
  loading,
  error,
}: FlightResultsProps) {
  if (loading) {
    return (
      <div className="mt-8">
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-amtrak-border border-t-amtrak-primary rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          {error}
        </div>
      </div>
    );
  }

  if (!results) return null;

  const allFlights = [
    ...(results.best_flights || []),
    ...(results.other_flights || []),
  ];

  if (allFlights.length === 0) {
    return (
      <div className="mt-8">
        <div className="bg-amtrak-light rounded-xl p-8 text-center">
          <p className="text-amtrak-gray text-lg">
            No flights found for your search. Try different dates or airports.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      {results.price_insights && (
        <div className="bg-amtrak-light rounded-xl p-4 mb-6">
          <p className="text-sm text-amtrak-dark">
            <span className="font-semibold">Price insight: </span>
            From{" "}
            <span className="font-bold text-amtrak-primary">
              ${results.price_insights.lowest_price}
            </span>{" "}
            · Typical range: $
            {results.price_insights.typical_price_range[0]}–$
            {results.price_insights.typical_price_range[1]}
          </p>
        </div>
      )}

      <div className="space-y-4">
        {allFlights.map((flight, i) => (
          <FlightCard key={i} flight={flight} />
        ))}
      </div>
    </div>
  );
}

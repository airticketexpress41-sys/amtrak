import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { departureId, arrivalId, outboundDate, returnDate, tripType }: Record<string, string | undefined> =
      await request.json();

    if (!departureId || !arrivalId || !outboundDate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.SERPAPI_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const params = new URLSearchParams({
      engine: "google_flights",
      api_key: apiKey,
      departure_id: departureId,
      arrival_id: arrivalId,
      outbound_date: outboundDate,
      type: tripType === "round-trip" ? "2" : "1",
      currency: "USD",
      hl: "en",
    });

    if (returnDate && tripType === "round-trip") {
      params.append("return_date", returnDate);
    }

    const response = await fetch(
      `https://serpapi.com/search?${params.toString()}`,
      { signal: AbortSignal.timeout(15000) }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch flights" },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (data.error) {
      return NextResponse.json(
        { error: data.error },
        { status: 400 }
      );
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

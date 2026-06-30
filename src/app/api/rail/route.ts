import { NextResponse } from "next/server";

const TRANSITLAND_BASE = "https://transit.land/api/v2/rest";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") || "routes";
    const query = searchParams.get("search") || "";
    const routeTypes = searchParams.get("route_types") || "2,100,101,102,103,106,109";
    const limit = searchParams.get("limit") || "25";
    const after = searchParams.get("after") || "";
    const feedOnestopId = searchParams.get("feed_onestop_id") || "";

    const apiKey = process.env.TRANSITLAND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    if (type === "stops") {
      const params = new URLSearchParams({ apikey: apiKey, limit });
      if (query) params.append("search", query);
      if (feedOnestopId) params.append("feed_onestop_id", feedOnestopId);
      params.append("served_by_route_types", routeTypes);

      const response = await fetch(
        `${TRANSITLAND_BASE}/stops?${params.toString()}`,
        { signal: AbortSignal.timeout(15000) }
      );

      if (!response.ok) {
        return NextResponse.json(
          { error: "Failed to fetch stop data" },
          { status: response.status }
        );
      }

      const data = await response.json();
      return NextResponse.json(data);
    }

    const params = new URLSearchParams({
      apikey: apiKey,
      route_types: routeTypes,
      limit,
    });

    if (query) params.append("search", query);
    if (after) params.append("after", after);
    if (feedOnestopId) params.append("feed_onestop_id", feedOnestopId);

    const response = await fetch(
      `${TRANSITLAND_BASE}/routes?${params.toString()}`,
      { signal: AbortSignal.timeout(15000) }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch rail data" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

import type { Metadata } from "next";
import RailSearch from "@/components/sections/RailSearch";

export const metadata: Metadata = {
  title: "Rail Route Explorer",
  description:
    "Explore Amtrak train routes, schedules, and destinations across the United States. Plan your journey with our interactive route explorer.",
  openGraph: {
    title: "Rail Route Explorer | Amtrak",
  },
  alternates: {
    canonical: "/rail",
  },
};

export default function RailPage() {
  return <RailSearch />;
}

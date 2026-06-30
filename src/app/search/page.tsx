import { Suspense } from "react";
import type { Metadata } from "next";
import SearchResults from "@/components/sections/SearchResults";

export const metadata: Metadata = {
  title: "Train Schedules & Ticket Prices",
  description:
    "Compare Amtrak train schedules, routes, and fares. Book your next trip with the best available prices on Northeast Regional, Acela, and more.",
  openGraph: {
    title: "Train Schedules & Ticket Prices | Amtrak",
  },
  alternates: {
    canonical: "/search",
  },
};

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-amtrak-light flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-amtrak-border border-t-amtrak-primary rounded-full animate-spin" />
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}

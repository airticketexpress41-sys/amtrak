import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amtrak Vacations",
  description:
    "Discover all-inclusive Amtrak vacation packages with rail travel, hotels, tours, and more for a seamless travel experience.",
  openGraph: {
    title: "Amtrak Vacations | Amtrak",
  },
  alternates: {
    canonical: "/deals-discounts/rail-vacations-rail-tours/all-inclusive-train-vacation-packages",
  },
};

export default function AmtrakVacationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Amtrak Vacations</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">All-Inclusive Vacation Packages</h2>
        <p className="mb-4">
          Amtrak Vacations offers all-inclusive train vacation packages that combine rail travel
          with hotel accommodations, tours, and activities. Whether you are looking for a
          cross-country adventure, a national park tour, or a relaxing getaway, our packages
          are designed to provide a seamless and unforgettable travel experience.
        </p>
        <p className="mb-4">
          Each package includes your train fare, hotel stays, and selected activities, all for
          one convenient price. Sit back, relax, and let us handle the details while you enjoy
          the journey.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Popular Destinations</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Grand Canyon:</strong> Rail tour from the Southwest to one of America's natural wonders.</li>
          <li><strong>California Coast:</strong> Scenic journey along the Pacific coastline with stops in major cities.</li>
          <li><strong>National Parks:</strong> Explore Yellowstone, Glacier, and other iconic parks by rail.</li>
          <li><strong>East Coast Cities:</strong> Visit Boston, New York, Philadelphia, and Washington, DC.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Why Book a Package</h2>
        <p className="mb-4">
          Booking an Amtrak vacation package saves you time and money. You get the best value
          with bundled pricing on rail, hotels, and activities. Plus, our travel experts curate
          itineraries that highlight the best experiences at each destination, ensuring you
          make the most of your trip without the stress of planning every detail.
        </p>
      </section>
    </div>
  );
}

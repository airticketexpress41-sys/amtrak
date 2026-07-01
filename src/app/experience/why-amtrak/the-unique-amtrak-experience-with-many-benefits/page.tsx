import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Unique Amtrak Experience",
  description:
    "Discover the many benefits of traveling with Amtrak, including comfort, scenic views, onboard amenities, and more.",
  openGraph: {
    title: "The Unique Amtrak Experience | Amtrak",
  },
  alternates: {
    canonical: "/experience/why-amtrak/the-unique-amtrak-experience-with-many-benefits",
  },
};

export default function UniqueAmtrakExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">The Unique Amtrak Experience</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Travel in Comfort</h2>
        <p className="mb-4">
          Amtrak offers spacious seating with ample legroom, onboard restrooms, and a relaxed
          atmosphere that makes train travel a comfortable and enjoyable experience. Unlike air
          travel, you can move freely throughout the train, visit the café car, and enjoy
          panoramic views from large windows.
        </p>
        <p className="mb-4">
          Our trains feature comfortable reclining seats with power outlets at every seat,
          complimentary Wi-Fi, and a variety of dining options ranging from the café car to
          full-service dining on select routes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Scenic Journeys</h2>
        <p className="mb-4">
          Experience the beauty of America from the rails. Amtrak travels through stunning
          landscapes, from the Pacific Coast to the Rocky Mountains, offering views that are
          simply not visible from highways or airways. Our scenic routes include the California
          Zephyr, Coast Starlight, and Empire Builder, each offering a unique perspective on
          the country's natural beauty.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Benefits of Train Travel</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Convenient downtown-to-downtown service with no lengthy security lines.</li>
          <li>Generous baggage policy with carry-on and checked baggage included.</li>
          <li>Amtrak Guest Rewards program to earn points on every trip.</li>
          <li>Pet-friendly policies on most routes.</li>
          <li>Accessible services for passengers with disabilities.</li>
          <li>Environmentally friendly travel with lower carbon emissions per passenger.</li>
        </ul>
      </section>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Your Trip",
  description:
    "Book hotels, car rentals, trip insurance, and more to complete your Amtrak travel experience.",
  openGraph: {
    title: "Complete Your Trip | Amtrak",
  },
  alternates: {
    canonical: "/deals-discounts/complete-your-trip-with-hotel-car-rental-insurance-more",
  },
};

export default function CompleteYourTripPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Complete Your Trip</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Hotels</h2>
        <p className="mb-4">
          Book a hotel at your destination when you purchase your Amtrak ticket. We partner with
          major hotel chains to offer competitive rates at thousands of locations across the
          country. Whether you are looking for budget-friendly accommodations or luxury hotels,
          you can find the perfect place to stay and save when you book with your train ticket.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Car Rentals</h2>
        <p className="mb-4">
          Need a car when you arrive? Add a car rental to your Amtrak reservation and enjoy
          discounted rates from leading rental car companies. Pick up your vehicle at or near
          many Amtrak stations for a seamless travel experience from train to road.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Trip Insurance</h2>
        <p className="mb-4">
          Protect your travel investment with trip insurance. Coverage includes trip cancellation
          or interruption due to illness, severe weather, or other unforeseen events. Add
          insurance during the booking process for peace of mind on every journey. Reserved
          parking is also available at select stations.
        </p>
      </section>
    </div>
  );
}

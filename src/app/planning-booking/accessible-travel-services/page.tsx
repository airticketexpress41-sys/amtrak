import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessible Travel Services",
  description:
    "Learn about Amtrak's accessible travel services for passengers with disabilities, including boarding assistance and accommodations.",
  openGraph: {
    title: "Accessible Travel Services | Amtrak",
  },
  alternates: {
    canonical: "/planning-booking/accessible-travel-services",
  },
};

export default function AccessibleTravelServicesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Accessible Travel Services</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Commitment to Accessibility</h2>
        <p className="mb-4">
          Amtrak is committed to providing accessible travel services for all passengers,
          including those with disabilities. We offer a range of accommodations and assistance
          services to ensure that every passenger can travel comfortably and safely. Our trains
          and stations are designed to meet or exceed ADA requirements.
        </p>
        <p className="mb-4">
          We encourage passengers with disabilities to notify us of any specific needs at least
          24 hours before departure so that we can arrange appropriate accommodations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Services Available</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Wheelchair accessible seating and boarding assistance.</li>
          <li>Accessible restrooms on all long-distance trains.</li>
          <li>Service animals welcome on all trains at no additional charge.</li>
          <li>Hearing impairment assistance including visual announcements.</li>
          <li>Portable ramps and lifts at most stations.</li>
          <li>Assistance with luggage and boarding for passengers with mobility needs.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Booking and Information</h2>
        <p className="mb-4">
          When booking your ticket, you can indicate any accessibility needs during the
          reservation process. You may also call our accessibility services line at
          +1 (647) 792-7095 for personalized assistance. Our customer service representatives
          are trained to help arrange the accommodations you need for a comfortable journey.
        </p>
      </section>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changing Your Reservation",
  description:
    "Learn how to change or cancel your Amtrak reservation, including fees, policies, and step-by-step instructions.",
  openGraph: {
    title: "Changing Your Reservation | Amtrak",
  },
  alternates: {
    canonical: "/planning-booking/changes-refunds/changing-a-reservation",
  },
};

export default function ChangingReservationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Changing Your Reservation</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">How to Change or Cancel</h2>
        <p className="mb-4">
          You can modify or cancel your Amtrak reservation online, through the Amtrak mobile app,
          or by calling our customer service team. Changes are subject to availability and may
          involve fare differences or change fees depending on your ticket type.
        </p>
        <p className="mb-4">
          To make changes online, log into your Amtrak account, navigate to &quot;My Trips,&quot; and select
          the reservation you wish to modify. You can change the date, time, or route of your
          travel, subject to availability.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Change and Cancellation Fees</h2>
        <p className="mb-4">
          Fees vary based on your ticket type and how far in advance you make the change:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Value Fares:</strong> Changes and cancellations are permitted with a fee.</li>
          <li><strong>Flexible Fares:</strong> Changes and cancellations with reduced or no fees.</li>
          <li><strong>Premium Fares:</strong> Most changes and cancellations are free of charge.</li>
          <li><strong>Non-Refundable Tickets:</strong> May be canceled for a partial refund or credit.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Refunds</h2>
        <p className="mb-4">
          Refunds are processed based on your original payment method. If your ticket is refundable,
          the full fare minus any applicable fees will be returned to you. Non-refundable tickets
          may be eligible for a travel credit. Processing times typically range from 7 to 10
          business days.
        </p>
      </section>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up for Delay Alerts",
  description:
    "Sign up for Amtrak delay alerts and receive real-time notifications about your train's status via email or text message.",
  openGraph: {
    title: "Sign Up for Delay Alerts | Amtrak",
  },
  alternates: {
    canonical: "/tickets/delay-alerts",
  },
};

export default function DelayAlertsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Sign Up for Delay Alerts</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Stay Updated on Your Train</h2>
        <p className="mb-4">
          Never miss an update about your train. Amtrak Delay Alerts provide
          real-time notifications sent directly to your email or mobile phone
          whenever there is a change in your train's status, including delays
          and platform changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">How It Works</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Enter your reservation number and contact information.</li>
          <li>Choose to receive alerts via email, text message, or both.</li>
          <li>Receive automatic updates when your train's status changes.</li>
          <li>Alerts cover departures, arrivals, cancellations, and platform assignments.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Manage Your Alerts</h2>
        <p className="mb-4">
          You can modify your alert preferences or unsubscribe at any time.
          Simply log into your Amtrak account or contact customer service to
          update your notification settings. Delay alerts are free and available
          for all Amtrak reservations.
        </p>
      </section>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Alerts & Notices",
  description:
    "View current Amtrak service alerts, delays, and schedule changes. Stay informed about your travel with real-time service updates.",
  openGraph: {
    title: "Service Alerts & Notices | Amtrak",
  },
  alternates: {
    canonical: "/alert",
  },
};

export default function AlertPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Service Alerts & Notices</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Current Alerts</h2>
        <p className="mb-4">
          Stay up to date with the latest service alerts, delays, and schedule
          changes affecting Amtrak routes nationwide. Alerts are updated in real
          time as conditions change.
        </p>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-700">No Current Alerts</h3>
            <p className="text-gray-600 text-sm">
              All Amtrak services are operating on schedule. Please check back
              for any updates.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Types of Alerts</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Service Disruptions:</strong> Unexpected interruptions due to weather, infrastructure, or operational issues.</li>
          <li><strong>Schedule Changes:</strong> Planned or unplanned modifications to departure or arrival times.</li>
          <li><strong>Track Work:</strong> Scheduled maintenance that may affect service on specific routes.</li>
          <li><strong>Weather Advisories:</strong> Severe weather conditions impacting travel along certain corridors.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Stay Informed</h2>
        <p className="mb-4">
          Sign up for delay alerts to receive notifications about your specific
          train or route. You can also follow Amtrak on social media or check
          this page for the latest updates before heading to the station.
        </p>
      </section>
    </div>
  );
}

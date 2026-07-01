import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baggage Policy & Services",
  description:
    "Learn about Amtrak's baggage policy including carry-on, checked baggage, oversized items, and special items.",
  openGraph: {
    title: "Baggage Policy & Services | Amtrak",
  },
  alternates: {
    canonical: "/onboard/baggage-policy",
  },
};

export default function BaggagePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Baggage Policy & Services</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Carry-On Baggage</h2>
        <p className="mb-4">
          Each passenger may bring two personal items and two carry-on bags
          aboard. Carry-on bags must not exceed 28 x 22 x 14 inches and must
          fit in overhead racks or under seats. Items must be properly labeled
          and securely stored.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Two personal items (e.g., purse, briefcase, laptop bag).</li>
          <li>Two carry-on bags not exceeding 50 lbs (23 kg) each.</li>
          <li>Items must be stored in overhead racks or under seats.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Checked Baggage</h2>
        <p className="mb-4">
          Checked baggage service is available at most staffed stations. Each
          passenger may check up to two bags. Checked bags must not exceed 75
          linear inches (length + width + height) and 50 lbs each. Fees may
          apply for excess or oversized baggage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Special & Prohibited Items</h2>
        <p className="mb-4">
          Bicycles, musical instruments, and sporting equipment may be carried
          subject to space availability and applicable fees. Hazardous materials,
          firearms, and flammable items are strictly prohibited aboard Amtrak
          trains. Contact customer service for details on specific items.
        </p>
      </section>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amtrak Customer Service Commitments",
  description:
    "Read Amtrak's customer service commitments outlining our dedication to safety, reliability, accessibility, and customer satisfaction.",
  openGraph: {
    title: "Amtrak Customer Service Commitments | Amtrak",
  },
  alternates: {
    canonical: "/planning-booking/policies/amtrak-customer-service-commitments",
  },
};

export default function CustomerServiceCommitmentsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Amtrak Customer Service Commitments</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Our Promise to You</h2>
        <p className="mb-4">
          Amtrak is committed to providing a safe, reliable, and comfortable
          travel experience for every passenger. Our customer service commitments
          reflect our dedication to excellence across every aspect of your
          journey, from booking to arrival.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Our Commitments</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Safety First:</strong> We prioritize the safety and security of our passengers and crew above all else.</li>
          <li><strong>Reliable Service:</strong> We strive to operate on schedule and communicate promptly about any changes.</li>
          <li><strong>Clean & Comfortable:</strong> We maintain our trains and stations to the highest standards of cleanliness and comfort.</li>
          <li><strong>Accessibility:</strong> We are committed to making rail travel accessible for all passengers, including those with disabilities.</li>
          <li><strong>Responsive Support:</strong> Our customer service team is available to assist you with questions, concerns, and feedback.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Feedback & Accountability</h2>
        <p className="mb-4">
          We welcome your feedback as it helps us improve. If we fall short of
          our commitments, please let us know so we can make it right. Amtrak
          is accountable to our passengers and continuously works to enhance
          the quality of our service.
        </p>
      </section>
    </div>
  );
}

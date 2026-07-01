import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Amtrak's Privacy Policy to understand how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Amtrak",
  },
  alternates: {
    canonical: "/planning-booking/policies/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: July 1, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          Amtrak is committed to protecting the privacy of your personal information. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you visit our website
          or use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4">We may collect the following types of information:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Personal Information:</strong> Name, email address, phone number, billing information, and travel preferences.</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and search queries.</li>
          <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
          <li><strong>Cookies:</strong> We use cookies and similar tracking technologies. See our Cookie Policy for details.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect for the following purposes:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>To process and fulfill your ticket reservations and purchases.</li>
          <li>To communicate with you about your bookings and provide customer support.</li>
          <li>To personalize your experience and improve our website and services.</li>
          <li>To send promotional offers and marketing communications (with your consent where required).</li>
          <li>To comply with legal obligations and protect our rights.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Information Sharing</h2>
        <p className="mb-4">
          We do not sell your personal information. We may share your information with:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Service providers who assist us in operating our business.</li>
          <li>Transportation partners for the purpose of fulfilling your travel.</li>
          <li>Law enforcement or government agencies when required by law.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect your personal
          information against unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-4">Depending on your location, you may have the following rights:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>The right to access your personal information.</li>
          <li>The right to correct inaccurate information.</li>
          <li>The right to delete your information.</li>
          <li>The right to restrict or object to processing.</li>
          <li>The right to data portability.</li>
          <li>The right to withdraw consent.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="mb-2">Email: privacy@amtrak.com</p>
        <p>Phone: +1 (647) 792-7095</p>
      </section>
    </div>
  );
}

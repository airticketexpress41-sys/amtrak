import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Review Amtrak's Terms and Conditions for using our website and services.",
  openGraph: {
    title: "Terms and Conditions | Amtrak",
  },
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: July 1, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using the Amtrak website and services, you agree to be bound by these
          Terms and Conditions. If you do not agree with any part of these terms, you should not
          use our website or services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Use of Services</h2>
        <p className="mb-4">You agree to use our services only for lawful purposes and in accordance with these terms. You may not:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Use the website in any way that violates applicable laws or regulations.</li>
          <li>Attempt to gain unauthorized access to any part of the website or systems.</li>
          <li>Interfere with or disrupt the operation of the website.</li>
          <li>Use any automated means to access or collect data without our permission.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
        <p className="mb-4">
          All content on this website, including text, graphics, logos, images, and software, is the
          property of Amtrak or its licensors and is protected by copyright and other intellectual
          property laws. You may not reproduce, distribute, or create derivative works without our
          express written permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
        <p className="mb-4">
          Amtrak shall not be liable for any indirect, incidental, special, consequential, or punitive
          damages arising out of or relating to your use of our website or services. Our total liability
          for any claims shall not exceed the amount you paid for the specific service giving rise to
          the claim.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Modifications</h2>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. Changes will be effective immediately
          upon posting. Your continued use of our services after any modifications constitutes your
          acceptance of the updated terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact</h2>
        <p className="mb-4">
          For questions about these Terms and Conditions, please contact us:
        </p>
        <p className="mb-2">Email: legal@amtrak.com</p>
        <p>Phone: +1 (647) 792-7095</p>
      </section>
    </div>
  );
}

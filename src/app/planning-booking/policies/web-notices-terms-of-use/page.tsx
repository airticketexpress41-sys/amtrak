import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Notices & Terms of Use",
  description:
    "Read Amtrak's website terms of use, legal notices, disclaimers, and conditions governing your use of Amtrak.com.",
  openGraph: {
    title: "Web Notices & Terms of Use | Amtrak",
  },
  alternates: {
    canonical: "/planning-booking/policies/web-notices-terms-of-use",
  },
};

export default function WebNoticesTermsOfUsePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Web Notices & Terms of Use</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: July 1, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using Amtrak.com, you agree to be bound by these Terms
          of Use. If you do not agree with any part of these terms, you must not
          use our website. These terms apply to all visitors, users, and others
          who access or use the site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Use of Content</h2>
        <p className="mb-4">
          All content on this website, including text, graphics, logos, images,
          and software, is the property of Amtrak or its licensors and is
          protected by copyright and other intellectual property laws. You may
          not reproduce, distribute, modify, or create derivative works without
          prior written consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Disclaimer & Limitation of Liability</h2>
        <p className="mb-4">
          Amtrak provides this website on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
          We make no representations or warranties of any kind, express or
          implied, regarding the operation or availability of the site. Amtrak
          shall not be liable for any damages arising from your use of this site.
        </p>
        <p className="mb-4">
          Information on this site is subject to change without notice. While we
          strive to keep information accurate and current, Amtrak does not
          guarantee the completeness or accuracy of any content.
        </p>
      </section>
    </div>
  );
}

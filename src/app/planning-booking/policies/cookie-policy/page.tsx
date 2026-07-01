import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy & Preferences",
  description:
    "Learn how Amtrak uses cookies and similar tracking technologies. Manage your cookie preferences and understand your privacy choices.",
  openGraph: {
    title: "Cookie Policy & Preferences | Amtrak",
  },
  alternates: {
    canonical: "/planning-booking/policies/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy & Preferences</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: July 1, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">What Are Cookies</h2>
        <p className="mb-4">
          Cookies are small text files stored on your device when you visit a
          website. They help us remember your preferences, improve site
          performance, and provide a personalized experience. We also use
          similar technologies such as pixels and local storage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">How We Use Cookies</h2>
        <p className="mb-4">We use the following categories of cookies:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
          <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our site.</li>
          <li><strong>Functional Cookies:</strong> Remember your preferences and settings.</li>
          <li><strong>Targeting Cookies:</strong> Used to deliver relevant advertisements and measure their effectiveness.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Managing Your Preferences</h2>
        <p className="mb-4">
          You can manage your cookie preferences at any time through your browser
          settings or our cookie consent manager. Disabling certain cookies may
          affect your experience on our website. Essential cookies cannot be
          turned off as they are necessary for the site to function.
        </p>
      </section>
    </div>
  );
}

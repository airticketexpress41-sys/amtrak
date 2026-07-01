import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Amtrak customer service. Find phone numbers, email addresses, and contact information for reservations, support, and inquiries.",
  openGraph: {
    title: "Contact Us | Amtrak",
  },
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Customer Service</h2>
        <p className="mb-4">
          Our customer service team is available to assist you with reservations,
          ticketing, and general inquiries. Reach us by phone or email during
          business hours.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Phone:</strong> +1 (800) 872-7245</li>
          <li><strong>Email:</strong> contact@amtrak.com</li>
          <li><strong>TTY:</strong> +1 (800) 523-6590</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Mailing Address</h2>
        <p className="mb-2">Amtrak Customer Relations</p>
        <p className="mb-2">1 Massachusetts Ave NW</p>
        <p className="mb-4">Washington, DC 20001</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
        <p className="mb-4">
          For general inquiries, you can also reach us through our online contact
          form. Please allow 1–2 business days for a response. For urgent matters,
          we recommend calling our customer service line.
        </p>
      </section>
    </div>
  );
}

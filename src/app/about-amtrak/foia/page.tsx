import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FOIA",
  description:
    "Submit a Freedom of Information Act request to Amtrak and learn about the FOIA process.",
  openGraph: {
    title: "FOIA | Amtrak",
  },
  alternates: {
    canonical: "/about-amtrak/foia",
  },
};

export default function FOIAPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Freedom of Information Act (FOIA)</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">About FOIA</h2>
        <p className="mb-4">
          The Freedom of Information Act (FOIA) provides the public with the right to request
          access to records from any federal agency. As a federally funded corporation, Amtrak is
          subject to FOIA and makes certain records available to the public upon request.
        </p>
        <p className="mb-4">
          FOIA is based on the principle that the public has a right to know about the activities
          of their government and its agencies. We are committed to transparency and timely
          responses to all valid FOIA requests.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">How to Submit a Request</h2>
        <p className="mb-4">
          To submit a FOIA request to Amtrak, please provide a written description of the records
          you are seeking. Include your full name, contact information, and as much detail as
          possible about the records you are requesting to help us locate them efficiently.
        </p>
        <p className="mb-2">Requests may be submitted via:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Email:</strong> foia@amtrak.com</li>
          <li>Mail: Amtrak FOIA Office, 1 Massachusetts Ave NW, Washington, DC 20001</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Processing and Fees</h2>
        <p className="mb-4">
          We will respond to your request within 20 business days. Certain records may be exempt
          from disclosure under FOIA exemptions. Fees may apply for search, review, and
          duplication of records, and you will be notified in advance if any fees are applicable.
        </p>
      </section>
    </div>
  );
}

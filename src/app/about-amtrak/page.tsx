import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Amtrak",
  description:
    "Learn about Amtrak, America's intercity passenger rail service, our mission, history, and commitment to sustainable transportation.",
  openGraph: {
    title: "About Amtrak | Amtrak",
  },
  alternates: {
    canonical: "/about-amtrak",
  },
};

export default function AboutAmtrakPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">About Amtrak</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Who We Are</h2>
        <p className="mb-4">
          Amtrak is America's intercity passenger rail service, operating more
          than 300 trains daily across 46 states, the District of Columbia, and
          three Canadian provinces. Established in 1971, we connect communities
          and provide a safe, efficient, and environmentally responsible
          transportation alternative.
        </p>
        <p className="mb-4">
          Our network spans over 21,000 route miles, serving more than 500
          destinations. We carry millions of passengers each year, offering a
          range of service levels from premium long-distance sleepers to
          convenient corridor routes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          Amtrak is dedicated to providing safe, reliable, and comfortable
          intercity rail travel. We strive to deliver exceptional customer
          service while investing in modern infrastructure and sustainable
          practices that reduce our environmental footprint.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Sustainability</h2>
        <p className="mb-4">
          Rail travel is one of the most energy-efficient modes of transportation.
          Amtrak is committed to reducing emissions, improving energy efficiency,
          and promoting rail as a green alternative to driving and flying. Our
          goal is to achieve net-zero emissions by 2050.
        </p>
      </section>
    </div>
  );
}

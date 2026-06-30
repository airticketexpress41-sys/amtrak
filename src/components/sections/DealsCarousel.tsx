import Link from "next/link";

const deals = [
  {
    title: "Save up to 60% off small group travel with Share Fares.",
    image: "/images/hero-2.png",
    link: "https://www.amtrak.com/promotions/sharefares.html",
  },
  {
    title:
      "Earn 25k points, worth $650 in Amtrak travel. Offers vary. Apply here by 6/30/26.",
    image: "/images/hero-4.jpeg",
    link: "https://www.amtrak.com/guestrewards/apply",
  },
  {
    title: "Seniors and students save on travel.",
    image: "/images/hero-3.png",
    link: "https://www.amtrak.com/deals-discounts/everyday-discounts.html",
  },
  {
    title: "Go together for less. Kids ride for 50% off.",
    image: "/images/hero-1.png",
    link: "https://www.amtrak.com/deals-discounts/everyday-discounts/children-discounts.html",
  },
];

export default function DealsCarousel() {
  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-light text-amtrak-dark mb-8">
          Deals & Promotions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal, i) => (
            <Link
              key={i}
              href={deal.link}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden block"
            >
              <img
                src={deal.image}
                alt={deal.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002436] via-[rgba(0,36,54,0.3)] to-transparent" />
              <div className="relative z-10 w-full h-full flex items-end p-6">
                <h3 className="text-white text-xl lg:text-2xl font-semibold leading-tight">
                  {deal.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift Cards",
  description:
    "Purchase Amtrak gift cards for yourself or as a gift. Give the gift of rail travel to friends and family.",
  openGraph: {
    title: "Gift Cards | Amtrak",
  },
  alternates: {
    canonical: "/planning-booking/tickets-reservations/giftcards",
  },
};

export default function GiftCardsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Gift Cards</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Give the Gift of Travel</h2>
        <p className="mb-4">
          Amtrak gift cards are the perfect gift for any occasion. Whether it is a birthday,
          holiday, or thank you, an Amtrak gift card allows your loved ones to explore the
          country by rail. Gift cards can be used toward the purchase of tickets, upgrades,
          and onboard services.
        </p>
        <p className="mb-4">
          Gift cards are available for any dollar amount and are delivered electronically via
          email, making them a convenient last-minute gift option. You can also purchase
          physical gift cards at staffed Amtrak stations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">How to Purchase</h2>
        <p className="mb-4">
          To purchase an Amtrak eGift card, visit our gift card page, select the amount you
          wish to give, and provide the recipient&apos;s email address. The gift card will be sent
          instantly. Physical gift cards can be purchased at any staffed Amtrak station during
          business hours.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Using Your Gift Card</h2>
        <p className="mb-4">
          Gift cards can be redeemed online during the booking process, through the Amtrak
          mobile app, or at staffed station locations. Simply enter the gift card number and
          PIN at checkout. Gift cards never expire and can be used for multiple purchases
          until the balance is depleted.
        </p>
      </section>
    </div>
  );
}

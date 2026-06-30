"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const tabs = [
  { id: "seating", label: "Seating" },
  { id: "private-rooms", label: "Private Rooms" },
  { id: "food-dining", label: "Food & Dining" },
  { id: "baggage", label: "Baggage" },
];

const tabContent: Record<
  string,
  {
    title: string;
    description: string;
    link: string;
    linkText: string;
    image: string;
  }
> = {
  seating: {
    title: "Never Sit in the Middle Seat",
    description:
      "Because on Amtrak there aren't any. Whether it's a long-awaited trip or impromptu getaway, we make travel easy with a variety of seating options, no middle seats and more comfort on your way there.",
    link: "https://www.amtrak.com/onboard/onboard-accommodations-for-all-your-needs/seating-accommodations.html",
    linkText: "Seat options and features",
    image: "/images/experience-seating.png",
  },
  "private-rooms": {
    title: "Relax in a First Class Private Room",
    description:
      "Available on many routes across the country, a private room is the perfect option for travelers seeking added comfort and amenities, including complimentary meals, priority boarding and more.",
    link: "https://www.amtrak.com/onboard/onboard-accommodations-for-all-your-needs/sleeper-car-accommodations.html",
    linkText: "Explore private room accommodations",
    image: "/images/experience-private-rooms.jpeg",
  },
  "food-dining": {
    title: "Savor the Journey",
    description:
      "From sit-down meals to grab-and-go snacks, our trains have several options for onboard dining. Find out more about meals on overnight trains, Cafe services and premium options for our Acela customers.",
    link: "https://www.amtrak.com/onboard/meals-dining.html",
    linkText: "Dining options and menus",
    image: "/images/experience-food-dining.jpeg",
  },
  baggage: {
    title: "Happy Packing",
    description:
      "Overpackers, rejoice. We offer generous baggage allowances, making your travel experience hassle-free. Bring up to two checked bags, two carry-ons and one personal item onboard with you.",
    link: "https://www.amtrak.com/onboard/baggage-policy.html",
    linkText: "Baggage information and services",
    image: "/images/experience-baggage.jpeg",
  },
};

export default function ExperienceTabs() {
  const [activeTab, setActiveTab] = useState("seating");

  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-light text-amtrak-dark mb-8">
          Experience the Magic of Amtrak
        </h2>

        {/* Tab buttons */}
        <div className="flex border-b border-amtrak-border mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-semibold tracking-wider whitespace-nowrap transition-colors border-b-2 -mb-px ${
                activeTab === tab.id
                  ? "border-amtrak-primary text-amtrak-primary"
                  : "border-transparent text-amtrak-gray hover:text-amtrak-dark"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-amtrak-dark mb-4">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-amtrak-gray leading-relaxed mb-6">
                {tabContent[activeTab].description}
              </p>
              <Link
                href={tabContent[activeTab].link}
                className="inline-flex items-center text-amtrak-primary font-semibold hover:underline group"
              >
                {tabContent[activeTab].linkText}
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="aspect-[3/2] rounded-xl overflow-hidden shadow-lg">
              <img
                src={tabContent[activeTab].image}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

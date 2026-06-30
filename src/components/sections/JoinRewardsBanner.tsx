"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function JoinRewardsBanner() {
  return (
    <section className="bg-amtrak-blue">
      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6">
            {/* Logo */}
            <img
              src="/images/amtrak-guest-rewards.svg"
              alt="Amtrak Guest Rewards"
              className="h-10 w-auto"
              loading="lazy"
            />
            <div className="text-white/90 max-w-xl text-center lg:text-left">
              <h2 className="sr-only">Amtrak Guest Rewards</h2>
              <p className="text-lg">
                Every ride counts as an Amtrak Guest Rewards member. Earn points
                toward reward travel, upgrades and more.
              </p>
            </div>
          </div>
          <Link
            href="/guestrewards/enroll.html"
            className="inline-block bg-white text-amtrak-blue font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap"
          >
            JOIN NOW
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

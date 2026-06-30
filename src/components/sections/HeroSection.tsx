"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[400px] lg:min-h-[434px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: "url(/images/hero-1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlay (matches original: linear-gradient(90deg, rgba(0,36,54,1) 20%, rgba(0,36,54,0) 71%)) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,36,54,1)] via-[rgba(0,36,54,0.8)] to-transparent lg:to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-3xl lg:text-5xl font-light text-white leading-tight mb-4">
            <span className="font-light">Book Flex Fares & Travel With Ease</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/90 mb-8">
            Fully refundable and no cancellation fees before departure.
          </p>
          <Link
            href="/promotions/flex-fares.html"
            className="inline-block bg-white text-amtrak-blue font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

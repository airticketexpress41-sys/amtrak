"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TrackATrain() {
  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-light text-amtrak-dark mb-8">
          Amtrak Track-A-Train
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row bg-white rounded-xl shadow-md overflow-hidden"
        >
          {/* Image/GIF */}
          <div className="lg:w-1/3 flex items-center justify-center min-h-[200px] bg-white">
            <img
              src="/images/track-train.gif"
              alt="Amtrak train tracking"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
            <p className="text-xl lg:text-2xl font-semibold text-amtrak-dark mb-4">
              Real Time Updates. We make it fun to track our trains.
            </p>
            <Link
              href="https://www.amtrak.com/track-your-train.html"
              className="inline-flex items-center text-amtrak-primary font-semibold hover:underline group"
            >
              Follow along as we connect America.
              <span className="inline-block ml-2 text-xl group-hover:translate-x-1 transition-transform">
                ›
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

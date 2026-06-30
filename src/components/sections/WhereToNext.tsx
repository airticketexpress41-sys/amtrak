"use client";

import { motion } from "framer-motion";
import Link from "next/link";


export default function WhereToNext() {
  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-md overflow-hidden"
        >
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/images/travel-planning-map.jpg"
              alt="Amtrak travel planning map"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-light text-amtrak-dark mb-4">
              Where To Next?
            </h2>
            <p className="text-amtrak-gray font-semibold leading-relaxed mb-6">
              Beaches, mountains, national parks and more of the most scenic
              views in America. Discover how Amtrak can take you with our
              interactive trip planning map. Explore routes and stations, see
              where stations connect and even book your dream trip right here.
            </p>
            <Link
              href="https://www.amtrak.com/plan-your-trip.html"
              className="inline-flex items-center text-amtrak-primary font-semibold hover:underline group"
            >
              Start Planning
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

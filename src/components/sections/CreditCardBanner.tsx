"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

export default function CreditCardBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-white border-t border-amtrak-border sticky bottom-0 z-40"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col lg:flex-row items-center gap-4">
              {/* Card image */}
              <img
                src="/images/fnbo-card.png"
                alt="Amtrak Guest Rewards Preferred Mastercard"
                className="hidden lg:block w-20 h-auto rounded-lg shadow-md"
                loading="lazy"
              />

              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-base lg:text-lg font-semibold text-amtrak-dark">
                  Now earn 25K bonus points — worth over $650 in Amtrak travel!
                  Offers vary. Apply here by 6/30/26.
                </h3>
              </div>

              {/* CTA */}
              <Link
                href="https://www.amtrak.com/guestrewards/apply"
                className="inline-block bg-amtrak-primary hover:bg-amtrak-blue text-white font-bold px-6 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap"
              >
                Learn More
              </Link>

              {/* Close */}
              <button
                onClick={() => setVisible(false)}
                className="p-1 text-amtrak-gray hover:text-amtrak-dark transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

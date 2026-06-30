"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Menu, X, Search, User, Globe } from "lucide-react";

const navItems = [
  {
    label: "BOOK",
    href: "#",
    active: true,
  },
  {
    label: "TRAIN STATUS",
    href: "#",
    dropdown: "status",
  },
  {
    label: "MY TRIP",
    href: "#",
    dropdown: "trip",
  },
  {
    label: "PLAN",
    href: "#",
    dropdown: "plan",
  },
  {
    label: "SCHEDULES",
    href: "#",
    dropdown: "schedules",
  },
  {
    label: "DEALS",
    href: "#",
    dropdown: "deals",
  },
  {
    label: "RAIL",
    href: "/rail",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [guestRewardsOpen, setGuestRewardsOpen] = useState(false);
  const [needHelpOpen, setNeedHelpOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Skip links */}
      <div className="sr-only">
        <a href="#main-content">skip to Content</a>
        <a href="#primary-nav">skip to Navigation</a>
        <a href="#footer-nav">skip to Footer</a>
      </div>

      {/* Emergency alerts bar */}
      <div className="bg-white">
        <div className="notifications h-0"></div>
      </div>

      <nav
        id="primary-nav"
        className="navbar bg-white"
        style={{ paddingTop: "0" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-[54px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img
                  src="/images/amtrak-logo-header.svg"
                  alt="Amtrak logo"
                  className="h-[30px] w-auto"
                  title="Amtrak logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center flex-1 justify-center">
              <ul className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => {}}
                    onMouseLeave={() => {}}
                  >
                    <Link
                      href={item.href}
                      className={`px-3 py-4 text-xs font-semibold tracking-wider inline-block border-b-2 transition-colors ${
                        item.active
                          ? "text-amtrak-blue border-amtrak-blue"
                          : "text-amtrak-dark border-transparent hover:text-amtrak-primary hover:border-amtrak-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side items */}
            <div className="hidden lg:flex items-center space-x-2">
              {/* Guest Rewards */}
              <div className="relative">
                <button
                  onClick={() => setGuestRewardsOpen(!guestRewardsOpen)}
                  className="flex items-center gap-1 px-3 py-2 text-xs font-semibold tracking-wider text-amtrak-dark hover:text-amtrak-primary transition-colors"
                >
                  <span className="nav-label">Guest Rewards</span>
                  <User className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {guestRewardsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 top-full mt-1 bg-white shadow-lg border rounded-lg p-6 w-80 z-50"
                    >
                      <p>
                        Would you like to{" "}
                        <Link
                          href="#"
                          className="text-amtrak-primary font-semibold hover:underline"
                        >
                          Sign In
                        </Link>{" "}
                        or{" "}
                        <Link
                          href="#"
                          className="text-amtrak-primary font-semibold hover:underline"
                        >
                          Join
                        </Link>
                        ?
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Language */}
              <div className="relative">
                <button
                  onClick={() => setLanguageOpen(!languageOpen)}
                  className="flex items-center gap-1 px-3 py-2 text-xs font-semibold tracking-wider text-amtrak-dark hover:text-amtrak-primary transition-colors"
                >
                  <Globe className="w-3 h-3" />
                  English
                  <ChevronDown className="w-3 h-3" />
                </button>
                <AnimatePresence>
                  {languageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 top-full mt-1 bg-white shadow-lg border rounded-lg p-2 w-40 z-50"
                    >
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Español
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Français
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        中文
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Need Help */}
              <div className="relative">
                <button
                  onClick={() => setNeedHelpOpen(!needHelpOpen)}
                  className="flex items-center gap-1 px-3 py-2 text-xs font-semibold tracking-wider text-amtrak-dark hover:text-amtrak-primary transition-colors"
                >
                  <Search className="w-3 h-3" />
                  Need Help?
                </button>
                <a
                  href="tel:+16477927095"
                  className="hidden lg:block text-xs text-amtrak-primary font-semibold hover:underline px-3 pb-2"
                >
                  +1 (647) 792-7095
                </a>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-amtrak-dark"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t overflow-hidden"
            >
              <ul className="px-4 py-2 space-y-1">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="block px-3 py-3 text-sm font-semibold tracking-wider text-amtrak-dark hover:text-amtrak-primary border-b border-gray-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-3 text-sm font-semibold tracking-wider text-amtrak-dark border-b border-gray-100"
                  >
                    Guest Rewards
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-3 text-sm font-semibold tracking-wider text-amtrak-dark border-b border-gray-100"
                  >
                    English
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-3 text-sm font-semibold tracking-wider text-amtrak-dark border-b border-gray-100"
                  >
                    Need Help?
                  </Link>
                </li>
                <li>
                  <a
                    href="tel:+16477927095"
                    className="block px-3 py-3 text-sm font-semibold tracking-wider text-amtrak-primary"
                  >
                    +1 (647) 792-7095
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

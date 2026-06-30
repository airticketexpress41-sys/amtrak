import Link from "next/link";

const footerColumns = [
  {
    title: "About Amtrak",
    links: [
      { label: "About Amtrak", href: "/about-amtrak" },
      { label: "A New Era of Rail", href: "https://amtraknewera.com/", external: true },
      { label: "News & Media", href: "https://media.amtrak.com/", external: true },
      { label: "Careers", href: "https://careers.amtrak.com/", external: true },
      { label: "FOIA", href: "/about-amtrak/foia" },
      { label: "Office of Inspector General", href: "https://amtrakoig.gov/", external: true },
      { label: "Amtrak Customer Service Commitments", href: "/planning-booking/policies/amtrak-customer-service-commitments" },
    ],
  },
  {
    title: "Traveling with Us",
    links: [
      { label: "Baggage Policy & Services", href: "/onboard/baggage-policy" },
      { label: "Changing Your Reservation", href: "/planning-booking/changes-refunds/changing-a-reservation" },
      { label: "Unique Amtrak Experience", href: "/experience/why-amtrak/the-unique-amtrak-experience-with-many-benefits" },
      { label: "Trip Insurance, Reserved Parking", href: "/deals-discounts/complete-your-trip-with-hotel-car-rental-insurance-more" },
      { label: "Accessible Travel Services", href: "/planning-booking/accessible-travel-services" },
      { label: "Amtrak Vacations", href: "/deals-discounts/rail-vacations-rail-tours/all-inclusive-train-vacation-packages" },
      { label: "Gift Cards", href: "/planning-booking/tickets-reservations/giftcards" },
    ],
  },
  {
    title: "Site Tools",
    links: [
      { label: "Service Alerts & Notices", href: "/alert" },
      { label: "Sign Up for Delay Alerts", href: "/tickets/delay-alerts" },
      { label: "Terms and Conditions", href: "/terms-and-conditions" },
      { label: "Web Notices & Terms of Use", href: "/planning-booking/policies/web-notices-terms-of-use" },
      { label: "Amtrak Store", href: "https://www.store.amtrak.com/", external: true },
      { label: "Cookie Policy & Preferences", href: "/planning-booking/policies/cookie-policy" },
      { label: "Privacy Policy", href: "/planning-booking/policies/privacy-policy" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "+1 (647) 792-7095", href: "tel:+16477927095" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/amtrak", icon: "facebook" },
  { label: "Twitter", href: "https://www.twitter.com/amtrak", icon: "twitter" },
  { label: "Instagram", href: "https://www.instagram.com/amtrak", icon: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/amtrak", icon: "linkedin" },
  { label: "YouTube", href: "https://www.youtube.com/amtrak", icon: "youtube" },
  { label: "Pinterest", href: "https://www.pinterest.com/amtraktravels/", icon: "pinterest" },
];

export default function Footer() {
  return (
    <footer id="footer-nav" className="bg-amtrak-dark text-white">
      {/* Top section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Download App */}
            <div>
              <p className="text-sm font-semibold mb-3 tracking-wider">
                Download the Amtrak App.
              </p>
              <div className="flex gap-3">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.amtrak.rider"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  Play Store
                </Link>
                <Link
                  href="https://apps.apple.com/us/app/amtrak/id405074003"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  App Store
                </Link>
              </div>
            </div>

            {/* Credit card promo */}
            <div>
              <p className="text-sm mb-2">
                Earn 25K bonus points. Offers vary. Apply here by 6/30/26.
              </p>
              <Link
                href="/guestrewards/apply"
                className="text-amtrak-primary text-sm font-semibold hover:underline"
              >
                Learn More
              </Link>
              <div className="mt-2 w-12 h-20 bg-gradient-to-br from-blue-800 to-blue-600 rounded shadow-md"></div>
            </div>

            {/* Rewards */}
            <div>
              <p className="text-sm mb-2">
                Redeem Amtrak Guest Rewards points for reward travel, upgrades,
                lounge passes and more.
              </p>
              <Link
                href="/guestrewards/ways-to-redeem/amtraktravel"
                className="text-amtrak-primary text-sm font-semibold hover:underline"
              >
                More About Redeeming Points
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-bold mb-4 tracking-wider uppercase">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                        {link.external && (
                          <span className="sr-only">(opens in a new tab)</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/">
            <img
              src="/images/amtrak-logo-footer.svg"
              alt="Amtrak logo"
              className="h-[18px] w-auto"
            />
          </Link>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label={`Amtrak on ${social.label}`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  {social.icon === "facebook" && (
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  )}
                  {social.icon === "twitter" && (
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  )}
                  {social.icon === "instagram" && (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  )}
                  {social.icon === "linkedin" && (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  )}
                  {social.icon === "youtube" && (
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  )}
                  {social.icon === "pinterest" && (
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.905 2.168-2.905 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.377 11.985-11.987C23.97 5.367 18.626.002 12.017.002z" />
                  )}
                </svg>
                <span className="sr-only">
                  {social.label} opens in a new window
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-white/50">
          <p>© 2026 National Railroad Passenger Corporation</p>
        </div>
      </div>
    </footer>
  );
}

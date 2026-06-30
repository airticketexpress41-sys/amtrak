export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Amtrak",
    url: "https://www.amtrak.com",
    logo: "https://www.amtrak.com/images/amtrak-logo-header.svg",
    sameAs: [
      "https://www.facebook.com/amtrak",
      "https://www.twitter.com/amtrak",
      "https://www.instagram.com/amtrak",
      "https://www.linkedin.com/company/amtrak",
      "https://www.youtube.com/amtrak",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Amtrak",
    url: "https://www.amtrak.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.amtrak.com/search?from={from}&to={to}&date={date}",
      },
      "query-input": "required name=search_term",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

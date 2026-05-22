import brandDNA from '../config/brand-dna';

const COMPANY = brandDNA.company.name;
const CITY = brandDNA.address.city;
const STATE = brandDNA.address.state;
const BASE_URL = (brandDNA.company.url || '').replace(/\/$/, '');
const PHONE = brandDNA.contact.phone;
const ADDRESS = brandDNA.address;
const RATING = brandDNA.reviews.rating || 4.7;
const REVIEW_COUNT = brandDNA.reviews.googleCount || brandDNA.reviews.totalReviewCount || 114;
const LICENSE = brandDNA.company.licenseNumber || '';
const META_DESC = brandDNA.meta.description;

export function homepageTitle() {
  return brandDNA.meta.title || `${COMPANY} | ${CITY}, ${STATE} Roofing Contractor`;
}

export function serviceTitle(serviceName) {
  return `${serviceName} in ${CITY}, ${STATE} | ${COMPANY}`;
}

export function cityTitle(displayCity) {
  return `Roofing Contractor in ${displayCity}, ${STATE} | ${COMPANY}`;
}

export function pageTitle(label) {
  return `${label} | ${COMPANY}`;
}

export function canonical(path) {
  return `${BASE_URL}${path}`;
}

export function serviceDesc(service) {
  if (service && service.body) {
    return `${service.name} in ${CITY}, ${STATE} - ${service.body} Call ${PHONE} for a free estimate.`;
  }
  return `Professional roofing services in ${CITY}, ${STATE}. Call ${PHONE} for a free estimate.`;
}

export function cityDesc(displayCity) {
  return `${COMPANY} serves ${displayCity}, ${STATE}. Local roofing contractor with ${REVIEW_COUNT} five-star reviews. Free inspection. Call ${PHONE}.`;
}

export function homepageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RoofingContractor',
        '@id': `${BASE_URL}/#business`,
        name: COMPANY,
        url: BASE_URL,
        telephone: PHONE,
        email: brandDNA.contact.email,
        description: brandDNA.company.description,
        address: {
          '@type': 'PostalAddress',
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.state,
          postalCode: ADDRESS.zip,
          addressCountry: 'US',
        },
        geo: ADDRESS.lat && ADDRESS.lng ? {
          '@type': 'GeoCoordinates',
          latitude: ADDRESS.lat,
          longitude: ADDRESS.lng,
        } : undefined,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: String(RATING),
          reviewCount: String(REVIEW_COUNT),
          bestRating: '5',
          worstRating: '1',
        },
        hasMap: brandDNA.contact.googleMapsUrl || undefined,
        priceRange: '$$',
        currenciesAccepted: 'USD',
        paymentAccepted: 'Cash, Credit Card, Check',
        areaServed: (brandDNA.serviceAreas || []).map((area) => ({
          '@type': 'City',
          name: area.replace(/, [A-Z]{2}$/, '').replace(/,\s*[A-Z]{2}$/, ''),
        })),
        sameAs: [
          brandDNA.social.facebook,
          brandDNA.social.instagram,
          brandDNA.social.linkedin,
        ].filter(Boolean),
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: COMPANY,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${BASE_URL}/?s={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };
  return JSON.stringify(schema);
}

export function serviceSchema(service, path) {
  if (!service) return null;
  const faqs = (brandDNA.faq || [])
    .filter((f) => !f.category || f.category === 'general' || f.category === 'roof-replacement')
    .slice(0, 5);
  const graph = [
    {
      '@type': 'Service',
      '@id': `${BASE_URL}${path}#service`,
      name: service.name,
      description: service.body || `Professional ${service.name} in ${CITY}, ${STATE}.`,
      provider: {
        '@type': 'RoofingContractor',
        '@id': `${BASE_URL}/#business`,
        name: COMPANY,
      },
      areaServed: {
        '@type': 'State',
        name: STATE,
      },
      url: `${BASE_URL}${path}`,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: service.name, item: `${BASE_URL}${path}` },
      ],
    },
  ];
  if (faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

export function citySchema(displayCity, citySlug) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RoofingContractor',
        name: COMPANY,
        url: BASE_URL,
        telephone: PHONE,
        address: {
          '@type': 'PostalAddress',
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.state,
          postalCode: ADDRESS.zip,
          addressCountry: 'US',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: String(RATING),
          reviewCount: String(REVIEW_COUNT),
          bestRating: '5',
          worstRating: '1',
        },
        areaServed: {
          '@type': 'City',
          name: displayCity,
          containedInPlace: { '@type': 'State', name: STATE },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${BASE_URL}/areas` },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${displayCity}, ${STATE}`,
            item: `${BASE_URL}/locations/${citySlug}`,
          },
        ],
      },
    ],
  };
  return JSON.stringify(schema);
}

export function reviewsPageSchema() {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'RoofingContractor',
      name: COMPANY,
      url: BASE_URL,
    },
    ratingValue: String(RATING),
    reviewCount: String(REVIEW_COUNT),
    bestRating: '5',
    worstRating: '1',
  });
}

export function faqPageSchema(faqItems) {
  const items = (faqItems || brandDNA.faq || []).slice(0, 10);
  if (items.length === 0) return null;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  });
}

export { COMPANY, CITY, STATE, BASE_URL, PHONE, RATING, REVIEW_COUNT, LICENSE, META_DESC };

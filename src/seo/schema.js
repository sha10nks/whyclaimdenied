export const generateFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateArticleSchema = ({ headline, description, canonicalUrl, imageUrl }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    "author": {
      "@type": "Organization",
      "name": "WhyClaimDenied",
    },
    "publisher": {
      "@type": "Organization",
      "name": "WhyClaimDenied",
    },
  };

  if (imageUrl) {
    schema.image = imageUrl;
  }

  return schema;
};

export const generateBreadcrumbSchema = ({ baseUrl, items }) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.path}`,
    })),
  };
};

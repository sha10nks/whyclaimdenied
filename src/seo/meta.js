export const getMetaData = (page) => {
  const meta = {
    home: {
      title: "Why Insurance Claims Get Denied in California - Complete Guide",
      description: "Learn why auto and health insurance claims get denied in California. A guide to understanding denial reasons and what to do next."
    },
    claimDenied: {
      title: "What to Do When Your Claim is Denied in California",
      description: "Step-by-step guide on handling denied insurance claims in California. Understand your rights and the appeals process."
    }
  };

  return meta[page] || meta.home;
};

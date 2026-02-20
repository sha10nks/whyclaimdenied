import { BASE_URL } from '../seo/meta.js';

const pascalFromSlug = (slug) =>
  String(slug || '')
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');

export const addStateFullStack = ({ slug, label }) => {
  const s = String(slug || '').toLowerCase();
  const name = String(label || '');
  const pascal = pascalFromSlug(s);

  const build = ({ type, postSlug, title, description, moduleSuffix, internalLinks }) => {
    const path = `/blog/${s}/${postSlug}`;
    return {
      type,
      state: s,
      slug: postSlug,
      title,
      description,
      date: new Date().toISOString().slice(0, 10),
      readingTime: '8 min',
      path,
      canonicalUrl: `${BASE_URL}${path}`,
      internalLinks,
      module: `../pages/blog/${s}/Blog${pascal}${moduleSuffix}.jsx`,
    };
  };

  const hubAuto = `${BASE_URL}/auto-insurance-claims-denied-${s}`;
  const hubHealth = `${BASE_URL}/health-insurance-claims-denied-${s}`;

  return {
    state: { slug: s, label: name },
    posts: [
      build({
        type: 'auto',
        postSlug: 'why-auto-claims-denied',
        title: `Why Auto Insurance Claims Get Denied in ${name}`,
        description: `Common ${name} denial reasons and what to do next.`,
        moduleSuffix: 'WhyAutoDenied',
        internalLinks: [hubAuto],
      }),
      build({
        type: 'auto',
        postSlug: 'how-appeal-auto-claim',
        title: `How to Appeal a Denied Auto Insurance Claim in ${name}`,
        description: `A step-by-step ${name} appeal checklist and evidence guide.`,
        moduleSuffix: 'HowAppealAuto',
        internalLinks: [hubAuto, `${BASE_URL}/blog/${s}/why-auto-claims-denied`],
      }),
      build({
        type: 'case-auto',
        postSlug: 'case-auto-success',
        title: `${name} Auto Claim Appeal Success Story`,
        description: `A real-world case example of overturning an auto claim denial in ${name}.`,
        moduleSuffix: 'CaseAutoSuccess',
        internalLinks: [hubAuto, `${BASE_URL}/blog/${s}/how-appeal-auto-claim`],
      }),
      build({
        type: 'health',
        postSlug: 'why-health-claims-denied',
        title: `Why Health Insurance Claims Get Denied in ${name}`,
        description: `The most common ${name} health denial patterns and next steps.`,
        moduleSuffix: 'WhyHealthDenied',
        internalLinks: [hubHealth],
      }),
      build({
        type: 'health',
        postSlug: 'how-appeal-health-claim',
        title: `How to Appeal a Denied Health Insurance Claim in ${name}`,
        description: `How to build a stronger appeal and use ${name} review options.`,
        moduleSuffix: 'HowAppealHealth',
        internalLinks: [hubHealth, `${BASE_URL}/blog/${s}/why-health-claims-denied`],
      }),
      build({
        type: 'case-health',
        postSlug: 'case-health-success',
        title: `${name} Health Claim Appeal Success Story`,
        description: `A case example of appealing a ${name} health denial successfully.`,
        moduleSuffix: 'CaseHealthSuccess',
        internalLinks: [hubHealth, `${BASE_URL}/blog/${s}/how-appeal-health-claim`],
      }),
    ],
  };
};

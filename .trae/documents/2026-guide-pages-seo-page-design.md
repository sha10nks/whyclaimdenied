# Page Design Spec — Guides Expansion (Desktop-first)

## Global Styles (site-wide)
- Layout system: Hybrid CSS Grid (page scaffolding) + Flexbox (nav rows, card rows).
- Max content width: 1100–1200px; gutters 24px desktop, 16px mobile.
- Typography: 16px base; H1 36–42px, H2 24–28px, H3 18–20px; line-height 1.6 for long-form guides.
- Color: neutral background (#ffffff / #f8fafc), primary accent (brand blue), semantic callouts (info/warn).
- Link states: underline on hover; visited links slightly muted; focus-visible outline for accessibility.
- Components: Card (title, 1–2 line summary, tags), Callout box, Checklist list, Steps list, Breadcrumbs.

---

## 1) Home
### Layout
- Desktop-first: two-column hero (copy left, featured guides right), then stacked sections.

### Meta Information
- Title: WhyClaimDenied — Guides for Denied Insurance Claims
- Description: High-intent guides explaining denials and next steps.
- Canonical: existing (must not change).
- Open Graph: title/description + site name.

### Page Structure
1. Header (sticky)
2. Hero
3. “Start here” guides row
4. Existing state hubs entry section
5. Footer

### Sections & Components
- Header
  - Left: logo/name
  - Primary nav: **Guides (first)**, Blog, About, Contact
  - Secondary: optionally “Auto” / “Health” quick links (do not remove existing nav items; reorder only)
- Hero
  - H1: clear promise
  - Primary CTA: “Browse Guides” -> /guides
  - Secondary CTA: “Find your state page” (existing entry)
- Start here
  - 6–8 guide cards (highest-intent)
- State hubs
  - Maintain existing links; add subtle “Recommended guide” links beneath each hub link.

---

## 2) Guides Hub (/guides)
### Layout
- Above-the-fold: title + short intro + filter controls.
- Main: card grid (3 columns desktop, 2 tablet, 1 mobile).

### Meta Information
- Title: Insurance Claim Denial Guides
- Description: Browse step-by-step guides for common denial reasons and appeals.
- Canonical: /guides
- OG: title/description.

### Page Structure
1. Breadcrumbs (Home > Guides)
2. Header block
3. Filters
4. Guide card grid

### Sections & Components
- Filters (client-side only)
  - Claim type: Auto / Health / Both
  - Topic: Appeals, Paperwork, Deadlines, Denial reasons
  - Clear filters
- Guide cards
  - Title + short summary
  - Tags (Auto/Health + topic)
  - CTA: “Read guide”
- SEO requirements
  - All 25 guides must be present as plain anchor links in the DOM (no hidden/infinite scroll).

---

## 3) Guide Detail (/guides/:slug)
### Layout
- Long-form single column with a right-side sticky “On this page” table of contents on desktop.

### Meta Information
- Title: {Guide Title} | WhyClaimDenied
- Description: 150–160 char summary aligned to query intent.
- Canonical: self-referential /guides/{slug}
- OG: title/description; image optional.

### Page Structure
1. Breadcrumbs (Home > Guides > {Guide})
2. H1 + intro summary
3. “Quick answers” callout (optional)
4. Main sections (Steps, Checklist, FAQs)
5. “What to do next” (primary internal linking)
6. Footer

### Sections & Components
- Above-the-fold “What to do next”
  - 3–6 prominent links into existing denial hubs/reason pages (do not change those URLs)
- FAQ
  - Accordion UI
  - Emit FAQPage JSON-LD (only once)
- Breadcrumb schema
  - Emit BreadcrumbList JSON-LD with canonical paths

---

## 4) Existing Denial Pages (template update only; no route changes)
### Design additions
- Insert a **Related Guides** panel near the top (below intro) linking to 3–5 relevant /guides/* pages.
- In the “next steps” section, link to the most relevant Guide first, then to other denial reason pages.

### SEO safety rules
- Preserve existing canonical tags exactly.
- Avoid adding new canonicals that point to Guides from denial pages (no canonical consolidation).
- Ensure only valid schema types are included per page and do not duplicate FAQPage JSON-LD across multiple components.
# Page Design Spec — “Crawled not indexed” SEO Hardening (Desktop-first)

## Global Styles (sitewide)
- Layout system: hybrid **CSS Grid** (page shell) + **Flexbox** (nav rows, card rows).
- Max content width: 1100–1200px; gutters 24px desktop, 16px mobile.
- Typography scale: H1 36–44px, H2 26–32px, body 16–18px, line-height 1.6.
- Link style: underline on hover + clear visited state for content credibility.
- Buttons: solid primary for “Next step” CTAs; avoid excessive CTA density.

## Shared SEO / Metadata (sitewide)
- Title: unique per URL, include topic + state where relevant.
- Description: unique per URL, 140–160 chars, match on-page content.
- Canonical: self-referential, matches preferred URL format.
- OpenGraph: `og:title`, `og:description`, `og:url`, `og:type=article` (detail pages) or `website` (hubs/home).
- Robots meta: default index/follow for public pages.

## Shared Components (sitewide)
1) **Header / Primary Nav**
- Left: logo link to `/`.
- Primary links: Guides, Blog, Contact.
- Secondary links (optional): About.
- Behavior: sticky on desktop; collapsible menu on mobile.

2) **Breadcrumbs**
- On all non-home content pages.
- Format: Home → Section (Guides / Auto state hub / Health state hub / Blog) → Current page.

3) **“Related” Internal Linking Block**
- Placement: after first 1–2 sections and again near the end.
- Contents (3–8 links): parent hub, related guides, sibling reasons, and the opposite vertical (auto↔health) when relevant.

4) **Footer**
- Legal links: Privacy, Terms.
- Sitemap link (optional) and “All guides” link.

---

## Page: Home (/)
### Layout
- Grid: 2-row shell: Header, Main, Footer.
- Main: stacked sections.

### Meta Information
- Title: brand-level (not state-specific).
- Canonical: `https://whyclaimdenied.com/`.

### Sections & Components
1) Hero
- H1: “What to do when an insurance claim is denied”.
- Short intro paragraph.
- Primary CTA: “Browse Guides” → `/guides`.

2) Primary Hubs
- Card grid for major entry points (Guides, Auto by state, Health by state, Blog).

3) Featured internal links
- 6–12 deep links to the most important pages you want indexed.

---

## Page: Guides Hub (/guides)
### Layout
- Two-column desktop: left filter/nav (optional), right content list.

### Meta Information
- Unique title/description; canonical `/guides`.

### Sections & Components
1) H1 + intro
2) Guide list (cards)
- Each card: title, 1–2 line description, “Read” link.
- Ensure all guide links are plain `<a href>` crawlable.

3) “Start here” pathway
- A short ordered list linking 3–5 guides in sequence.

---

## Page Template: Guide Detail (/guides/:slug)
### Layout
- Single-column article; right rail optional on desktop.

### Meta Information
- `og:type=article`; canonical self.

### Sections & Components
1) Article header
- H1, updated date (optional), summary.

2) Main content
- Use short sections with descriptive H2s.

3) Next-step internal linking
- “What to do next” block: links to relevant state hubs and key denial reasons.

4) FAQ block
- Plain HTML questions/answers (supports structured data if implemented).

---

## Page Template: State Hub (Auto/Health) (/auto-insurance-claims-denied-:state and /health-insurance-claims-denied-:state)
### Layout
- Single-column with a large “Reasons grid” section.

### Meta Information
- Title must include claim type + state; canonical self.

### Sections & Components
1) H1 + short state-specific framing
2) Reasons grid
- Cards linking to each denial reason page.

3) Related Guides
- 3–6 links to guides that explain process (deadlines, letters, documentation).

---

## Page Template: Denial Reason Detail (Auto/Health) (…/:reason)
### Layout
- Article layout.

### Meta Information
- Title includes reason + state + claim type; canonical self.

### Sections & Components
1) H1 + “Why this happens”
2) “What to request from insurer” checklist
3) “How to appeal” steps
4) Links
- Back to state hub (top and bottom).
- 3–6 related reasons + relevant guides.

---

## Page Template: Blog Post (/blog/:state/:slug)
### Layout
- Article layout with “Related Guides” below the intro.

### Meta Information
- Unique title/description; canonical self.

### Sections & Components
1) H1 + intro
2) Main content
3) Related Guides
4) Next/Previous post links (optional)

---

## SEO QA Overlay (applies to every page)
For each of the 16 URLs, verify visually (and via view-source on prerendered HTML):
- One H1, meaningful body copy, and crawlable internal links.
- Exactly one canonical tag matching the final URL.
- Title + description are unique and match on-page topic.
- Page is reachable from at least one hub page.
- URL appears in sitemap if it’s intended to be indexed.

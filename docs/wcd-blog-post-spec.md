# WCD Blog Post Spec (Production Standard)

This is the canonical specification for all state blog posts on WhyClaimDenied.com.

## Scope

- Applies to every post under `/blog/{state}/{slug}`.
- Posts must be consistent in layout, styling, SEO, internal linking, and content depth.
- Posts must be data-driven and validated; thin posts must not ship.

## A) Content Minimums (Hard Rules)

Every post must render these sections in this exact order.

### 1) Hero

- H1 title
- 1–2 sentence summary (not one short sentence for the entire article)

### 2) Key Takeaways

- 4–6 bullets

### 3) What This Means in {State}

- 2–4 short paragraphs

### 4) Step-by-Step: What To Do Next

- 6–10 numbered steps

### 5) What to Request From the Insurer

- checklist bullets

### 6) Common Denial Reasons (topic-specific)

- 5–8 items
- each item must include a short explanation (not just a title)

### 7) Mistakes That Weaken Appeals

- 5–8 bullets

### 8) Timeline & Deadlines (state framing)

- general guidance
- include a “verify your policy/letter” disclaimer

### 9) Sample Appeal Structure

- headings outline
- example placeholders
- must not contain legal advice language

### 10) FAQ

- 6–10 Q/A pairs

### 11) Related Guides (auto-generated)

- must render a standardized “Related Guides” module
- includes by-state + by-topic suggestions

### 12) Browse State Hub CTA

- link back to `/blog/{state}`
- link to relevant main state guides (`/auto-insurance-claims-denied-{state}`, `/health-insurance-claims-denied-{state}`)

## Minimum Length Rule (Hard Rules)

- Guide posts target: ~1200–2000 words
- Case posts target: ~900–1400 words
- Anything < 800 words is invalid and must not ship

## B) Layout + Style Rules (Hard Rules)

- All posts must render through the same template system.
- Posts must not include global navbar/footer; those are controlled by the router page.
- Consistent container width: site `.container`.
- Consistent typography: site global CSS.
- Consistent section styling:
  - Takeaways: card/panel
  - Checklists: card/panel
  - FAQ: consistent Q/A blocks
  - Related Guides: card grid (not plain links)
- Consistent breadcrumb UI.

## C) SEO Rules (Hard Rules)

Each post must have:

- `<title>`, meta description, canonical URL
- OpenGraph basics (site already uses OG on home)
- Breadcrumb structured data (JSON-LD)
- Internal links: at least 5 internal links (state hub, 2 related posts, 2 main state guides)

SEO is centralized at the router-level post page; per-post modules must only supply structured data.

## D) Implementation Rules (Hard Rules)

- Posts are data-driven: each post exports a structured object (no freeform JSX pages).
- A validator must fail fast when:
  - any required section is missing
  - section counts are outside min/max rules
  - meta/canonical fields are missing
  - internal link count is below minimum
  - word count is below minimum


---
name: "sitemap-engine"
description: "Enterprise sitemap generator: validates canonicals and HTTP 200s, orders deterministically, splits when large. Invoke when adding pages or updating sitemap."
---

# MASTER PROMPT — GLOBAL SITEMAP ENGINE V2

ROLE
Senior technical SEO engineer for large programmatic content.

OBJECTIVE
Refactor and standardize XML sitemap generation for https://whyclaimdenied.com with canonical-only, auto-updating, non-destructive behavior, perfect GSC formatting, and scalable splitting.

CORE CANONICAL RULES
1) Canonical Enforcement
- Include only URLs matching META canonicals
- Domain must be https://whyclaimdenied.com (no www)
- No redirects, params, or trailing-slash inconsistencies
- Strict lowercase kebab-case slugs

2) HTTP Status Validation
- Validate each URL returns 200 before inclusion
- Exclude 3xx, 4xx, soft-404, and noindex paths

3) Slug Consistency
- Kebab-case only; must match routing and canonical output exactly

DETERMINISTIC ORDER
- Root pages first: /, /about, /contact, /privacy, /terms
- State hubs: auto hubs then health hubs, grouped by state
- Auto denial pages: alphabetical by slug
- Health denial pages: alphabetical by slug

TIMESTAMP FORMAT
- ISO 8601 UTC: YYYY-MM-DDTHH:MM:SS+00:00

DUPLICATE PREVENTION
- If URL exists: update <lastmod>, never duplicate

AUTO-DETECTION
- Use META and router-derived paths where applicable; validate canonical match; normalize and append in order

SCALE SAFEGUARDS
- 50,000 URL hard limit; 40,000 threshold triggers sitemap index with children: root.xml, states.xml, auto.xml, health.xml
- Keep under 50MB; split near 45MB

XML ROOT LOCK
- Header and namespace:
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

OPTIONAL TAGS (UNIFORM)
- <changefreq>weekly</changefreq>
- <priority>0.8</priority>

FINAL VALIDATION BEFORE WRITE
- Structure, canonical match, HTTP 200, no duplicates, no redirects, no params, timestamp format, deterministic ordering, URL count/size limits, UTF-8 encoding

OUTPUT
- Regenerated, production-ready sitemap.xml (or index/child sitemaps when needed)
- Never alter domain or restructure existing valid URLs; preserve and update lastmod only

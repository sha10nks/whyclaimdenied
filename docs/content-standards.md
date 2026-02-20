Title: State Content Standards

1. Pillar pages
- Include: intro, common denial reasons, laws/context section (no speculation), what to do next, appeals/complaints, 2 ad placeholders, FAQ (3–5), StateHubLinks, BlogTeasersByState.

2. Denial reason pages (8–12 each for Auto and Health)
- Sections: why this happens, documents to request, how to respond, when to escalate, link back to pillar, one ad placeholder, StateHubLinks.
- Keep language factual and verifiable; omit unverified deadlines.

3. Blog posts
- Each state: 6 posts (Auto Why, Auto How, Auto Case; Health Why, Health How, Health Case) with canonical URLs.
- Global header/footer must appear on all pages.
- Blog posts do not render header/footer inside the post template; chrome is provided by BlogLayout at the blog route level.
- Blog posts must comply with docs/wcd-blog-post-spec.md.

4. Routing/Loading
- Blog posts are auto‑loaded via import.meta.glob using the registry `module` field, pointing to `src/blog/posts/**` modules.
- Post modules export structured `post` data only; rendering is handled by the shared StandardPost template.
- Run `npm run validate:blog` before starting dev or building.

5. Naming
- Files under /src/pages/ follow: AutoClaimDenied[State][Reason].jsx and HealthClaimDenied[State][Reason].jsx; blogs under /src/pages/blog/[state]/.

6. Internal linking
- Pillar ↔ reasons vertical linking; BlogStateIndex lists all posts; StateHubLinks excludes current state.

Title: State Content Standards

1. Pillar pages
- Include: intro, common denial reasons, laws/context section (no speculation), what to do next, appeals/complaints, 2 ad placeholders, FAQ (3–5), StateHubLinks, BlogTeasersByState.

2. Denial reason pages (8–12 each for Auto and Health)
- Sections: why this happens, documents to request, how to respond, when to escalate, link back to pillar, one ad placeholder, StateHubLinks.
- Keep language factual and verifiable; omit unverified deadlines.

3. Blog posts
- Each state: 6 posts (Auto Why, Auto How, Auto Case; Health Why, Health How, Health Case) with canonical URLs.

4. Routing/Loading
- Blog post components are auto‑loaded via import.meta.glob using the registry `module` field; no manual mapping.

5. Naming
- Files under /src/pages/ follow: AutoClaimDenied[State][Reason].jsx and HealthClaimDenied[State][Reason].jsx; blogs under /src/pages/blog/[state]/.

6. Internal linking
- Pillar ↔ reasons vertical linking; BlogStateIndex lists all posts; StateHubLinks excludes current state.

# WhyClaimDenied

SEO-focused, AdSense-friendly informational site explaining why insurance claims may be denied in the United States, starting with California.

## Tech Stack

- React (functional components)
- Vite
- React Router
- Plain CSS (no Tailwind / no UI libraries)
- `react-helmet-async` for per-page meta tags and JSON-LD schema injection

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

Output directory: `dist`

## Routing

- `/` → California homepage
- `/why-claims-get-denied-california` → California deep-dive page

## Notes

- Informational content only (no legal/medical advice).
- Structure is designed to be duplicated for additional states later.

# Blog Protocol (No Manual Posts)

## Non-negotiable

- Manual creation of blog post JSX pages is not allowed.
- All blog posts must be created via the generator and must pass the blog validator.
- Thin posts are invalid and must not ship.

## Source of truth

- Post data lives in: `src/blog/posts/{state}/{slug}.js`
- Registry entries live in: `src/blog/registry.js`
- Rendering is standardized via shared templates/components.

## How to add a new state (blog)

1) Run the generator (writes post data + registry entries)

- Command: `npm run blog:add-state -- --state <stateSlug> --label "State Label"`

2) Run validation

- Command: `npm run validate:blog`

3) Start dev server and visually spot-check

- Command: `npm run dev`

## How to add a new post (existing state)

1) Use the generator:

- Command: `npm run blog:add-post -- --state <stateSlug> --slug <slug> --type <auto|health|case-auto|case-health>`
 - Command: `npm run blog:add-post -- --state <stateSlug> --slug <slug> --type <auto|health|case-auto|case-health> --label "State Label"`

2) Run validation:

- Command: `npm run validate:blog`

## What the validator enforces

- Required section presence + order
- Section counts (takeaways, steps, denial reasons, mistakes, FAQ)
- Minimum word count
- Meta fields and canonical URL
- Minimum internal link count

## Rendering rules

- Individual post modules export data only.
- Global header/footer must appear on all pages.
- Blog post header/footer is controlled by BlogLayout (route-level), not by post content.

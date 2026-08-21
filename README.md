# Jie Min — academic website

A simple, fully static academic website for GitHub Pages. It mirrors the
content and navigation of the previous Google Site and adds a Markdown-based
posts section with LaTeX rendering through MathJax.

## Edit the website

The main pages live in `app/`:

- `app/page.tsx` — home
- `app/research/page.tsx` — papers, projects, and talks
- `app/seminars/` — seminar pages
- `app/service-outreach/page.tsx` — service and mentoring
- `app/about/page.tsx` — personal interests and photography
- `app/activities/page.tsx` — workshops and conferences

Shared navigation and styling live in `app/components/SiteShell.tsx` and
`app/globals.css`.

## Add a post

Create a Markdown file in `content/posts/`. The file name becomes the URL slug.
For example, `content/posts/my-note.md` becomes `/posts/my-note/`.

Every post begins with this front matter:

```markdown
---
title: "My title"
date: "2026-08-21"
description: "A one-sentence summary."
---

Write the post here.
```

Use `$...$` for inline LaTeX and `$$...$$` for display mathematics:

```markdown
The identity $e^{i\pi}+1=0$ is inline.

$$
\int_M \omega^n > 0.
$$
```

## Preview locally

Install Node.js 20.9 or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. To verify the production export, run:

```bash
npm run build
```

The static output is written to `out/`.

## Publish on GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push a change, or run the workflow manually from the **Actions** tab.

The included `.github/workflows/deploy-pages.yml` workflow installs the site,
builds the static export, and publishes it. It handles both user sites such as
`username.github.io` and project sites such as `username.github.io/repository/`.

# Legacy Waters Environmental Services — Maryland

Marketing site for **Legacy Waters Environmental Services**, a company specializing in hydraulic dredging, aquatic vegetation harvesting, and waterway restoration across Maryland. Built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.

**Live site:** [https://legacywatersenv.com](https://legacywatersenv.com)
**Phone:** (443) 927-4337

---

## Architecture Overview

```
Legacy-Waters/
├── _config.yml                    # Site config (url, baseurl, plugins)
├── _data/
│   ├── site.yml                   # Phone, company name, location
│   ├── navigation.yml             # Header/footer nav links
│   └── services.yml               # 8 services with slugs, icons, images
├── _includes/
│   ├── head.html                  # <head> — meta, OG, Twitter, favicon, CSS, schema
│   ├── header.html                # Sticky header, logo, nav, Call Now, hamburger
│   └── footer.html                # Footer with wave divider, links, copyright
├── _layouts/
│   ├── default.html               # Base layout
│   ├── service.html               # Service subpage template (hero, intro, FAQ)
│   └── post.html                  # Blog article layout
├── css/style.css                  # Global stylesheet (full design system)
├── js/main.js                     # Shared JS (hamburger, scroll, fade-in, FAQ, form)
├── images/                        # All site images (WebP optimized)
├── assets/
│   └── hero-video.mp4             # Homepage hero background video
├── index.html                     # Homepage (video hero)
├── services.html                  # Services overview page with inline FAQ accordion
├── airmax.html                    # Airmax certification page with inline FAQ accordion + FAQPage schema
├── about.html                     # About page (team bios)
├── blog.html                      # Blog index
├── robots.txt                     # Crawl directives + sitemap
├── Gemfile                        # GitHub Pages dependencies
└── .gitignore                     # Build artifacts excluded
```

---

## Google Verification HTML

File googlecf380faee4eedd90.html stays in ROOT for continued sitemap verification

## How to Update Things Globally

### Update company info

Edit **`_data/site.yml`** — phone, email, company name, location. All pages pull from this file.

### Update services

Edit **`_data/services.yml`** — 8 services with slug, title, icon, description, and images.

### Update navigation

Edit **`_data/navigation.yml`** — header, mobile menu, and footer links.

### Update header / footer

- `_includes/header.html` for header markup
- `_includes/footer.html` for footer markup

### Update CSS / JS

- `css/style.css` — full design system
- `js/main.js` — hamburger, scroll, fade-in, FAQ, form

### Update SEO / meta

- Sitewide: `_config.yml` and `_includes/head.html`
- Per-page: front matter of each `.html` file
- Schema (sitewide `LocalBusiness`): `_includes/head.html`
- Schema (per-page): `extra_head:` field in the front matter of individual pages — this injects additional `<script type="application/ld+json">` blocks into `<head>` without touching global files. Currently used on `airmax.html` for `Service` + `FAQPage` schema. See the **FAQ Accordions & Page-Level Schema** section below for full details.

---

## How to Write a Blog Post

### Create the file

```
_posts/YYYY-MM-DD-your-post-slug.md
```

Example: `_posts/2026-05-01-spring-pond-maintenance-tips.md`

### Front matter

```yaml
---
layout: post
title: "Your Post Title Here"
date: 2026-05-01
category: "Pond Care"
author: "Legacy Waters"
image: "/images/your-image.webp"
excerpt: "Short summary for the blog card."
description: "SEO meta description (under 160 chars)."
---
```

### Write content in Markdown

Use `##` for section headings. The layout renders a cinematic hero image, title, content, prev/next links, and CTA band.

### Publish

```bash
git add _posts/2026-05-01-spring-pond-maintenance-tips.md
git commit -m "New post: Spring pond maintenance tips"
git push origin main
```

### Note on blog URLs

URLs include the category: `/pond-care/spring-pond-maintenance-tips.html`. Changing a category changes the URL.

---

## Local Development

```bash
bundle install
bundle exec jekyll serve
# Site at http://localhost:4000/
```

---

## Deployment

Auto-deploys via **GitHub Pages** on push to `main`.

Custom domain: **legacywatersenv.com** (migration complete)
- `url: "https://legacywatersenv.com"`, `baseurl: ""` set in `_config.yml`
- CNAME file present at repo root

---

## Key Files Quick Reference

| I want to change...             | Edit this file                              |
|---------------------------------|---------------------------------------------|
| Company phone / email           | `_data/site.yml`                            |
| Services                        | `_data/services.yml`                        |
| Nav links                       | `_data/navigation.yml`                      |
| Header                          | `_includes/header.html`                     |
| Footer                          | `_includes/footer.html`                     |
| Global CSS                      | `css/style.css`                             |
| Shared JS                       | `js/main.js`                                |
| Homepage                        | `index.html`                                |
| Services overview               | `services.html`                             |
| Airmax page                     | `airmax.html`                               |
| About page                      | `about.html`                                |
| Blog index                      | `blog.html`                                 |
| SEO (sitewide)                  | `_includes/head.html`, `_config.yml`        |
| SEO (per page)                  | Front matter of each `.html` file           |
| Schema (sitewide)               | `_includes/head.html`                       |
| Schema (per-page)               | `extra_head:` in each page's front matter   |

---

## Tech Stack

- **Jekyll 3.10** (GitHub Pages compatible)
- **Vanilla JS** — no frameworks
- **GitHub Pages** for hosting and CI/CD
- **Google Fonts** — Montserrat + Source Sans 3
- **HTML5 Video** — hero background (autoplay, muted, loop)

---

## To Do

### Phase 2 — Homepage Build
- [x] ~~Full homepage with video hero, services overview, about, contact form, CTA~~ — Done
- [x] ~~Polish all sections with real content~~ — Done

### Phase 3 — Service Subpages
- [x] ~~Build 8 service pages using `_layouts/service.html`~~ — Done
- [x] ~~Migrate all service content, FAQs, and images~~ — Done (sediment, vegetation, invasive, waterway, trash, shoreline, bush hog, flail)

### Phase 4 — Blog & About
- [x] ~~Migrate 3 blog posts with real content~~ — Done (full-length articles from WordPress site)
- [x] ~~Build out About page with team bios~~ — Done (Matt Hollis, Elaine Wilford)
- [x] ~~Build Contact section with form~~ — Done (on homepage, visual only — backend TBD)

### Future
- [x] ~~Connect contact form to backend~~ - Done
- [x] ~~Google Search Console + analytics~~ - Done
- [x] ~~Custom domain migration~~ - Done
- [ ] Google Business Profile integration

---

### Blog Dashboard Integration
The `_blog-config.json` file in the repo root enables this site in the [Proxy Blog Dashboard](https://dashboard.proxymarketing.ai). The dashboard auto-discovers any repo containing this file and adds it to the site selector. If you build a new Jekyll site and want it to appear in the dashboard, add a `_blog-config.json` to the repo root:

```json
{
  "postsPath": "_posts",
  "imagesPath": "images",
  "defaultAuthor": "Your Site Name",
  "categories": ["Tips", "Guides", "News"]
}
```

Adjust `imagesPath` to match your site's image directory and `categories` to match your content categories.

---

### BlogPosting Schema
Every blog post automatically includes `BlogPosting` JSON-LD structured data (schema.org). This is generated in `_layouts/post.html` using front matter fields (title, date, author, description, image). No manual setup needed — any post published through the Proxy Blog Dashboard or added to `_posts/` gets rich result eligibility in Google automatically. When building new sites with this framework, include the BlogPosting schema block in `_layouts/post.html` to maintain this behavior.

---

## FAQ Accordions & Page-Level Schema

This site uses two distinct FAQ patterns depending on page type. A future developer should understand which pattern a page uses before editing FAQ content.

### Pattern A — Inline HTML FAQ (Front Matter Schema)

Used on standalone pages that are not generated by a layout template. The accordion markup, scoped CSS, and JavaScript live directly in the page body as HTML. Page-level JSON-LD schema is injected into `<head>` via the `extra_head:` field in the YAML front matter.

**Pages using Pattern A:**

| Page | File | Schema types in `extra_head` |
|---|---|---|
| Services Overview | `services.html` | `FAQPage` |
| Airmax Certification | `airmax.html` | `Service` + `FAQPage` |

**To edit FAQ questions or answers on a Pattern A page:**
1. Open the page file (e.g. `airmax.html`)
2. Find the `<!-- FAQ SECTION -->` comment in the body — edit the `<span class="faq-q">` and `<div class="faq-body"><p>` content directly in the HTML
3. **Also update the matching `FAQPage` schema in `extra_head:`** at the top of the file — the `"name"` and `"text"` values in the JSON must stay in sync with the visible HTML or Google may suppress the rich result
4. In the schema JSON, use plain text only — no HTML entities (e.g. use `-` not `&#8209;`)

**To add a new FAQ item on a Pattern A page:**
1. Copy an existing `<li class="faq-item">...</li>` block and update the question and answer text
2. Add a matching `{ "@type": "Question", ... }` object to the `mainEntity` array in the `FAQPage` schema inside `extra_head:`
3. Keep both in sync

### Pattern B — Layout-Driven FAQ (Service Subpages)

Used by the 8 service subpages (sediment removal, vegetation harvesting, etc.), which are all generated by `_layouts/service.html`. FAQ content is defined in each page's front matter as structured YAML — the layout renders the accordion automatically. No HTML editing required for FAQ updates on these pages.

**To edit FAQ content on a service subpage:**
1. Open the relevant file in `_services/` (e.g. `_services/sediment-removal.md`)
2. Find the `faqs:` block in the front matter and edit `question:` and `answer:` values there
3. The layout handles rendering — no HTML changes needed

**Pages using Pattern B:** All 8 service subpages rendered by `_layouts/service.html`.

### Rich Results Eligibility

Pages using Pattern A with a `FAQPage` schema block in `extra_head:` are eligible for **Google FAQ rich results** — the expandable question/answer accordion that appears directly in search results, significantly increasing listing visibility.

**To verify a page's schema:**
- Use [Google's Rich Results Test](https://search.google.com/test/rich-results) with the live page URL
- A green check confirms the schema is valid and rich result eligible
- The tool may label the `FAQPage` block as **"Unnamed Item"** — this is normal and expected. `FAQPage` has no top-level `name` property by design. The green check is the only signal that matters.
- After deploying schema changes, use Google Search Console's URL Inspection tool to request re-indexing

**Important:** Google cross-references the `FAQPage` schema against the visible page content. If the JSON answers don't closely match the rendered HTML text, Google may suppress the rich result. Always keep both in sync when editing.

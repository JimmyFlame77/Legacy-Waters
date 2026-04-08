# Legacy Waters Environmental Services — Maryland

Marketing site for **Legacy Waters Environmental Services**, a company specializing in hydraulic dredging, aquatic vegetation harvesting, and waterway restoration across Maryland. Built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.

**Live site:** [https://jimmyflame77.github.io/Legacy-Waters/](https://jimmyflame77.github.io/Legacy-Waters/)
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
├── services.html                  # Services overview (8 cards)
├── about.html                     # About page (team bios)
├── blog.html                      # Blog index
├── robots.txt                     # Crawl directives + sitemap
├── Gemfile                        # GitHub Pages dependencies
└── .gitignore                     # Build artifacts excluded
```

---

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
- Schema: LocalBusiness JSON-LD in `_includes/head.html`

---

## Local Development

```bash
bundle install
bundle exec jekyll serve
# Site at http://localhost:4000/Legacy-Waters/
```

---

## Deployment

Auto-deploys via **GitHub Pages** on push to `main`.

Custom domain migration:
1. Set custom domain in repo Settings → Pages
2. Change `url` in `_config.yml` to production domain
3. Change `baseurl` from `"/Legacy-Waters"` to `""`
4. Push — OG images, canonicals, sitemap auto-update

---

## Key Files Quick Reference

| I want to change...             | Edit this file                          |
|---------------------------------|-----------------------------------------|
| Company phone / email           | `_data/site.yml`                        |
| Services                        | `_data/services.yml`                    |
| Nav links                       | `_data/navigation.yml`                  |
| Header                          | `_includes/header.html`                 |
| Footer                          | `_includes/footer.html`                 |
| Global CSS                      | `css/style.css`                         |
| Shared JS                       | `js/main.js`                            |
| Homepage                        | `index.html`                            |
| Services overview               | `services.html`                         |
| About page                      | `about.html`                            |
| Blog index                      | `blog.html`                             |
| SEO (sitewide)                  | `_includes/head.html`, `_config.yml`    |
| SEO (per page)                  | Front matter of each `.html` file       |
| Schema                          | `_includes/head.html`                   |

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
- [ ] Full homepage with video hero, services overview, about, contact form, CTA
- [ ] Polish all sections with real content from current WordPress site

### Phase 3 — Service Subpages
- [ ] Build 8 service pages using `_layouts/service.html`
- [ ] Migrate all service content, FAQs, and images from current site

### Phase 4 — Blog & About
- [ ] Migrate 3 blog posts with real content
- [ ] Build out About page with team bios (Matt Hollis, Elaine Wilford)
- [ ] Build Contact page with form

### Future
- [ ] Connect contact form to backend
- [ ] Google Search Console + analytics
- [ ] Custom domain migration
- [ ] Google Business Profile integration

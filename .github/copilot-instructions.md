# Copilot Instructions for Dinesh Kumar Portfolio Site

## Project Overview
A personal portfolio website showcasing test automation engineering expertise. Single-page application (SPA) with three HTML pages: `index.html` (main), `contact.html` (contact form), and `thank-you.html` (success page).

## Architecture & Key Components

### Multi-Page Structure
- **index.html**: Main portfolio page with hero, about, skills, experience, projects, education, and floating navigation
- **contact.html**: Dedicated contact page with integrated form and floating navigation
- **thank-you.html**: Minimal success confirmation page
- **Navigation Pattern**: Fixed header on all pages + floating navigation (appears after 400px scroll on index.html, always visible on contact.html)

### Styling Conventions
- **CSS Variables** (in `:root`): Primary dark blue (`#081C3A`), secondary (`#1E3D66`), accent blue (`#00A6FB`), light (`#F5F7FA`), text color (`#1A1A1A`)
- **Layout**: Flex-based `.container` class with consistent padding for responsive design
- **Common Classes**: `.section`, `.card` patterns; `.skill-card` for grid layouts; `.project-slide`, `.tool-slide` for carousels
- **Responsive Approach**: Mobile-first with media queries (full CSS spans ~562 lines)

### JavaScript Behavior
Three independent modules in [js/script.js](js/script.js):
1. **Floating Navigation Toggle**: Shows/hides `.floating-nav` when `scrollY > 400px`
2. **Project Carousel**: Cycles `.project-slide` elements with prev/next buttons
3. **Tool Carousel**: Cycles `.tool-slide` elements with prev/next buttons

Each uses vanilla DOM manipulation with class toggling (`classList.toggle('active')`).

## Key Files & Their Purpose

| File | Purpose |
|------|---------|
| [index.html](index.html) | Main portfolio content with 6 sections + floating nav |
| [contact.html](contact.html) | Contact form using Formspree + breadcrumb navigation |
| [css/style.css](css/style.css) | All styling; variables at top, component styles below |
| [js/script.js](js/script.js) | Event listeners for scroll, carousel navigation |
| [thank-you.html](thank-you.html) | Form submission confirmation page |

## Specific Patterns & Conventions

### Form Integration
- Contact form in [contact.html](contact.html) uses **Formspree** (`action="https://formspree.io/f/mgvzlwvw"`)
- Spam prevention: hidden `_honey` field
- Post-submit redirect: `_next` hidden field points to `thank-you.html`

### Accessibility & Naming
- Non-breaking spaces in headings: `Dinesh&nbsp;Kumar` (preserves layout on line breaks)
- Image alts describe purpose: "Tools & frameworks icon", "LinkedIn profile"
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<nav>`
- Active navigation indicator: `.active` class on current nav item

### Carousel Implementation
- Modulus arithmetic for cycling: `(index - 1 + length) % length` (safe backwards wrapping)
- Active state: single `.active` class per carousel; others hidden/inactive
- Defensive checks: `if (prevBtn && nextBtn && slides.length)` before attaching listeners

## Development Workflows

### No Build System
This is a static HTML/CSS/JS site with **no build tools** (no npm, webpack, etc.). Changes deploy directly.

### Testing Images
Portfolio references image files in `images/` folder (hero.png, tools.png, linkedin.png, github.png, etc.). Verify paths are relative: `../images/filename.png` (from CSS) or `images/filename.png` (from HTML).

### Cross-Page Links
- Links to `index.html` from other pages use `href="index.html#section-id"`
- Breadcrumb navigation on contact page: `<a href="index.html">Home</a> / <span>Contact</span>`

## Common Tasks

**Add a new skill card**: Copy structure in `#skills` section; add to `.skills-grid` div with class `skill-card` (h3 title + ul list)

**Add new project**: Append `.project-slide` div to project carousel container; carousel logic auto-detects new slides

**Modify color scheme**: Update CSS variables in `:root` (lines 6-11 of style.css)

**Update contact form**: Verify Formspree endpoint and `_next` redirect remain valid

## Constraints & Requirements
- Pure HTML/CSS/JavaScript (no frameworks or dependencies)
- All styling in single `style.css` file
- Floating navigation logic couples to scroll position (400px threshold hardcoded in js/script.js)
- Images required for full visual experience (portfolio relies on image assets in `images/` folder)

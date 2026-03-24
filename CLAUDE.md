# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal informational website (Dutch content) hosted on GitHub Pages at `www.stijnboyce.com`. A static site with no build pipeline — all files are plain HTML/CSS/JS served directly.

## Development

No build step required. Open any `.html` file directly in a browser or serve with a local static file server:

```bash
# Any of these work:
python -m http.server 8080
npx serve .
```

## Architecture

**Stack:** Vanilla HTML5, CSS3, JavaScript — no frameworks, no bundler, no Node dependencies.

**Page structure:** Every page follows the same template:
- Hamburger navigation menu (top-left) driven by `ReusableCss/Menu.css`
- Terminal-style loading screen driven by `ReusableCss/Loading.css`
- Dark theme with geometric conic-gradient background patterns
- Home button (top-right)

**Shared assets live in `ReusableCss/`** — `Menu.css` and `Loading.css` are linked from every page and should not be changed without checking all pages.

**Page categories and their directories:**
- `Personal/` — About Me, Family pages
- `School/` — Educational CS content (binary, bitmaps, compression, color models); page-specific CSS in `School/Css/`, scripts in `School/JavaScript/`
- `Extra/` — Pong game (Unity WebGL embedded)
- `EscapeRoom/` — Standalone escape room game

**Game assets** (compiled Unity WebGL) live in `Build/`.

**Images/media** live in `Src/`.

## Conventions

- New pages should follow the existing template structure (hamburger nav + loading screen + home button).
- Page-specific styles go in the category's `Css/` subfolder; page-specific scripts go in `JavaScript/` subfolder.
- CSS uses custom properties (variables) and `@keyframes` animations — keep consistent with the dark theme.
- The site is in Dutch; keep user-visible content in Dutch.

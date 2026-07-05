# Hidden Cove Adventures

A responsive website for small-group boat tours from Valdanos near Ulcinj, Montenegro. The site presents available coastal experiences, an interactive route map, practical tour information, multilingual content, and WhatsApp booking.

## Overview

Hidden Cove Adventures operates boat experiences around Valdanos and the Ulcinj coast. The website presents active tours, a coming-soon Moonlight Tour, a coastal route map, FAQs, gallery content, and contact paths for booking through WhatsApp.

The application is built as a Vite React site with localized routes and prerendered output for the supported languages.

## Features

- Responsive desktop, tablet, and mobile layouts
- Tour cards for Classic Tour, BBQ Tour, Sunset Tour, and the coming-soon Moonlight Tour
- WhatsApp booking links with generated pre-filled messages
- MapTiler Aquarelle route map loaded below the fold
- Animated boat journey with clickable route stops and location stories
- Multilingual interface with localized URLs
- Localized SEO metadata, canonical links, alternate links, sitemap generation, and JSON-LD
- FAQ section with structured data
- Local image assets and Mediterranean feature icons
- Accessible header, mobile navigation, route controls, footer links, and reduced-motion support

## Tours

Tour details are maintained in `src/i18n/translations.ts` and rendered from the current locale data.

- **Classic Tour**: approximately 4 hours, up to 8 guests, €50 per person.
- **BBQ Tour**: approximately 4 hours, up to 8 guests, €60 per person.
- **Sunset Tour**: evening trip, up to 8 guests, €25 per person.
- **Moonlight Tour**: coming soon and not rendered as an active booking option.

## Technology

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui and Radix UI primitives
- MapTiler SDK
- React Router
- TanStack Query
- Vitest
- ESLint

## Getting Started

### Prerequisites

Use a current Node.js LTS release compatible with Vite 5. The project does not define a stricter Node engine in `package.json`.

### Installation

```bash
git clone https://github.com/ristohajdukovic/hidden-cove-adventures.git
cd hidden-cove-adventures
npm install
```

### Environment Variables

Local values belong in `.env.local`. Do not commit `.env.local`.

The current `.env.example` documents these public Vite variables:

```env
VITE_MAPTILER_API_KEY=
VITE_WHATSAPP_NUMBER=
VITE_SITE_URL=
```

MapTiler browser keys should be restricted with allowed HTTP origins in the MapTiler dashboard. The development origin must match the local URL printed by Vite. The WhatsApp number is public configuration for generated booking links, but the real value should still be kept out of committed examples.

### Development

```bash
npm run dev
```

Vite prints the local URL when the server starts. The dev server is configured with a default port, but another port may be used if that port is unavailable.

### Production Build

```bash
npm run build
npm run preview
```

The build creates a Vite client bundle, an SSR bundle, localized prerendered pages, `sitemap.xml`, and `robots.txt` inside `dist/`.

## Available Scripts

- `npm run dev`: start the Vite development server
- `npm run build`: build client assets, build the SSR entry, and prerender localized pages
- `npm run build:client`: run the client Vite build
- `npm run build:ssr`: build the SSR entry used by prerendering
- `npm run build:dev`: run a development-mode Vite build
- `npm run prerender`: generate localized HTML, sitemap, and robots output
- `npm run i18n:check`: build the SSR entry and verify translation parity
- `npm run seo:i18n:check`: verify localized generated SEO output
- `npm run lint`: run ESLint
- `npm run test`: run Vitest once
- `npm run test:watch`: run Vitest in watch mode
- `npm run preview`: preview the production build

## Project Structure

```text
src/
├── assets/          Local photos and icon assets
├── components/      Shared UI, page sections, route map, and SEO helpers
│   └── sections/    Homepage sections
├── config/          Public site and MapTiler configuration helpers
├── data/            Route and FAQ data helpers
├── i18n/            Locale definitions, translations, and SEO metadata helpers
├── lib/             Business and utility helpers
├── pages/           Page-level React views
└── test/            Vitest setup and tests
```

`scripts/` contains the prerender, i18n, and SEO verification scripts. `public/` contains static hosting files such as redirects, robots configuration, and the favicon.

## Map Configuration

The route section uses MapTiler's Aquarelle style through the MapTiler SDK. The browser API key is read from `VITE_MAPTILER_API_KEY`.

Verified route stops and sea waypoints live in `src/data/boatRoute.ts`. The displayed line is a storytelling route for the tour website, not an official nautical navigation chart. Third-party map attribution must remain visible.

## Internationalization

The site supports:

- English: `/en/`
- German: `/de/`
- Albanian: `/sq/`
- Montenegrin Latin: `/me/`

The root route redirects to the default English route. Locale definitions live in `src/i18n/locales.ts`, while translated content is maintained in `src/i18n/translations.ts`. The production build prerenders localized pages and generates canonical and alternate links for each locale.

## Booking

Booking links open WhatsApp with a pre-filled message when `VITE_WHATSAPP_NUMBER` is configured. If WhatsApp is not configured, the shared business helper falls back to an email enquiry link.

Do not publish the configured phone number or any local environment values in documentation.

## Deployment

No provider-specific deployment settings are required beyond a static host that can serve the Vite `dist/` output. The repository includes a `_redirects` file for static hosting that redirects `/` to `/en/`.

The hosting provider should:

- serve the generated Vite build from `dist/`
- support direct requests to localized routes such as `/en/` and `/de/`
- define the required Vite environment variables during build
- allow the production domain in the MapTiler key settings

## Quality Checks

Use these commands before publishing changes:

```bash
npm run lint
npx tsc --noEmit
npm run test
npm run i18n:check
npm run seo:i18n:check
npm run build
```

There is currently no formatter script in `package.json`.

## Content and Asset Notes

- Tour information should stay synchronized across `src/i18n/translations.ts` and the rendered tour cards.
- Image assets are stored locally under `src/assets/`.
- The Mediterranean feature icons are stored under `src/assets/icons/mediterranean/`.
- MapTiler and map-data attribution must remain visible.
- Stock-image attribution should be retained when required by an asset license.

## Repository Status

This is a private project repository.

## License

This repository is private. All rights reserved unless stated otherwise.

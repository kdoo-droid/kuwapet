# KuwaPet Technical Build Spec

## Build Goal

Create a fast, polished, mobile-first ecommerce website that can launch as a single-product brand and grow later.

## Recommended Stack

If Claude is free to choose the stack, the default recommendation is:

- `Next.js` with App Router
- `TypeScript`
- `Tailwind CSS`
- `MDX` or structured content objects for editorial sections
- product data stored in local config or CMS-ready JSON during MVP

## Architecture Principle

Do not overengineer the first version.

The MVP should:

- load fast
- be easy to edit
- support one hero product
- leave room for more products later

## Recommended App Structure

- global layout with announcement bar, header, footer, and cart trigger
- reusable section components for marketing pages
- dedicated product detail template
- structured content files for copy-heavy sections
- central theme tokens for colors, typography, spacing, and motion

## Suggested Route Map

- `/`
- `/shop`
- `/product/kuwapet-mulberry-topper`
- `/why-mulberry`
- `/about`
- `/faq`
- `/contact`
- `/shipping`
- `/returns`
- `/privacy`
- `/terms`

## Data Model Guidance

Create structured content objects rather than hardcoding everything inline.

### Site Config

Include:

- brand name
- domain
- navigation items
- footer groups
- support email
- social links

### Product Object

Include fields such as:

- `id`
- `slug`
- `name`
- `subtitle`
- `shortDescription`
- `longDescription`
- `price`
- `compareAtPrice`
- `images`
- `highlights`
- `ingredients`
- `feedingDirections`
- `storageInstructions`
- `shippingNote`
- `faqIds`
- `ctaLabel`
- `inventoryStatus`

### FAQ Object

Include:

- `id`
- `question`
- `answer`
- `category`

### Testimonial Object

Include:

- `id`
- `quote`
- `author`
- `dogName`
- `approved`

Only populate with real testimonials.

## Components To Build

### Global Components

- header
- mobile nav
- footer
- announcement bar
- newsletter form

### Commerce Components

- product media gallery
- product purchase panel
- quantity selector
- add-to-cart button
- sticky mobile purchase bar
- cart drawer or cart page

### Marketing Components

- hero section
- section intro
- trust badge row
- three-column value grid
- ingredient story section
- step-by-step routine section
- review cards
- FAQ accordion
- CTA band

## Responsive Requirements

The site must be designed mobile-first.

### Mobile Priorities

- fast first paint
- readable typography
- sticky purchase behavior on product pages
- large tap targets
- no hover-only interactions
- compressed content order that preserves conversion flow

### Desktop Priorities

- more editorial layouts
- asymmetry where useful
- richer image compositions
- spacious negative space

## Accessibility Requirements

- semantic heading hierarchy
- keyboard-accessible navigation and accordions
- form labels and clear validation states
- sufficient color contrast
- alt text for meaningful images
- visible focus states
- reduced-motion support

## Performance Requirements

Target a lightweight build.

Priorities:

- compressed images
- responsive image loading
- minimal heavy client-side animation libraries
- server-render what can be server-rendered
- avoid shipping unused code

Recommended target:

- Lighthouse scores around 90+ in Performance, Accessibility, Best Practices, and SEO on core pages

## SEO Requirements

### Metadata

Every page should have:

- unique title
- meta description
- canonical URL
- Open Graph title and description
- social share image plan

### Structured Data

Implement where applicable:

- `Organization`
- `WebSite`
- `Product`
- `FAQPage`
- `BreadcrumbList`

Do not fabricate ratings or review counts.

### Indexing Strategy

Core pages should be indexable:

- homepage
- product page
- about
- FAQ
- why mulberry

Policy pages can be indexed or de-emphasized depending on final setup.

## Analytics Recommendations

At minimum, track:

- homepage CTA clicks
- product page views
- add-to-cart events
- begin checkout events
- newsletter signups
- FAQ opens

If the build does not yet have a commerce backend, still leave clear hook points for analytics.

## Checkout Strategy

If checkout is not yet integrated, build a clear placeholder pattern:

- CTA can route to a placeholder checkout destination
- cart logic can be mocked but structured cleanly
- product purchase module should be easy to wire to Shopify or another platform later

If commerce is integrated later, Shopify is the most natural scalable path for this brand.

## Content Editing Strategy

Claude should organize content so a human can easily update:

- headlines
- product facts
- FAQs
- policies
- CTAs

Avoid burying business-critical copy deep inside components.

## Recommended File Organization

One possible structure:

- `app/`
- `components/`
- `content/`
- `lib/`
- `public/`
- `styles/`

Within `content/`, keep structured files such as:

- `site.ts`
- `products.ts`
- `faqs.ts`
- `testimonials.ts`

## Quality Bar

The finished build should:

- feel custom, not template-generated
- have a strong first impression
- be consistent across pages
- avoid dead-end pages
- make all core product information easy to locate

## Acceptance Criteria

The build is ready for review when:

1. All core pages exist and match the site strategy.
2. The homepage and product page feel visually premium and mobile-ready.
3. Copy follows the messaging and compliance docs.
4. Placeholders are clearly marked where real business data is missing.
5. The site is accessible, responsive, and performant.
6. The codebase is organized so a future team can scale it.

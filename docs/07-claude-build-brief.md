# Claude Build Brief For KuwaPet

Use this file as the primary build prompt for Claude.

## Brief

Build a premium ecommerce website for `kuwapet.com`, a dog wellness brand launching with a mulberry-based topper for dogs.

The site should feel:

- premium
- warm
- orchard-inspired
- modern
- emotionally designed
- highly trustworthy

It should not feel like:

- a generic pet Shopify theme
- a loud biohacking supplement brand
- a childish pet store
- an over-claimed medical product site

## Your Inputs

Use the docs in this folder as the source material:

- `01-brand-foundation.md`
- `02-site-strategy-and-sitemap.md`
- `03-copy-and-content-guide.md`
- `04-visual-design-system.md`
- `05-technical-build-spec.md`
- `06-compliance-and-claims-guardrails.md`
- `08-product-source-of-truth.md`

## What To Build

Build a complete first-version website with these pages:

- Home
- Shop or Product page
- Why Mulberry
- About
- FAQ
- Contact
- Shipping
- Returns
- Privacy
- Terms

If you choose a single-product architecture, `Shop` can route into the main product experience.

## Experience Priorities

The website must:

- explain the product quickly
- show a clear purchase path
- feel premium and distinct
- work beautifully on mobile
- keep copy clear and claim-safe
- leave room for future product expansion

## Brand Direction

Anchor the experience around these ideas:

- thoughtful dog care
- everyday ritual
- simplicity over supplement clutter
- mulberry as a distinctive ingredient story
- premium pantry aesthetic

## Visual Direction

Follow the visual system doc closely:

- use a mulberry-led palette
- use expressive editorial typography
- create tactile, warm layouts
- avoid bland white-template styling
- use subtle motion, not noisy animation

## Copy Direction

Follow the copy guide:

- prioritize product clarity
- keep tone calm and premium
- avoid exaggerated claims
- use placeholders clearly where business facts are missing

## Compliance Rules

These are mandatory:

- do not invent medical or health outcomes
- do not fabricate reviews or ratings
- do not imply FDA approval
- do not use risky support / cure / treatment language unless the docs explicitly say it is approved
- prefer `dog topper` / `meal topper for dogs` language by default

## Technical Direction

Use a modern implementation that is:

- responsive
- accessible
- componentized
- organized for future growth
- performant

Recommended default stack:

- Next.js
- TypeScript
- Tailwind CSS

## Build Quality Bar

The final result should feel like a real direct-to-consumer launch brand, not a wireframe.

Specifically:

- homepage should have a strong hero and clear CTA
- product page should feel polished and conversion-ready
- layouts should feel custom and art-directed
- typography and color should feel intentional
- mobile should feel first-class

## Content Handling

Where real business details are unknown, do one of the following:

1. Use tasteful placeholders that are clearly marked.
2. Structure the code so those values are easy to replace later.

Never invent:

- certifications
- veterinary endorsements
- nutrition facts
- guaranteed analysis values
- prices presented as final if they are not confirmed

## Recommended Execution Order

1. Build the design system and layout shell.
2. Build the homepage.
3. Build the product page.
4. Build supporting pages.
5. Add SEO, schema, and analytics hooks.
6. Review all copy against the compliance doc.

## Acceptance Test

Your output is successful if a first-time visitor can immediately tell:

- this is for dogs
- the hero product is a mulberry topper
- the brand feels premium and trustworthy
- the next step is to shop

And if a reviewer can say:

- the site feels custom
- the copy is controlled and believable
- the design is stronger than a default ecommerce template
- the code structure can scale

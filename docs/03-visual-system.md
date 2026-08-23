# Cobalt Assembly — Cobalt Flux Storefront System

## Purpose

Cobalt Flux is the active public storefront direction for Cobalt Assembly. It keeps the original open-orbit mark and the promise of precision in motion, but moves the customer-facing experience into a dark cobalt field built for discovery, selection, and provider-hosted checkout.

The system is deliberately atmospheric without becoming cyberpunk: depth comes from restraint, not from neon, glass cards, particle fields, or borrowed product imagery.

## Brand anchor

### The Assembly Mark

The mark remains two offset orbital arcs:

- **Cobalt arc:** the active signal, direction, and commercial momentum.
- **Quiet arc:** the supporting framework, constraint, and trust.
- **Central aperture:** room for the next useful decision.

Use the mark as a small, precise instrument. Do not stretch, rotate, bevel, or add a decorative shadow.

### Wordmark

Set Cobalt Assembly in Bricolage Grotesque:

- Title case for the primary lockup.
- Tight tracking and a compact weight.
- Ink-white on dark fields; never a gradient inside the wordmark.
- The mark carries the electric accent so the wordmark can remain calm.

## Color system

| Role | Token | Use |
|---|---|---|
| Deep field | --color-canvas-deep | Hero depth, footer, quiet negative space |
| Working canvas | --color-canvas | Primary page surface |
| Raised surface | --color-surface-raised | Selected sales desk and important utility surfaces |
| Ink | --color-ink | Display type and high-priority information |
| Quiet ink | --color-muted | Supporting copy and labels |
| Electric cobalt | --color-accent | Active selection, CTA fill, orbital traces |
| Signal | --color-signal | Reserved for positive operational status |

The page is mostly dark cobalt and quiet ink. Electric cobalt is a directional signal, not a wallpaper color. Semantic colors stay out of decorative usage.

## Type system

| Role | Treatment |
|---|---|
| Display | Bricolage Grotesque, 560–650, tight tracking, 0.84–0.98 line-height |
| Section heading | Bricolage Grotesque, 540–560, compact composition |
| Body | IBM Plex Sans, 400–600, generous but not airy leading |
| System label | IBM Plex Mono, uppercase, 0.08–0.10em tracking |

The first viewport is a marquee statement, not a centered SaaS template. Supporting type breaks the symmetry around it.

## Layout and component rules

### Navigation

- Use the detached, content-sized floating pill.
- Keep the desktop link set to three core destinations: offers, method, checkout.
- Let the cobalt CTA be the only filled control in the navigation.
- Collapse to a compact menu on small screens; never force a full-width rounded bar.

### Assembly Field

The hero visual is a hand-built SVG/CSS field, not a product screenshot or stock animation:

- Orbital lines show stable structure.
- Dotted flow paths indicate moving decisions.
- Nodes indicate active operating moments.
- A small status label changes with the selected offer.

It may sit behind or beside the display headline, but the headline stays primary. The field must be useful as an abstract expression of the product relationship even when its motion is disabled.

### Offer selection and sales desk

- Use a numbered, editorial offer list rather than a generic card grid.
- One selected offer controls the price, description, delivery facts, and CTA state in the sales desk.
- The sales desk is an opaque raised surface with a clear border; do not turn it into translucent glass.
- A CTA is only secure checkout when a valid HTTPS provider URL exists.
- With no URL, show Checkout link pending and explain exactly how the owner activates it.

### Buttons and links

| Control | Treatment |
|---|---|
| Primary sales CTA | Electric cobalt pill; opens provider-hosted checkout after a deliberate click |
| Pending sales CTA | Quiet cobalt surface, clear pending language, no dead external destination |
| Secondary CTA | Hairline outline, ink label |
| Inline action | Text-first with a single directional glyph |

## Motion language

Motion explains the difference between a stable framework and a moving business signal.

| Motion | Use | Specification |
|---|---|---|
| Hero settle | Initial composition only | One coordinated 680–760 ms upward/scale settle |
| Assembly Field current | Hero visual | One 3.8 s low-amplitude flow loop |
| Offer selection | Active state and sales desk content | Immediate text/state change; no carousel |
| Control feedback | Buttons and links | 150–220 ms color or 2 px lift |
| Pending checkout | Owner-facing explanation | One brief note emphasis after click |

Respect prefers-reduced-motion. In reduced-motion mode, the field is static, transitions are effectively removed, and no information depends on animation.

## Commerce boundary

Cobalt Assembly is a storefront, not a payment processor.

1. The owner creates the product and hosted checkout link in a payment provider they control.
2. The owner pastes that full HTTPS URL into config.js.
3. The appropriate offer CTA becomes live.
4. The visitor clicks the CTA and completes payment only on the provider’s hosted checkout page.

The public site never collects card data, creates charges, creates payment products, or silently sends a customer elsewhere.

## Non-negotiables

- No fake browser chrome, dashboards, testimonials, logos, revenue claims, or product screenshots.
- No copied layouts or imported UI from external visual references.
- No generic aurora blobs, particle fields, auto-rotating carousels, or constant scroll reveals.
- No checkout CTA that points to an empty, insecure, or unowned URL.
- No motion that prevents reading, understanding, or keyboard access.

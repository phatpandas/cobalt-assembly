# Cobalt Assembly — Website Architecture Master Document

> **Current implementation note — 2026-08-23:** The live site is a focused single-page sales storefront with a Marquee Hero, Assembly Field, offer selector, and provider-hosted checkout handoff. The broader route map below remains the expansion architecture. Where an older visual detail conflicts with the active storefront, [03 Visual System](03-visual-system.md) takes precedence.

## Architecture principles

- White-studio compositions provide the primary luxury field.
- Silver surfaces create structure; cobalt provides direction and interaction.
- Every page has one primary outcome, one proof mechanism, and one next step.
- Motion clarifies state, hierarchy, or relationship; it never performs for its own sake.
- Templates, tools, and content form one connected operating system.

## Full sitemap and route hierarchy

```text
/
├── templates
│   └── /templates/[product]
├── tools
│   └── /tools/[product]
├── content
│   ├── guides
│   ├── programs
│   ├── field-notes
│   └── /content/[product]
├── ecosystem
│   ├── bundles
│   ├── cobalt-circle
│   ├── how-it-works
│   └── product-pathways
├── solutions
│   ├── validate-an-idea
│   ├── shape-an-offer
│   ├── release-a-product
│   ├── grow-an-audience
│   ├── elevate-client-delivery
│   ├── build-a-learning-business
│   └── lead-with-clarity
├── library
│   ├── journal
│   ├── resources
│   ├── workflows
│   ├── customer-stories
│   └── assembly-review
├── method
│   ├── visual-system
│   ├── product-principles
│   └── motion-principles
├── pricing
├── about
├── contact
├── support
│   ├── help-center
│   ├── releases
│   ├── status
│   ├── accessibility
│   └── legal
├── sign-in
├── account
└── app
    ├── home
    ├── workspace
    ├── tools
    ├── billing
    └── settings
```

## Global navigation model

```text
[Cobalt Assembly lockup]  [Products] [Solutions] [Library] [Method] [Pricing]
                                                   [Sign in] [Explore the System]
```

| Navigation group | Contents |
|---|---|
| Templates | Premium operating workspaces and visual kits |
| Tools | Focused AI micro-SaaS products |
| Content | Guides, courses, workshops, and intelligence |
| Ecosystem | Bundles, Cobalt Circle, pathways, and methodology |
| Solutions | Outcome-first routes for business goals |

### Header behavior

- White surface with a silver 1 px lower border.
- Desktop mega-menus include a category explanation, three featured entries, and one `View all` route.
- Hover uses a fine cobalt orbital underline, never a heavy blue fill.
- Keyboard focus exposes the same menu state and a visible focus ring.
- Menu states animate through 140–180 ms opacity and position transitions.

### Product-detail secondary navigation

Sticky below the primary header:

`Overview / What You Get / Workflow or Curriculum / Proof / Pricing / FAQ`

Tool pages add `Privacy and Reliability`. Mobile uses an `On this page` disclosure sheet.

### Responsive behavior

| View | Behavior |
|---|---|
| Desktop | Full navigation, hover-capable menus, visible primary CTA |
| Tablet | Core links retained; lower-priority links move into `More` |
| Mobile | Mark, sign-in, and menu trigger only |
| Mobile menu | White full-height sheet with accordion groups and persistent CTA |

## Homepage wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ Global header                                                 │
├──────────────────────────────────────────────────────────────┤
│ Hero: editorial copy + interactive workflow artifact         │
├──────────────────────────────────────────────────────────────┤
│ Proof rail                                                    │
├──────────────────────────────────────────────────────────────┤
│ Ecosystem overview: Templates / Tools / Content               │
├──────────────────────────────────────────────────────────────┤
│ Outcome pathways                                              │
├──────────────────────────────────────────────────────────────┤
│ Featured product bento                                        │
├──────────────────────────────────────────────────────────────┤
│ System-in-motion workflow                                     │
├──────────────────────────────────────────────────────────────┤
│ Method and differentiation                                    │
├──────────────────────────────────────────────────────────────┤
│ Library, stories, and verified evidence                       │
├──────────────────────────────────────────────────────────────┤
│ Final conversion panel                                        │
├──────────────────────────────────────────────────────────────┤
│ Footer and brand lockup                                       │
└──────────────────────────────────────────────────────────────┘
```

### Hero composition

**Left: five-column editorial field**

- Eyebrow: `Couture-grade AI operating layer`
- Headline: `Precision, set in motion.`
- Outcome-led supporting copy
- Primary CTA: `Explore the System`
- Secondary CTA: `See a Workflow`

**Right: six-column interactive artifact**

Visitors select an outcome—Validate, Shape, Release, Grow, Deliver, Teach, or Lead—and see a connected template, tool, and content pathway update in response.

```text
Business intent → structured system → visible next action
```

### Proof-point placement

| Position | Proof mechanism |
|---|---|
| Above the fold | Interactive workflow and product structure |
| Below hero | Three-layer ecosystem explanation |
| Mid-page | Sample workspace, output, or annotated workflow |
| Lower page | Verified stories, customer evidence, or product facts |
| Final CTA | Specific next outcome and recommended pathway |

Do not use unverified testimonials, customer logos, revenue claims, or inflated product metrics.

## Product-page architecture

### Template product page

1. Hero with a live workspace preview
2. Outcome statement: `What this makes easier`
3. Module map or section gallery
4. Audience and use-case fit
5. Included assets and setup guidance
6. Before-and-after workflow
7. Product preview carousel
8. Pricing and access
9. Continue-your-system recommendations
10. FAQ and support expectations

**Hero proof:** the actual template structure appears in the first viewport.
**Primary CTA:** Get the Template.
**Secondary CTA:** Preview the System.

### Tool product page

1. Interactive hero with a safe sample input
2. Input → process → structured output explanation
3. Capabilities and boundaries
4. Annotated example outputs
5. Relevant template handoffs
6. Pricing and plans
7. Privacy, reliability, and support standards
8. FAQ
9. Related content recommendation

**Hero proof:** show the transformation rather than a static dashboard.
**Primary CTA:** Try the Tool.
**Secondary CTA:** See Example Output.

### Content product page

1. Editorial hero with a refined cover object
2. Outcome and audience-fit statement
3. Curriculum, chapter, or material outline
4. Preview framework or excerpt
5. Practical implementation route
6. Methodology or author credibility
7. Related template and tool
8. Pricing, access, and update policy
9. FAQ

**Hero proof:** expose a meaningful framework within the first scroll.
**Primary CTA:** Access the Program.
**Secondary CTA:** Explore the Framework.

### Solution page

```text
Problem → recommended system → product sequence → expected operating outcome
```

Recommend no more than three core products before inviting deeper exploration.

## Ecosystem navigation and cross-sell logic

| Starting point | Primary continuation |
|---|---|
| Content product | Template that operationalizes the method |
| Template | Tool that accelerates repeat work |
| Tool | Workspace that preserves outputs and decisions |
| Bundle | Cobalt Circle for ongoing releases and intelligence |
| Solution page | Curated outcome pathway |
| Library article | One relevant entry-level product |

### Persistent ecosystem components

- **System Path:** compact visual progress marker on product pages.
- **Continue the Build:** one primary next-step module after pricing.
- **Related by Outcome:** recommendations based on customer goals, not category alone.
- **Workspace Handoff:** tool outputs map into a template, product, or account workflow.

Limit cross-sells to one primary recommendation and two supporting routes.

## Component-level layout guidance

| Component | Rule |
|---|---|
| Page shell | 1440 px maximum visual width; 1200 px core content width |
| Grid | 12 columns desktop, 8 tablet, 4 mobile |
| Hero frame | Five columns copy, one-column breathing space, six columns artifact |
| Page spacing | 96–160 px between major marketing sections |
| Cards | White base, silver border, 16–24 px radius, pale elevation |
| Bento modules | Two prominent narrative modules plus supporting modules |
| Proof rail | Horizontal, immediately after hero, evidence-led |
| CTA panel | Near-white silver surface, generous space, single cobalt action |
| Tool interface | White/silver workspace, clear states, cobalt active cue |
| FAQ | Quiet accordions with generous spacing |

## Motion and interaction rules

| Page type | Motion behavior |
|---|---|
| Homepage | One low-opacity hero orbit; staggered reveals; guided workflow transitions |
| Catalog pages | Fast filter and sort state changes; stable card-grid reflow |
| Template pages | Preview panes respond to scroll; module reveals remain instructional |
| Tool pages | Input, processing, and output states remain visibly distinct |
| Content pages | Chapter progression and preview transitions preserve reading focus |
| Solution pages | Workflow sequence assembles on scroll; each step remains readable alone |
| App dashboard | Fast functional feedback; restrained data transitions |
| Pricing and checkout | Mostly static; animate selection, validation, and confirmation only |

- Keep orbital traces below 8% opacity.
- Use cobalt-to-iris movement only as an edge, trace, or active-state cue.
- Respect reduced-motion preferences.
- Never make important information dependent on animation.
- Avoid parallax overload, auto-advancing carousels, neon effects, and decorative loaders.

## Conversion architecture

```text
Discovery
  → Solution or category
  → Product page with live proof
  → Purchase or tool trial
  → Account and workspace
  → Contextual next product
  → Cobalt Circle
```

- Every entry route resolves toward one outcome-led product path.
- Every product page contains live proof before its first pricing decision.
- Purchase confirmation directs users into setup rather than a generic catalog.
- Account surfaces recommend the next product only after core activation.
- Cobalt Circle appears after demonstrated ecosystem value.

## Cobalt Assembly brand deck outline

### Communication job

By the end, prospective partners, collaborators, and internal contributors should understand how Cobalt Assembly unifies premium digital products into one operating ecosystem and be able to apply the system consistently.

### Narrative arc

```text
Fragmented digital work
  → Cobalt Assembly point of view
  → Visual operating system
  → Connected product ecosystem
  → Practical application
```

| Slide | Narrative title | Visual direction |
|---:|---|---|
| 1 | Cobalt Assembly | Minimal cover: mark, wordmark, tagline, white field |
| 2 | Digital business needs a more coherent operating layer | Editorial problem framing with silver contour |
| 3 | Precision, set in motion | Positioning, purpose, and brand promise |
| 4 | A couture-tech identity built for serious work | Logo logic, mark, wordmark |
| 5 | Blue directs. Silver structures. White elevates. | Color system and balance |
| 6 | Typography makes the system feel composed | Type hierarchy in application |
| 7 | Motion should clarify, not decorate | Assemble, orbit, refract, respond |
| 8 | Three product layers create one ecosystem | Templates, Tools, Content |
| 9 | Every product should lead to the next outcome | One complete customer pathway |
| 10 | System cohesion creates the distinction | Competitive angle and differentiation |
| 11 | The voice is lucid, elegant, and outcome-first | Messaging rules and examples |
| 12 | The identity scales across digital interfaces | Website, tool, dashboard application |
| 13 | The identity scales into editorial communication | Social, email, launch surfaces |
| 14 | Cobalt Assembly is ready to become a living system | Closing synthesis and next step |

Use one strong composition per slide rather than UI-card grids. The deck should be a cumulative audience-facing narrative, not a visual inventory.

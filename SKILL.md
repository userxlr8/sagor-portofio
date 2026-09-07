---
name: interactive-website-builder
description: >
  Build beautiful, modern, highly interactive, responsive websites using the
  images, videos, logos, illustrations, textures, and other media already
  available inside the project folder. Use this skill for portfolios,
  e-commerce stores, SaaS sites, landing pages, agencies, restaurants,
  product pages, dashboards, personal brands, event websites, and other
  front-end website experiences.
---

# Interactive Website Builder

## Purpose

You are an expert creative front-end developer, UI/UX designer, interaction designer, and visual storyteller.

Your job is to turn a user's website request into a **polished, production-quality, interactive website** that feels custom-designed rather than template-generated.

The user may create images and videos externally with **Google Flow** and place those files inside the project folder. You must **discover and use those local assets intelligently** instead of relying on paid image-generation or video-generation APIs.

The final result should feel intentional, premium, fast, responsive, accessible, and visually coherent.

---

# 1. When to Use This Skill

Use this skill whenever the user asks to:

- create a website
- redesign a website
- create a landing page
- build a portfolio
- build an e-commerce site
- build a product website
- create a SaaS website
- make a restaurant website
- create an agency website
- build a personal brand website
- make a startup website
- create an event website
- create a company website
- create a service-business website
- create a product launch page
- improve an existing web interface
- make an existing website more modern
- add animations or interactions to a website
- convert a visual concept into a working website

If the request involves a user-facing web experience, assume this skill is relevant.

---

# 2. Primary Rule: Inspect the Project Before Building

Before designing or writing major UI code, inspect the project.

Determine:

1. Existing framework or stack
2. Existing routes/pages
3. Existing components
4. Existing styling system
5. Existing fonts
6. Existing icons
7. Existing images
8. Existing videos
9. Existing logos
10. Existing brand colors
11. Existing copy/content
12. Existing package dependencies
13. Existing design tokens
14. Existing responsive behavior

Do not blindly replace an existing project architecture.

If a project already has a sensible stack, work within it.

If the project is empty or nearly empty, choose an appropriate modern stack.

---

# 3. Local Asset Discovery Is Mandatory

The user may place Google Flow-generated assets anywhere inside the project.

Before designing the page, search common locations such as:

```text
/
public/
public/images/
public/videos/
public/assets/
src/assets/
src/images/
src/videos/
assets/
images/
videos/
media/
static/
```

Also search recursively for media files.

Look for:

```text
.png
.jpg
.jpeg
.webp
.avif
.svg
.gif
.mp4
.webm
.mov
.m4v
```

Also inspect useful file names such as:

```text
hero
banner
cover
product
logo
brand
background
bg
texture
mockup
portrait
team
about
gallery
feature
service
testimonial
video
intro
demo
showcase
mobile
desktop
```

---

# 4. Build an Internal Asset Map

After discovering media, mentally classify the assets.

Example:

```text
brand/logo.svg            -> primary logo
images/hero-main.webp     -> hero visual
videos/hero-loop.mp4      -> hero background video
images/product-01.webp    -> product card
images/product-02.webp    -> product card
images/about-team.webp    -> about section
images/texture-dark.webp  -> decorative background
```

Use the strongest assets in the most visually important areas.

Do not randomly scatter images around the page.

Every asset should have a purpose.

---

# 5. Prefer User Assets Over External Media

Priority order:

1. User-provided local images/videos
2. Existing project assets
3. CSS-generated visual treatments
4. Icons from existing/open-source icon packages already available
5. External remote media only when explicitly requested or genuinely necessary

Do not depend on paid media APIs.

Do not generate fake image URLs.

Do not insert random Unsplash/Pexels images unless the user specifically allows external stock media.

If an important visual is missing, create the layout so the user can easily replace a placeholder later.

---

# 6. Google Flow Asset Philosophy

Assume the user may generate premium visual media in Google Flow and manually place it in the project.

Therefore:

- make the interface showcase those assets well
- avoid cropping important subjects badly
- use `object-position` thoughtfully
- preserve cinematic compositions
- support portrait and landscape media
- use videos as ambient storytelling when appropriate
- avoid adding excessive UI on top of visually rich assets
- keep text readable over video/image backgrounds
- use gradients or overlays only when they improve legibility
- provide graceful mobile behavior
- avoid autoplay audio
- use `muted`, `playsInline`, and `loop` for ambient background videos when appropriate

For large video files, prefer poster images and lazy loading where possible.

---

# 7. Understand the Website Type First

Infer the appropriate website structure from the user's request.

## Portfolio

Typical structure:

```text
Hero
Selected Work
Project Highlights
About
Capabilities
Process
Testimonials
Contact
Footer
```

Focus on:

- visual storytelling
- project previews
- expressive transitions
- strong typography
- personal identity
- case-study navigation

---

## E-commerce

Typical structure:

```text
Announcement bar
Navigation
Hero / Campaign
Featured Categories
Best Sellers
Product Grid
Featured Product
Brand Story
Social Proof
Newsletter
Footer
```

Focus on:

- product hierarchy
- strong product imagery
- pricing clarity
- product cards
- filtering when useful
- trust
- conversion
- cart interactions
- mobile shopping experience

Do not fake backend functionality.

If checkout, inventory, authentication, or payment infrastructure does not exist, build the front-end states cleanly and clearly separate them from real backend functionality.

---

## SaaS / Startup

Typical structure:

```text
Navigation
Hero
Product Preview
Logo Cloud
Problem / Solution
Feature Sections
How It Works
Integrations
Testimonials
Pricing
FAQ
CTA
Footer
```

Focus on:

- clear positioning
- product visuals
- concise copy
- interactive demos
- motion that explains the product
- conversion-focused CTAs

---

## Agency / Studio

Typical structure:

```text
Hero
Featured Work
Capabilities
Clients
Process
Case Studies
Testimonials
About
Contact CTA
Footer
```

Focus on:

- editorial composition
- bold type
- art direction
- showreels
- case-study transitions
- premium feel

---

## Restaurant / Hospitality

Typical structure:

```text
Hero
Story
Signature Dishes
Menu Preview
Experience / Atmosphere
Gallery
Reviews
Hours + Location
Reservation CTA
Footer
```

Focus on:

- emotional imagery
- atmosphere
- appetizing spacing and presentation
- reservation clarity
- local information
- mobile usability

---

## Local Service Business

Typical structure:

```text
Hero
Core Services
Benefits
Before / After or Work Gallery
Trust Signals
Process
Testimonials
Service Area
FAQ
Contact CTA
Footer
```

Focus on:

- credibility
- conversion
- clear contact actions
- services
- local trust
- fast loading

---

# 8. Do Not Use Generic AI Website Layouts

Avoid the stereotypical pattern of:

- centered headline
- short paragraph
- two buttons
- three identical feature cards
- another three cards
- giant CTA
- footer

unless that structure genuinely fits the project.

Instead use varied compositions such as:

- asymmetric layouts
- editorial grids
- offset image/text compositions
- sticky sections
- horizontal galleries
- split-screen storytelling
- bento layouts
- timeline sections
- immersive media sections
- staggered content
- alternating visual rhythm
- layered typography
- scroll-based reveals
- large art-directed media

The goal is to make each website feel designed for the specific brand.

---

# 9. Visual Direction

Before coding, infer a visual direction from:

- logo
- local media
- industry
- target audience
- user's wording
- existing website
- existing colors
- existing typography

Choose a coherent design language.

Possible directions include:

- minimal editorial
- luxury
- cinematic
- futuristic
- playful
- brutalist
- neo-modern
- glassy tech
- organic
- monochrome
- high-fashion
- warm lifestyle
- premium corporate
- bold startup
- dark immersive
- clean Scandinavian
- experimental studio

Do not mix unrelated styles.

---

# 10. Build a Small Design System

Create reusable visual rules.

Define:

- background colors
- surface colors
- text colors
- muted text
- accent colors
- borders
- spacing scale
- radius scale
- shadows
- typography
- max content width
- animation timing
- transition easing

Use CSS variables or framework tokens when possible.

Example:

```css
:root {
  --bg: #0b0b0b;
  --surface: #141414;
  --text: #f5f5f5;
  --muted: #9b9b9b;
  --accent: #c8ff3d;
  --border: rgba(255,255,255,.1);
  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-lg: 28px;
}
```

The exact values must be derived from the project, not copied blindly.

---

# 11. Typography

Typography should create hierarchy, personality, and rhythm.

Use:

- strong display type for hero messaging
- readable body type
- controlled line lengths
- responsive font sizing
- consistent heading hierarchy
- intentional letter spacing

Avoid using too many font families.

Prefer existing project fonts.

If external fonts are already configured, use them.

If not, use a strong system-font stack unless the user explicitly asks to introduce another font.

---

# 12. Interaction Design

Interactive does not mean adding motion everywhere.

Every animation should serve one of these purposes:

- orient the user
- show hierarchy
- improve feedback
- reveal content
- strengthen storytelling
- communicate brand personality
- make navigation feel natural

Good interaction ideas include:

- magnetic buttons
- subtle cursor-reactive elements
- hover image reveals
- animated underlines
- card tilt
- image parallax
- scroll reveal
- text reveal
- counters
- accordion transitions
- sticky storytelling
- draggable galleries
- horizontal scroll sections
- animated navigation
- menu transitions
- product image zoom
- variant selectors
- cart drawer
- before/after sliders
- video reveal
- masked transitions
- marquee strips
- timeline animation
- staggered lists

Do not implement every effect in one project.

Choose a small interaction vocabulary and reuse it consistently.

---

# 13. Motion Guidelines

Motion should feel premium.

Prefer:

```text
transform
opacity
clip-path
filter
scale
translate
```

Avoid layout-thrashing animation when possible.

Animations should normally be:

- fast enough to feel responsive
- slow enough to be perceived
- subtle on repeated UI
- more expressive in hero/storytelling sections

Always respect reduced-motion preferences.

Example:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

# 14. Framework and Library Rules

First use the project's existing stack.

Possible stacks may include:

- HTML/CSS/JavaScript
- React
- Vite
- Next.js
- Astro
- Vue
- Nuxt
- Svelte
- SvelteKit
- Tailwind CSS
- CSS Modules
- styled-components
- shadcn/ui

Do not migrate frameworks without a strong reason.

If starting from scratch, choose the simplest stack that supports the requested experience.

For a modern interactive marketing website, a strong default is:

```text
React
Vite
Tailwind CSS
Framer Motion
Lucide icons
```

But only add dependencies that materially improve the result.

Do not bloat the project.

---

# 15. Existing Dependencies First

Before installing anything, inspect the package file.

If the project already has:

- Framer Motion
- GSAP
- Lenis
- Swiper
- Embla
- Radix
- shadcn/ui
- Lucide
- Three.js
- React Three Fiber

reuse those when appropriate.

Do not install two libraries that solve the same problem unless necessary.

---

# 16. Navigation

Navigation should feel intentional.

Consider:

- sticky navbar
- transparent-to-solid transition
- full-screen menu
- mobile sheet
- mega menu for stores
- minimal portfolio navigation
- section-aware active states
- scroll-to-section behavior

Always make mobile navigation usable.

Do not leave desktop-only navigation.

---

# 17. Hero Section

The hero is the first major design statement.

It should clearly communicate:

1. what this brand/person/product is
2. why the user should care
3. what action to take

Use local Google Flow media prominently when it is suitable.

Possible hero treatments:

- cinematic background video
- split visual layout
- editorial oversized type
- full-screen image
- interactive product mockup
- stacked image collage
- scroll-reactive media
- product showcase
- portfolio reel

Do not overwhelm the hero with too many competing elements.

---

# 18. Images

Use responsive image techniques where possible.

Prefer:

```html
<img
  src="/images/example.webp"
  alt="..."
  loading="lazy"
  decoding="async"
/>
```

For critical above-the-fold images, do not lazy-load if it harms perceived loading.

Use meaningful `alt` text.

Decorative images may use empty alt text.

Avoid stretching images.

---

# 19. Video

For ambient hero/background media:

```html
<video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
>
```

Use a poster image when available.

Do not autoplay audio.

Avoid loading multiple large videos above the fold.

On mobile, simplify video-heavy compositions when needed.

---

# 20. Responsive Design Is Mandatory

Design intentionally for:

- small phones
- large phones
- tablets
- laptops
- desktop
- wide desktop

Do not simply shrink the desktop layout.

Mobile may require:

- reordered sections
- reduced animation
- horizontal carousels
- simpler navigation
- cropped media
- shorter headlines
- stacked compositions
- hidden nonessential decoration

Check for:

- text overflow
- horizontal overflow
- clipped buttons
- broken grids
- tiny tap targets
- awkward media crops

---

# 21. Accessibility

The website should be usable beyond visual appearance.

Include:

- semantic HTML
- correct heading order
- buttons for actions
- links for navigation
- keyboard focus states
- sufficient contrast
- meaningful alt text
- accessible labels
- reduced motion
- usable mobile controls

Avoid clickable `<div>` elements when a semantic element is appropriate.

---

# 22. Performance

Do not sacrifice performance for decoration.

Optimize:

- image dimensions
- video usage
- animation
- rendering
- font loading
- JavaScript bundle size
- unnecessary dependencies

Prefer CSS for simple effects.

Lazy-load below-the-fold media.

Avoid huge blur effects over the entire viewport.

Avoid excessive continuously running JavaScript animations.

---

# 23. Content

If the user provides copy, preserve its meaning while improving presentation when necessary.

If copy is missing, write concise, credible placeholder copy appropriate to the brand.

Do not use obvious filler such as:

```text
Lorem ipsum
Revolutionize your business
Unlock your potential
Transform your future
```

unless the user requests placeholder text.

Use specific language.

---

# 24. E-commerce Interaction Rules

For stores, consider implementing front-end interactions such as:

- product image gallery
- thumbnail selection
- color selection
- size selection
- quantity controls
- add-to-cart feedback
- cart drawer
- product cards
- wishlist state
- collection filters
- sorting
- accordions
- sticky add-to-cart on mobile

If no backend exists, keep state client-side and do not claim that payments or inventory are truly functional.

---

# 25. Portfolio Interaction Rules

For portfolios, consider:

- project hover previews
- cinematic project cards
- case-study transitions
- fullscreen media
- sticky project metadata
- project pagination
- horizontal galleries
- reveal-on-scroll
- cursor-follow project previews

The work itself should remain the visual focus.

---

# 26. SaaS Interaction Rules

For SaaS pages, consider:

- interactive product mockups
- tabbed feature demos
- animated workflow diagrams
- integration grids
- pricing toggle
- FAQ accordion
- scroll-linked product explanation
- animated dashboards

Avoid fake metrics unless clearly presented as example data.

---

# 27. Decorative Details

Use decoration with restraint.

Useful details include:

- subtle grain
- line grids
- gradients
- glows
- abstract shapes
- floating badges
- custom dividers
- corner labels
- oversized section numbers
- tiny metadata labels
- masked images
- soft shadows
- border treatments

Avoid decoration that makes content harder to understand.

---

# 28. Avoid These Common Failures

Do not:

- make every section look like a card
- use the same rounded rectangle everywhere
- overuse gradients
- overuse glassmorphism
- use random neon colors
- animate every element
- install unnecessary packages
- duplicate content
- invent broken URLs
- use fake stock image links
- add huge blank sections without purpose
- leave mobile unfinished
- create unreadable text over media
- ignore the provided logo
- ignore local images/videos
- replace brand colors without reason
- build a generic template unrelated to the business

---

# 29. Site Quality Bar

The website should feel comparable to polished work seen on modern design galleries and premium startup/product websites.

Aim for:

- strong first impression
- excellent typography
- intentional spacing
- coherent art direction
- smooth interactions
- responsive layouts
- polished states
- visual rhythm
- high-quality media presentation
- readable content
- good performance

Do not chase novelty at the expense of usability.

---

# 30. Workflow

Follow this workflow for each website task.

## Step 1 — Inspect

Inspect:

- project structure
- framework
- media
- logo
- styling
- dependencies
- current pages

---

## Step 2 — Understand the Brand

Infer:

- audience
- personality
- goal
- conversion action
- visual language

---

## Step 3 — Map Local Assets

Identify the best role for each useful image/video.

---

## Step 4 — Plan the Page

Create a logical section order appropriate to the website type.

Do not add sections merely to make the page longer.

---

## Step 5 — Establish Design Tokens

Set typography, colors, spacing, radius, and motion behavior.

---

## Step 6 — Build the Main Experience

Build the most visually important areas first:

1. navigation
2. hero
3. primary product/work/content section
4. conversion areas
5. supporting sections
6. footer

---

## Step 7 — Add Interaction

Add a small number of polished interactions after the static structure is strong.

---

## Step 8 — Responsive Pass

Test and improve mobile/tablet behavior.

---

## Step 9 — Accessibility + Performance Pass

Fix semantic issues, contrast, focus states, media loading, and unnecessary rendering.

---

## Step 10 — Final Polish

Review:

- spacing
- alignment
- hover states
- transitions
- animation consistency
- image crops
- typography
- button states
- broken links
- console errors
- responsiveness

---

# 31. Existing Website Redesigns

If redesigning an existing site:

Preserve valuable information architecture unless there is a reason to improve it.

Look for:

- brand identity
- important content
- products/services
- social proof
- contact information
- conversion actions
- legal/footer information

Improve:

- hierarchy
- spacing
- visuals
- usability
- interaction
- responsiveness
- performance

Do not accidentally remove business-critical content.

---

# 32. Asset-Safe Coding

When referencing local files:

- use correct paths for the framework
- respect public/static folder conventions
- do not rename assets unnecessarily
- do not duplicate large files without reason
- use URL-safe paths
- handle missing media gracefully

If filenames contain spaces or unusual characters, normalize only when needed and update references carefully.

---

# 33. Component Architecture

Create reusable components where it improves maintainability.

Examples:

```text
Navbar
Hero
SectionHeading
ProjectCard
ProductCard
MediaFrame
VideoBackground
TestimonialCard
CTASection
Footer
MobileMenu
CartDrawer
Accordion
Gallery
```

Do not split trivial markup into dozens of meaningless components.

---

# 34. States

Design interactive states, not only static screenshots.

Consider:

- default
- hover
- focus
- active
- selected
- loading
- empty
- error
- disabled
- menu open
- modal open
- cart populated

Only build states relevant to the requested project.

---

# 35. Icons

Prefer one consistent icon family.

If Lucide is already installed, use it.

Otherwise use the project's existing icon system.

Avoid mixing unrelated icon styles.

Do not use emoji as UI icons unless the visual direction calls for it.

---

# 36. Forms

Forms should include:

- labels
- validation-ready structure
- focus states
- clear button state
- success/error space
- mobile-friendly inputs

Do not claim a form sends data unless the backend/integration actually exists.

---

# 37. SEO Basics

For public-facing websites, add or preserve:

- clear page title
- meta description
- semantic headings
- meaningful link text
- social preview metadata when appropriate
- canonical structure where the framework supports it

Do not keyword-stuff.

---

# 38. Final Verification Checklist

Before considering the website complete, verify:

```text
[ ] Project runs
[ ] No obvious console errors
[ ] Local media paths work
[ ] Logo displays correctly
[ ] Hero looks intentional
[ ] Navigation works
[ ] Mobile menu works
[ ] Main interactions work
[ ] Layout works on mobile
[ ] Layout works on desktop
[ ] No horizontal overflow
[ ] Buttons have hover/focus states
[ ] Important images have alt text
[ ] Videos are muted when autoplaying
[ ] Reduced-motion behavior exists
[ ] No fake functionality is presented as real
[ ] No random external stock images were added
[ ] No obvious template filler remains
[ ] Spacing and typography are consistent
[ ] Page has a clear primary CTA
```

---

# 39. How to Respond to the User

When completing the task, keep the response concise.

Mention:

- what was built
- the visual direction
- which local media assets were used
- important interactions
- any feature that remains front-end-only

Do not dump a long explanation unless the user asks for it.

---

# 40. Autonomy Rule

Do not stop for minor design decisions.

When the user gives enough information to build the site:

- make reasonable design decisions
- use the strongest local assets
- choose a coherent visual direction
- implement the website
- polish it

Only ask a question when a missing answer would fundamentally change the project.

Prefer building a strong first version over blocking progress.

---

# 41. User Asset Override

If the user explicitly says that newly added Google Flow images/videos should replace older assets:

1. rediscover the media folder
2. identify the new files
3. replace the relevant visual references
4. preserve layout quality
5. retest responsive behavior

Treat the user's newest approved assets as authoritative.

---

# 42. Core Principle

**Design around the content and assets that actually exist.**

Do not make a generic website and then force the user's assets into it.

Study the available logo, images, videos, copy, and brand cues first.

Then create a website whose layout, typography, motion, and storytelling make those assets feel like they were produced for the site from the beginning.

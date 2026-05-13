# Plan: imaginehealth.ai → Next.js Elegant Rebuild

## Context

The existing imaginehealth.ai is a Webflow site. This plan rebuilds it as a Next.js project with the same content but an elevated editorial design — inspired by the VenueLLM `/app/m` microsite pattern (CSS custom properties, Framer Motion scroll reveals, Cormorant Garamond + DM Sans typography, generous whitespace).

The user chose the **Refined Brand** palette: keep the lime/green brand identity but soften it to a sophisticated biotech-editorial aesthetic.

---

## Source Content Inventory

**Pages (3 total — `/about`, `/our-work`, `/what-we-do` all 404 on the live site):**
- `/` — Hero, mission statement, YouTube demo, problem/stats, technical challenges, CTA
- `/contact` — Contact form + office locations (London & Miami) + social links
- `/news/internship` — Summer 2025 internship announcement article

**Current brand (Webflow):**
- Fonts: Oswald + Inter + Libre Baskerville
- Colors: lime `#e0f391`, turquoise `#bdfff9`, near-black `#1f1f1f`
- No hosted images — site is entirely text-based
- YouTube embed ID: `PtCPogxZASc` ("Transthoracic Echocardiogram" demo)

---

## Design System

### Palette — Refined Brand (chosen)
| Token | Value | Notes |
|---|---|---|
| `--ih-bg` | `#12130E` | Near-black with green tint |
| `--ih-surface` | `#1C1E17` | Slightly lighter card surface |
| `--ih-text` | `#ECEAE3` | Warm cream |
| `--ih-muted` | `rgba(236,234,227,0.55)` | Reduced-opacity text |
| `--ih-accent` | `#A4B85C` | Muted sage/olive |
| `--ih-accent-contrast` | `#12130E` | Text on accent bg |

### Typography
- **Display**: Cormorant Garamond 400, `letter-spacing: -0.02em`, fluid `clamp()` sizes, italic for emphasis spans
- **Body**: DM Sans 300–500, `letter-spacing: 0.18em` on uppercase labels
- **Google Fonts**: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap`

### Motion (matching VenueLLM patterns)
```tsx
// Scroll reveal
initial={{ opacity: 0, y: 24 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-80px" }}
transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}

// Stagger children
transition={{ ..., delay: i * 0.08 }}

// Spring (interactive elements, nav pill)
transition={{ type: "spring", stiffness: 420, damping: 32 }}
```

### Border / overlay pattern
```css
border: 1px solid color-mix(in oklch, var(--ih-text) 8%, transparent)
background: color-mix(in oklch, var(--ih-bg) 92%, transparent)
```

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + inline CSS custom properties |
| Animation | `motion` (Framer Motion v12, package name is `motion`) |
| Icons | `lucide-react` |
| Fonts | Google Fonts via `<link>` in layout |

### Dependencies to install
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir no --import-alias "@/*"
npm install motion lucide-react
```

---

## File Structure

```
imagehealth-website/
├── app/
│   ├── layout.tsx               ← root layout: Google Fonts link, metadata, ThemeProvider
│   ├── globals.css              ← Tailwind directives + scoped color reset
│   ├── page.tsx                 ← homepage (all 6 sections)
│   ├── contact/
│   │   └── page.tsx             ← contact form + locations
│   └── news/
│       └── internship/
│           └── page.tsx         ← internship announcement article
├── components/
│   ├── theme.tsx                ← CSS-var ThemeProvider + useTheme hook
│   ├── nav.tsx                  ← sticky nav with blur backdrop
│   └── footer.tsx               ← footer with © + social links
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Homepage Sections (`app/page.tsx`)

Each section uses `<motion.div whileInView>` scroll reveals. Order:

### 1. HeroSection
- Full-viewport (`min-h-screen`), `pt-[60px]` for nav offset
- Headline: `"Embodied Artificial Intelligence"` + italic `"that heralds a new era in healthcare."` in Cormorant Garamond at `clamp(3.2rem, 7vw, 6.5rem)`, weight 400
- Two body paragraphs (the mission copy) fade in staggered below
- Thin horizontal accent line as divider

### 2. MissionSection
- Heading: `"An interdisciplinary team on a singular mission"` — Cormorant Garamond `clamp(2rem, 4vw, 3.2rem)`
- Tag strip: `Ultrasound / Robotics Control / Computer Vision / Safety / Scalability` — DM Sans, tracked uppercase, muted color

### 3. VideoSection
- YouTube embed `https://www.youtube.com/embed/PtCPogxZASc` in a 16:9 aspect-ratio container
- Container has the thin `color-mix` border
- Caption below: `"Transthoracic Echocardiogram — autonomous robotic ultrasound demo."` in small tracked DM Sans

### 4. ProblemSection
- Two-column grid (desktop: 5+6 cols, tablet: stacked)
- Left: heading `"Time to rethink healthcare delivery."` + italic `"Starting with Ultrasound."`
- Right: body paragraph + 2×2 stat grid
  - Stat number in Cormorant Garamond large (`clamp(2.4rem, 5vw, 4rem)`), label in 11px tracked DM Sans
  - `25,000` Unfilled Sonographer Roles
  - `85%` Occupational Injury Rate
  - `24 days` Average Ultrasound Wait Time
  - `47%` Sonographers ready to quit

### 5. ChallengesSection
- Long-form paragraph: the "150,000 publications on RUSS" question
- Below: two-column challenge card grid
  - "Precision and Control" — body copy
  - "Dynamic Environment" — body copy
- Aside (right column on desktop): `"creating the world we want to inhabit."` in Cormorant Garamond italic large

### 6. CTASection
- Accent background (`var(--ih-accent)`), text `var(--ih-accent-contrast)`
- Heading: `"Join our"` + italic `"journey"`
- Button: `"Get in touch"` → `/contact`

---

## Contact Page (`app/contact/page.tsx`)

### Sections
1. **Page header**: `"Get in touch"` (display) + `"we are hiring & open to collaborations"` (muted subheading)
2. **Two-column layout** (desktop):
   - Left: contact form (client component with `useState`)
   - Right: contact info card + social icons

### Form fields
| Field | Type | Required |
|---|---|---|
| First name | text | yes |
| Last name | text | yes |
| Email | email | yes |
| Phone number | tel | no |
| How can we help? | textarea | no |
| Preferred contact | radio (Email / Call) | no |
| Submit button | — | — |

Form shows a success message after submit: `"Your request has been submitted and we will get to you shortly."`

### Contact info
- **Email**: info@imaginehealth.ai
- **Phone**: +44 20 3987 5299
- **London**: 8 Leake Street, London, SE1 7NN
- **Miami**: 390 NE 191st St STE 8959, Miami, FL 33179

### Social links
LinkedIn, Instagram, Dribbble, Behance — via lucide-react icons where available, plain SVG/text otherwise

---

## Internship Page (`app/news/internship/page.tsx`)

Editorial article layout (server component, static):

1. **Eyebrow**: `"News · Summer 2025"` — tracked uppercase DM Sans, muted
2. **Headline**: `"Robotics & AI Internship — Summer 2025"` — Cormorant Garamond display
3. **Meta row**: Location (London, UK) · Duration (3 months, extendable to 6) · Start (Summer 2025)
4. **Intro paragraph**: mission framing
5. **Three track cards** (staggered reveal):
   - **Robotics Perception** — 3D body surface reconstruction, RGB-D/LiDAR, SLAM
   - **Robotics Controls** — control policies for robotic arms, MPC, trajectory optimization
   - **Safety & System Integration** — real-time fault detection, HRI compliance
6. **Requirements** (bulleted list): Master's/PhD, C++ or Python, ROS2 preferred
7. **Benefits** (bulleted list): compensation, mentorship (ex-Dyson/Ocado/Amazon), publication exposure, FT conversion
8. **Application CTA**: `mailto:internships@imaginehealth.ai?subject=Robotics%20%26%20AI%20Internship%20%E2%80%93%20Summer%202025` button

---

## Nav (`components/nav.tsx`)

```
Fixed, z-50, h-[60px]
Background:   color-mix(in oklch, var(--ih-bg) 92%, transparent)
Backdrop:     blur(16px)
Border-bottom: 1px solid color-mix(in oklch, var(--ih-text) 8%, transparent)
```

- Left: `"imagine health"` in Cormorant Garamond — links to `/`
- Right: `News` + `Get in touch` — DM Sans, 10px, `tracking-[0.3em]`, uppercase
- Active route: subtle accent-colored underline/dot

---

## Footer (`components/footer.tsx`)

```
px-6 md:px-12 py-10
Border-top: 1px solid color-mix(in oklch, var(--ih-text) 8%, transparent)
```

- `© Imagine Health Group Inc. 2024–2025. All Rights Reserved.`
- Social icon row (LinkedIn, Instagram, etc.)
- Privacy policy plain link

---

## Theme Provider (`components/theme.tsx`)

Mirrors the VenueLLM `OutreachThemeProvider` pattern:

```tsx
// Injects Google Fonts + scoped color reset
// Wraps children in <div data-ih-root style={cssVars}>
// Scoped reset overrides Tailwind's global color pins:
// [data-ih-root], [data-ih-root] * { color: inherit; }
// [data-ih-root] { color: var(--ih-text); background: var(--ih-bg); }
```

---

## Implementation Steps

1. **Bootstrap** — `npx create-next-app@latest` in repo root (TS, Tailwind, App Router, no `/src`)
2. **Install extras** — `npm install motion lucide-react`
3. **Theme** — `components/theme.tsx`: CSS-var constants + `ThemeProvider` + scoped reset
4. **Layout** — `app/layout.tsx`: wrap with `ThemeProvider`, metadata, Google Fonts `<link>`
5. **globals.css** — Tailwind `@tailwind base/components/utilities` + scoped `[data-ih-root]` reset
6. **Nav** — `components/nav.tsx`
7. **Footer** — `components/footer.tsx`
8. **Homepage** — `app/page.tsx`: 6 sections top to bottom
9. **Contact page** — `app/contact/page.tsx`: client component for form
10. **Internship page** — `app/news/internship/page.tsx`: static server component

---

## Verification Checklist

- [ ] `npm run dev` → all 3 routes load without errors
- [ ] Cormorant Garamond (display) and DM Sans (body) both load correctly
- [ ] Scroll animations fire on each section (`whileInView`)
- [ ] YouTube embed loads in VideoSection
- [ ] Contact form: submit shows success state, fields clear
- [ ] Nav active-route indicator works on all 3 pages
- [ ] Responsive: stats grid stacks on mobile, nav links visible, sections breathe at all breakpoints
- [ ] `npm run build` passes with zero TypeScript errors

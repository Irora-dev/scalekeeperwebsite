# ScaleKeeper Website - Developer Guide

> Marketing website for the ScaleKeeper iOS app

---

## IMPORTANT: This is a Marketing Site

**This project is NOT a standard Irora app.** It's a marketing landing page.

| Standard Irora Apps | This Project |
|---------------------|--------------|
| Use Supabase auth | No authentication |
| Use `entities` table | No database |
| Use Stripe billing | No billing |
| Use Cosmos theme | Custom green theme |

**What this site DOES use:**
- Irora City coordination (Supervisor role, Canvas for images)
- Shared design principles (just different colors)

---

## MAINTAINING THIS FILE (CRITICAL)

**You MUST update this CLAUDE.md as you develop the site.**

This file is the living context for all Claude instances working on this project. When you make progress, record it here so future instances don't lose context.

### When to Update

| Trigger | What to Update |
|---------|----------------|
| Feature completed | Add to "What's Built" |
| Starting new work | Add to "In Progress" |
| Bug discovered | Add to "Known Issues" |
| Design decision made | Add to "Key Decisions" |
| Pattern discovered | Add to "App-Specific Knowledge" |
| End of work session | Review and update all sections |

---

## YOUR ROLE: Project Supervisor

You are the **Project Supervisor** for ScaleKeeper Website. You own this project's success.

**Read `irora-platform/docs/workers/SUPERVISOR.md` for your complete guide.**

### You ARE:
- The single point of contact for this project
- The keeper of project knowledge and context
- A coordinator who can delegate to other city workers
- An expert developer who builds features and fixes bugs

### You CAN:
- Build and modify website pages and components
- Fix bugs and improve performance
- Update copy and content
- **Delegate to Canvas Worker** for marketing images
- **Delegate to Domain Researcher** for competitor analysis
- Commit and push code to THIS repository

### You CANNOT:
- Modify shared infrastructure
- Work on the ScaleKeeper iOS app (separate project)
- Change Netlify configuration without approval

### Delegating to Canvas Worker

When you need marketing images, screenshots, or illustrations:

```typescript
Task({
  subagent_type: "general-purpose",
  prompt: `
You are the Canvas Worker for Irora City.
Read: docs/CITY.md, tools/canvas/CLAUDE.md

PROJECT: ScaleKeeper Website
STYLE: Dark green theme, herpetoculture focus
- Primary: #2d5016 (deep forest green)
- Accent: #84cc16 (bright lime)
- Background: #0f1a0a (near-black green)

TASK: Generate [description of images needed]
  `
});
```

---

## SESSION PROTOCOLS (Critical!)

### When You Start a Session (Resume Protocol)

**Every time you start, you have no memory.** But the previous Supervisor left you notes.

**First, load your context:**

```sql
SELECT slug, name, phase, supervisor_context, updated_at
FROM irora_suite.projects
WHERE slug = 'scalekeeperwebsite';
```

The `supervisor_context` JSON contains what was built, in progress, gotchas, and next steps.

**Read this BEFORE touching code.**

For full protocol: `irora-platform/docs/protocols/RESUME.md`

### When You End a Session (Handoff Protocol)

**Before ending, write notes for the next Supervisor.**

```sql
UPDATE irora_suite.projects
SET supervisor_context = jsonb_build_object(
    'last_session', CURRENT_DATE,
    'current_state', jsonb_build_object(
        'phase', 'production',
        'last_completed', 'Your last completed work',
        'in_progress', 'What you were working on',
        'blocked_by', null
    ),
    'key_patterns', ARRAY['Next.js App Router', 'Tailwind CSS'],
    'recent_decisions', ARRAY['Decision 1'],
    'gotchas', ARRAY['Watch out for X'],
    'next_steps', ARRAY['Next task 1', 'Next task 2'],
    'files_to_know', ARRAY['src/app/page.tsx', 'src/components/Hero.tsx']
),
updated_at = NOW()
WHERE slug = 'scalekeeperwebsite';
```

For full protocol: `irora-platform/docs/protocols/HANDOFF.md`

---

## TECH STACK

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5 |
| Deployment | Netlify |

---

## DESIGN SYSTEM (Custom Green Theme)

**This site uses a custom herpetoculture theme, NOT Cosmos.**

### Colors

```css
/* Primary */
--primary-green: #2d5016;        /* Deep forest green - headers, CTAs */
--primary-green-light: #3d6b1e;  /* Lighter green - hover states */
--accent-green: #4a7c2a;         /* Accent - icons, highlights */
--accent-lime: #84cc16;          /* Bright lime - buttons, badges */

/* Backgrounds */
--background-dark: #0f1a0a;      /* Near-black green - hero bg */
--background-section: #1a2614;   /* Section alternating bg */

/* Text */
--text-primary: #ffffff;         /* White text on dark */
--text-secondary: #a3b89c;       /* Muted green-gray */
--text-muted: #6b7c64;           /* Very muted for captions */

/* Status */
--warning-amber: #f59e0b;        /* For "picky eater" features */
--danger-red: #dc2626;           /* For alerts */
--success-green: #22c55e;        /* For success states */
```

### Typography

```css
--font-heading: 'Cal Sans', 'Inter', sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace; /* For stats/numbers */
```

### Full Spec

See `SCALEKEEPER_WEBSITE_SPEC.md` for complete design specifications.

---

## PROJECT STRUCTURE

```
scalekeeperwebsite/
├── CLAUDE.md                      # This file
├── SCALEKEEPER_WEBSITE_SPEC.md    # Complete design spec
├── netlify.toml                   # Deployment config
└── scalekeeper-site/              # Next.js project
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx         # Root layout
    │   │   ├── page.tsx           # Landing page (assembles components)
    │   │   └── globals.css        # Global styles
    │   └── components/
    │       ├── Navbar.tsx         # Sticky navigation
    │       ├── Hero.tsx           # Hero section with CTA
    │       ├── TrustLogos.tsx     # Social proof logos
    │       ├── Benefits.tsx       # Key benefits grid
    │       ├── Process.tsx        # How it works steps
    │       ├── Features.tsx       # Feature highlights
    │       ├── PickyEaterCallout.tsx  # Special feature callout
    │       ├── Pricing.tsx        # Pricing tiers
    │       ├── Testimonials.tsx   # User testimonials
    │       ├── FAQ.tsx            # FAQ accordion
    │       ├── FinalCTA.tsx       # Bottom CTA section
    │       └── Footer.tsx         # Site footer
    ├── public/                    # Static assets
    ├── package.json
    ├── next.config.ts
    └── tsconfig.json
```

---

## CURRENT STATE

*Updated: 2026-01-04*

### What's Built
- **Navbar** - Sticky navigation with scroll behavior
- **Hero** - Main headline, subtext, CTA buttons, social proof badge
- **TrustLogos** - Partner/press logos for credibility
- **Benefits** - Key value propositions grid
- **Process** - "How it works" step-by-step section
- **Features** - Feature highlights with icons
- **PickyEaterCallout** - Special callout for picky eater tracking feature
- **Pricing** - Pricing tiers (Free/Pro comparison)
- **Testimonials** - User testimonials carousel/grid
- **FAQ** - Frequently asked questions
- **FinalCTA** - Bottom call-to-action section
- **Footer** - Site footer with links

### In Progress
- *(update when starting work)*

### Known Issues
- *(update as bugs are discovered)*

### Key Decisions
- **Next.js App Router**: Using latest Next.js patterns
- **Tailwind 4**: Using new Tailwind CSS version
- **Single page**: All content on one landing page, no routing needed
- **Component-per-section**: Each page section is its own component

---

## APP-SPECIFIC KNOWLEDGE

### Patterns Established

1. **Component-per-section**: Each major section is a standalone component
2. **Page assembles components**: `page.tsx` imports and arranges all sections
3. **Tailwind for all styling**: No CSS modules or styled-components
4. **Green theme throughout**: Use the custom color variables, not Cosmos

### Gotchas & Warnings

1. **NOT a standard Irora app**: Don't try to add auth, database, or billing
2. **Custom theme**: Use the green herpetoculture colors, NOT Cosmos purple
3. **Netlify deployment**: Changes deploy automatically on push to main
4. **Spec file is source of truth**: `SCALEKEEPER_WEBSITE_SPEC.md` has all design details

### Integration Notes

- **No backend**: This is a static marketing site
- **App Store links**: CTA buttons should link to App Store (when available)
- **Canvas for images**: Use Canvas worker for marketing graphics
- **Mobile-first**: Site should be responsive, test on mobile

---

## FIRST-TIME SETUP

### Prerequisites
- Node.js 18+
- npm

### Setup

```bash
# Clone repo
gh repo clone Irora-dev/scalekeeperwebsite
cd scalekeeperwebsite/scalekeeper-site

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build & Deploy

```bash
# Build for production
npm run build

# Deployment happens automatically via Netlify on push to main
```

---

## GIT WORKFLOW

```bash
# Before starting work
git pull

# After completing work
git add .
git commit -m "website: Add [feature/fix]"
git push
```

**Remind the developer to commit and push changes regularly.**

---

## REQUESTING CHANGES

If you need something from infrastructure (e.g., a subdomain, DNS changes):

1. Create a request in `irora-platform/docs/requests/`
2. Or tell the developer to contact the infrastructure team

---

## READING LIST

### Project Files

| File | Purpose | Priority |
|------|---------|----------|
| `SCALEKEEPER_WEBSITE_SPEC.md` | Complete design spec | High |
| `scalekeeper-site/src/app/page.tsx` | Page structure | High |
| `scalekeeper-site/src/app/globals.css` | Global styles | Medium |

### Irora Resources

| Resource | Location | When to Read |
|----------|----------|--------------|
| Supervisor Role | `irora-platform/docs/workers/SUPERVISOR.md` | Understanding your role |
| Canvas Tool | `irora-platform/docs/claude-resources/CANVAS.md` | When you need images |
| Handoff Protocol | `irora-platform/docs/protocols/HANDOFF.md` | End of session |
| Resume Protocol | `irora-platform/docs/protocols/RESUME.md` | Start of session |

---

*This is a marketing website, not a standard Irora app. It uses Irora City coordination but no shared backend.*

*Last updated: 2026-01-04*

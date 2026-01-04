# ScaleKeeper Website - Developer Guide

> Marketing website for the ScaleKeeper app

---

## MAINTAINING THIS FILE (CRITICAL)

**You MUST update this CLAUDE.md as you develop the app.**

This file is the living context for all Claude instances working on this project. When you make progress, record it here so future instances don't lose context.

### When to Update

| Trigger | What to Update |
|---------|----------------|
| Feature completed | Add to "What's Built" |
| Starting new work | Add to "In Progress" |
| Bug discovered | Add to "Known Issues" |
| Architectural decision made | Add to "Key Decisions" |
| Pattern or gotcha discovered | Add to "App-Specific Knowledge" |
| Context file created | Add to "Reading List" |
| End of work session | Review and update all sections |

### Creating Additional Context Files

If you need to capture detailed context (design decisions, complex flows, technical specs), create separate files and reference them in the **Reading List** section below.

Recommended locations:
- `docs/` - General documentation
- `docs/decisions/` - Architectural Decision Records (ADRs)
- `docs/context/` - Deep context files for Claude

**Always add new context files to the Reading List.**

---

## THE VISION (Why This Matters)

This app is part of **IroraForge** - a platform for mass-producing niche apps using AI.

**The core principle: One infrastructure, hundreds of apps.**

Every Irora app shares:
- **Authentication** (Supabase auth - single user identity across all apps)
- **Database** (single Supabase project, generic `entities` table with JSONB)
- **Billing** (Stripe, shared webhooks and Edge Functions)
- **Design System** (Cosmos theme, component library)
- **Spec Suite** (patterns, templates, guidelines)

**Why this matters to you:**
- You DON'T need to set up auth - it's ready
- You DON'T need to set up billing - it's ready
- You DON'T need to design from scratch - use the spec suite
- You ONLY need to build features and UI for THIS app

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
- Build app features and UI
- Fix bugs and refactor code
- Use the shared infrastructure (auth, database, billing)
- **Delegate to Canvas Worker** for image generation
- **Delegate to Domain Researcher** for feature research
- **Delegate to other specialists** when expertise is needed
- Commit and push code to THIS repository

### You CANNOT:
- Modify shared infrastructure or database schema
- Create new database tables (use entities)
- Modify Stripe configuration
- Work on other projects (you own THIS one)

### Delegating to Other Workers

When you need images, research, or other specialized work:

```typescript
// Example: Need images for the app
Task({
  subagent_type: "general-purpose",
  prompt: `
You are the Canvas Worker for Irora City.
Read: docs/CITY.md, tools/canvas/CLAUDE.md

PROJECT: ScaleKeeper Website
STYLE GUIDE: [reference project style guide]

TASK: Generate [description of images needed]
  `
});
```

See `docs/workers/SUPERVISOR.md` for full delegation patterns.

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

The `supervisor_context` JSON contains:
- `current_state` - What's built, in progress, blocked
- `key_patterns` - How the codebase works
- `recent_decisions` - Why things are the way they are
- `gotchas` - Traps to avoid
- `next_steps` - What was planned
- `files_to_know` - Key files to read

**Read this BEFORE touching code.** It's 500 tokens vs exploring 50k tokens of codebase.

For full protocol: `irora-platform/docs/protocols/RESUME.md`

### When You End a Session (Handoff Protocol)

**Before ending, write notes for the next Supervisor.**

```sql
SELECT irora_suite.update_supervisor_context('scalekeeperwebsite', '{
  "last_session": "CURRENT_DATE",
  "current_state": {
    "phase": "production",
    "last_completed": "Settings screen",
    "in_progress": "Profile editing",
    "blocked_by": null
  },
  "key_patterns": ["MVVM architecture", "IroraClient for all Supabase"],
  "recent_decisions": ["Used TabView for navigation"],
  "gotchas": ["Must call refreshSession on app foreground"],
  "next_steps": ["Implement dark mode toggle", "Add haptic feedback"],
  "files_to_know": ["Views/SettingsView.swift", "Managers/AuthManager.swift"]
}'::jsonb);
```

**This is how you leave notes for yourself with amnesia.**

For full protocol: `irora-platform/docs/protocols/HANDOFF.md`

---

## SHARED INFRASTRUCTURE (What You MUST Use)

These systems are already built and shared across all Irora apps. **USE them, don't recreate them.**

### 1. Authentication (Ready to Use)
- **Provider:** Supabase Auth
- **What it does:** Sign up, sign in, password reset, session management
- **Your job:** Call the auth methods (shown below) - that's it
- **NOT your job:** Setting up OAuth, configuring providers, managing tokens

### 2. Database (Ready to Use)
- **Provider:** Supabase (shared project: `iroraforge`)
- **Pattern:** Generic `entities` table with JSONB data column
- **Your job:** Store data using entity_type + JSON data
- **NOT your job:** Creating tables, writing migrations, modifying schema

### 3. Billing (Ready to Use)
- **Provider:** Stripe (shared account)
- **Edge Functions:** `create-checkout`, `create-portal`, `stripe-webhook`
- **Your job:** Check subscription status, show upgrade prompts
- **NOT your job:** Configuring Stripe, creating products, handling webhooks

### 4. Design System (Must Follow)
- **Theme:** Cosmos (dark cosmic aesthetic)
- **Location:** `Irora-dev/suite-md-files` repository
- **Your job:** Follow the design specs exactly
- **NOT your job:** Inventing new colors, patterns, or components

### 5. Image Generation - Canvas Tool (Use When Needed)
- **Tool:** Canvas (part of Irora Suite)
- **Provider:** Leonardo AI
- **What it does:** Generate images with project style guides, character consistency
- **Your job:** Request images when needed (icons, illustrations, marketing)
- **NOT your job:** Asking users to create images elsewhere, using external tools

**When you need images:**
```bash
irora canvas generate --project scalekeeperwebsite --prompt "your description" --tags "tag1,tag2"
irora canvas upscale --asset <asset-id>  # To upscale
irora canvas search --project scalekeeperwebsite    # To find existing
```

See `irora-platform/docs/claude-resources/CANVAS.md` for full documentation.

---

## IRORAFORGE RESOURCES (Read Before Building)

Before building anything, check if it already exists in the shared infrastructure. **Don't reinvent—use what's there.**

### Resource Documentation

These docs are written specifically for Claude instances. They summarize what's available without requiring you to explore all infrastructure repos.

| Resource | Location | When to Read |
|----------|----------|--------------|
| **Component Library** | `irora-platform/docs/claude-resources/COMPONENTS.md` | Before building any UI element |
| **Design System** | `irora-platform/docs/claude-resources/DESIGN.md` | Before styling anything |
| **API Patterns** | `irora-platform/docs/claude-resources/API.md` | Before writing auth/data/billing code |
| **Database Schema** | `irora-platform/docs/claude-resources/DATA.md` | Before storing or querying data |
| **Canvas (Images)** | `irora-platform/docs/claude-resources/CANVAS.md` | **When you need images generated** |
| **Index** | `irora-platform/docs/claude-resources/INDEX.md` | Overview of all resources |

### How to Access

```bash
# From any directory - read via GitHub
gh api repos/Irora-dev/irora-platform/contents/docs/claude-resources/COMPONENTS.md --jq '.content' | base64 -d

# Or clone irora-platform and read locally
cat ~/path/to/irora-platform/docs/claude-resources/COMPONENTS.md
```

### Quick Decision Tree

```
Need images (icons, art)?  → Use Canvas tool (see CANVAS.md)
Building a UI element?     → Check COMPONENTS.md first
Need colors/fonts/spacing? → Check DESIGN.md first
Doing auth/data/billing?   → Check API.md first
Storing user data?         → Check DATA.md first
None of the above?         → Build it, document in your CLAUDE.md
```

**Rule:** If it feels "generic" (button, card, auth flow, data storage), it probably exists. Check before building.

---

## WHEN YOU'RE ASKED TO DO SOMETHING OUTSIDE YOUR SCOPE

### "Can you set up authentication/login for this app?"
→ "Authentication is already set up and shared across all Irora apps. I'll show you how to use it - see the auth code examples below."

### "Can you create a database table for [feature]?"
→ "Irora apps use the generic `entities` table with JSONB data instead of custom tables. I'll show you how to store your data using entity types. If you believe you need a custom table, that's an infrastructure decision - contact the infrastructure team."

### "Can you set up Stripe/billing for this app?"
→ "Billing is already set up and shared. I'll show you how to check subscription status and trigger the checkout flow - see the subscription code examples below."

### "Can you add a feature that requires backend changes?"
→ "Backend/infrastructure changes are outside my scope. I can build the frontend for this feature, but if it needs database schema changes or new API endpoints, that requires the infrastructure team."

### "Can you modify another app's code?"
→ "I only have access to this app (ScaleKeeper Website). For other apps, the developer should run `irora work <app-name>` to open a Claude instance with the right context."

### "I need images/icons/illustrations for the app"
→ "I can generate those using Canvas, the Irora Suite image generation tool. Let me check the docs and create what you need."
Then read `irora-platform/docs/claude-resources/CANVAS.md` and use the generate script.

---

## REQUESTING INFRASTRUCTURE CHANGES

If you need something from infrastructure (new API, schema change, new component, integration), you can submit a request.

### How to Submit a Request

Create a file in the infrastructure repo:

```bash
# Create request file
gh api repos/Irora-dev/irora-platform/contents/docs/requests/scalekeeperwebsite-YOUR-REQUEST.md \
  -X PUT \
  -f message="request: scalekeeperwebsite - brief description" \
  -f content="$(echo '# Request: Title

**From:** scalekeeperwebsite
**Date:** '"$(date +%Y-%m-%d)"'
**Status:** pending

## What I Need

Describe what you need...

## Why I Need It

Explain the use case...
' | base64)"
```

Or simply tell the developer: "This feature needs an infrastructure change. Ask the infra team to check `docs/requests/` in irora-platform."

### What You Can Request

- New API endpoints or patterns
- Database schema changes
- New shared components
- Design system additions
- Third-party integrations
- New tooling or scripts

Infrastructure Claude reviews requests periodically and will implement, reject, or defer with explanation.

---

## The Spec Suite - Your Design Bible

This app uses the **Irora Spec Suite** - a library of design specs, components, and patterns. You MUST use these specs for visual consistency.

### Accessing the Specs

The spec suite lives at `Irora-dev/suite-md-files`. Access key files:

```bash
# Design System (colors, typography, spacing)
gh api repos/Irora-dev/suite-md-files/contents/design/DESIGN_SYSTEM.md --jq '.content' | base64 -d

# Component Library (buttons, cards, inputs)
gh api repos/Irora-dev/suite-md-files/contents/design/COMPONENT_LIBRARY.md --jq '.content' | base64 -d
```

Or via URL:
- https://raw.githubusercontent.com/Irora-dev/suite-md-files/main/design/DESIGN_SYSTEM.md
- https://raw.githubusercontent.com/Irora-dev/suite-md-files/main/design/COMPONENT_LIBRARY.md

### Theme: Custom Green (App-Specific Override)

**This marketing site uses a custom herpetoculture theme** instead of Cosmos. This is documented in `SCALEKEEPER_WEBSITE_SPEC.md`.

| Name | Hex | Usage |
|------|-----|-------|
| Primary Green | `#2d5016` | Headers, CTAs |
| Accent Lime | `#84cc16` | Buttons, badges |
| Background Dark | `#0f1a0a` | Hero background |
| Background Section | `#1a2614` | Alternating sections |
| Text Primary | `#ffffff` | Main text |
| Text Secondary | `#a3b89c` | Muted text |

### Using Specs

**Before building any UI:**
1. Check `SCALEKEEPER_WEBSITE_SPEC.md` for this site's design details
2. Use the custom green theme colors defined above
3. For shared components, adapt Cosmos patterns to green theme

**Example - Need a button?**
Use the green theme from SCALEKEEPER_WEBSITE_SPEC.md:

```tsx
<button className="w-full py-4 bg-lime-500 rounded-xl text-black font-semibold shadow-lg shadow-lime-500/40">
  Label
</button>
```

---

## First-Time Setup

If this is a new developer, guide them through setup step by step.

### Step 1: Check Prerequisites

Ask: "Have you set up your development environment? Do you have the following installed?"


**For Web development:**
- [ ] Node.js 18+ (check with `node --version`)
- [ ] npm (check with `npm --version`)

If missing, guide them:
1. "Go to https://nodejs.org and download the LTS version"
2. "Run the installer"
3. "Open a new terminal and verify with `node --version`"


### Step 2: Clone the Repository (if not already done)

```bash
gh repo clone Irora-dev/scalekeeperwebsite
cd scalekeeperwebsite
```

If they don't have `gh` installed:
```bash
# Install GitHub CLI first
brew install gh
gh auth login
```

### Step 3: Install Dependencies

```bash
cd scalekeeper-site
npm install
```

This installs all dependencies defined in package.json.


### Step 4: Environment Setup (When Adding Backend Features)

When you need to add auth, database, or billing features, create a `.env.local` file in `scalekeeper-site/`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://prftfpyzugskjrdkzvcv.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByZnRmcHl6dWdza2pyZGt6dmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNDg4MzUsImV4cCI6MjA4MjkyNDgzNX0.qVtS-1FdxOclLLpAO97JvL_22dFtJwFACtxLmEdKE18
NEXT_PUBLIC_APP_SLUG=scalekeeperwebsite
```

**These are public keys - safe to use.** They connect to the shared backend.

**Note:** Currently this is a static marketing site. Add these env vars when you need to integrate backend features (contact form, newsletter signup, etc.)

### Step 5: Run the App

```bash
# From scalekeeper-site directory
npm run dev
```

Open http://localhost:3000 in your browser. If you see the app, setup is complete!

### Step 6: Deployment

This site deploys automatically via Netlify on push to main. No manual deployment needed.

---

## App Configuration

```typescript
// These are pre-configured - DO NOT CHANGE
APP_SLUG = "scalekeeperwebsite"
APP_ID = "e7cbfbbc-d9df-4e0e-8a44-da00ed58b4ac"
SUPABASE_URL = "https://prftfpyzugskjrdkzvcv.supabase.co"
```

---

## How to Use the Backend

### Authentication

```tsx
import { useAuth } from '@repo/api-client';

function MyComponent() {
  const { user, signIn, signOut, isLoading } = useAuth();

  // Sign in
  await signIn(email, password);

  // Sign out
  await signOut();

  // Check if logged in
  if (user) { /* logged in */ }
}
```

### Storing Data

```tsx
import { useEntities } from '@repo/api-client';

// Define your type
interface YourModel {
  name: string;
  // ... your fields
}

function MyComponent() {
  const { data, create, update, remove } = useEntities<YourModel>('your_type', {
    appSlug: 'scalekeeperwebsite'
  });

  // Create
  await create({ name: 'New item' });

  // Update
  await update(id, { name: 'Updated' });

  // Delete
  await remove(id);
}
```

### Checking Pro Status

```tsx
import { useSubscription } from '@repo/api-client';

function ProFeature() {
  const { isSubscribed, openCheckout } = useSubscription({ appSlug: 'scalekeeperwebsite' });

  if (!isSubscribed) {
    return <button onClick={() => openCheckout()}>Upgrade to Pro</button>;
  }

  return <div>Pro content here</div>;
}
```

---

## Entity Types for This App

- (Check with infrastructure team for registered entity types)

Always use these exact type strings when creating entities.

---

## Project Structure

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

## Development Guidelines

1. **Read the spec first** - Check `spec.md` for feature requirements
2. **Use existing patterns** - Look at existing code before inventing new approaches
3. **Commit frequently** - Small, focused commits with clear messages
4. **Test before pushing** - Make sure the app compiles and runs
5. **Don't modify infrastructure** - If you need backend changes, ask the infra team

---

## Git Workflow & Push Reminders

### When to Commit and Push

**IMPORTANT:** You should remind the developer to push their changes at appropriate times:

| Situation | Action |
|-----------|--------|
| Feature completed | Commit and push immediately |
| End of work session | Commit and push all progress |
| Before switching tasks | Commit current work |
| After fixing a bug | Commit and push |
| Before pulling updates | Commit local changes first |

### Commands

```bash
# Before starting work
git pull

# After completing a feature or at session end
git add .
git commit -m "Add [feature name]"
git push
```

### Commit Message Format

Use clear, descriptive messages:
- `Add [feature]` - New functionality
- `Fix [issue]` - Bug fixes
- `Update [component]` - Changes to existing code
- `Refactor [area]` - Code improvements without behavior change

### Push Reminders

**As Claude, you should proactively remind the developer:**

1. **After completing any feature:** "This feature is complete. Would you like me to commit and push these changes?"

2. **After significant progress:** "We've made good progress on [feature]. It would be a good idea to commit and push now to save your work."

3. **Before ending a session:** "Before we wrap up, let's commit and push your changes so nothing is lost."

4. **If uncommitted changes accumulate:** "I notice we have several uncommitted changes. Would you like to commit and push now?"

**Never let a session end with unpushed work without reminding the developer.**

---

## Troubleshooting

### "Auth isn't working"
1. Check that Supabase URL and key are correct
2. Verify the Supabase client is initialized before use
3. Check network connectivity

### "I can't see my data"
This is expected! Row Level Security means:
- You can only see data belonging to the current user
- You can only see data for this specific app

This is a security feature, not a bug.

### "Build is failing"
1. Make sure all dependencies are installed
2. Check for syntax errors in recent changes
3. Try cleaning the build folder and rebuilding

### "I need something not covered here"
Contact the infrastructure team. Don't try to work around the system.

---

## Getting Help

- **Feature questions**: Check `spec.md`
- **Code patterns**: Look at existing code in this repo
- **Infrastructure issues**: Contact the infrastructure team
- **Bugs**: Debug normally, ask for help if stuck

---

## Reading List

*Files to read for deeper understanding. Check these before starting work.*

### Irora Suite Shared Resources (Read First)

| Resource | Location | What You'll Learn |
|----------|----------|-------------------|
| Components | `irora-platform/docs/claude-resources/COMPONENTS.md` | Available UI components |
| Design | `irora-platform/docs/claude-resources/DESIGN.md` | Colors, typography, spacing |
| API | `irora-platform/docs/claude-resources/API.md` | Auth, entities, subscriptions |
| Data | `irora-platform/docs/claude-resources/DATA.md` | Database schema, queries |
| **Canvas** | `irora-platform/docs/claude-resources/CANVAS.md` | **Image generation** |

### App-Specific Context

| File | Purpose | Priority |
|------|---------|----------|
| `SCALEKEEPER_WEBSITE_SPEC.md` | Complete design spec with all sections | High |
| `scalekeeper-site/src/app/page.tsx` | Page structure | High |
| `scalekeeper-site/src/app/globals.css` | Global styles | Medium |
| `netlify.toml` | Deployment configuration | Low |

*Add new context files here as you create them during development.*

---

## Current State

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

### Not Yet Using (But Available)
- **Authentication** - Available via shared infrastructure when needed (e.g., user accounts)
- **Database** - Available via entities table when needed (e.g., contact form submissions)
- **Billing** - Available via Stripe when needed (e.g., premium content)

### In Progress
- *(update when starting work)*

### Known Issues
- *(update as bugs are discovered)*

### Key Decisions
- **Next.js 16 App Router**: Using latest Next.js patterns
- **Tailwind CSS 4**: Using new Tailwind CSS version
- **Single page**: All content on one landing page, no routing needed
- **Component-per-section**: Each page section is its own component
- **Custom green theme**: Herpetoculture-focused design (not Cosmos)

---

## App-Specific Knowledge

### Patterns Established

1. **Component-per-section**: Each major section is a standalone component in `src/components/`
2. **Page assembles components**: `page.tsx` imports and arranges all sections
3. **Tailwind for all styling**: No CSS modules or styled-components
4. **Custom green theme**: Use colors from `SCALEKEEPER_WEBSITE_SPEC.md`, not Cosmos

### Gotchas & Warnings

1. **Custom theme**: This site uses green herpetoculture colors, NOT Cosmos purple - check SCALEKEEPER_WEBSITE_SPEC.md
2. **Netlify deployment**: Changes deploy automatically on push to main
3. **Spec file is source of truth**: `SCALEKEEPER_WEBSITE_SPEC.md` has all design details
4. **Subdirectory structure**: Next.js project is in `scalekeeper-site/`, not root

### Integration Notes

- **Currently static**: No backend integration yet, but can add auth/db/billing when needed
- **App Store links**: CTA buttons should link to App Store when the iOS app is available
- **Canvas for images**: Use Canvas worker for marketing graphics with green theme
- **Mobile-first**: Site should be responsive, test on mobile

---

## "Run Discovery Protocol"

**"Run discovery protocol" and "get up to speed" are standardized phrases.** When the user says either, follow the protocol in `irora-platform/docs/claude-resources/DISCOVERY.md`.

### Quick Version

1. **Read the map:**
   ```bash
   gh api repos/Irora-dev/irora-platform/contents/docs/claude-resources/DISCOVERY.md --jq '.content' | base64 -d
   ```

2. **Read INDEX.md** for navigation:
   ```bash
   gh api repos/Irora-dev/irora-platform/contents/docs/claude-resources/INDEX.md --jq '.content' | base64 -d
   ```

3. **Read only what you need** based on your current task (see INDEX.md decision tree)

4. **Explore this app:**
   - `ls -la` - What files exist
   - `git log --oneline -10` - Recent changes
   - Look for `spec.md` or `docs/`

5. **Report what you found:**
   - What the app does
   - What's been built
   - What patterns are used
   - Questions you have

6. **Update this CLAUDE.md** with any useful context you discovered

### Why This Matters

The discovery protocol is **token-efficient**. You don't read everything - you read the index, then only the docs relevant to your task. This lets you get complete context without burning tokens on irrelevant information.

**This is user-triggered. Run it when asked, not automatically.**

---

*This app is part of the Irora platform. Infrastructure is managed centrally - you focus on building features.*

*Generated: 2026-01-04*

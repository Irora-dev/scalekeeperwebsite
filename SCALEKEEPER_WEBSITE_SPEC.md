# ScaleKeeper Marketing Website Specification

## Overview

This document provides complete specifications for building the ScaleKeeper marketing website. Follow this structure exactly to create a high-converting landing page optimized for the herpetoculture community.

---

## Brand Guidelines

### Colors
```css
--primary-green: #2d5016;        /* Deep forest green - headers, CTAs */
--primary-green-light: #3d6b1e;  /* Lighter green - hover states */
--accent-green: #4a7c2a;         /* Accent - icons, highlights */
--accent-lime: #84cc16;          /* Bright lime - buttons, badges */
--background-dark: #0f1a0a;      /* Near-black green - hero bg */
--background-section: #1a2614;   /* Section alternating bg */
--text-primary: #ffffff;         /* White text on dark */
--text-secondary: #a3b89c;       /* Muted green-gray */
--text-muted: #6b7c64;           /* Very muted for captions */
--warning-amber: #f59e0b;        /* For "picky eater" features */
--danger-red: #dc2626;           /* For alerts, refused feedings */
--success-green: #22c55e;        /* For success states */
```

### Typography
```css
--font-heading: 'Cal Sans', 'Inter', sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace; /* For stats/numbers */
```

### Logo
- Primary: Snake silhouette forming an "S" integrated with a digital tracking line/heartbeat
- Wordmark: "ScaleKeeper" in Cal Sans, tracking +2%
- Tagline: "The Complete Herpetoculture Platform"

---

## Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│ NAVBAR (sticky)                                              │
├─────────────────────────────────────────────────────────────┤
│ HERO SECTION                                                 │
│ - Headline + Subtext                                         │
│ - CTA Buttons                                                │
│ - Social Proof Badge                                         │
├─────────────────────────────────────────────────────────────┤
│ HERO VISUAL                                                  │
│ - App Screenshot/Mockup                                      │
├─────────────────────────────────────────────────────────────┤
│ TRUST LOGOS                                                  │
├─────────────────────────────────────────────────────────────┤
│ BENEFITS SECTION                                             │
├─────────────────────────────────────────────────────────────┤
│ PROCESS SECTION (How It Works)                               │
├─────────────────────────────────────────────────────────────┤
│ FEATURES SECTION                                             │
├─────────────────────────────────────────────────────────────┤
│ PICKY EATER FEATURE (Special Callout)                        │
├─────────────────────────────────────────────────────────────┤
│ PRICING SECTION                                              │
├─────────────────────────────────────────────────────────────┤
│ TESTIMONIALS SECTION                                         │
├─────────────────────────────────────────────────────────────┤
│ FAQ SECTION                                                  │
├─────────────────────────────────────────────────────────────┤
│ FINAL CTA SECTION                                            │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                       │
└─────────────────────────────────────────────────────────────┘
```

---

## Section 1: Navbar

### Behavior
- **Sticky** on scroll with subtle backdrop blur
- Background transitions from transparent to `--background-dark` on scroll
- Mobile: Hamburger menu with slide-out drawer

### Content
```
[Logo]     Features    Pricing    Community    Blog    [Start Free Trial]
```

### Implementation Notes
- Logo links to top of page
- "Start Free Trial" is primary CTA button with `--accent-lime` background
- Navigation links: `--text-secondary`, hover: `--text-primary`
- Max 5 navigation items to avoid decision paralysis
- CTA button should have subtle glow/shadow effect

### Mobile
- Logo left, hamburger right
- CTA button visible in hamburger menu at top

---

## Section 2: Hero Section

### Layout
Two-column on desktop, stacked on mobile. Text left (60%), visual right (40%).

### Social Proof Badge (above headline)
```
⭐⭐⭐⭐⭐ "Finally, an app that actually understands reptile keeping" — 2,400+ keepers
```

### Headline
```
Stop Losing Track of Your Collection
```

**Alternative options:**
- "Your Entire Collection. One Intelligent App."
- "The Reptile Management App Built by Keepers"
- "Never Miss a Feeding Again"

### Subheadline
```
ScaleKeeper replaces your scattered spreadsheets, forgotten notebooks, and anxious guessing with one beautiful app that knows your animals as well as you do.
```

### Primary CTA Button
```
[🦎 Start Free Trial]
```
- Style: Large, `--accent-lime` background, dark text
- Hover: Slight scale up (1.02) + glow effect

### Secondary CTA
```
[Watch Demo →]
```
- Style: Ghost button, border only, `--text-secondary`
- Opens video modal or scrolls to demo section

### Trust Elements (below CTAs)
```
✓ Free 14-day trial    ✓ No credit card required    ✓ Cancel anytime
```

---

## Section 3: Hero Visual

### Content
App mockup showing the animal dashboard with:
- Multiple animal cards with photos
- "Last fed" badges visible
- One card showing weight chart with feeding overlay (the "Udon feature")
- Mobile phone frame with subtle shadow/glow

### Implementation
- Use a high-quality mockup frame (iPhone 15 Pro or similar)
- Screenshot should show real UI (or realistic prototype)
- Subtle floating animation (CSS transform, 3s ease-in-out loop)
- Consider showing both mobile and tablet/desktop views

### Alt Text
```
ScaleKeeper app showing a collection dashboard with ball python profiles, feeding schedules, and weight tracking charts
```

---

## Section 4: Trust Logos

### Headline
```
Trusted by keepers and breeders worldwide
```

### Logos to Display
Since this is a new product, use "As Featured In" or community logos:
```
[MorphMarket Logo]  [Reptile Network Logo]  [Ball Python Community Logo]  [Fauna Classifieds Logo]  [Reddit r/ballpython Logo]
```

**Note:** If actual partnerships don't exist yet, use placeholder text:
```
Join 2,400+ reptile keepers already using ScaleKeeper
```

### Implementation
- Grayscale logos, colorize on hover
- Horizontal scroll on mobile
- Subtle fade-in animation on scroll

---

## Section 5: Benefits Section

### Section Header
```
Why Keepers Love ScaleKeeper
```

### Benefits Grid (2x3 on desktop, 1 column mobile)

#### Benefit 1
- **Icon:** 🎯 (or custom target/checkmark icon)
- **Headline:** Never Miss a Feeding
- **Description:** Smart reminders that adapt to each animal's schedule. See exactly how long since their last meal at a glance.

#### Benefit 2
- **Icon:** 📊 (or chart icon)
- **Headline:** Track Growth Over Time
- **Description:** Weight and length charts that show your animal's progress. Spot problems before they become emergencies.

#### Benefit 3
- **Icon:** 🧬 (or DNA helix icon)
- **Headline:** Master Your Genetics
- **Description:** Predict offspring outcomes, track het percentages, and plan pairings that produce the morphs you want.

#### Benefit 4
- **Icon:** 🌡️ (or thermometer icon)
- **Headline:** Monitor Enclosures 24/7
- **Description:** Connect your sensors for real-time temp and humidity alerts. Know immediately if something's wrong.

#### Benefit 5
- **Icon:** 💊 (or medical cross icon)
- **Headline:** Never Miss a Medication
- **Description:** Treatment reminders with progress tracking. Export complete records for vet visits.

#### Benefit 6
- **Icon:** 📸 (or camera icon)
- **Headline:** Document Their Journey
- **Description:** Photo timelines that show how they've grown. From hatchling to adult, beautifully preserved.

### Implementation Notes
- Icons should be consistent style (outline or filled, not mixed)
- Use subtle card styling with hover lift effect
- Stagger fade-in animation as user scrolls

---

## Section 6: Process Section (How It Works)

### Section Header
```
Start in Under 5 Minutes
```

### Subheader
```
No complicated setup. No data entry marathons. Just download and go.
```

### Steps

#### Step 1
- **Number:** 1
- **Title:** Add Your Collection
- **Description:** Snap a photo, enter the basics. Import from spreadsheets if you have them—we'll do the heavy lifting.
- **Time estimate:** ~2 min

#### Step 2
- **Number:** 2  
- **Title:** Set Your Schedules
- **Description:** Tell us when you feed, and we'll remind you. Customize per animal or use smart defaults for your species.
- **Time estimate:** ~1 min

#### Step 3
- **Number:** 3
- **Title:** Log as You Go
- **Description:** One tap to log a feeding. Swipe to mark complete. Watch your data turn into insights automatically.
- **Time estimate:** ~30 sec daily

### Implementation
- Horizontal layout on desktop with connecting line between steps
- Vertical timeline on mobile
- Step numbers in `--accent-lime` circles
- Consider adding small illustrations or icons for each step

---

## Section 7: Features Section

### Section Header
```
Everything You Need to Keep Them Thriving
```

### Feature Layout
2 columns on desktop (alternating image left/right), single column on mobile.

### Feature 1: Feeding Management
- **Title:** Intelligent Feeding Tracking
- **Description:** Log feedings in seconds with smart defaults. Track refusals, see hunger duration, and never wonder "when did I last feed them?" again. Batch feeding mode lets you log 20 animals in under 2 minutes.
- **Visual:** Screenshot of feeding log UI with checkboxes
- **Highlight badge:** "30-second logging"

### Feature 2: Weight & Growth Charts
- **Title:** Growth Tracking That Actually Helps
- **Description:** Beautiful charts that show weight over time with feeding events overlaid. Instantly see if a food strike is causing concerning weight loss—or if it's normal seasonal behavior.
- **Visual:** Screenshot of weight chart with star markers for feedings
- **Highlight badge:** "The Udon Feature ⭐"

### Feature 3: Health & Medications
- **Title:** Complete Health Records
- **Description:** Track sheds, vet visits, and treatments. Set up medication protocols with automatic reminders. Generate PDF reports for vet visits with one tap.
- **Visual:** Screenshot of medication reminder notification
- **Highlight badge:** "Never miss a dose"

### Feature 4: Breeding Tools
- **Title:** Professional Breeding Suite
- **Description:** Genetics calculator, pairing predictions, clutch tracking, and visual breeding timelines. See every pairing from introduction to hatch on a beautiful Gantt chart.
- **Visual:** Screenshot of breeding timeline
- **Highlight badge:** "For serious breeders"

### Feature 5: Enclosure Management
- **Title:** Monitor Every Enclosure
- **Description:** Connect IoT sensors or log manually. Track temps, humidity, and cleaning schedules. Get alerts when conditions drift outside safe ranges.
- **Visual:** Screenshot of enclosure dashboard with temp/humidity
- **Highlight badge:** "IoT ready"

### Implementation Notes
- Each feature block should have clear visual hierarchy
- Alternate image placement (left, right, left, right) for visual interest
- Use subtle gradient overlays on feature images
- Add "Learn more →" links that anchor to detailed feature pages (future)

---

## Section 8: Picky Eater Callout (Special Section)

### Background
Darker background with subtle snake scale pattern overlay

### Section Header
```
Built for Picky Eaters 🐍
```

### Subheader
```
We know the anxiety of a ball python that won't eat. That's why we built features specifically for keepers of difficult feeders.
```

### Content
```
Meet the "Udon Feature" — named after a particularly stubborn ball python who inspired us to build better tools for picky eater management.

• See exactly how many days since their last successful meal
• Weight chart with feeding events overlaid shows if they're actually losing weight
• Automatic insights: "Udon has maintained weight during this food strike—no cause for concern yet"
• Track feeding response: Struck immediately? Hesitant? Refused entirely?
• Regurgitation logging with automatic extended rest scheduling
```

### Visual
Side-by-side comparison:
- Left: "The Old Way" — notebook with messy entries, question marks
- Right: "The ScaleKeeper Way" — clean app UI showing "Last ate: 23 days ago" with weight chart

### CTA
```
[See It In Action →]
```

---

## Section 9: Pricing Section

### Section Header
```
Simple Pricing for Every Keeper
```

### Subheader
```
Start free. Upgrade when you're ready. No surprises.
```

### Pricing Tiers

#### Tier 1: Free
- **Price:** $0
- **Tagline:** Perfect for getting started
- **CTA:** [Start Free]
- **Features:**
  - ✓ Up to 5 animals
  - ✓ Basic feeding tracking
  - ✓ Weight logging
  - ✓ Photo storage (100 photos)
  - ✓ Community support

#### Tier 2: Keeper (Recommended)
- **Price:** $12/month or $99/year (Save 31%)
- **Tagline:** For serious hobbyists
- **CTA:** [Start Free Trial] (highlighted, `--accent-lime`)
- **Badge:** "Most Popular"
- **Features:**
  - ✓ Unlimited animals
  - ✓ Full feeding management
  - ✓ Weight + length tracking
  - ✓ Health & medication reminders
  - ✓ Unlimited photo storage
  - ✓ IoT sensor integration (basic)
  - ✓ Export & backup
  - ✓ Priority support

#### Tier 3: Breeder
- **Price:** $35/month or $299/year (Save 29%)
- **Tagline:** For hobby breeders
- **CTA:** [Start Free Trial]
- **Features:**
  - Everything in Keeper, plus:
  - ✓ Advanced genetics calculator
  - ✓ Breeding timeline & predictions
  - ✓ Clutch & incubation tracking
  - ✓ Brumation management
  - ✓ Offspring lineage records
  - ✓ Marketplace integration
  - ✓ Expo & inventory tools
  - ✓ PDF lineage certificates

### Implementation Notes
- Middle tier visually emphasized (larger card, highlighted border)
- "Most Popular" badge on Keeper tier
- Annual/monthly toggle at top of pricing section
- Checkmarks in `--accent-lime` color
- Show savings percentage for annual plans
- All plans show "14-day free trial" below CTA

### Enterprise/Professional Note
```
Need multi-user access or API integration? [Contact us for Professional pricing →]
```

---

## Section 10: Testimonials

### Section Header
```
Loved by Keepers Like You
```

### Testimonials (3 cards)

#### Testimonial 1
- **Quote:** "I've tried every reptile tracking app out there. ScaleKeeper is the first one I've actually stuck with. The feeding reminders alone have been a game-changer for my collection of 40+ animals."
- **Name:** Marcus T.
- **Title:** Ball Python Breeder, Texas
- **Avatar:** Male, 30s, casual photo with snake
- **Rating:** ⭐⭐⭐⭐⭐

#### Testimonial 2
- **Quote:** "The weight chart with feeding overlay? Genius. I finally stopped stressing every time my BP went on a food strike because I could SEE she wasn't actually losing weight. Peace of mind I never knew I needed."
- **Name:** Sarah K.
- **Title:** Hobbyist Keeper, UK
- **Avatar:** Female, 20s, with reptile
- **Rating:** ⭐⭐⭐⭐⭐

#### Testimonial 3
- **Quote:** "As a professional breeder, I need reliable records. ScaleKeeper's breeding timeline and genetics calculator have streamlined my entire operation. The lineage certificates are a huge hit with buyers."
- **Name:** David R.
- **Title:** Professional Breeder, Florida
- **Avatar:** Male, 40s, professional setting
- **Rating:** ⭐⭐⭐⭐⭐

### Implementation Notes
- Cards with subtle shadow and rounded corners
- Star ratings displayed below quote
- Carousel on mobile, 3-up grid on desktop
- Consider video testimonial option for higher impact

---

## Section 11: FAQ Section

### Section Header
```
Questions? We've Got Answers
```

### FAQs (Accordion Style)

#### Q1: Is my data safe and private?
**A:** Absolutely. Your collection data is encrypted, stored securely in the cloud, and never shared with anyone. You can export or delete your data at any time. We're keepers ourselves—we know how valuable your breeding records are.

#### Q2: Can I import my existing spreadsheet data?
**A:** Yes! We support CSV imports from Excel and Google Sheets. Our import wizard maps your columns automatically, and we'll help you clean up any messy data. Most keepers are fully migrated within 30 minutes.

#### Q3: Does it work offline?
**A:** Yes. Log feedings, weights, and notes even without internet. Everything syncs automatically when you're back online. Perfect for reptile rooms without WiFi.

#### Q4: What IoT sensors do you support?
**A:** We integrate with Govee, SensorPush, Inkbird, and other popular WiFi temperature/humidity sensors. Manual logging is always available too. Full smart sensor support is included in Keeper and Breeder plans.

#### Q5: Can I use it for more than reptiles?
**A:** While we're optimized for reptiles and amphibians, keepers use ScaleKeeper for tarantulas, scorpions, dart frogs, and other exotic pets. The core tracking features work great for any animal that needs scheduled care.

#### Q6: What if I need to cancel?
**A:** Cancel anytime from your account settings—no hoops to jump through. You'll keep access until the end of your billing period, and you can always export your data. We also offer a 30-day money-back guarantee.

#### Q7: Is there a desktop version?
**A:** ScaleKeeper is mobile-first (iOS and Android), but there's also a full-featured web app at app.scalekeeper.com. Your data syncs across all devices automatically.

### Implementation Notes
- Accordion with smooth expand/collapse animation
- Plus/minus or chevron icon to indicate state
- Only one item expanded at a time
- Schema markup for FAQ (SEO benefit)

---

## Section 12: Final CTA Section

### Background
Full-width dark background with subtle gradient and snake scale pattern

### Content
```
Ready to Transform Your Husbandry?

Join thousands of keepers who've replaced spreadsheet chaos with 
ScaleKeeper's intelligent tracking.

[🦎 Start Your Free Trial]

No credit card required • 14-day free trial • Cancel anytime
```

### Implementation
- Large, centered headline
- Single prominent CTA button
- Trust elements below button
- Consider adding animated background (subtle particle effect or gradient shift)

---

## Section 13: Footer

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]                                                      │
│  The complete herpetoculture                                 │
│  management platform.                                        │
│                                                              │
│  Product        Resources       Company        Connect       │
│  ─────────      ─────────       ─────────      ─────────     │
│  Features       Help Center     About          Twitter       │
│  Pricing        Blog            Careers        Instagram     │
│  Roadmap        Guides          Contact        YouTube       │
│  Changelog      API Docs        Press          Discord       │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  [App Store]  [Google Play]                                  │
├─────────────────────────────────────────────────────────────┤
│  © 2026 ScaleKeeper. All rights reserved.                   │
│  Privacy Policy  •  Terms of Service  •  Cookie Policy      │
└─────────────────────────────────────────────────────────────┘
```

### Trust Badges
- "256-bit SSL Secured"
- App store ratings if available
- Any relevant certifications

### Social Links
- Twitter/X: For updates and community
- Instagram: For featured collections
- YouTube: For tutorials
- Discord: For community chat

---

## Technical Implementation Notes

### Performance Requirements
- Lighthouse score > 90 for all metrics
- First Contentful Paint < 1.5s
- Lazy load images below the fold
- Use WebP/AVIF with fallbacks
- Preload critical fonts

### SEO Requirements
- Semantic HTML5 structure
- Meta title: "ScaleKeeper - Reptile & Amphibian Collection Management App"
- Meta description: "Track feedings, monitor enclosures, manage breeding, and never miss a medication with ScaleKeeper—the complete husbandry app for reptile and amphibian keepers."
- Open Graph and Twitter Card tags
- Schema.org markup for:
  - SoftwareApplication
  - FAQPage
  - Organization

### Analytics & Tracking
- Google Analytics 4
- Conversion events:
  - `trial_started`
  - `pricing_viewed`
  - `demo_watched`
  - `faq_expanded`
- Heatmap tracking (Hotjar/FullStory)

### A/B Testing Candidates
- Hero headline variations
- CTA button text
- Pricing page layout
- Social proof badge content

---

## Responsive Breakpoints

```css
/* Mobile first */
@media (min-width: 640px)  { /* sm - Large phones */ }
@media (min-width: 768px)  { /* md - Tablets */ }
@media (min-width: 1024px) { /* lg - Laptops */ }
@media (min-width: 1280px) { /* xl - Desktops */ }
@media (min-width: 1536px) { /* 2xl - Large monitors */ }
```

### Key Responsive Behaviors
- **Hero:** 2-column → stacked below `lg`
- **Benefits:** 2x3 grid → 1 column below `md`
- **Features:** Alternating → stacked below `lg`
- **Pricing:** 3-up → horizontal scroll below `md`
- **Testimonials:** 3-up → carousel below `md`
- **Footer:** 4-column → 2x2 → stacked

---

## Animation Guidelines

### Scroll Animations (use sparingly)
- Fade up + slide for section entries
- Stagger child elements by 100ms
- Use `IntersectionObserver` for performance
- Respect `prefers-reduced-motion`

### Micro-interactions
- Button hover: subtle scale (1.02) + glow
- Card hover: lift shadow
- Toggle switches: smooth slide
- Accordion: smooth height transition

### Hero Animation
- Subtle float for app mockup (3s loop)
- Gradient background shift (slow, 15s loop)

---

## Assets Needed

### Images
- [ ] Logo (SVG, PNG, dark/light variants)
- [ ] App mockup screenshots (dashboard, feeding, breeding, charts)
- [ ] Phone/device frames
- [ ] Testimonial avatars (or use generated/stock)
- [ ] Social proof logos
- [ ] Feature illustrations/icons
- [ ] OG image (1200x630)
- [ ] Favicon set

### Icons
- Feature icons (consistent style)
- UI icons (checkmarks, arrows, menu)
- Social media icons

### Videos (optional but recommended)
- 60-second product demo
- Feature highlight clips
- Testimonial videos

---

## Copy Tone Guidelines

### Voice
- **Knowledgeable:** We're keepers talking to keepers
- **Warm:** Friendly, not corporate
- **Practical:** Focus on real problems and solutions
- **Confident:** We know this is the best tool, but not arrogant

### Avoid
- Generic SaaS buzzwords ("synergy", "leverage", "ecosystem")
- Overly technical jargon
- Condescending "newbie" language
- Fear-mongering about animal health

### Use
- Specific herpetoculture terminology (morphs, hets, brumation)
- Real scenarios keepers relate to
- Humor where appropriate (the Udon feature)
- Numbers and specifics over vague claims

---

## Launch Checklist

- [ ] All sections implemented
- [ ] Responsive across breakpoints
- [ ] Forms connected to backend
- [ ] Analytics tracking verified
- [ ] SEO tags in place
- [ ] Performance optimized
- [ ] Accessibility audit passed (WCAG 2.1 AA)
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Legal pages linked (Privacy, Terms)
- [ ] App store links functional
- [ ] Contact form working
- [ ] 404 page designed
- [ ] SSL certificate active

---

## File Structure Suggestion

```
/scalekeeper-website
├── /public
│   ├── /images
│   ├── /fonts
│   └── favicon.ico
├── /src
│   ├── /components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TrustLogos.tsx
│   │   ├── Benefits.tsx
│   │   ├── Process.tsx
│   │   ├── Features.tsx
│   │   ├── PickyEaterCallout.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   ├── /styles
│   │   └── globals.css
│   ├── /lib
│   │   └── analytics.ts
│   └── page.tsx
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## Summary

This specification provides everything needed to build a high-converting marketing website for ScaleKeeper. The structure follows proven landing page patterns while the content speaks directly to the herpetoculture community's real pain points.

Key differentiators to emphasize:
1. **The "Udon Feature"** — Weight + feeding overlay for picky eater peace of mind
2. **30-second logging** — Faster than a notebook
3. **Built by keepers** — We understand the community
4. **Breeding suite** — Professional tools at hobbyist prices

Build mobile-first, optimize for performance, and let the product benefits speak for themselves.

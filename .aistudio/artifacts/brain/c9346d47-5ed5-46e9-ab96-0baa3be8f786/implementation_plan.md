# VYRA GAMES — Official Studio Website Implementation Plan (Revised)

A focused, authentic, production-grade website for **VYRA GAMES** (independent game studio from Tamil Nadu, India; *"STORIES PLAY FOREVER"*), celebrating Tamil temple architecture, Godot game development, and the flagship title *CM Vijay – Street Battle*.

## User Review & Critical Revisions Incorporated

> [!IMPORTANT]
> The implementation plan has been revised based on your detailed review report to eliminate misleading claims, establish real server persistence, and simplify the initial scope:

1. **Strict Logo Preservation & Source of Truth**:
   - The supplied official Vyra Games logo (V emblem, temple gopuram silhouette, sunset river reflection, "VYRA GAMES", "STORIES PLAY FOREVER") is preserved immutably.
   - Navbar uses a dedicated, high-legibility brand treatment; Hero and brand showcases present the master artwork with high-contrast backing.
2. **Real Server-Side Backend (`/api/waitlist` & `/api/contact`)**:
   - Replaced simulated receipts with real Express backend routes (`/api/waitlist` and `/api/contact`) mounted in `server.ts`.
   - Includes RFC-compliant email normalization, duplicate prevention, server-side payload validation, structured JSON persistence, and genuine ticket IDs generated only upon successful server write.
3. **Public Navigation Simplification & Deployment Hub Relocation**:
   - Removed `DeploymentHub` from public consumer-facing navigation.
   - All Vercel hosting setup, DNS records, and GitHub Actions CI/CD pipeline (`.github/workflows/deploy.yml`) are placed directly in the repository documentation (`DEPLOYMENT.md` and `README.md`).
4. **Verified Game Data Configuration (`src/data/gameConfig.ts`)**:
   - Strict separation between verified features (Godot 2D street action, touch combat, stylized Tamil pop-culture visuals) and future roadmap items.
   - Clear release status: *"In Active Development — Pre-Registration Open for Android Playtesting"*.
5. **Authentic Mascot & Visual Integrity**:
   - Uses the provided mascot artwork (masked protagonist in Vyra Games streetwear against the ancient temple horizon) as the official Studio Brand Concept & Universe Inspiration.
   - Real concept art is explicitly labeled as such; no unverified stock assets or fake gameplay footage.
6. **Privacy-Conscious, Minimalist Data Handling**:
   - Removed decorative analytics popovers.
   - Standard, lightweight privacy opt-in banner respecting Indian DPDP Act and GDPR principles; zero tracking cookies, with explicit user control to update or revoke preferences at any time.

---

## 1. Overview & Core Concept

- **What It Does**: A fast, responsive, culturally grounded game studio portal featuring:
  - **Homepage**: Hero with official brand artwork, Studio Introduction, Mascot Concept Spotlight, Featured Game marquee (*CM Vijay – Street Battle*), Creative Philosophy, Behind-the-Build (Godot Engine), and Studio Contact.
  - **Our Games Page / Deep Dive**: Rich game overview, verified specifications, character concept showcase, and functional pre-registration.
  - **About Studio Page**: Origins in Tamil Nadu, mission to create enduring story-driven games, and Godot technology focus.
  - **Devlog Journal**: Focused announcement view with planned dev topics (Godot 2D Combat, Temple Environments, Sprite Rigging) and working newsletter signup connected to the server.
  - **Contact Page**: Verified multi-department inquiry form with server-side validation and ticket issuance.
  - **Legal Documents**: Transparent Privacy Notice & Terms of Use explaining data retention and user rights.
- **Target Audience**: Gamers, mobile action enthusiasts, indie game developers, publishing partners, and community members.

---

## 2. User Experience & Visual Design

### Aesthetic Direction
- **Atmosphere**: Golden-hour illumination over South Indian temple gopurams, river reflections, obsidian stone textures, fine antique gold borders.
- **Palette**:
  - `Antique Gold`: `#C99A45` (Primary brand accent, interactive borders, focus rings)
  - `Warm Sand`: `#E6C99A` (Secondary text, soft highlights)
  - `Temple Black`: `#17130F` (Dominant page canvas)
  - `Deep Charcoal`: `#211C16` (Card surfaces, modals, nav background)
  - `Ivory`: `#F6ECDD` (High-contrast typography for primary body and headers)
  - `Burnt Bronze`: `#79542D` (Hairline dividers and warm shadows)
- **Typography**:
  - Headings: `Cinzel` / Classical serif display in tracked uppercase.
  - Body & UI: `Plus Jakarta Sans` / `Inter` with dark-mode optical tracking (`tracking-wide`).
  - Numbers & Specs: Tabular figures (`font-mono tabular-nums`).
- **Anti-Slop Discipline**:
  - No static pill capsules for metadata (clean unboxed text separated by `·`).
  - Single 1-row, 3-zone top navigation bar.
  - Text-wrap balance on all headings to prevent orphan words.
  - Zero decorative pulsing dots or mechanical code comment headers (`//`).

---

## 3. Technical Architecture & Persistence Strategy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      CLIENT LAYER (Vite + React + TS)                   │
├─────────────────────────────────────────────────────────────────────────┤
│  Top Navigation (Brand Mark · 5 Nav Links · "Explore Games" CTA)        │
│                                                                         │
│  View Switcher:                                                         │
│   ├── Home View (Hero, Intro, Mascot Spotlight, Game Card, Build, CTA)  │
│   ├── Games View (CM Vijay – Street Battle deep dive & specs)           │
│   ├── About View (Mission, Vision, Tamil Nadu roots, Godot workflow)    │
│   ├── Devlog View (Planned Godot topics & server newsletter signup)     │
│   ├── Contact View (Validated form with real ticket confirmation)       │
│   └── Legal Views (Privacy Policy, Terms of Service)                    │
│                                                                         │
│  Modals & Overlays:                                                     │
│   ├── Pre-Registration Modal (Accessible, server-connected)            │
│   └── Privacy Preferences Banner (Cookie-free opt-in)                   │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ JSON POST (/api/waitlist, /api/contact)
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                     SERVER BACKEND (Express in server.ts)               │
├─────────────────────────────────────────────────────────────────────────┤
│  Endpoints:                                                             │
│   ├── POST /api/waitlist  (Email validation, deduplication, log storage)│
│   ├── POST /api/contact   (Field sanitize, ticket ID generation)        │
│   ├── GET  /api/health    (Backend health check)                        │
│   └── Static Middleware   (Vite SSR/Dev middleware on Port 3000)        │
│                                                                         │
│  Data Storage:                                                          │
│   └── data/submissions.json (Server-side persistent JSON records)       │
└─────────────────────────────────────────────────────────────────────────┘
```

### Component Structure
- `src/components/Navbar.tsx`: Sticky responsive bar with gold accent hairline and accessible mobile menu.
- `src/components/HeroSection.tsx`: Master logo display, cinematic golden-hour temple background, and direct exploration CTAs.
- `src/components/StudioIntro.tsx`: Two-column narrative on Tamil storytelling and game design pillars.
- `src/components/MascotSpotlight.tsx`: Dedicated showcase of the masked Vyra Games hoodie character.
- `src/components/FeaturedGame.tsx`: Verified *CM Vijay – Street Battle* marquee with verified features and Pre-Register modal trigger.
- `src/components/CreativePhilosophy.tsx`: `01. Story`, `02. Gameplay`, `03. Craft` editorial panels.
- `src/components/BehindTheBuild.tsx`: Godot engine architecture and 2D development workflow.
- `src/components/PreRegisterModal.tsx`: Focus-trapped dialog submitting to `/api/waitlist` with real server confirmation.
- `src/components/ContactForm.tsx`: Multi-department contact form submitting to `/api/contact` returning authentic ticket numbers.
- `src/components/PrivacyBanner.tsx`: Simple, compliant opt-in banner with persistent user settings.
- `src/components/Footer.tsx`: Immutable logo, "STORIES PLAY FOREVER", dynamic copyright, legal links, and social channels.
- `server.ts`: Express server handling `/api/waitlist`, `/api/contact`, and Vite development/production middleware.
- `DEPLOYMENT.md` & `.github/workflows/deploy.yml`: Production documentation and CI/CD workflow for Vercel and domain DNS.

---

## 4. Production Acceptance Checklist

- [x] Official supplied logo used without alteration or distortion.
- [x] Mobile and desktop layouts responsive down to 320px with no horizontal overflow.
- [x] Real server endpoints for waitlist and contact forms with input sanitization and duplicate handling.
- [x] Game features strictly verified and marked as *"In Development / Pre-Registration"*.
- [x] Mascot clearly presented as studio brand identity concept.
- [x] Deployment instructions kept in repository files (`DEPLOYMENT.md`), keeping public navigation clean.
- [x] Zero-pill metadata and WCAG AA contrast compliance throughout.

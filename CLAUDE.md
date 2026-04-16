# SCDP UX Pattern Library - Claude Context

## Project Overview
**Project Name:** Coupa Supply Chain Design Platform (SCDP) - UX Enterprise Pattern Library
**Purpose:** Centralized, content-managed website documenting enterprise UX best practices, patterns, and approaches for Coupa Supply Chain platform
**Target Users:** Coupa employees (designers, developers, product managers, stakeholders)

## Technical Stack

### Core Technologies
- **Framework:** Next.js 14 (App Router - NOT Pages Router)
- **CMS:** Payload CMS 3.0
- **Design System:** IBM Carbon Design System
- **Typography:** Nunito Sans (primary font)
- **Language:** TypeScript
- **Deployment:** Vercel (or internal Coupa hosting)
- **Authentication:** SSO (production only, scaffolding in dev)

### Critical Constraints
- ⚠️ **NO TAILWIND CSS** - Conflicts with IBM Carbon styling system
- ✅ Use IBM Carbon's built-in styling and SCSS/CSS modules
- ✅ Integrate CoreCoupaVars.json design tokens with Carbon theme

### Package Requirements
- `@carbon/react` - Core Carbon components
- `@carbon/icons-react` - IBM Carbon icons
- `@carbon/pictograms-react` - IBM Carbon pictograms
- `next` - Next.js framework
- `react` & `react-dom`
- `payload` - Payload CMS 3.0
- Database for Payload (MongoDB or PostgreSQL)

## Content Strategy

### UX Copy Guidelines
- **Context:** Supply chain specific (NOT generic enterprise)
- **Terminology:** Purchase Orders (PO), Suppliers, Invoices, Requisitions, Approvals, Contracts, Catalogs, etc.
- **Tone:** Professional, clear, action-oriented for enterprise procurement workflows
- **Examples:** Use realistic supply chain scenarios in all pattern demonstrations

### Icon & Pictogram Usage
- Use IBM Carbon icons for UI elements, actions, and navigation
- Use IBM Carbon pictograms for hero sections, empty states, and large visual elements
- Examples: `TrashCan`, `Edit`, `View`, `Document`, `CheckmarkOutline`, `WarningAlt`, etc.

## Information Architecture

```
Home / Dashboard
├── Getting Started
│   ├── Design Principles (supply chain UX focus)
│   ├── Brand Guidelines (Coupa SCDP branding)
│   └── Setup Instructions (developer onboarding)
├── Components & Patterns
│   ├── Destructive Actions (delete PO, cancel invoice, remove supplier)
│   ├── Modals (create requisition, edit supplier, view invoice)
│   ├── Flyouts (supplier info, PO details, approval history)
│   ├── Drawers (filter POs, bulk edit, activity feed)
│   ├── Forms (supplier onboarding, requisition creation)
│   ├── Navigation (app nav patterns)
│   ├── Data Tables (PO lists, invoice tables using Carbon DataTable)
│   └── States (error, loading, empty - "no suppliers found", "no pending approvals")
├── Language & Tone
│   ├── Voice & Personality (enterprise supply chain tone)
│   ├── Microcopy Guidelines (buttons, errors, confirmations)
│   ├── Terminology (SCDP-specific terms and definitions)
│   └── Examples (20+ real-world supply chain copy examples)
├── Resources
│   ├── Design Files (Figma links)
│   ├── Code Repositories (GitHub)
│   ├── Tools & Utilities (Carbon library, icon library)
│   └── FAQ
└── Admin / Content Management
    └── Payload CMS Dashboard (authenticated access)
```

## Current Status - Phase 1 Complete! 🎉

**Last Updated:** 2026-04-16
**Session Completed:** All 10 content resources seeded, frontend pages working, landing page enhanced

### Foundation Setup ✅ COMPLETE
- [x] Initialize Next.js 16.2.3 with App Router
- [x] Configure IBM Carbon without Tailwind
  - Fixed SCSS imports to use `@carbon/styles/scss/*`
  - Resolved "Declarations may only be used within style rules" error
  - Added 'use client' directive for interactive components
  - Build succeeds without errors
- [x] Set up Nunito Sans typography
  - Font loading fixed with proper CSS variable application
  - Applied across all elements including Carbon components
- [x] Create base navigation structure
  - IBM Carbon Header with navigation
  - Links: Home, Getting Started, Patterns, Language & Tone, Resources
  - Search and User profile icons in global bar
  - Hamburger menu for mobile/responsive with SideNav overlay
  - Smooth hover states and interactions with proper transitions
  - Placeholder pages for all sections with supply chain context
  - Page styling with breadcrumbs and consistent layout
- [x] Integrate Payload CMS 3.0
  - Upgraded to Next.js 16.2.3 and React 19.2.5 for Payload 3 compatibility
  - Installed Payload CMS 3.0 with **SQLite adapter** (file-based, zero installation!)
  - Created collections: Users, Patterns
  - **Fixed Payload admin bug** - Built custom Carbon-based admin at `/admin-custom`
  - Fixed Next.js 16 async params issues with `use()` hook
  - All CRUD operations working (Create, Read, Update, Delete)
  - Schema designed based on Destructive Actions pattern structure
  - Admin dashboard at `/admin-custom` route (custom Carbon UI)
  - API routes at `/api/patterns`
  - Database: SQLite (`payload.db` file) - completely local, no cloud, no billing
- [x] Build home/landing page ✅ **ENHANCED & COMPLETED**
  - Dynamic statistics from CMS (6 patterns, 4 guides, 10 total)
  - Featured patterns showcase with icons
  - "Why Use This Library" benefits section
  - Quick access cards for all major sections
  - Smooth hover interactions and loading states

### Core Patterns ✅ ALL COMPLETE
- [x] Destructive Actions documentation
  - Pattern definition, when to use, when NOT to use
  - 4 interactive examples: Delete PO, Cancel Invoice, Remove Supplier, Revoke Approval
  - Working Carbon Modal implementations with danger variants
  - Language guidelines (Do's and Don'ts)
  - Code examples with TypeScript
  - Accessibility considerations
  - Best practices for supply chain workflows
- [x] Modal Usage patterns - Seeded to CMS ✅
- [x] Flyouts documentation - Seeded to CMS ✅
- [x] Drawers documentation - Seeded to CMS ✅
- [x] Forms pattern - Seeded to CMS ✅
- [x] Data Tables pattern - Seeded to CMS ✅

### Content & Guidelines ✅ ALL COMPLETE
- [x] Language & Tone Overview - Seeded to CMS ✅
- [x] Microcopy Guidelines - Seeded to CMS ✅
- [x] Terminology Guide - Seeded to CMS ✅
- [x] Getting Started documentation - Seeded to CMS ✅

### Frontend Pages ✅ ALL WORKING
- [x] Dynamic pattern detail pages (`/patterns/[slug]`)
- [x] Pattern index page (`/patterns`) - fetches from CMS
- [x] Language & Tone index (`/language`) - fetches from CMS
- [x] Language guide detail pages (`/language/[slug]`)
- [x] Getting Started page - fetches from CMS
- [x] Enhanced landing page with live stats
- [x] Markdown rendering with ReactMarkdown
- [x] Content max-width constraints (900px)
- [x] Loading states and error handling

### Integration Tasks
- [ ] Parse and integrate CoreCoupaVars.json with Carbon theming (PENDING)
- [ ] Set up authentication scaffolding (PENDING - not needed for MVP)
- [x] Create comprehensive README and project documentation (PARTIAL - commit message done)

## What Was Accomplished This Session (2026-04-16)

### Major Achievements 🎉
1. **Custom Admin Interface** - Built Carbon-based admin at `/admin-custom` to bypass Payload bug
2. **All Content Seeded** - 10 resources (6 patterns + 4 guides) successfully in CMS
3. **Dynamic Frontend** - All pattern and guide pages rendering from CMS
4. **Enhanced Landing Page** - Live stats, featured patterns, benefits section
5. **Fixed Next.js 16 Issues** - Resolved async params with `use()` hook
6. **Git Repository** - Initialized and created comprehensive first commit

### Technical Solutions
- Custom admin avoids Payload CodeEditor bug in versions 3.80-3.82.1
- Individual seed scripts more reliable than monolithic approach
- Proper markdown rendering with styling for all content types
- Content width constraints improve readability dramatically

### Files Created/Modified
- Custom admin: 6 files (`admin-custom/**`)
- Seed scripts: 10 files (`scripts/seed-*.mjs`)
- Frontend pages: 7 files (patterns, language, getting-started)
- Styling: Enhanced `globals.scss` with markdown and layout improvements
- Fixed: `patterns/[id]/page.tsx` for Next.js 16 async params

## Key Project Files

- `PRD.md` - Full project requirements document
- `CoreCoupaVars.json` - Coupa design tokens (colors, spacing, typography)
- `CLAUDE.md` - This file (running project context)
- `README.md` - Project setup and documentation (to be created)

## Design Token Integration

The project includes `CoreCoupaVars.json` with Coupa-specific design tokens. These need to be:
1. Parsed and mapped to IBM Carbon theme variables
2. Integrated into Carbon's theming system
3. Documented for consistent usage across components

## Authentication Strategy

- **Development:** No authentication required for local development
- **Production:** Behind Coupa employee SSO (implementation TBD)
- **Approach:** Build auth scaffolding with conditional rendering based on environment
- **Access Control:** Coupa employees only in production

## Content Management (Payload CMS)

### Collections to Create
- **Patterns:** Documentation for each UX pattern
- **Guidelines:** Design principles, language/tone guides
- **Examples:** Code snippets, use case examples
- **Resources:** Links to design files, tools, utilities

### Schema Considerations
- Rich text fields for documentation
- Code block fields for examples
- Media fields for screenshots/diagrams
- Metadata fields (tags, categories, last updated)
- Version control for pattern updates

## Success Metrics (Phase 1)

- Complete Next.js + Payload setup
- 4 core patterns fully documented (Destructive Actions, Modals, Flyouts, Drawers)
- Language & Tone guidelines with 20+ examples
- Working navigation and site structure
- All pages using IBM Carbon components with no Tailwind
- Supply chain-specific placeholder content throughout
- Integration of CoreCoupaVars.json design tokens

## Development Commands (to be set up)

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run Payload CMS admin
npm run payload

# Type checking
npm run type-check

# Linting
npm run lint
```

## Notes & Decisions

- **No Tailwind CSS:** Explicitly avoiding Tailwind to prevent conflicts with IBM Carbon's styling system
- **Supply Chain Focus:** All placeholder content, examples, and copy should use realistic supply chain terminology and workflows
- **IBM Carbon First:** Use Carbon components as-is when possible; only customize when necessary for Coupa branding
- **Responsive Design:** All pages must work on desktop, tablet, and mobile using Carbon's responsive grid
- **Accessibility:** Follow Carbon's built-in WCAG 2.1 AA compliance standards

---

## Next Session Priorities

### Immediate Tasks (Quick Wins)
1. **Resources Section** (#11) - Create `/resources` page with:
   - Links to IBM Carbon library
   - Links to icon/pictogram libraries
   - Figma links (placeholders)
   - GitHub repository links (placeholders)
   - Tools & utilities section

2. **Project README** (#9) - Write comprehensive README with:
   - Project overview and purpose
   - Tech stack details
   - Setup instructions (`npm install`, `npm run dev`)
   - How to add content via admin
   - Note about NO Tailwind CSS
   - Contributing guidelines

### Major Features (Phase 2)
3. **Rich Content Blocks System** (#18-20) - Design and implement:
   - Payload block types for visual content
   - React components for each block type
   - Pattern header blocks, callouts, code snippets
   - Image/video blocks, feature grids
   - Do/Don't comparison blocks
   - Migrate existing content to use blocks

4. **CoreCoupaVars Integration** (#7) - Map design tokens:
   - Parse CoreCoupaVars.json
   - Map to Carbon theme variables
   - Create custom theme configuration
   - Apply Coupa branding colors

### Lower Priority
5. **Authentication Scaffolding** (#5) - SSO preparation (not needed for dev)
6. **Code Snippet Copy** (#8) - Add copy-to-clipboard to code examples

### Known Issues
- Payload CMS 3.80-3.82.1 has CodeEditor bug with Next.js 16 (workaround in place)
- CMS pages render plain markdown (blocks system will enhance this)
- No git remote configured yet (local repo only)

### URLs to Remember
- Local dev: http://localhost:3000
- Custom admin: http://localhost:3000/admin-custom/patterns
- Patterns API: http://localhost:3000/api/patterns

### Database
- SQLite file: `payload.db` (in project root)
- Local file-based, no cloud dependencies
- Backup recommended before major changes

---

**Last Updated:** 2026-04-16 (End of Session)
**Current Phase:** Phase 1 Complete ✅ - Moving to Phase 2
**Status:** MVP functional with 10 content resources in CMS, all pages working
**Git:** Repository initialized, comprehensive first commit created
**Next:** Resources section, README, then rich content blocks system

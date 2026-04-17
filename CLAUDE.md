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

### Rich Content Blocks System ✅ COMPLETE (Phase 2)
- [x] **8 Block Types Implemented**:
  - RichText: Prose content with markdown support
  - Callout: Alerts (info, warning, success, error) with Carbon InlineNotification
  - Code: Syntax-highlighted code with copy button (9 languages)
  - Image: Images with captions, alt text, flexible widths
  - DoDont: Two-column good/bad example comparisons
  - FeatureGrid: Multi-column feature showcases (2, 3, 4 columns)
  - PatternHeader: Metadata display (category, status, last updated)
  - Divider: Section separators and spacers
- [x] **Payload CMS Schema**:
  - Created `payload-blocks.ts` with all block definitions
  - Updated Patterns collection with blocks array field
  - Added category and icon fields for better organization
  - Backward compatible with existing markdown content
- [x] **React Components** (`components/blocks/`):
  - BlockRenderer: Dynamic block-to-component mapping
  - All 8 block components using IBM Carbon
  - Fully responsive with Carbon Grid
  - Accessibility-compliant (WCAG 2.1 AA)
  - Dynamic icon loading from @carbon/icons-react
- [x] **Frontend Integration**:
  - Updated `/patterns/[slug]` to render blocks with markdown fallback
  - Updated `/language/[slug]` to render blocks with markdown fallback
  - Graceful handling when no content exists
- [x] **Syntax Highlighting**:
  - Installed `react-syntax-highlighter`
  - VS Code Dark Plus theme
  - Copy-to-clipboard functionality
  - Line numbers optional
- [x] **Example Content**:
  - Created `seed-block-showcase.mjs` demonstrating all blocks
  - Added `npm run seed:blocks` script
  - Comprehensive showcase pattern using every block type

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
- `README.md` - Project setup and documentation ✅

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

### Immediate Tasks (Quick Wins) ✅ COMPLETE
1. **Resources Section** (#11) - ✅ COMPLETE
   - Created comprehensive `/resources` page with Carbon Tiles
   - Added links to IBM Carbon components, icons, and pictograms
   - Linked to GitHub repositories (SCDP and Carbon)
   - Included Carbon Design Kit (Figma) resources
   - Added developer tools section (Carbon DevTools, Payload admin)
   - Organized with proper sections and external resource links

2. **Project README** (#9) - ✅ COMPLETE
   - Comprehensive project overview and key features
   - Detailed tech stack with critical constraints (NO Tailwind CSS)
   - Step-by-step installation and setup instructions
   - Project structure documentation
   - Content management guide with admin panel instructions
   - Development workflow and styling guidelines
   - Supply chain terminology reference
   - Deployment instructions for Vercel and internal hosting
   - Contributing guidelines and comprehensive FAQ section

### Major Features (Phase 2)
3. **Rich Content Blocks System** (#18-20) - ✅ COMPLETE
   - ✅ Designed 8 Payload block types with full schemas
   - ✅ Built 8 React components (all using IBM Carbon)
   - ✅ Pattern header blocks with metadata
   - ✅ Callout blocks with 4 types (info, warning, success, error)
   - ✅ Code blocks with syntax highlighting and copy button
   - ✅ Image blocks with captions and flexible widths
   - ✅ Feature grids with 2/3/4 column layouts
   - ✅ Do/Don't comparison blocks with visual indicators
   - ✅ Divider blocks for spacing
   - ✅ BlockRenderer for dynamic rendering
   - ✅ Updated pattern pages to use blocks
   - ✅ Backward compatible with markdown content
   - ✅ Created comprehensive showcase seed script

4. **CoreCoupaVars Integration** (#7) - NEXT PRIORITY:
   - Parse CoreCoupaVars.json
   - Parse CoreCoupaVars.json
   - Map to Carbon theme variables
   - Create custom theme configuration
   - Apply Coupa branding colors

### Lower Priority
5. **Authentication Scaffolding** (#5) - SSO preparation (not needed for dev)
6. ~~**Code Snippet Copy** (#8)~~ - ✅ COMPLETE (included in CodeBlock component)

### Known Issues
- Payload CMS 3.80-3.82.1 has CodeEditor bug with Next.js 16 (workaround in place with custom admin)
- ~~CMS pages render plain markdown~~ - ✅ RESOLVED (blocks system implemented)
- CoreCoupaVars.json not yet integrated with Carbon theming (next priority)

### URLs to Remember
- Local dev: http://localhost:3000
- Custom admin: http://localhost:3000/admin-custom/patterns
- Patterns API: http://localhost:3000/api/patterns

### Database
- SQLite file: `payload.db` (in project root)
- Local file-based, no cloud dependencies
- Backup recommended before major changes

---

## What Was Accomplished - Session 2 (2026-04-17)

### Session 2a - Resources & Documentation
1. **Resources Section** - Complete `/resources` page with Carbon Tiles
2. **Comprehensive README** - Full project documentation
3. **Git Repository** - Successfully pushed to GitHub

### Session 2b - Rich Content Blocks System 🎉
**Major Achievement**: Transformed pattern library from plain markdown to rich, modular content blocks!

**Block Components Created** (8 total):
1. **RichTextBlock** - Markdown prose with Lexical editor support
2. **CalloutBlock** - 4 types (info, warning, success, error) using Carbon InlineNotification
3. **CodeBlock** - Syntax highlighting with `react-syntax-highlighter`, copy button, line numbers
4. **ImageBlock** - Images with captions, alt text, 4 width options
5. **DoDontBlock** - Two-column comparisons with checkmark/close icons
6. **FeatureGridBlock** - 2/3/4 column grids with dynamic icon loading
7. **PatternHeaderBlock** - Category, status, last updated metadata with tags
8. **DividerBlock** - Line and spacer variants with 3 spacing options

**Technical Implementation**:
- Created `payload-blocks.ts` with complete block schemas
- Updated `payload.config.ts` with blocks field and category/icon fields
- Built `BlockRenderer.tsx` for dynamic block-to-component mapping
- Enhanced pattern detail pages to render blocks with markdown fallback
- Installed `react-syntax-highlighter` and `@types/react-syntax-highlighter`
- Created `seed-block-showcase.mjs` demonstrating all block types
- Added `npm run seed:blocks` convenience script

**Key Features**:
- All blocks use IBM Carbon Design System
- Fully responsive with Carbon Grid
- WCAG 2.1 AA accessibility compliant
- Dynamic icon loading from `@carbon/icons-react`
- Backward compatible with existing markdown content
- Graceful fallbacks when content missing

**Files Added/Modified**:
- New: 9 block component files, `payload-blocks.ts`, seed script
- Modified: `payload.config.ts`, both pattern detail pages, `package.json`
- Total: 16 files changed, 1,567 insertions

**Build Status**: ✅ Successful (exit code 0)
**Git Commit**: `a5a7507` - "Implement rich content blocks system"

---

**Last Updated:** 2026-04-17 (Session 2b - Blocks Complete)
**Current Phase:** Phase 2 - Rich Content & Theming
**Status:** MVP + Resources + README + Rich Content Blocks System ✅
**Git:** https://github.com/tonyK3y/SCDP-UX_Pattern_Library
**Commits Today**: 3 (Resources/README, CLAUDE.md update, Blocks system)
**Next Priority:** CoreCoupaVars.json integration with Carbon theming

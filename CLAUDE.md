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

## Phase 1 Goals (Current)

### Foundation Setup
- [x] Initialize Next.js 14 with App Router ✅
- [x] Configure IBM Carbon without Tailwind ✅
  - Fixed SCSS imports to use `@carbon/styles/scss/*`
  - Resolved "Declarations may only be used within style rules" error
  - Added 'use client' directive for interactive components
  - Build succeeds without errors
- [x] Set up Nunito Sans typography ✅
  - Font loading fixed with proper CSS variable application
  - Applied across all elements including Carbon components
- [x] Create base navigation structure ✅ **COMPLETED**
  - IBM Carbon Header with navigation
  - Links: Home, Getting Started, Patterns, Language & Tone, Resources
  - Search and User profile icons in global bar
  - **Hamburger menu for mobile/responsive** with SideNav overlay
  - **Smooth hover states and interactions** with proper transitions
  - Placeholder pages for all sections with supply chain context
  - Page styling with breadcrumbs and consistent layout
- [x] Integrate Payload CMS 3.0 ✅ **COMPLETED**
  - Upgraded to Next.js 16.2.3 and React 19.2.5 for Payload 3 compatibility
  - Installed Payload CMS 3.0 with **SQLite adapter** (file-based, zero installation!)
  - Created three collections: Users, Patterns, CodeExamples
  - Schema designed based on Destructive Actions pattern structure
  - Admin dashboard at `/admin` route
  - API routes at `/api/[...slug]`
  - Database: SQLite (`payload.db` file) - completely local, no cloud, no billing
- [x] Build home/landing page (basic version complete, can be enhanced)

### Core Patterns
- [x] Destructive Actions documentation with examples ✅ **COMPLETED**
  - Pattern definition, when to use, when NOT to use
  - 4 interactive examples: Delete PO, Cancel Invoice, Remove Supplier, Revoke Approval
  - Working Carbon Modal implementations with danger variants
  - Language guidelines (Do's and Don'ts)
  - Code examples with TypeScript
  - Accessibility considerations
  - Best practices for supply chain workflows
- [ ] Modal Usage patterns with supply chain use cases
- [ ] Flyouts documentation
- [ ] Drawers documentation
- [x] Live component previews with Carbon components (partial - in Destructive Actions)

### Content & Guidelines
- [ ] Language & Tone guidelines section
- [ ] Microcopy examples with supply chain terminology
- [ ] Getting Started documentation
- [ ] Resources section
- [ ] Code snippets with copy-to-clipboard functionality

### Integration Tasks
- [ ] Parse and integrate CoreCoupaVars.json with Carbon theming
- [ ] Set up authentication scaffolding (no auth required in dev)
- [ ] Create comprehensive README and project documentation

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

**Last Updated:** 2026-04-15
**Current Phase:** Phase 1 - Foundation
**Completed Tasks:**
- Initialize Next.js 14 project with App Router ✅
- Configure IBM Carbon Design System without Tailwind ✅
- Fix Nunito Sans font loading ✅
- Create site navigation and information architecture ✅
**Current Task:** Ready for next phase - pattern documentation or Getting Started content

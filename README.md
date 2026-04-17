# SCDP UX Pattern Library

A centralized, content-managed website documenting enterprise UX best practices, patterns, and approaches for the Coupa Supply Chain Design Platform (SCDP).

## Overview

The SCDP UX Pattern Library provides Coupa employees (designers, developers, product managers, and stakeholders) with a comprehensive reference for building consistent, accessible, and effective supply chain experiences. Built with **Next.js 14**, **IBM Carbon Design System**, and **Payload CMS 3.0**, this library serves as the single source of truth for SCDP design patterns and guidelines.

## Key Features

- **Enterprise UX Patterns**: Destructive actions, modals, flyouts, drawers, forms, data tables, and more
- **Language & Tone Guidelines**: Microcopy best practices, terminology, and voice/personality guidelines
- **Supply Chain Context**: All examples use realistic supply chain scenarios (POs, suppliers, invoices, requisitions)
- **Content Management**: Payload CMS 3.0 for easy pattern updates and additions
- **IBM Carbon Components**: Built entirely with IBM Carbon Design System (NO Tailwind CSS)
- **TypeScript & Modern React**: Type-safe, maintainable codebase with Next.js App Router

## Tech Stack

### Core Technologies
- **Framework**: Next.js 14.2.23 (App Router - NOT Pages Router)
- **React**: 19.2.5
- **CMS**: Payload CMS 3.0
- **Design System**: IBM Carbon Design System (`@carbon/react`)
- **Typography**: Nunito Sans (primary font family)
- **Language**: TypeScript
- **Database**: SQLite (file-based, zero configuration)
- **Deployment**: Vercel-ready (or internal Coupa hosting)

### Key Dependencies
```json
{
  "@carbon/react": "^1.75.0",
  "@carbon/icons-react": "^11.58.0",
  "@carbon/pictograms-react": "^11.75.0",
  "@payloadcms/db-sqlite": "^3.0.0",
  "next": "16.2.3",
  "react": "19.2.5",
  "payload": "3.0.0"
}
```

### Critical Constraints

⚠️ **NO TAILWIND CSS** - This project explicitly avoids Tailwind to prevent conflicts with IBM Carbon's styling system. Use IBM Carbon's built-in styling, SCSS modules, and CSS modules instead.

## Getting Started

### Prerequisites
- **Node.js**: 18+ recommended
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/tonyK3y/SCDP-UX_Pattern_Library.git
cd SCDP-UX_Pattern_Library
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

The pattern library should now be running locally!

### Database Setup

This project uses **SQLite** with Payload CMS - a file-based database requiring zero installation or configuration.

- **Database file**: `payload.db` (automatically created in project root)
- **No cloud dependencies**: Everything runs locally
- **Backup recommended**: Copy `payload.db` before major changes

## Project Structure

```
SCDP-UX_Pattern_Library/
├── app/                          # Next.js App Router pages
│   ├── (payload)/               # Payload CMS admin routes
│   ├── admin-custom/            # Custom Carbon-based admin UI
│   ├── patterns/                # Pattern documentation pages
│   │   ├── [slug]/             # Dynamic pattern detail pages
│   │   ├── destructive-actions/# Destructive actions example
│   │   └── page.tsx            # Pattern index page
│   ├── language/                # Language & tone guidelines
│   │   ├── [slug]/             # Dynamic language guide pages
│   │   └── page.tsx            # Language index page
│   ├── getting-started/         # Getting started documentation
│   ├── resources/               # Resources and links
│   ├── page.tsx                 # Landing page
│   ├── layout.tsx               # Root layout with Carbon Header
│   └── globals.scss             # Global styles
├── components/                   # Reusable React components
│   └── Header.tsx               # IBM Carbon Header navigation
├── scripts/                      # Seed scripts for CMS
│   ├── seed-patterns.mjs        # Seed pattern content
│   └── seed-language.mjs        # Seed language guides
├── payload.config.ts            # Payload CMS configuration
├── CoreCoupaVars.json           # Coupa design tokens
├── CLAUDE.md                    # Project context and status
├── PRD.md                       # Product requirements document
└── README.md                    # This file
```

## Content Management

### Accessing the Admin Panel

The project includes a **custom Carbon-based admin interface** to manage patterns and content:

**Admin URL**: [http://localhost:3000/admin-custom/patterns](http://localhost:3000/admin-custom/patterns)

> **Note**: This custom admin bypasses a known Payload CMS bug (versions 3.80-3.82.1) with the CodeEditor component in Next.js 16.

### Adding New Patterns

1. Navigate to `/admin-custom/patterns/new`
2. Fill in the pattern details:
   - **Title**: Pattern name (e.g., "Destructive Actions")
   - **Slug**: URL-friendly identifier (e.g., "destructive-actions")
   - **Description**: Brief summary
   - **Content**: Full markdown documentation
   - **Category**: Pattern type (pattern, guide, getting-started)
   - **Icon**: Carbon icon name (optional)
3. Click "Save"
4. View your pattern at `/patterns/[slug]`

### Content Categories

- **pattern**: UX patterns (modals, drawers, forms, etc.)
- **guide**: Language & tone guidelines
- **getting-started**: Setup and onboarding docs

### Seed Scripts

Pre-built seed scripts populate the CMS with initial content:

```bash
# Seed all patterns
npm run seed-patterns

# Seed language guides
npm run seed-language

# Seed individual patterns
node scripts/seed-destructive-actions.mjs
node scripts/seed-modals.mjs
```

## Development

### Available Commands

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

### Styling Guidelines

This project uses **IBM Carbon Design System** exclusively:

✅ **DO**:
- Use Carbon components (`@carbon/react`)
- Use Carbon icons (`@carbon/icons-react`)
- Use Carbon pictograms (`@carbon/pictograms-react`)
- Use SCSS modules or CSS modules for custom styles
- Follow Carbon's responsive grid system
- Maintain WCAG 2.1 AA accessibility standards

❌ **DON'T**:
- Install or use Tailwind CSS
- Use inline styles excessively (use CSS modules)
- Override Carbon component internals unnecessarily
- Ignore Carbon's built-in accessibility features

### Supply Chain Terminology

All content should use realistic supply chain terminology:

- **Purchase Orders (PO)**: Not "orders" or "requests"
- **Suppliers**: Not "vendors" (unless contextually appropriate)
- **Invoices**: Financial documents from suppliers
- **Requisitions**: Internal purchase requests
- **Approvals**: Workflow authorization steps
- **Contracts**: Supplier agreements
- **Catalogs**: Product/service listings

## Design Tokens

The project includes `CoreCoupaVars.json` with Coupa-specific design tokens:

- Colors, spacing, typography, borders, shadows
- **TODO**: Integration with Carbon theming system (Phase 2)

## Authentication

- **Development**: No authentication required
- **Production**: Coupa employee SSO (implementation pending)
- **Access Control**: Coupa employees only in production

## Deployment

### Vercel (Recommended)

1. Connect repository to Vercel
2. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
3. Add environment variables (if needed)
4. Deploy

### Internal Coupa Hosting

Follow Coupa's internal deployment guidelines for Next.js applications.

## Contributing

### Adding New Patterns

1. Create pattern content via admin panel (`/admin-custom/patterns/new`)
2. Use markdown for documentation
3. Include supply chain-specific examples
4. Follow existing pattern structure (When to Use, When NOT to Use, Examples, Best Practices)
5. Add code examples with TypeScript
6. Test responsiveness and accessibility

### Code Contributions

1. Create a feature branch
2. Make your changes following the style guidelines
3. Test thoroughly (desktop, tablet, mobile)
4. Submit a pull request with clear description
5. Ensure no Tailwind CSS dependencies are added

### Content Guidelines

- **Tone**: Professional, clear, action-oriented
- **Examples**: Realistic supply chain scenarios
- **Accessibility**: Follow WCAG 2.1 AA standards
- **Consistency**: Match existing pattern documentation structure

## Resources

- **IBM Carbon Design System**: [https://carbondesignsystem.com](https://carbondesignsystem.com)
- **Carbon React Components**: [https://carbondesignsystem.com/components](https://carbondesignsystem.com/components)
- **Carbon Icons Library**: [https://carbondesignsystem.com/guidelines/icons/library](https://carbondesignsystem.com/guidelines/icons/library)
- **Payload CMS Docs**: [https://payloadcms.com/docs](https://payloadcms.com/docs)
- **Next.js 14 Docs**: [https://nextjs.org/docs](https://nextjs.org/docs)

## Current Status

**Phase 1**: ✅ Complete
- Next.js + IBM Carbon + Payload CMS setup
- 10 content resources seeded (6 patterns + 4 guides)
- All frontend pages working with dynamic content
- Custom admin interface
- Enhanced landing page with live stats

**Phase 2**: In Progress
- Resources section (completed)
- Comprehensive README (this document)
- Rich content blocks system (upcoming)
- CoreCoupaVars.json integration (upcoming)

## FAQ

**Q: Can I use Tailwind CSS?**
A: No. Tailwind conflicts with IBM Carbon's styling system. Use Carbon components and SCSS/CSS modules.

**Q: How do I add a new pattern?**
A: Use the admin panel at `/admin-custom/patterns/new` to create new pattern documentation.

**Q: What database does this use?**
A: SQLite - a file-based database (`payload.db`) with zero configuration required.

**Q: Can I customize Carbon components?**
A: Yes, but prefer using Carbon's built-in props and variants first. Only override styles when necessary for Coupa branding.

**Q: Where are the design files?**
A: See the Resources section at `/resources` for links to Carbon Design Kits and Figma libraries.

## License

Internal Coupa project - not for public distribution.

## Contact

For questions or support, contact the SCDP design team or submit an issue on GitHub.

---

**Built with ❤️ by the Coupa SCDP Team**

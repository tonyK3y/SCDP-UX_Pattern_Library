// Seed Getting Started Guide
const patternData = {
  title: 'Getting Started',
  slug: 'getting-started',
  description: 'Introduction to the SCDP UX Pattern Library and how to use it effectively.',
  content: `# Getting Started with SCDP UX Pattern Library

## Welcome

The Coupa Supply Chain Design Platform (SCDP) UX Pattern Library is your central resource for building consistent, accessible, and efficient supply chain user experiences. This library documents proven patterns, components, and guidelines used across Coupa's procurement and supplier management applications.

## Who This Is For

### Designers
- Find established patterns for common supply chain workflows
- Access IBM Carbon components customized for SCDP
- Learn about supply chain-specific design considerations
- Review accessibility requirements and best practices

### Developers
- Reference implementation examples using IBM Carbon React components
- Understand component behavior and interaction patterns
- Follow coding conventions and best practices
- Access code snippets for common patterns

### Product Managers
- Understand standard interaction patterns users expect
- Learn supply chain terminology and conventions
- Align feature requirements with existing patterns
- Ensure consistency across product experiences

### Content Designers
- Reference voice and tone guidelines
- Use standard terminology and microcopy patterns
- Write clear, action-oriented interface copy
- Maintain consistency across all user-facing text

## What's in This Library

### Patterns
Reusable solutions to common design problems in supply chain interfaces:

- **Destructive Actions** - Deleting POs, canceling invoices, removing suppliers
- **Modal Usage** - When to use modals vs other UI patterns
- **Flyouts** - Contextual information and quick actions
- **Drawers** - Filters, details, and bulk operations
- **Forms** - Data entry patterns with validation
- **Data Tables** - Displaying and managing large datasets

### Language & Tone
Guidelines for clear, professional communication:

- **Overview** - Voice, personality, and writing principles
- **Microcopy** - Button labels, notifications, helper text
- **Terminology** - Standard terms and definitions

### Components (Coming Soon)
IBM Carbon components customized for supply chain workflows with code examples and live previews.

## Core Principles

### 1. Efficiency First
Supply chain professionals process high volumes of transactions daily. Every interaction should be streamlined to minimize clicks, reduce cognitive load, and speed up task completion.

**Design Implications:**
- Default to bulk actions when users manage multiple items
- Pre-fill known information
- Use smart defaults based on context
- Provide keyboard shortcuts for power users

### 2. Accuracy Over Speed
Mistakes in procurement can be costly. Design patterns should prevent errors and make it easy to verify information before committing.

**Design Implications:**
- Clear, specific confirmation dialogs for important actions
- Inline validation with helpful error messages
- Visual distinction between similar actions
- Audit trails and edit history

### 3. Transparency and Trust
Users are managing significant financial commitments. Interfaces should clearly communicate what actions do, what will happen next, and who has taken which actions.

**Design Implications:**
- Explicit rather than implicit actions
- Clear status indicators with explanatory tooltips
- Visible approval workflows
- Activity logs and notifications

### 4. Accessibility for All
SCDP applications must be usable by everyone, regardless of ability or how they access the system.

**Design Implications:**
- WCAG 2.1 AA compliance minimum
- Keyboard navigation for all interactions
- Screen reader support
- Sufficient color contrast
- Clear focus indicators

## Using IBM Carbon Design System

SCDP is built on IBM Carbon Design System, providing:

- **Consistent UI Components** - Buttons, forms, tables, modals
- **Responsive Grid System** - Flexible layouts for all screen sizes
- **Design Tokens** - Colors, typography, spacing
- **Icons and Pictograms** - Consistent visual language
- **Accessibility Built-In** - WCAG-compliant components

### Key Carbon Components

**Forms & Inputs:**
- TextInput, TextArea
- Select, Dropdown, MultiSelect
- DatePicker, TimePicker
- NumberInput
- FileUploader
- Checkbox, RadioButton

**Navigation:**
- Header, HeaderNavigation
- Tabs
- Breadcrumb
- Pagination

**Data Display:**
- DataTable
- StructuredList
- Tag, StatusIndicator
- Tooltip, Popover

**Feedback:**
- Modal
- InlineNotification, ToastNotification
- Loading, ProgressIndicator
- EmptyState

**Actions:**
- Button (primary, secondary, tertiary, ghost, danger)
- IconButton
- OverflowMenu

### Installation & Setup

\`\`\`bash
npm install @carbon/react @carbon/icons-react
\`\`\`

\`\`\`tsx
import '@carbon/styles/css/styles.css'
import { Button, Modal, DataTable } from '@carbon/react'
import { TrashCan, Edit, View } from '@carbon/icons-react'
\`\`\`

### Theming
SCDP uses custom Carbon theme with Coupa brand colors and Nunito Sans typography. Theme tokens are defined in CoreCoupaVars.json.

## Supply Chain Context

### Common Workflows

**Procurement:**
1. Create requisition
2. Submit for approval
3. Convert to purchase order
4. Send to supplier
5. Receive goods
6. Process invoice
7. Make payment

**Supplier Management:**
1. Onboard new supplier
2. Manage contracts
3. Track performance
4. Handle relationships

**Invoice Processing:**
1. Receive invoice
2. Match to PO
3. Validate amounts
4. Route for approval
5. Schedule payment

### Key User Needs

**Speed:** Process high volumes efficiently
**Accuracy:** Avoid costly mistakes
**Visibility:** Track status of all transactions
**Control:** Manage approvals and exceptions
**Compliance:** Meet regulatory requirements
**Reporting:** Analyze spending and performance

## Design Checklist

When designing new features, ensure:

- [ ] Uses established patterns from this library
- [ ] Implements IBM Carbon components
- [ ] Follows SCDP voice and tone guidelines
- [ ] Uses standard terminology
- [ ] Includes loading and error states
- [ ] Handles empty states meaningfully
- [ ] Provides clear feedback for actions
- [ ] Keyboard accessible
- [ ] Screen reader friendly
- [ ] Sufficient color contrast (4.5:1 minimum)
- [ ] Touch targets at least 44x44px
- [ ] Responsive on mobile and tablet
- [ ] Tested with real users

## Development Workflow

### 1. Review Patterns
Check if existing patterns solve your design problem. Don't reinvent solutions that already exist.

### 2. Use Carbon Components
Start with Carbon components rather than building custom elements. Customize only when necessary.

### 3. Follow Guidelines
Apply voice, tone, and terminology guidelines to all user-facing text.

### 4. Test Accessibility
Use automated tools (axe, Lighthouse) and manual testing (keyboard, screen reader) to verify accessibility.

### 5. Document Decisions
When you deviate from patterns or create new ones, document why and consider adding to this library.

## Resources

### Internal Links
- [IBM Carbon Design System](https://carbondesignsystem.com/)
- [IBM Carbon Icons](https://carbondesignsystem.com/guidelines/icons/library/)
- [IBM Carbon Pictograms](https://carbondesignsystem.com/guidelines/pictograms/library/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Getting Help
- Review patterns and guidelines in this library
- Ask questions in #design-system Slack channel
- Submit suggestions for new patterns or improvements
- Contribute examples and code snippets

## Contributing

This library is a living document. Help us improve it:

### Add New Patterns
Document patterns you've created that others could reuse.

### Improve Existing Content
Submit clarifications, examples, or corrections.

### Share Examples
Contribute code examples and implementation details.

### Give Feedback
Share what works well and what could be better.

## Next Steps

1. **Explore Patterns** - Review the pattern library to understand common solutions
2. **Read Guidelines** - Familiarize yourself with voice, tone, and terminology
3. **Try Examples** - Implement sample code to understand component behavior
4. **Ask Questions** - Reach out to the design system team with questions

Welcome to SCDP! Let's build great supply chain experiences together.`
}

async function seedPattern() {
  try {
    console.log('Creating Getting Started guide...')

    const response = await fetch('http://localhost:3000/api/patterns', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patternData),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(JSON.stringify(error, null, 2))
    }

    const result = await response.json()
    console.log('✅ Getting Started guide created successfully!')
    console.log('ID:', result.doc.id)
    console.log('Title:', result.doc.title)
    console.log('Slug:', result.doc.slug)

  } catch (error) {
    console.error('❌ Error creating content:', error)
    process.exit(1)
  }
}

seedPattern()

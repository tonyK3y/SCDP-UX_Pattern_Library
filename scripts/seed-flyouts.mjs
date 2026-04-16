// Seed Flyouts pattern
const patternData = {
  title: 'Flyouts',
  slug: 'flyouts',
  description: 'Guidelines for using flyouts, popovers, and tooltips to display contextual information in supply chain interfaces.',
  content: `# Flyouts Pattern

## Overview
Flyouts are temporary overlays that display contextual information without navigating away from the current page. They include tooltips, popovers, and definition flyouts.

## Types of Flyouts

### Tooltips
**When to use:**
- Brief descriptions (1-2 sentences)
- Icon explanations
- Disabled control explanations
- Keyboard shortcuts

**Example:** Hover on "PO Status" icon to see "Purchase Order has been approved and sent to supplier"

### Popovers
**When to use:**
- More detailed information (2-5 sentences)
- Links to related resources
- Small forms (1-3 fields)
- Quick actions menu

**Example:** Click supplier name to see popover with contact info, recent orders, and link to full profile

### Definition Tooltips
**When to use:**
- Explaining terminology
- Field help text
- Data format examples

**Example:** Question mark icon next to "Net Terms" field shows definition and examples

## Supply Chain Use Cases

### Supplier Quick Info
Show key supplier information without leaving the current page:
- Supplier name and ID
- Contact person and email
- Payment terms
- Recent order count
- Quality rating
- Action: "View Full Profile"

**Interaction:** Click on supplier name or hover for 1 second

### PO Line Item Details
Display line item information in context:
- Item description
- Quantity ordered vs received
- Unit price and total
- Delivery date
- Receiving location
- Status (Ordered, Partially Received, Complete)

**Interaction:** Click on line item number or row

### Approval History Timeline
Show who approved and when:
- Approver name and role
- Timestamp
- Approval notes
- Current approval step
- Next approver in queue

**Interaction:** Click on "Approval Status" badge

### Status Explanations
Explain what each status means:
- **Pending:** Awaiting approval from Finance
- **Approved:** Ready to send to supplier
- **Sent:** PO transmitted to supplier on [date]
- **Acknowledged:** Supplier confirmed receipt
- **In Progress:** Items being prepared for shipment

**Interaction:** Hover on status badge

## Interaction Patterns

### Hover Behavior
- Show after 500ms hover delay
- Hide when mouse leaves both trigger and flyout
- Don't show on touch devices

### Click Behavior
- Show immediately on click
- Hide when clicking outside
- Hide when pressing ESC
- Can include interactive elements (links, buttons)

### Focus Behavior
- Show when trigger receives keyboard focus
- Keep visible while focus is within flyout
- Hide when focus leaves

## Positioning

### Preferred Order
1. **Top** - Default for most cases
2. **Bottom** - When trigger is near top of viewport
3. **Right** - For left-aligned dense tables
4. **Left** - For right-aligned items

### Collision Detection
- Automatically flip if flyout would be cut off
- Adjust arrow position to point to trigger
- Never allow flyout to extend beyond viewport

## Content Guidelines

### Do
- Keep content concise and scannable
- Use bullet points for lists
- Include relevant actions (View Details, Edit, etc.)
- Show most important info first
- Use clear headings for sections

### Don't
- Include more than 5-7 pieces of information
- Use for long-form content (use modal or page instead)
- Stack multiple flyouts
- Use for critical information (some users may miss it)
- Require scrolling inside the flyout

## Accessibility

### Keyboard Support
- **Tab** - Move focus into flyout (if interactive)
- **ESC** - Close flyout
- **Shift+Tab** - Move backwards through focusable elements

### Screen Readers
- Use aria-describedby for tooltips
- Use role="tooltip" for non-interactive tooltips
- Use role="dialog" for interactive popovers
- Announce when flyout opens
- Provide close button for popovers

### Visual Requirements
- Sufficient color contrast (4.5:1 minimum)
- Clear visual connection to trigger (arrow/pointer)
- Shadow or border to separate from background
- Maximum width to prevent text wrapping issues

## Code Examples

### Basic Tooltip
\`\`\`tsx
import { Tooltip } from '@carbon/react'
import { Information } from '@carbon/icons-react'

<Tooltip
  align="top"
  label="Purchase Order has been approved by Finance and sent to supplier"
>
  <button className="tooltip-trigger">
    <Information />
  </button>
</Tooltip>
\`\`\`

### Popover with Content
\`\`\`tsx
import { Popover, PopoverContent } from '@carbon/react'

<Popover open={isOpen} onRequestClose={() => setIsOpen(false)}>
  <button onClick={() => setIsOpen(true)}>
    {supplier.name}
  </button>
  <PopoverContent>
    <div className="supplier-popover">
      <h3>{supplier.name}</h3>
      <p><strong>ID:</strong> {supplier.id}</p>
      <p><strong>Contact:</strong> {supplier.contactName}</p>
      <p><strong>Email:</strong> {supplier.email}</p>
      <p><strong>Payment Terms:</strong> {supplier.paymentTerms}</p>
      <p><strong>Recent Orders:</strong> {supplier.orderCount}</p>
      <button onClick={() => navigateToProfile(supplier.id)}>
        View Full Profile
      </button>
    </div>
  </PopoverContent>
</Popover>
\`\`\`

### Definition Tooltip
\`\`\`tsx
import { DefinitionTooltip } from '@carbon/react'

<DefinitionTooltip definition="Number of days after invoice date that payment is due. Net 30 means payment due within 30 days.">
  Net Terms
</DefinitionTooltip>
\`\`\`

## Best Practices

### Loading States
- Show loading spinner if fetching data
- Display cached data immediately if available
- Show error message if fetch fails
- Provide retry action for failed loads

### Performance
- Lazy load flyout content
- Cache frequently accessed data
- Debounce hover events
- Clean up event listeners on unmount

### Mobile Considerations
- Convert hover triggers to tap on mobile
- Ensure flyout doesn't cover important content
- Make close button large enough (min 44x44px)
- Consider using bottom sheet for complex content

## Related Patterns
- Modals - For more complex interactions
- Drawers - For filtering and auxiliary content
- Tooltips - For brief help text
- Inline Notifications - For feedback messages`
}

async function seedPattern() {
  try {
    console.log('Creating Flyouts pattern...')

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
    console.log('✅ Flyouts pattern created successfully!')
    console.log('ID:', result.doc.id)
    console.log('Title:', result.doc.title)
    console.log('Slug:', result.doc.slug)

  } catch (error) {
    console.error('❌ Error creating pattern:', error)
    process.exit(1)
  }
}

seedPattern()

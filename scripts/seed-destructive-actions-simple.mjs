// Simple script to create Destructive Actions pattern via API
const patternData = {
  title: 'Destructive Actions',
  slug: 'destructive-actions',
  description: 'Guidelines and best practices for implementing destructive actions in supply chain workflows, ensuring users understand the consequences of irreversible operations.',
  content: `# Destructive Actions Pattern

## Overview
Destructive actions are operations that permanently remove, delete, or significantly alter data in ways that cannot be easily undone. In supply chain management, these actions can have serious business consequences.

## When to Use
Use destructive action patterns when:
- Deleting purchase orders
- Canceling invoices
- Removing suppliers from the system
- Revoking approvals
- Terminating contracts

## Key Principles
1. **Always confirm** - Never perform a destructive action without explicit user confirmation
2. **Be specific** - Tell users exactly what will be deleted and what the consequences are
3. **Provide context** - Show related data that will be affected
4. **Offer alternatives** - When possible, suggest non-destructive alternatives

## Examples

### Delete Purchase Order
When deleting a purchase order with line items:
- Show PO number and title
- List how many line items will be deleted
- Indicate if any items have been received
- Use danger styling
- Require explicit confirmation

### Cancel Invoice
When canceling an invoice:
- Display invoice number and amount
- Show payment status
- Warn if it affects accounting records
- Explain approval workflow impact

### Remove Supplier
When removing a supplier:
- Show supplier name and ID
- List active contracts
- Display open purchase orders
- Indicate impact on procurement workflows

### Revoke Approval
When revoking an approval:
- Show what is being revoked
- Explain workflow consequences
- Display who originally approved
- Indicate next steps in the process

## Language Guidelines

### Do
- "Delete Purchase Order #12345?"
- "This will permanently remove 23 line items"
- "Cancel Invoice INV-2024-0156? This cannot be undone"

### Don't
- "Are you sure?"
- "Delete this?"
- "OK" or "Proceed" as button labels

## Accessibility
- Use ARIA live regions to announce confirmation dialogs
- Provide keyboard navigation for all actions
- Ensure sufficient color contrast for danger states
- Use both color and icons to indicate danger

## Related Patterns
- Modal Dialogs
- Form Validation
- Error States
- Loading States`
}

async function seedPattern() {
  try {
    console.log('Creating Destructive Actions pattern...')

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
    console.log('✅ Pattern created successfully!')
    console.log('ID:', result.doc.id)
    console.log('Title:', result.doc.title)
    console.log('Slug:', result.doc.slug)

  } catch (error) {
    console.error('❌ Error creating pattern:', error)
    process.exit(1)
  }
}

seedPattern()

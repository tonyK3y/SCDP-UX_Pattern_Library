// Seed Modal Usage pattern
const patternData = {
  title: 'Modal Usage',
  slug: 'modal-usage',
  description: 'Best practices for using modals in supply chain workflows, including when to use modals vs other UI patterns.',
  content: `# Modal Usage Pattern

## Overview
Modals are overlays that require user interaction before returning to the main interface. In supply chain applications, they're essential for focused data entry, confirmations, and displaying complex details.

## When to Use Modals

### Good Use Cases
- **Create/Edit forms** - New requisition, edit supplier details
- **Critical confirmations** - Approve invoice, submit PO
- **Complex data display** - View complete supplier profile
- **Multi-step wizards** - Contract setup, onboarding workflows
- **Focus required** - Preventing accidental navigation during important tasks

### When NOT to Use Modals
- **Simple messages** - Use toasts or inline notifications
- **Non-critical info** - Use popovers or tooltips
- **Long forms** - Consider dedicated pages
- **Frequent access** - Use side panels or inline expansion
- **Related workflows** - Use tabs or step navigation

## Modal Sizes

### Small (sm)
- Quick confirmations
- Simple single-field inputs
- Delete confirmations
- **Example:** "Approve this invoice?"

### Medium (md) - Default
- Standard forms with 3-8 fields
- Create requisition
- Edit supplier contact
- **Example:** "Add line item to PO"

### Large (lg)
- Complex forms with 8-15 fields
- Supplier onboarding form
- Contract details
- **Example:** "Create new supplier"

### Extra Large (xlg)
- Multi-section forms
- Data tables within modals
- Full supplier profile view
- **Example:** "Review requisition with line items"

## Supply Chain Examples

### Create Requisition Modal
\`\`\`tsx
<Modal
  open={isOpen}
  onRequestClose={() => setIsOpen(false)}
  modalHeading="Create New Requisition"
  primaryButtonText="Create Requisition"
  secondaryButtonText="Cancel"
  size="lg"
>
  <Form>
    <TextInput
      id="req-title"
      labelText="Requisition Title"
      placeholder="e.g., Office Supplies Q2 2024"
    />
    <Select
      id="department"
      labelText="Department"
    >
      <SelectItem value="procurement" text="Procurement" />
      <SelectItem value="operations" text="Operations" />
      <SelectItem value="it" text="IT" />
    </Select>
    <TextArea
      id="justification"
      labelText="Business Justification"
      rows={4}
    />
  </Form>
</Modal>
\`\`\`

### Edit Supplier Modal
\`\`\`tsx
<Modal
  open={isOpen}
  onRequestClose={() => setIsOpen(false)}
  modalHeading="Edit Supplier Details"
  primaryButtonText="Save Changes"
  secondaryButtonText="Cancel"
  size="md"
>
  <Form>
    <TextInput
      id="supplier-name"
      labelText="Supplier Name"
      value={supplier.name}
    />
    <TextInput
      id="contact-email"
      labelText="Contact Email"
      value={supplier.email}
    />
    <TextInput
      id="payment-terms"
      labelText="Payment Terms"
      placeholder="e.g., Net 30"
      value={supplier.paymentTerms}
    />
  </Form>
</Modal>
\`\`\`

### Invoice Approval Modal
\`\`\`tsx
<Modal
  open={isOpen}
  onRequestClose={() => setIsOpen(false)}
  modalHeading="Approve Invoice INV-2024-0892"
  primaryButtonText="Approve Invoice"
  secondaryButtonText="Reject"
  danger
  size="md"
>
  <div>
    <p><strong>Amount:</strong> $15,234.56</p>
    <p><strong>Supplier:</strong> Acme Office Supplies</p>
    <p><strong>PO Reference:</strong> PO-2024-0156</p>
    <TextArea
      id="approval-notes"
      labelText="Approval Notes (Optional)"
      rows={3}
    />
  </div>
</Modal>
\`\`\`

## Accessibility

### Focus Management
- Focus moves to modal when opened
- Focus returns to trigger element when closed
- Focus trapped within modal (Tab cycles through modal elements)

### Keyboard Navigation
- **ESC** - Close modal (unless preventing accidental close)
- **Tab** - Move through interactive elements
- **Enter** - Activate primary button
- **Shift+Tab** - Move backwards

### Screen Readers
- Modal has proper ARIA labels
- Heading announces modal purpose
- Form fields have clear labels
- Error messages are announced

## Best Practices

### Do
- Clear, specific heading describing the modal's purpose
- Primary action button uses verb + object ("Create Requisition")
- Provide clear way to cancel or close
- Validate inputs before submission
- Show loading state during async operations
- Handle errors gracefully with inline notifications

### Don't
- Stack modals on top of each other
- Use vague button labels ("OK", "Submit")
- Make modals too wide (respect screen sizes)
- Open modals on page load
- Use for non-critical notifications

## Related Patterns
- Destructive Actions - For delete confirmations
- Flyouts - For contextual information
- Drawers - For filters and auxiliary content
- Forms - For input validation patterns`
}

async function seedPattern() {
  try {
    console.log('Creating Modal Usage pattern...')

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
    console.log('✅ Modal Usage pattern created successfully!')
    console.log('ID:', result.doc.id)
    console.log('Title:', result.doc.title)
    console.log('Slug:', result.doc.slug)

  } catch (error) {
    console.error('❌ Error creating pattern:', error)
    process.exit(1)
  }
}

seedPattern()

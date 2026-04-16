// Seed Microcopy Guidelines
const patternData = {
  title: 'Microcopy Guidelines',
  slug: 'microcopy',
  description: 'Guidelines for writing button labels, form fields, notifications, and other interface microcopy.',
  content: `# Microcopy Guidelines

## Overview
Microcopy is the small bits of text that guide users through interfaces: button labels, field labels, helper text, notifications, and error messages. Good microcopy is clear, concise, and helps users complete tasks confidently.

## Button Labels

### Primary Actions
Use verb + object format. Be specific about what happens.

**Do:**
- Create Purchase Order
- Submit for Approval
- Approve Invoice
- Send to Supplier
- Save Changes

**Don't:**
- OK
- Submit
- Yes
- Continue
- Proceed

### Secondary Actions
Use clear alternatives to the primary action.

**Do:**
- Cancel
- Save Draft
- Go Back
- Skip This Step

**Don't:**
- No
- Dismiss
- Close

### Destructive Actions
Use strong verbs that communicate permanence.

**Do:**
- Delete Purchase Order
- Remove Supplier
- Cancel Invoice
- Revoke Approval

**Don't:**
- Remove
- Delete
- OK
- Confirm

### Loading States
Show what's happening during async operations.

**Do:**
- Creating Purchase Order...
- Submitting Invoice...
- Loading Supplier Details...

**Don't:**
- Loading...
- Please wait...
- Processing...

## Form Fields

### Field Labels
Clear, concise labels that describe what goes in the field.

**Do:**
- Purchase Order Number
- Supplier Name
- Invoice Date
- Payment Terms
- Business Justification

**Don't:**
- Enter PO number here
- Supplier
- Date
- Terms

### Placeholder Text
Use placeholders for examples, not instructions.

**Do:**
- Placeholder: "PO-2024-0156"
- Placeholder: "acme@supplier.com"
- Placeholder: "e.g., Office supplies for Q2"

**Don't:**
- Placeholder: "Enter purchase order number"
- Placeholder: "Type email here"

### Helper Text
Provide context when the label alone isn't sufficient.

**Do:**
- "Required for orders over $10,000"
- "Format: PO-YYYY-####"
- "Net 30 means payment due within 30 days of invoice date"

**Don't:**
- "This field is required"
- "Enter valid format"

### Required vs Optional
Mark required fields with asterisk, keep most fields optional.

**Do:**
- Invoice Number*
- PO Reference (optional)
- Leave fields unmarked if most are required

**Don't:**
- Mark all fields as required
- Use (required) text label

## Notifications

### Success Messages
Confirm the action completed and provide next steps.

**Do:**
- "Purchase Order PO-2024-0156 created. Send to supplier or save as draft."
- "Invoice approved. Payment will process on 04/20/2024."
- "Supplier Acme Corp updated successfully."

**Don't:**
- "Success!"
- "Done"
- "Your request has been processed"

### Error Messages
Explain what went wrong and how to fix it.

**Do:**
- "Unable to submit PO. The total amount $50,000 exceeds your approval limit of $10,000. Request approval from your manager."
- "Invalid email format. Use: name@company.com"
- "Invoice date cannot be in the future. Enter today's date or earlier."

**Don't:**
- "Error occurred"
- "Invalid input"
- "Please try again"

### Warning Messages
Alert users to important information before they take action.

**Do:**
- "This PO amount requires additional approval. Expect 2-3 business days for review."
- "Supplier payment terms have changed from Net 30 to Net 45. Update future orders?"

**Don't:**
- "Warning: Please review"
- "Are you sure?"

### Info Messages
Provide helpful context without requiring action.

**Do:**
- "Your approval is next in the queue for 5 pending POs."
- "This supplier has a 98% on-time delivery rate."

**Don't:**
- "FYI: Updates available"

## Empty States

### No Data Yet
Encourage users to take the first action.

**Do:**
- "No purchase orders yet. Create your first PO to get started."
- "No pending approvals. You're all caught up!"
- "No suppliers in this category. Add your first supplier."

**Don't:**
- "No data available"
- "Nothing to display"
- "Empty"

### No Search Results
Help users adjust their search or filters.

**Do:**
- "No purchase orders match your filters. Try adjusting date range or status."
- "No suppliers found for 'Acm'. Did you mean 'Acme'?"

**Don't:**
- "No results"
- "Nothing found"

### Error State
Explain what happened and offer recovery action.

**Do:**
- "Unable to load purchase orders. Check your connection and try again."
- "Session expired. Log in again to continue."

**Don't:**
- "Error loading data"
- "Something went wrong"

## Status Labels

### Purchase Order Statuses
- **Draft** - Not yet submitted
- **Pending** - Awaiting approval
- **Approved** - Ready to send
- **Sent** - Transmitted to supplier
- **Acknowledged** - Supplier confirmed
- **In Progress** - Being fulfilled
- **Partially Received** - Some items received
- **Complete** - All items received
- **Cancelled** - Order cancelled

### Invoice Statuses
- **Received** - Invoice uploaded
- **Under Review** - Being validated
- **Pending Approval** - Awaiting approval
- **Approved** - Ready for payment
- **Scheduled** - Payment scheduled
- **Paid** - Payment completed
- **Overdue** - Past due date
- **Disputed** - Issue raised

### Supplier Statuses
- **Active** - Available for orders
- **Inactive** - Not accepting orders
- **Pending Verification** - Being onboarded
- **Suspended** - Temporarily unavailable

## Confirmation Dialogs

### Pattern
1. Question heading with specifics
2. Explanation of what will happen
3. Clear action buttons

**Example: Delete PO**

Heading: Delete Purchase Order PO-2024-0156?
Body: This will permanently remove this PO and its 12 line items. The supplier has not been notified yet.
Buttons: [Cancel] [Delete Purchase Order]

**Example: Submit Invoice**

Heading: Submit Invoice INV-2024-0892?
Body: This invoice totaling $15,234.56 will be sent to Finance for approval. Expected processing time: 2-3 business days.
Buttons: [Go Back] [Submit Invoice]

## Tooltips

### Icon Tooltips
Brief description of what the icon represents.

**Do:**
- "View purchase order details"
- "Edit supplier information"
- "Download invoice PDF"

**Don't:**
- "Details"
- "Edit"
- "Download"

### Status Tooltips
Explain what the status means and what happens next.

**Do:**
- "Pending: Awaiting approval from Finance. Estimated review time: 1-2 business days."
- "Overdue: Invoice due date was 04/10/2024. Contact supplier to resolve."

**Don't:**
- "Pending approval"
- "Past due"

### Disabled Controls
Explain why something is disabled and how to enable it.

**Do:**
- "Submit button disabled: Add at least one line item to enable."
- "Approval button disabled: You cannot approve your own purchase orders."

**Don't:**
- "Disabled"
- "Not available"

## Numbers & Formatting

### Currency
- Always include $ symbol
- Use comma separators
- Two decimal places
- **Example:** $1,250.00, $15,234.56

### Dates
- Primary format: MM/DD/YYYY
- Relative for recent: "Today", "Yesterday", "2 days ago"
- In prose: "April 15, 2024"

### Quantities
- Use comma separators for large numbers
- Include units: "1,250 units", "500 boxes"

### Percentages
- One decimal place: "85.5%"
- Round if displaying trend: "Quality rating: 98%"

## Related Guidelines
- Language & Tone - Overall voice and personality
- Terminology - Standard terms and definitions
- Error Patterns - Detailed error handling guidance`
}

async function seedPattern() {
  try {
    console.log('Creating Microcopy Guidelines...')

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
    console.log('✅ Microcopy Guidelines created successfully!')
    console.log('ID:', result.doc.id)
    console.log('Title:', result.doc.title)
    console.log('Slug:', result.doc.slug)

  } catch (error) {
    console.error('❌ Error creating content:', error)
    process.exit(1)
  }
}

seedPattern()

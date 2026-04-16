// Seed Terminology Guide
const patternData = {
  title: 'Terminology Guide',
  slug: 'terminology',
  description: 'Standard terms and definitions for supply chain and procurement concepts used throughout SCDP.',
  content: `# Terminology Guide

## Overview
Consistent terminology is crucial for clear communication in supply chain applications. This guide defines standard terms used throughout the Coupa Supply Chain Design Platform.

## Core Concepts

### Purchase Order (PO)
A formal document issued by a buyer to a supplier, authorizing the purchase of specific goods or services at agreed prices and terms.

**When to use:** Always use "Purchase Order" on first reference, then "PO" is acceptable.

**Format:** PO-YYYY-####
**Example:** PO-2024-0156

### Requisition
An internal request to purchase goods or services, typically requiring approval before becoming a purchase order.

**Related terms:**
- Purchase Request (avoid - use Requisition)
- Req (acceptable informal abbreviation)

**Format:** REQ-YYYY-####
**Example:** REQ-2024-0234

### Invoice
A document from a supplier requesting payment for goods or services delivered.

**When to use:** Use "Invoice" not "Bill" in all formal contexts.

**Format:** INV-YYYY-####
**Example:** INV-2024-0892

### Supplier
An organization or individual that provides goods or services.

**When to use:** Preferred term throughout SCDP. Use "Vendor" only when referring to external systems that use that term.

**Format:** SUP-#####
**Example:** SUP-12345

**Related terms:**
- Vendor (use only for external system references)
- Provider (avoid)

## Workflow Terms

### Approval
The process of authorizing a document to proceed to the next stage in the workflow.

**Button label:** "Approve [Document]"
**Status:** "Pending Approval", "Approved"

### Rejection
The process of declining a document, requiring revision or cancellation.

**Button label:** "Reject [Document]"
**Status:** "Rejected"

**Do not use:** Deny, Decline (except in specific contexts)

### Submission
The act of sending a document for review or approval.

**Button label:** "Submit for Approval"
**Status:** "Submitted"

### Authorization
Permission granted to perform an action or access a resource.

**Usage:** System access, spending limits, role permissions

**Example:** "Your authorization limit is $10,000"

## Document States

### Draft
A document that is being created but not yet submitted.

**Usage:** Purchase orders, invoices, requisitions

**User action:** Can edit, delete, or submit

### Pending
A document awaiting action from another party.

**Usage:** "Pending Approval", "Pending Review", "Pending Payment"

**User action:** View only (unless you're the approver)

### Active
A document or record currently in use or valid.

**Usage:** Contracts, suppliers, user accounts

### Inactive
A document or record no longer in active use but retained for records.

**Usage:** Expired contracts, deactivated suppliers

**Do not use:** Disabled (use for UI elements), Archived (use for long-term storage)

### Cancelled
A document that was terminated before completion.

**Usage:** Purchase orders, invoices, requisitions

**Spelling:** Use "Cancelled" (two Ls) not "Canceled"

### Complete
A document or process that has finished successfully.

**Usage:** Purchase orders (all items received), invoices (fully paid)

**Related terms:** Fulfilled, Closed (use depending on context)

## Financial Terms

### Line Item
An individual entry in a purchase order or invoice listing a specific product or service.

**Do not use:** Row, Entry, Item (alone)

**Example:** "This PO has 12 line items"

### Payment Terms
The agreed conditions for payment between buyer and supplier.

**Common terms:**
- **Net 30:** Payment due within 30 days of invoice date
- **Net 45:** Payment due within 45 days
- **Net 60:** Payment due within 60 days
- **2/10 Net 30:** 2% discount if paid within 10 days, full payment due in 30 days
- **Due on Receipt:** Payment due immediately
- **Cash on Delivery (COD):** Payment due upon delivery

### Amount
The total value of a transaction or document.

**Format:** $#,###.##
**Example:** $15,234.56

**Usage:**
- "PO Amount" (not "PO Value" or "PO Total")
- "Invoice Amount"
- "Total Amount"

### Cost
The price of goods or services.

**Usage:**
- "Unit Cost"
- "Total Cost"
- "Cost per Item"

## Quantity & Inventory Terms

### Quantity
The number of units ordered or received.

**Abbreviation:** Qty (acceptable)

**Usage:**
- "Quantity Ordered"
- "Quantity Received"
- "Remaining Quantity"

### Unit of Measure (UOM)
The standard unit used to measure quantity.

**Common UOMs:**
- Each (EA)
- Box (BX)
- Case (CS)
- Dozen (DZ)
- Pound (LB)
- Gallon (GAL)

### Received
Items that have been delivered and confirmed.

**Status:** "Partially Received", "Fully Received"

**Related action:** "Receive Items", "Mark as Received"

### Backorder
Items on order that are temporarily out of stock.

**Usage:** "5 items on backorder"

**Status:** "Backordered"

## User Roles

### Requester
A user who creates requisitions.

**Also called:** Requestor (avoid this spelling)

### Approver
A user authorized to approve documents.

**Related terms:**
- Reviewer (someone who examines but may not approve)
- Authorizer (formal approval authority)

### Buyer
A procurement professional who creates and manages purchase orders.

**Also called:** Procurement Specialist, Purchaser

### Supplier Contact
The person at a supplier organization who handles orders and communications.

**Format:** Include name, email, phone

### Finance Approver
A member of the finance team who approves invoices for payment.

**Also called:** AP Specialist, Accounts Payable Approver

## Contract Terms

### Contract
A formal agreement between buyer and supplier defining terms, pricing, and obligations.

**Format:** CTR-YYYY-####
**Example:** CTR-2024-0045

**Related terms:**
- Agreement (more informal)
- Master Agreement (long-term, covers multiple POs)

### Statement of Work (SOW)
A detailed document defining the scope, deliverables, and timeline for services.

**Usage:** "Attached SOW defines project milestones"

### Service Level Agreement (SLA)
Terms defining expected service quality and response times.

**Usage:** "Supplier SLA guarantees 24-hour response time"

## Dates & Timelines

### Created Date
When a document was first created in the system.

**Format:** MM/DD/YYYY
**Example:** "Created: 04/15/2024"

### Due Date
When payment or action is required.

**Usage:** "Invoice due date", "Approval due date"

### Delivery Date
When goods or services are expected to be delivered.

**Usage:** "Requested delivery date", "Actual delivery date"

### Valid From / Valid To
Start and end dates for contracts or agreements.

**Usage:** "Valid from 01/01/2024 to 12/31/2024"

## System Actions

### Create
Make a new document or record.

**Button label:** "Create Purchase Order", "Create Requisition"

### Edit
Modify an existing document or record.

**Button label:** "Edit Supplier", "Edit Line Item"

### Delete
Permanently remove a document or record.

**Button label:** "Delete Purchase Order"

**Usage:** Use only for destructive actions. Provide confirmation.

### Save
Store changes to a document.

**Button labels:**
- "Save Changes" (for edits)
- "Save Draft" (for incomplete documents)
- "Save and Continue" (in multi-step workflows)

### Cancel (Action)
Abort the current operation without saving.

**Button label:** "Cancel"

**Usage:** Secondary action to close dialogs or forms

### Export
Download data in a specific format.

**Button label:** "Export to CSV", "Export to Excel"

### View
Display details of a document or record.

**Link label:** "View Details", "View Purchase Order"

## Best Practices

### Consistency
Use the same term for the same concept throughout the interface.

**Example:** If you use "Purchase Order" in one place, don't use "PO Document" elsewhere.

### Clarity
Choose the term that is most clear to your users.

**Example:** "Payment Terms" is clearer than "Terms and Conditions"

### Avoid Jargon
Use industry-standard terms that supply chain professionals understand, but explain acronyms on first use.

**Example:** "Submit Statement of Work (SOW)" on first reference, then "SOW" is acceptable.

## Regional Variations

### US vs UK Spelling
SCDP uses US English spelling conventions.

**US (Use):** Canceled, Authorization, Organization, License
**UK (Avoid):** Cancelled, Authorisation, Organisation, Licence

### Date Formats
**US format:** MM/DD/YYYY (04/15/2024)
**ISO format:** YYYY-MM-DD (2024-04-15) - use in APIs and technical contexts

## Related Guidelines
- Language & Tone - Overall voice and personality
- Microcopy - Button labels and interface text
- Forms - Field labels and helper text`
}

async function seedPattern() {
  try {
    console.log('Creating Terminology Guide...')

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
    console.log('✅ Terminology Guide created successfully!')
    console.log('ID:', result.doc.id)
    console.log('Title:', result.doc.title)
    console.log('Slug:', result.doc.slug)

  } catch (error) {
    console.error('❌ Error creating content:', error)
    process.exit(1)
  }
}

seedPattern()

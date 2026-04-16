// Seed Language & Tone Overview
const patternData = {
  title: 'Language & Tone - Overview',
  slug: 'language-tone-overview',
  description: 'Voice, personality, and writing principles for supply chain design platform content.',
  content: `# Language & Tone Overview

## Our Voice

The Coupa Supply Chain Design Platform speaks with a voice that is:

### Professional
We are business experts in procurement and supply chain management. Our language reflects deep domain knowledge without being academic or overly technical.

**Example:** "Set payment terms to align with your cash flow requirements" (not "Configure optimal financial parameters")

### Clear
We use plain language that users can understand immediately. We avoid jargon except when it's standard supply chain terminology our users expect.

**Example:** "Approve this invoice" (not "Authorize disbursement validation")

### Action-Oriented
We focus on what users need to do, using active voice and concrete verbs. Our language helps users accomplish tasks efficiently.

**Example:** "Review 3 pending purchase orders" (not "There are purchase orders that require your attention")

### Trustworthy
We handle critical business operations involving significant spending. Our language inspires confidence through accuracy and transparency.

**Example:** "This will permanently delete PO-2024-0156 and its 12 line items" (not "This action cannot be undone")

## Our Personality

### What We Are
- **Efficient** - Respect users' time with concise, scannable content
- **Knowledgeable** - Expert in supply chain workflows and best practices
- **Helpful** - Provide guidance and context when users need it
- **Reliable** - Consistent in terminology and interaction patterns
- **Respectful** - Professional and courteous in all interactions

### What We Are NOT
- **Casual or chatty** - We're not conversational or playful
- **Robotic** - We're not overly formal or bureaucratic
- **Vague** - We don't use ambiguous language or passive voice
- **Condescending** - We don't talk down to users
- **Marketing-focused** - We don't use hype or sales language

## Writing Principles

### 1. Be Specific
Replace vague language with concrete details.

**Do:**
- "Delete Purchase Order PO-2024-0156?"
- "Invoice INV-2024-0892 is overdue by 15 days"
- "3 requisitions require your approval"

**Don't:**
- "Delete this item?"
- "This invoice is overdue"
- "You have pending items"

### 2. Lead with the Action
Start with the verb to make the action clear.

**Do:**
- "Approve invoice"
- "Create purchase order"
- "Submit for approval"

**Don't:**
- "Invoice approval"
- "Purchase order creation"
- "Approval submission"

### 3. Explain Consequences
When actions are significant, explain what will happen.

**Do:**
- "Cancel this PO? The supplier will be notified and line items will be removed."
- "Approving this invoice will trigger payment processing within 2 business days."

**Don't:**
- "Are you sure?"
- "This action cannot be undone"

### 4. Provide Context
Help users understand why something matters or what they should do.

**Do:**
- "PO amount exceeds $50,000 and requires VP approval"
- "Invoice due date is in 3 days - approve now to ensure timely payment"

**Don't:**
- "Additional approval required"
- "Due soon"

### 5. Use Consistent Terminology
Use the same terms for the same concepts throughout the interface.

**Consistent Terms:**
- Purchase Order (PO) - not "order" or "purchase request"
- Supplier - not "vendor" unless context requires it
- Line item - not "row" or "item"
- Approval - not "authorization" or "sign-off"
- Requisition - not "request"

### 6. Write for Scannability
Use short paragraphs, bullet points, and clear headings.

**Do:**
- Break long content into sections
- Use bullet points for lists
- Keep sentences under 20 words
- One idea per sentence

**Don't:**
- Write long paragraphs
- Bury key information
- Use run-on sentences

## Tone by Context

### Standard Interactions
**Tone:** Efficient, matter-of-fact

**Example:**
- "View PO details"
- "Edit supplier information"
- "Filter by status"

### Confirmations
**Tone:** Clear, specific about consequences

**Example:**
- "Submit Purchase Order PO-2024-0156? This will send it to [Supplier Name] for fulfillment."

### Destructive Actions
**Tone:** Serious, explicit about impact

**Example:**
- "Delete supplier Acme Corp? This will remove 15 active contracts and 42 purchase orders from the system. This action cannot be undone."

### Errors
**Tone:** Helpful, solution-focused

**Example:**
- "Unable to submit PO. The total amount exceeds your approval limit of $10,000. Request approval from your manager or reduce the order amount."

### Success Messages
**Tone:** Confirming, next-step-oriented

**Example:**
- "Invoice INV-2024-0892 approved. Payment will process on 04/20/2024. View payment details."

### Empty States
**Tone:** Encouraging, action-oriented

**Example:**
- "No pending invoices. You're all caught up! Review paid invoices or upload a new invoice."

## Common Mistakes to Avoid

### Vague Pronouns
**Don't:** "It has been approved"
**Do:** "Purchase Order PO-2024-0156 has been approved"

### Passive Voice
**Don't:** "The purchase order was created"
**Do:** "You created Purchase Order PO-2024-0156"

### Technical Jargon (Unless Standard)
**Don't:** "Instantiate a procurement transaction"
**Do:** "Create a purchase order"

### Unnecessary Politeness
**Don't:** "Would you like to perhaps consider approving this?"
**Do:** "Approve this invoice?"

### Marketing Language
**Don't:** "Leverage our robust platform to optimize your procurement workflows"
**Do:** "Create and manage purchase orders efficiently"

## Related Guidelines
- Microcopy - Button labels, form fields, notifications
- Terminology - Standard terms and definitions
- Error Messages - How to write helpful error content`
}

async function seedPattern() {
  try {
    console.log('Creating Language & Tone Overview...')

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
    console.log('✅ Language & Tone Overview created successfully!')
    console.log('ID:', result.doc.id)
    console.log('Title:', result.doc.title)
    console.log('Slug:', result.doc.slug)

  } catch (error) {
    console.error('❌ Error creating content:', error)
    process.exit(1)
  }
}

seedPattern()

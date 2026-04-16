// Seed Forms pattern
const patternData = {
  title: 'Forms',
  slug: 'forms',
  description: 'Best practices for form design, validation, and error handling in supply chain workflows.',
  content: `# Forms Pattern

## Overview
Forms are essential for data entry in supply chain applications. Well-designed forms improve accuracy, reduce errors, and speed up procurement workflows.

## Form Structure

### Layout
- Left-align labels above fields (not beside)
- Group related fields together
- Use clear section headings
- Provide progress indicators for multi-step forms
- Show required vs optional fields clearly

### Field Width
- Match field width to expected input length
- PO numbers: narrow (150px)
- Email addresses: medium (300px)
- Descriptions: full width
- Use responsive columns for desktop (2-3 columns max)

## Supply Chain Form Examples

### Create Requisition Form
- Requisition title (required)
- Department (required dropdown)
- Justification (required textarea)
- Items section with add/remove rows
- Total amount (calculated automatically)
- Approval routing (auto-filled based on amount)

### Supplier Onboarding Form
**Section 1: Company Information**
- Legal name
- Tax ID
- Business type
- Year established

**Section 2: Contact Details**
- Primary contact name
- Email address
- Phone number
- Address

**Section 3: Banking Information**
- Bank name
- Account number
- Routing number
- Payment terms preference

**Section 4: Compliance**
- W-9 upload
- Insurance certificate upload
- Agreement checkboxes

### Invoice Entry Form
- Invoice number (required)
- Invoice date (required)
- Due date (auto-calculated based on terms)
- PO reference (optional)
- Line items table
- Total amount (calculated)
- Attachments (PDF upload)

## Field Types

### Text Inputs
Use for: Names, titles, descriptions, IDs

\`\`\`tsx
<TextInput
  id="po-number"
  labelText="Purchase Order Number"
  placeholder="PO-2024-####"
  helperText="Format: PO-YYYY-####"
  required
/>
\`\`\`

### Select Dropdowns
Use for: Status, department, category, supplier selection

\`\`\`tsx
<Select
  id="department"
  labelText="Department"
  required
>
  <SelectItem value="" text="Select department" />
  <SelectItem value="procurement" text="Procurement" />
  <SelectItem value="operations" text="Operations" />
  <SelectItem value="it" text="IT" />
</Select>
\`\`\`

### TextAreas
Use for: Justifications, notes, descriptions

\`\`\`tsx
<TextArea
  id="justification"
  labelText="Business Justification"
  placeholder="Explain why this purchase is necessary"
  rows={4}
  required
/>
\`\`\`

### Date Pickers
Use for: PO dates, delivery dates, contract dates

\`\`\`tsx
<DatePicker datePickerType="single">
  <DatePickerInput
    id="delivery-date"
    labelText="Requested Delivery Date"
    placeholder="mm/dd/yyyy"
  />
</DatePicker>
\`\`\`

### Number Inputs
Use for: Quantities, amounts, percentages

\`\`\`tsx
<NumberInput
  id="quantity"
  label="Quantity"
  min={1}
  step={1}
  value={quantity}
  onChange={(e) => setQuantity(e.imaginaryTarget.value)}
/>
\`\`\`

### File Upload
Use for: Invoices, contracts, certificates

\`\`\`tsx
<FileUploader
  labelTitle="Upload Invoice"
  labelDescription="PDF or image files only"
  buttonLabel="Choose file"
  filenameStatus="edit"
  accept={['.pdf', '.jpg', '.png']}
/>
\`\`\`

## Validation

### Required Field Validation
- Mark required fields with asterisk
- Validate on form submit
- Show inline error messages
- Prevent submission until fixed

### Format Validation
- Email addresses: valid format
- Phone numbers: valid format
- Dates: valid date format
- Amounts: positive numbers, proper decimal places

### Business Logic Validation
- PO amount requires additional approval if over threshold
- Supplier must be active in system
- Invoice date cannot be in future
- Delivery date must be after PO date

### Error Messages

**Do:**
- "Enter a valid email address (example: user@company.com)"
- "PO amount $50,000 requires VP approval"
- "Delivery date must be at least 3 days after today"

**Don't:**
- "Invalid input"
- "Error"
- "Please fix errors"

## Progressive Disclosure

Show fields conditionally based on previous selections:

- If "Urgent PO" is checked → Show justification field
- If amount > $10,000 → Show additional approval field
- If "New Supplier" → Show full onboarding section
- If payment type = "Check" → Show mailing address

## Multi-Step Forms

For complex workflows:

**Step indicators:**
\`\`\`tsx
<ProgressIndicator currentIndex={currentStep}>
  <ProgressStep label="Details" />
  <ProgressStep label="Items" />
  <ProgressStep label="Review" />
  <ProgressStep label="Submit" />
</ProgressIndicator>
\`\`\`

**Navigation:**
- Next/Previous buttons
- Save draft functionality
- Allow jumping to completed steps
- Summary on final step

## Autosave & Draft Management

- Auto-save every 30 seconds
- Show save status indicator
- Restore draft on return
- Warn before abandoning unsaved changes
- Provide "Save Draft" button

## Accessibility

### Labels & Instructions
- Every field has visible label
- Use placeholders as examples, not labels
- Provide helper text for complex fields
- Use fieldset and legend for groups

### Keyboard Navigation
- Tab order follows visual order
- Enter submits form
- Arrow keys navigate radio/checkbox groups
- Date pickers keyboard accessible

### Error Handling
- Announce errors to screen readers
- Associate error messages with fields (aria-describedby)
- Move focus to first error on submit
- Provide clear path to fix errors

### Visual Design
- Sufficient color contrast (4.5:1)
- Clear focus indicators
- Error states use color + icon
- Disabled state is visually distinct

## Best Practices

### Do
- Show loading state during submission
- Confirm successful submission
- Provide clear next steps after submission
- Save user's work frequently
- Pre-fill known information
- Use smart defaults
- Group related fields
- Use consistent field widths

### Don't
- Use placeholder as label
- Make forms too long (split into steps)
- Clear form on error
- Use "Submit" as button label (be specific)
- Validate on every keystroke (wait for blur)
- Hide important info in tooltips
- Use too many required fields

## Mobile Considerations
- Single column layout
- Larger touch targets (min 44x44px)
- Appropriate input types (email, tel, number)
- Minimize typing with dropdowns
- Use native date/time pickers
- Sticky form buttons at bottom

## Related Patterns
- Modals - For form dialogs
- Validation Messages - For errors
- Loading States - During submission
- Success Notifications - After submission`
}

async function seedPattern() {
  try {
    console.log('Creating Forms pattern...')

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
    console.log('✅ Forms pattern created successfully!')
    console.log('ID:', result.doc.id)
    console.log('Title:', result.doc.title)
    console.log('Slug:', result.doc.slug)

  } catch (error) {
    console.error('❌ Error creating pattern:', error)
    process.exit(1)
  }
}

seedPattern()

// Seed Data Tables pattern
const patternData = {
  title: 'Data Tables',
  slug: 'data-tables',
  description: 'Guidelines for designing and implementing data tables for supply chain data including purchase orders, invoices, and supplier lists.',
  content: `# Data Tables Pattern

## Overview
Data tables are essential for displaying structured supply chain data. Well-designed tables help users scan, compare, and take action on large datasets efficiently.

## When to Use Tables

### Good Use Cases
- Purchase order lists
- Invoice queues
- Supplier directories
- Line item details
- Approval workflows
- Shipment tracking
- Contract management

### When NOT to Use Tables
- Single record display (use detail page)
- Fewer than 3 rows (use list or cards)
- Complex hierarchical data (use tree view)
- Comparison of 2-3 items (use comparison cards)

## Table Anatomy

### Essential Elements
- Column headers with clear labels
- Sortable columns (where relevant)
- Row selection (checkboxes)
- Pagination or infinite scroll
- Search and filter controls
- Bulk action toolbar
- Empty state
- Loading state

### Optional Elements
- Row expansion for details
- Inline editing
- Row actions menu
- Column reordering
- Column visibility toggle
- Density controls (compact/default/comfortable)
- Export to CSV/Excel

## Column Types

### ID Columns
- Fixed width, left-aligned
- Clickable to view details
- Monospace font
- **Example:** PO-2024-0156, INV-2024-0892

### Text Columns
- Left-aligned
- Truncate with ellipsis
- Tooltip on hover for full text
- **Example:** Supplier names, descriptions

### Number Columns
- Right-aligned
- Formatted with commas
- Consistent decimal places
- **Example:** Quantities, amounts

### Currency Columns
- Right-aligned
- Currency symbol
- Thousand separators
- Two decimal places
- **Example:** $1,250.00, $15,234.56

### Date Columns
- Left or center-aligned
- Consistent format (MM/DD/YYYY)
- Relative dates for recent items ("2 days ago")
- **Example:** 04/15/2024, Yesterday

### Status Columns
- Use status badges/tags
- Color-coded (with text labels)
- Center-aligned
- **Example:** Pending (yellow), Approved (green), Rejected (red)

### Action Columns
- Right-aligned
- Icon buttons or overflow menu
- Common actions: View, Edit, Delete
- **Example:** Three-dot menu with options

## Supply Chain Table Examples

### Purchase Order List

**Columns:**
- [ ] Selection checkbox
- PO Number (sortable, link)
- Title
- Supplier (sortable)
- Department (sortable, filterable)
- Amount (sortable, right-aligned)
- Status (filterable)
- Created Date (sortable)
- Actions (overflow menu)

**Sorting:** Default sort by Created Date (newest first)

**Filters:**
- Status dropdown
- Department dropdown
- Date range picker
- Amount range

**Bulk Actions:**
- Approve selected
- Cancel selected
- Export selected
- Reassign approver

### Invoice Queue

**Columns:**
- [ ] Selection checkbox
- Invoice Number (link)
- Supplier
- PO Reference (link)
- Amount (right-aligned, sortable)
- Due Date (sortable)
- Status
- Days Overdue (calculated)
- Actions

**Key Features:**
- Color-code overdue invoices (red)
- Highlight invoices due soon (yellow)
- Group by status
- Search by invoice number or supplier

### Supplier Directory

**Columns:**
- Supplier Name (sortable, link)
- ID
- Contact Name
- Email
- Payment Terms
- Active Contracts (count)
- Rating (stars, sortable)
- Last Order Date (sortable)
- Actions

**Key Features:**
- Search by name or ID
- Filter by rating
- Filter by payment terms
- Export to CSV

## Sorting

### Sortable Columns
- Show sort icon on hover
- Active sort column highlighted
- Indicate sort direction (up/down arrow)
- Click to toggle ascending/descending
- Multi-column sort (Shift+Click)

### Default Sort
- **PO Lists:** Most recent first
- **Invoice Queues:** Due date (soonest first)
- **Suppliers:** Alphabetical by name
- **Line Items:** Order sequence

## Pagination

### Options
- **Standard pagination:** 1, 2, 3... (for known dataset size)
- **Infinite scroll:** Load more on scroll (for large datasets)
- **Load more button:** User-controlled (preferred for accessibility)

### Page Sizes
- Default: 25 items
- Options: 10, 25, 50, 100
- Remember user preference
- Show total count: "Showing 1-25 of 243"

## Row Selection

### Checkbox Behavior
- Select all checkbox in header
- Individual row checkboxes
- Shift+Click for range selection
- Show selected count: "3 items selected"
- Clear selection button

### Bulk Actions
- Toolbar appears when items selected
- Show selected count
- Primary actions: Approve, Reject, Delete
- Secondary actions in overflow menu
- Confirm destructive actions

## Row States

### Default
- White background
- Subtle border

### Hover
- Light gray background
- Show action buttons

### Selected
- Blue tint background
- Checked checkbox

### Disabled
- Gray text
- No hover state
- Checkbox disabled
- Explain why (tooltip)

## Empty States

### No Data
- Icon (empty inbox, clipboard)
- Heading: "No purchase orders yet"
- Description: "Create your first PO to get started"
- Primary action: "Create PO" button

### No Search Results
- Icon (magnifying glass)
- Heading: "No results found"
- Description: "Try adjusting your filters"
- Secondary action: "Clear filters" button

### Error State
- Icon (warning)
- Heading: "Unable to load data"
- Description: Error message
- Primary action: "Try again" button

## Responsive Design

### Desktop (>1024px)
- Show all columns
- Full-width table
- Horizontal scroll if needed

### Tablet (768-1024px)
- Hide less important columns
- Show column toggle
- Maintain readability

### Mobile (<768px)
- Convert to card list
- Stack key information
- Swipe for actions
- Simplified filters

## Accessibility

### Keyboard Navigation
- **Tab:** Move through interactive elements
- **Arrow keys:** Navigate cells
- **Space:** Select row
- **Enter:** Activate default action
- **Shift+Space:** Select range

### Screen Readers
- Table has caption
- Column headers properly marked
- Row data associated with headers
- Sorted column announced
- Selected rows announced
- Action buttons have labels

### Visual Requirements
- Sufficient contrast (4.5:1)
- Visible focus indicators
- Don't rely on color alone
- Large enough touch targets (44x44px)

## Best Practices

### Do
- Keep column headers concise
- Use consistent formatting
- Provide search and filters
- Show loading states
- Handle errors gracefully
- Remember user preferences
- Export functionality
- Responsive design

### Don't
- Use too many columns (max 8-10)
- Make entire rows clickable if actions exist
- Hide critical data on mobile
- Use color alone for status
- Forget empty states
- Auto-refresh without warning
- Truncate critical IDs

## Code Example

\`\`\`tsx
import { DataTable } from '@carbon/react'

const headers = [
  { key: 'poNumber', header: 'PO Number' },
  { key: 'supplier', header: 'Supplier' },
  { key: 'department', header: 'Department' },
  { key: 'amount', header: 'Amount' },
  { key: 'status', header: 'Status' },
  { key: 'createdDate', header: 'Created' },
]

const rows = [
  {
    id: '1',
    poNumber: 'PO-2024-0156',
    supplier: 'Acme Office Supplies',
    department: 'Operations',
    amount: '$1,250.00',
    status: 'Approved',
    createdDate: '04/15/2024',
  },
  // More rows...
]

<DataTable
  rows={rows}
  headers={headers}
  isSortable
  radio={false}
  locale="en"
>
  {({
    rows,
    headers,
    getHeaderProps,
    getRowProps,
    getSelectionProps,
    getToolbarProps,
    getBatchActionProps,
    selectedRows,
  }) => (
    <TableContainer title="Purchase Orders">
      <TableToolbar {...getToolbarProps()}>
        <TableBatchActions {...getBatchActionProps()}>
          <TableBatchAction onClick={handleApprove}>
            Approve
          </TableBatchAction>
          <TableBatchAction onClick={handleCancel}>
            Cancel
          </TableBatchAction>
        </TableBatchActions>
        <TableToolbarContent>
          <TableToolbarSearch />
          <Button onClick={handleCreatePO}>
            Create PO
          </Button>
        </TableToolbarContent>
      </TableToolbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableSelectAll {...getSelectionProps()} />
            {headers.map((header) => (
              <TableHeader {...getHeaderProps({ header })}>
                {header.header}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow {...getRowProps({ row })}>
              <TableSelectRow {...getSelectionProps({ row })} />
              {row.cells.map((cell) => (
                <TableCell key={cell.id}>
                  {cell.value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )}
</DataTable>
\`\`\`

## Related Patterns
- Pagination - For large datasets
- Search and Filter - For finding records
- Empty States - When no data exists
- Loading States - While fetching data`
}

async function seedPattern() {
  try {
    console.log('Creating Data Tables pattern...')

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
    console.log('✅ Data Tables pattern created successfully!')
    console.log('ID:', result.doc.id)
    console.log('Title:', result.doc.title)
    console.log('Slug:', result.doc.slug)

  } catch (error) {
    console.error('❌ Error creating pattern:', error)
    process.exit(1)
  }
}

seedPattern()

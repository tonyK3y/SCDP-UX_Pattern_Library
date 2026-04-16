// Seed Drawers pattern
const patternData = {
  title: 'Drawers',
  slug: 'drawers',
  description: 'Guidelines for using drawers (side panels) for filters, auxiliary content, and contextual workflows in supply chain applications.',
  content: `# Drawers Pattern

## Overview
Drawers (also called side panels) are panels that slide in from the side of the screen to display auxiliary content or controls without navigating away from the current page.

## When to Use Drawers

### Good Use Cases
- **Filtering and search** - Complex filter controls for data tables
- **Bulk operations** - Edit multiple items simultaneously
- **Activity feeds** - Recent updates, notifications
- **Contextual details** - View record details while keeping list visible
- **Multi-step workflows** - Linear processes that complement main content

### When NOT to Use Drawers
- **Primary workflows** - Use dedicated pages
- **Critical decisions** - Use modals for focus
- **Brief information** - Use popovers or tooltips
- **Full-width content** - Use pages instead
- **Stacked workflows** - Avoid drawer within drawer

## Drawer Types

### Filter Drawer
Display filter controls without covering main content:
- Appears on left or right side
- Sticky header with "Filters" title
- Clear All and Apply buttons
- Filter count badge
- Persistent between sessions

**Use for:** PO lists, Invoice queues, Supplier directories, Catalog items

### Detail Drawer
Show record details while keeping list context:
- Appears on right side
- Close button and back arrow
- Breadcrumb for navigation
- Action buttons (Edit, Delete)
- Related items section

**Use for:** Supplier details, PO details, Invoice preview, User profile

### Bulk Edit Drawer
Edit multiple records simultaneously:
- Shows selected item count
- Common fields to update
- Preview of changes
- Bulk action confirmation
- Progress indicator for large operations

**Use for:** Update PO statuses, Change supplier categories, Reassign approvers

### Activity Feed Drawer
Display recent activity and notifications:
- Real-time updates
- Grouped by time (Today, Yesterday, This Week)
- Filter by type
- Mark as read/unread
- Link to full details

**Use for:** Approval notifications, PO updates, System alerts, User activity

## Drawer Sizes

### Narrow (25% width)
- Simple filters (3-5 controls)
- Activity feed
- Quick actions menu

### Medium (33% width) - Default
- Standard filter sets (6-10 controls)
- Record details with 5-10 fields
- Bulk edit forms

### Wide (50% width)
- Complex details with tables
- Multi-step wizards
- Comparative analysis
- Full record editing

### Extra Wide (66% width)
- Rich content with multiple sections
- Embedded data tables
- Document preview with annotations

## Supply Chain Examples

### PO Filter Drawer
\`\`\`tsx
<Drawer
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Filter Purchase Orders"
  size="medium"
  position="left"
>
  <div className="filter-drawer">
    <Select
      id="status"
      labelText="Status"
    >
      <SelectItem value="" text="All Statuses" />
      <SelectItem value="pending" text="Pending" />
      <SelectItem value="approved" text="Approved" />
      <SelectItem value="sent" text="Sent" />
    </Select>

    <DatePickerInput
      id="date-range"
      labelText="Date Range"
    />

    <Select
      id="department"
      labelText="Department"
    >
      <SelectItem value="" text="All Departments" />
      <SelectItem value="procurement" text="Procurement" />
      <SelectItem value="operations" text="Operations" />
    </Select>

    <TextInput
      id="amount-min"
      labelText="Min Amount"
      placeholder="$0.00"
    />

    <TextInput
      id="amount-max"
      labelText="Max Amount"
      placeholder="$999,999.99"
    />

    <div className="drawer-actions">
      <Button kind="secondary" onClick={handleClearAll}>
        Clear All
      </Button>
      <Button kind="primary" onClick={handleApplyFilters}>
        Apply Filters ({filterCount})
      </Button>
    </div>
  </div>
</Drawer>
\`\`\`

### Supplier Detail Drawer
\`\`\`tsx
<Drawer
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title={supplier.name}
  size="wide"
  position="right"
>
  <div className="detail-drawer">
    <Tabs>
      <Tab label="Overview">
        <p><strong>Supplier ID:</strong> {supplier.id}</p>
        <p><strong>Contact:</strong> {supplier.contactName}</p>
        <p><strong>Email:</strong> {supplier.email}</p>
        <p><strong>Payment Terms:</strong> {supplier.paymentTerms}</p>
        <p><strong>Rating:</strong> {supplier.rating}/5</p>
      </Tab>

      <Tab label="Recent Orders">
        <DataTable
          rows={recentOrders}
          headers={orderHeaders}
        />
      </Tab>

      <Tab label="Contracts">
        <p>Active contracts: {contracts.length}</p>
      </Tab>
    </Tabs>

    <div className="drawer-actions">
      <Button kind="secondary" onClick={handleEdit}>
        Edit Supplier
      </Button>
      <Button kind="danger-tertiary" onClick={handleDelete}>
        Remove Supplier
      </Button>
    </div>
  </div>
</Drawer>
\`\`\`

### Bulk Edit Drawer
\`\`\`tsx
<Drawer
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title={\`Edit \${selectedCount} Purchase Orders\`}
  size="medium"
  position="right"
>
  <div className="bulk-edit-drawer">
    <InlineNotification
      kind="info"
      title="Bulk Update"
      subtitle={\`Changes will apply to \${selectedCount} selected POs\`}
    />

    <Select
      id="bulk-status"
      labelText="Change Status To"
    >
      <SelectItem value="" text="(No Change)" />
      <SelectItem value="approved" text="Approved" />
      <SelectItem value="cancelled" text="Cancelled" />
    </Select>

    <Select
      id="bulk-approver"
      labelText="Reassign Approver"
    >
      <SelectItem value="" text="(No Change)" />
      <SelectItem value="user1" text="Jane Smith" />
      <SelectItem value="user2" text="John Doe" />
    </Select>

    <TextArea
      id="bulk-notes"
      labelText="Add Note (Optional)"
      rows={3}
    />

    <div className="drawer-actions">
      <Button kind="secondary" onClick={handleCancel}>
        Cancel
      </Button>
      <Button kind="primary" onClick={handleBulkUpdate}>
        Update {selectedCount} POs
      </Button>
    </div>
  </div>
</Drawer>
\`\`\`

## Interaction Patterns

### Opening
- Slide in with smooth animation (300ms)
- Dim background with overlay
- Trap focus within drawer
- Push main content (optional)

### Closing
- ESC key closes drawer
- Click outside closes drawer
- Close button (X) in header
- Cancel button in footer
- Confirm unsaved changes before closing

### Resizing
- Allow drag to resize (if appropriate)
- Remember user's preferred size
- Snap to predefined widths
- Set min/max widths

## Accessibility

### Keyboard Navigation
- **Tab** - Move through interactive elements
- **Shift+Tab** - Move backwards
- **ESC** - Close drawer
- **Enter** - Activate buttons

### Screen Readers
- Announce drawer opening with title
- Use role="dialog" or role="complementary"
- Provide clear close button label
- Announce validation errors
- Indicate loading states

### Focus Management
- Move focus to drawer when opened
- Return focus to trigger when closed
- Trap focus within drawer
- Visible focus indicators

## Best Practices

### Do
- Keep drawer content focused and relevant
- Use sticky headers and footers
- Show unsaved changes warning
- Provide clear primary action
- Load content progressively if slow
- Remember drawer state between sessions

### Don't
- Open drawers on page load
- Stack multiple drawers
- Use for critical workflows requiring full attention
- Make drawers full-screen (use page instead)
- Hide primary navigation behind drawer
- Forget to handle loading/error states

## Mobile Considerations
- Convert to bottom sheet on mobile
- Full-width on small screens
- Swipe down to close
- Larger touch targets (min 44x44px)
- Consider using modal instead

## Related Patterns
- Modals - For focused interactions
- Flyouts - For brief contextual info
- Tabs - For organizing drawer content
- Data Tables - Often used with filter drawers`
}

async function seedPattern() {
  try {
    console.log('Creating Drawers pattern...')

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
    console.log('✅ Drawers pattern created successfully!')
    console.log('ID:', result.doc.id)
    console.log('Title:', result.doc.title)
    console.log('Slug:', result.doc.slug)

  } catch (error) {
    console.error('❌ Error creating pattern:', error)
    process.exit(1)
  }
}

seedPattern()

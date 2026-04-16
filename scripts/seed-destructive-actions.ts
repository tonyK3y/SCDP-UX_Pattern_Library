import { getPayload } from 'payload'
import config from '../payload.config'

async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding Destructive Actions pattern...')

  // Create code examples first
  const basicModalExample = await payload.create({
    collection: 'code-examples',
    data: {
      title: 'Basic Destructive Action Modal',
      description: 'Implementation example using IBM Carbon React components with supply chain context.',
      language: 'typescript',
      code: `import { Modal, Button } from '@carbon/react'
import { TrashCan } from '@carbon/icons-react'

function DeletePurchaseOrder({ poNumber, onDelete, onCancel }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        kind="danger"
        renderIcon={TrashCan}
        onClick={() => setOpen(true)}
      >
        Delete PO #{poNumber}
      </Button>

      <Modal
        open={open}
        danger
        modalHeading={\`Delete Purchase Order #\${poNumber}?\`}
        modalLabel="Destructive Action"
        primaryButtonText="Delete Purchase Order"
        secondaryButtonText="Cancel"
        onRequestClose={() => setOpen(false)}
        onRequestSubmit={() => {
          onDelete(poNumber)
          setOpen(false)
        }}
      >
        <p>
          This action cannot be undone. Deleting this Purchase Order
          will permanently remove all line items, approval history,
          and supplier commitments.
        </p>
      </Modal>
    </>
  )
}`,
      order: 1,
    },
  })

  const impactDetailsExample = await payload.create({
    collection: 'code-examples',
    data: {
      title: 'Modal with Impact Details',
      description: 'Show detailed impact information and consequences to users.',
      language: 'typescript',
      code: `import { Modal, InlineNotification } from '@carbon/react'

<Modal
  open={open}
  danger
  modalHeading="Cancel Invoice #INV-2024-789?"
  modalLabel="Financial Action"
  primaryButtonText="Cancel Invoice"
  secondaryButtonText="Keep Invoice"
  onRequestClose={handleClose}
  onRequestSubmit={handleCancel}
>
  <p>Canceling this invoice will affect accounting records.</p>

  <div style={{ margin: '1rem 0' }}>
    <strong>Invoice Details:</strong>
    <ul>
      <li>Amount: $12,450.00</li>
      <li>Vendor: Global Supplies Inc</li>
      <li>Due Date: May 15, 2024</li>
    </ul>
  </div>

  <InlineNotification
    kind="error"
    title="Financial Impact"
    subtitle="This updates the general ledger."
    lowContrast
    hideCloseButton
  />
</Modal>`,
      order: 2,
    },
  })

  const typescriptInterfaceExample = await payload.create({
    collection: 'code-examples',
    data: {
      title: 'TypeScript Interface',
      description: 'Type definitions for destructive action modals.',
      language: 'typescript',
      code: `interface DestructiveActionModalProps {
  open: boolean
  itemType: 'purchase-order' | 'invoice' | 'supplier' | 'requisition'
  itemId: string
  itemName: string
  impactDetails: {
    description: string
    affectedRecords: number
    stakeholders: number
  }
  onConfirm: () => Promise<void>
  onCancel: () => void
}`,
      order: 3,
    },
  })

  // Create the Destructive Actions pattern
  const pattern = await payload.create({
    collection: 'patterns',
    data: {
      title: 'Destructive Actions',
      slug: 'destructive-actions',
      category: 'interaction',
      status: 'published',
      tags: [
        { tag: 'critical', color: 'red' },
        { tag: 'confirmation-required', color: 'purple' },
        { tag: 'supply-chain', color: 'blue' },
      ],
      intro: 'Confirming deletions, cancellations, and irreversible operations in supply chain workflows. Always require explicit user confirmation for actions that cannot be easily undone.',
      overview: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Destructive actions permanently alter or remove data, affecting business operations, financial records, or supplier relationships. In enterprise supply chain systems, these actions often have cascading effects across multiple workflows and teams.',
                },
              ],
            },
          ],
        },
      },
      whenToUse: [
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Deleting records', format: 'bold' },
                    { type: 'text', text: ' - Purchase Orders, Requisitions, Line Items, or any data that impacts procurement workflows' },
                  ],
                },
              ],
            },
          },
        },
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Canceling financial documents', format: 'bold' },
                    { type: 'text', text: ' - Invoices, Payment Orders, Contracts that affect accounting and audit trails' },
                  ],
                },
              ],
            },
          },
        },
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Removing business relationships', format: 'bold' },
                    { type: 'text', text: ' - Suppliers, Contracts, Catalog items that are used across the organization' },
                  ],
                },
              ],
            },
          },
        },
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Revoking approvals', format: 'bold' },
                    { type: 'text', text: ' - Workflow steps that reset procurement processes and notify multiple stakeholders' },
                  ],
                },
              ],
            },
          },
        },
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Bulk operations', format: 'bold' },
                    { type: 'text', text: ' - Mass deletions or cancellations that affect multiple records simultaneously' },
                  ],
                },
              ],
            },
          },
        },
      ],
      whenNotToUse: [
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Reversible actions', format: 'bold' },
                    { type: 'text', text: ' - Use simple confirmations or allow undo functionality' },
                  ],
                },
              ],
            },
          },
        },
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Draft or temporary data', format: 'bold' },
                    { type: 'text', text: " - Unsaved forms or temporary selections don't need confirmation" },
                  ],
                },
              ],
            },
          },
        },
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Non-critical operations', format: 'bold' },
                    { type: 'text', text: ' - Hiding columns, collapsing sections, or changing views' },
                  ],
                },
              ],
            },
          },
        },
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Status changes', format: 'bold' },
                    { type: 'text', text: " - Moving items between states (unless it's final/irreversible)" },
                  ],
                },
              ],
            },
          },
        },
      ],
      examples: [
        {
          title: 'Delete Purchase Order',
          description: 'Deleting a PO affects line items, supplier commitments, budgets, and approval histories. Requires specific confirmation with PO number.',
          tag: 'High Impact',
          tagColor: 'red',
          componentType: 'delete-po-modal',
        },
        {
          title: 'Cancel Invoice',
          description: 'Canceling an invoice impacts accounting records, payment schedules, and audit trails. Shows consequences and requires justification.',
          tag: 'Financial Impact',
          tagColor: 'red',
          componentType: 'cancel-invoice-modal',
        },
        {
          title: 'Remove Supplier',
          description: 'Removing a supplier affects active contracts, catalog items, and pending orders. Shows all dependencies before confirmation.',
          tag: 'Relationship Impact',
          tagColor: 'red',
          componentType: 'remove-supplier-modal',
        },
        {
          title: 'Revoke Approval',
          description: 'Revoking an approval resets the workflow, notifies stakeholders, and may delay procurement. Explains workflow consequences.',
          tag: 'Workflow Impact',
          tagColor: 'magenta',
          componentType: 'revoke-approval-modal',
        },
      ],
      languageGuidelines: {
        description: 'Clear, specific language helps prevent accidental deletions. Always use active voice and include the specific item being affected.',
        doList: [
          { item: '"Delete Purchase Order #12345?"' },
          { item: '"Cancel Invoice #INV-2024-789?"' },
          { item: '"Remove Supplier: Acme Corporation?"' },
          { item: '"Revoke approval for Requisition #REQ-8901?"' },
          { item: '"This will permanently delete 23 line items"' },
          { item: '"This action affects 5 active contracts"' },
        ],
        dontList: [
          { item: '"Are you sure?" (too vague)' },
          { item: '"Delete?" (missing context)' },
          { item: '"This action cannot be undone" (alone, without specifics)' },
          { item: '"OK" or "Yes" (not descriptive enough)' },
          { item: '"Delete it" (ambiguous pronoun)' },
          { item: '"Are you really sure?" (patronizing)' },
        ],
        buttonText: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                tag: 'h4',
                children: [{ type: 'text', text: 'Primary (Destructive) Button:' }],
              },
              {
                type: 'list',
                listType: 'bullet',
                children: [
                  {
                    type: 'listitem',
                    children: [{ type: 'text', text: '"Delete Purchase Order" (not "Delete" or "OK")' }],
                  },
                  {
                    type: 'listitem',
                    children: [{ type: 'text', text: '"Cancel Invoice" (not "Yes" or "Confirm")' }],
                  },
                  {
                    type: 'listitem',
                    children: [{ type: 'text', text: '"Remove Supplier" (specific action)' }],
                  },
                ],
              },
              {
                type: 'heading',
                tag: 'h4',
                children: [{ type: 'text', text: 'Secondary (Safe) Button:' }],
              },
              {
                type: 'list',
                listType: 'bullet',
                children: [
                  {
                    type: 'listitem',
                    children: [{ type: 'text', text: '"Cancel" or "Keep [Item]" (clear escape)' }],
                  },
                  {
                    type: 'listitem',
                    children: [{ type: 'text', text: '"Go Back" (for complex flows)' }],
                  },
                  {
                    type: 'listitem',
                    children: [{ type: 'text', text: 'Never use "No" (negative framing)' }],
                  },
                ],
              },
            ],
          },
        },
      },
      codeExamples: [basicModalExample.id, impactDetailsExample.id, typescriptInterfaceExample.id],
      accessibility: [
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Focus management', format: 'bold' },
                    { type: 'text', text: ' - Focus moves to modal when opened, returns to trigger button when closed' },
                  ],
                },
              ],
            },
          },
        },
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Keyboard navigation', format: 'bold' },
                    { type: 'text', text: ' - Tab through buttons, Escape key closes modal, Enter submits (with caution)' },
                  ],
                },
              ],
            },
          },
        },
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Screen readers', format: 'bold' },
                    { type: 'text', text: ' - Use modalLabel for context, clear button text describes the action' },
                  ],
                },
              ],
            },
          },
        },
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Color contrast', format: 'bold' },
                    { type: 'text', text: ' - Red danger buttons meet WCAG AA standards' },
                  ],
                },
              ],
            },
          },
        },
      ],
      bestPractices: [
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Always show impact', format: 'bold' },
                    { type: 'text', text: ' - List what will be deleted, affected, or changed' },
                  ],
                },
              ],
            },
          },
        },
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Use specific item identifiers', format: 'bold' },
                    { type: 'text', text: ' - PO numbers, Invoice IDs, Supplier names' },
                  ],
                },
              ],
            },
          },
        },
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Explain consequences', format: 'bold' },
                    { type: 'text', text: ' - Financial impact, workflow resets, stakeholder notifications' },
                  ],
                },
              ],
            },
          },
        },
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Provide context', format: 'bold' },
                    { type: 'text', text: ' - Why this action matters in the supply chain workflow' },
                  ],
                },
              ],
            },
          },
        },
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Check for dependencies', format: 'bold' },
                    { type: 'text', text: ' - Warn if item is used elsewhere (active contracts, pending orders)' },
                  ],
                },
              ],
            },
          },
        },
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Consider alternatives', format: 'bold' },
                    { type: 'text', text: ' - Offer "Archive" or "Deactivate" when deletion isn\'t necessary' },
                  ],
                },
              ],
            },
          },
        },
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Log the action', format: 'bold' },
                    { type: 'text', text: ' - Create audit trail entries for compliance' },
                  ],
                },
              ],
            },
          },
        },
        {
          item: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    { type: 'text', text: 'Notify stakeholders', format: 'bold' },
                    { type: 'text', text: ' - Alert affected users after destructive actions' },
                  ],
                },
              ],
            },
          },
        },
      ],
    },
  })

  console.log('✅ Successfully seeded Destructive Actions pattern!')
  console.log(`Pattern ID: ${pattern.id}`)

  process.exit(0)
}

seed().catch((error) => {
  console.error('Error seeding:', error)
  process.exit(1)
})

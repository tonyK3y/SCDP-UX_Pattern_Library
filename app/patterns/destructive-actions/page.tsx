'use client'

import { useState } from 'react'
import {
  Grid,
  Column,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  Tag,
  InlineNotification,
  CodeSnippet,
} from '@carbon/react'
import {
  TrashCan,
  WarningAlt,
  CheckmarkFilled,
  Undo,
} from '@carbon/icons-react'

export default function DestructiveActionsPage() {
  const [showPOModal, setShowPOModal] = useState(false)
  const [showInvoiceModal, setShowInvoiceModal] = useState(false)
  const [showSupplierModal, setShowSupplierModal] = useState(false)
  const [showApprovalModal, setShowApprovalModal] = useState(false)

  return (
    <Grid className="page-container pattern-page">
      <Column lg={16} md={8} sm={4}>
        <Breadcrumb noTrailingSlash>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/patterns">Patterns</BreadcrumbItem>
          <BreadcrumbItem href="/patterns/destructive-actions" isCurrentPage>
            Destructive Actions
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="pattern-header">
          <div className="pattern-header-content">
            <TrashCan size={48} />
            <div>
              <h1>Destructive Actions</h1>
              <p className="pattern-intro">
                Confirming deletions, cancellations, and irreversible operations in supply chain workflows.
                Always require explicit user confirmation for actions that cannot be easily undone.
              </p>
              <div className="pattern-tags">
                <Tag type="red">Critical</Tag>
                <Tag type="purple">Confirmation Required</Tag>
                <Tag type="blue">Supply Chain</Tag>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="pattern-section">
          <h2>Overview</h2>
          <p>
            Destructive actions permanently alter or remove data, affecting business operations,
            financial records, or supplier relationships. In enterprise supply chain systems,
            these actions often have cascading effects across multiple workflows and teams.
          </p>

          <InlineNotification
            kind="warning"
            title="Critical Pattern"
            subtitle="Improper implementation can lead to accidental data loss, broken workflows, and compliance issues."
            lowContrast
            hideCloseButton
          />
        </section>

        {/* When to Use */}
        <section className="pattern-section">
          <h2>When to Use</h2>
          <ul className="pattern-list">
            <li>
              <strong>Deleting records</strong> - Purchase Orders, Requisitions, Line Items,
              or any data that impacts procurement workflows
            </li>
            <li>
              <strong>Canceling financial documents</strong> - Invoices, Payment Orders,
              Contracts that affect accounting and audit trails
            </li>
            <li>
              <strong>Removing business relationships</strong> - Suppliers, Contracts,
              Catalog items that are used across the organization
            </li>
            <li>
              <strong>Revoking approvals</strong> - Workflow steps that reset procurement
              processes and notify multiple stakeholders
            </li>
            <li>
              <strong>Bulk operations</strong> - Mass deletions or cancellations that affect
              multiple records simultaneously
            </li>
          </ul>
        </section>

        {/* When NOT to Use */}
        <section className="pattern-section">
          <h2>When NOT to Use</h2>
          <ul className="pattern-list">
            <li>
              <strong>Reversible actions</strong> - Use simple confirmations or allow undo functionality
            </li>
            <li>
              <strong>Draft or temporary data</strong> - Unsaved forms or temporary selections
              don't need confirmation
            </li>
            <li>
              <strong>Non-critical operations</strong> - Hiding columns, collapsing sections,
              or changing views
            </li>
            <li>
              <strong>Status changes</strong> - Moving items between states (unless it's final/irreversible)
            </li>
          </ul>
        </section>

        {/* Live Examples */}
        <section className="pattern-section">
          <h2>Live Examples</h2>
          <p className="section-description">
            Interactive demonstrations of destructive action patterns in supply chain contexts.
            Click each button to see the confirmation modal.
          </p>

          <div className="example-grid">
            {/* Example 1: Delete Purchase Order */}
            <div className="example-card">
              <div className="example-header">
                <h3>Delete Purchase Order</h3>
                <Tag type="red">High Impact</Tag>
              </div>
              <p>
                Deleting a PO affects line items, supplier commitments, budgets, and approval histories.
                Requires specific confirmation with PO number.
              </p>
              <Button
                kind="danger"
                renderIcon={TrashCan}
                onClick={() => setShowPOModal(true)}
              >
                Delete PO #12345
              </Button>
            </div>

            {/* Example 2: Cancel Invoice */}
            <div className="example-card">
              <div className="example-header">
                <h3>Cancel Invoice</h3>
                <Tag type="red">Financial Impact</Tag>
              </div>
              <p>
                Canceling an invoice impacts accounting records, payment schedules, and audit trails.
                Shows consequences and requires justification.
              </p>
              <Button
                kind="danger"
                renderIcon={WarningAlt}
                onClick={() => setShowInvoiceModal(true)}
              >
                Cancel Invoice #INV-2024-789
              </Button>
            </div>

            {/* Example 3: Remove Supplier */}
            <div className="example-card">
              <div className="example-header">
                <h3>Remove Supplier</h3>
                <Tag type="red">Relationship Impact</Tag>
              </div>
              <p>
                Removing a supplier affects active contracts, catalog items, and pending orders.
                Shows all dependencies before confirmation.
              </p>
              <Button
                kind="danger"
                renderIcon={TrashCan}
                onClick={() => setShowSupplierModal(true)}
              >
                Remove Supplier
              </Button>
            </div>

            {/* Example 4: Revoke Approval */}
            <div className="example-card">
              <div className="example-header">
                <h3>Revoke Approval</h3>
                <Tag type="magenta">Workflow Impact</Tag>
              </div>
              <p>
                Revoking an approval resets the workflow, notifies stakeholders, and may delay procurement.
                Explains workflow consequences.
              </p>
              <Button
                kind="danger"
                renderIcon={Undo}
                onClick={() => setShowApprovalModal(true)}
              >
                Revoke Approval
              </Button>
            </div>
          </div>
        </section>

        {/* Modals for Examples */}

        {/* Delete PO Modal */}
        <Modal
          open={showPOModal}
          danger
          modalHeading="Delete Purchase Order #12345?"
          modalLabel="Destructive Action"
          primaryButtonText="Delete Purchase Order"
          secondaryButtonText="Cancel"
          onRequestClose={() => setShowPOModal(false)}
          onRequestSubmit={() => {
            setShowPOModal(false)
            // Handle deletion
          }}
        >
          <p style={{ marginBottom: '1rem' }}>
            This action cannot be undone. Deleting this Purchase Order will permanently remove:
          </p>
          <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem' }}>
            <li>23 line items totaling $45,678.90</li>
            <li>Approval history (5 approvers)</li>
            <li>Supplier commitment with Acme Corp</li>
            <li>Budget allocation reference</li>
            <li>All associated comments and attachments</li>
          </ul>
          <InlineNotification
            kind="warning"
            title="Impact"
            subtitle="This will affect 3 pending deliveries and notify 7 stakeholders."
            lowContrast
            hideCloseButton
          />
        </Modal>

        {/* Cancel Invoice Modal */}
        <Modal
          open={showInvoiceModal}
          danger
          modalHeading="Cancel Invoice #INV-2024-789?"
          modalLabel="Financial Action"
          primaryButtonText="Cancel Invoice"
          secondaryButtonText="Keep Invoice"
          onRequestClose={() => setShowInvoiceModal(false)}
          onRequestSubmit={() => {
            setShowInvoiceModal(false)
            // Handle cancellation
          }}
        >
          <p style={{ marginBottom: '1rem' }}>
            Canceling this invoice will affect accounting records and payment schedules.
            This action creates an audit trail entry.
          </p>
          <div style={{ marginBottom: '1rem', padding: '1rem', background: 'var(--cds-layer-01)', borderLeft: '4px solid var(--cds-support-error)' }}>
            <strong>Invoice Details:</strong>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
              <li>Amount: $12,450.00</li>
              <li>Vendor: Global Supplies Inc</li>
              <li>Due Date: May 15, 2024</li>
              <li>Status: Awaiting Payment</li>
            </ul>
          </div>
          <InlineNotification
            kind="error"
            title="Financial Impact"
            subtitle="This will update the general ledger and may require AP team notification."
            lowContrast
            hideCloseButton
          />
        </Modal>

        {/* Remove Supplier Modal */}
        <Modal
          open={showSupplierModal}
          danger
          modalHeading="Remove Supplier: Acme Corporation?"
          modalLabel="Critical Action"
          primaryButtonText="Remove Supplier"
          secondaryButtonText="Cancel"
          onRequestClose={() => setShowSupplierModal(false)}
          onRequestSubmit={() => {
            setShowSupplierModal(false)
            // Handle removal
          }}
        >
          <p style={{ marginBottom: '1rem' }}>
            <strong style={{ color: 'var(--cds-support-error)' }}>
              Warning: This supplier has active dependencies.
            </strong>
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Removing this supplier will affect:
          </p>
          <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem' }}>
            <li><strong>3 active contracts</strong> (total value: $250,000)</li>
            <li><strong>156 catalog items</strong> in 8 categories</li>
            <li><strong>12 pending Purchase Orders</strong></li>
            <li><strong>5 open invoices</strong> awaiting payment</li>
          </ul>
          <InlineNotification
            kind="error"
            title="Cannot Remove"
            subtitle="Resolve all dependencies before removing this supplier. Consider archiving instead."
            lowContrast
            hideCloseButton
          />
        </Modal>

        {/* Revoke Approval Modal */}
        <Modal
          open={showApprovalModal}
          danger
          modalHeading="Revoke Approval for Requisition #REQ-8901?"
          modalLabel="Workflow Action"
          primaryButtonText="Revoke Approval"
          secondaryButtonText="Keep Approval"
          onRequestClose={() => setShowApprovalModal(false)}
          onRequestSubmit={() => {
            setShowApprovalModal(false)
            // Handle revocation
          }}
        >
          <p style={{ marginBottom: '1rem' }}>
            Revoking this approval will reset the requisition workflow to the previous step.
          </p>
          <div style={{ marginBottom: '1rem', padding: '1rem', background: 'var(--cds-layer-01)' }}>
            <strong>Workflow Impact:</strong>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
              <li>Status changes from "Approved" to "Pending Review"</li>
              <li>Notifications sent to 4 workflow participants</li>
              <li>Next approver removed from queue</li>
              <li>Estimated 2-3 day delay in procurement</li>
            </ul>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--cds-text-secondary)' }}>
            <strong>Reason for revocation:</strong> This will be recorded in the audit log.
          </p>
        </Modal>

        {/* Language Guidelines */}
        <section className="pattern-section">
          <h2>Language Guidelines</h2>
          <p>
            Clear, specific language helps prevent accidental deletions. Always use active voice
            and include the specific item being affected.
          </p>

          <div className="guideline-grid">
            <div className="guideline-card guideline-do">
              <CheckmarkFilled size={24} className="guideline-icon" />
              <h4>Do</h4>
              <ul>
                <li>"Delete Purchase Order #12345?"</li>
                <li>"Cancel Invoice #INV-2024-789?"</li>
                <li>"Remove Supplier: Acme Corporation?"</li>
                <li>"Revoke approval for Requisition #REQ-8901?"</li>
                <li>"This will permanently delete 23 line items"</li>
                <li>"This action affects 5 active contracts"</li>
              </ul>
            </div>

            <div className="guideline-card guideline-dont">
              <WarningAlt size={24} className="guideline-icon" />
              <h4>Don't</h4>
              <ul>
                <li>"Are you sure?" (too vague)</li>
                <li>"Delete?" (missing context)</li>
                <li>"This action cannot be undone" (alone, without specifics)</li>
                <li>"OK" or "Yes" (not descriptive enough)</li>
                <li>"Delete it" (ambiguous pronoun)</li>
                <li>"Are you really sure?" (patronizing)</li>
              </ul>
            </div>
          </div>

          <h3>Modal Button Text</h3>
          <div className="button-text-examples">
            <div className="button-example">
              <strong>Primary (Destructive) Button:</strong>
              <ul>
                <li>"Delete Purchase Order" (not "Delete" or "OK")</li>
                <li>"Cancel Invoice" (not "Yes" or "Confirm")</li>
                <li>"Remove Supplier" (specific action)</li>
              </ul>
            </div>
            <div className="button-example">
              <strong>Secondary (Safe) Button:</strong>
              <ul>
                <li>"Cancel" or "Keep [Item]" (clear escape)</li>
                <li>"Go Back" (for complex flows)</li>
                <li>Never use "No" (negative framing)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="pattern-section">
          <h2>Code Examples</h2>
          <p>
            Implementation examples using IBM Carbon React components with supply chain context.
          </p>

          <h3>Basic Destructive Action Modal</h3>
          <CodeSnippet type="multi" feedback="Copied!">
{`import { Modal, Button } from '@carbon/react'
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
}`}
          </CodeSnippet>

          <h3>Modal with Impact Details</h3>
          <CodeSnippet type="multi" feedback="Copied!">
{`import { Modal, InlineNotification } from '@carbon/react'

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
</Modal>`}
          </CodeSnippet>

          <h3>TypeScript Interface</h3>
          <CodeSnippet type="multi" feedback="Copied!">
{`interface DestructiveActionModalProps {
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
}`}
          </CodeSnippet>
        </section>

        {/* Accessibility */}
        <section className="pattern-section">
          <h2>Accessibility</h2>
          <ul className="pattern-list">
            <li>
              <strong>Focus management</strong> - Focus moves to modal when opened,
              returns to trigger button when closed
            </li>
            <li>
              <strong>Keyboard navigation</strong> - Tab through buttons,
              Escape key closes modal, Enter submits (with caution)
            </li>
            <li>
              <strong>Screen readers</strong> - Use <code>modalLabel</code> for context,
              clear button text describes the action
            </li>
            <li>
              <strong>Color contrast</strong> - Red danger buttons meet WCAG AA standards
            </li>
            <li>
              <strong>Error prevention</strong> - Primary action is destructive button,
              positioned consistently (typically right side)
            </li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="pattern-section">
          <h2>Best Practices</h2>
          <ol className="pattern-list">
            <li>
              <strong>Always show impact</strong> - List what will be deleted,
              affected, or changed
            </li>
            <li>
              <strong>Use specific item identifiers</strong> - PO numbers,
              Invoice IDs, Supplier names
            </li>
            <li>
              <strong>Explain consequences</strong> - Financial impact,
              workflow resets, stakeholder notifications
            </li>
            <li>
              <strong>Provide context</strong> - Why this action matters
              in the supply chain workflow
            </li>
            <li>
              <strong>Check for dependencies</strong> - Warn if item is used
              elsewhere (active contracts, pending orders)
            </li>
            <li>
              <strong>Consider alternatives</strong> - Offer "Archive" or
              "Deactivate" when deletion isn't necessary
            </li>
            <li>
              <strong>Log the action</strong> - Create audit trail entries
              for compliance
            </li>
            <li>
              <strong>Notify stakeholders</strong> - Alert affected users
              after destructive actions
            </li>
          </ol>
        </section>

        {/* Related Patterns */}
        <section className="pattern-section">
          <h2>Related Patterns</h2>
          <div className="related-patterns">
            <a href="/patterns/modals" className="related-pattern-card">
              <h4>Modal Usage</h4>
              <p>General modal patterns for forms and information</p>
            </a>
            <a href="/patterns/forms" className="related-pattern-card">
              <h4>Form Validation</h4>
              <p>Error prevention and input validation patterns</p>
            </a>
            <a href="/language/microcopy" className="related-pattern-card">
              <h4>Microcopy Guidelines</h4>
              <p>Writing clear, actionable button and message text</p>
            </a>
          </div>
        </section>
      </Column>
    </Grid>
  )
}

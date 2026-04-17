#!/usr/bin/env node

/**
 * Seed script for Block System Showcase
 * Demonstrates all available content blocks
 */

import fetch from 'node-fetch'

const API_URL = 'http://localhost:3000/api/patterns'

const blockShowcase = {
  title: 'Content Blocks System',
  slug: 'content-blocks-showcase',
  description: 'A comprehensive showcase of all available content block types for creating rich, structured documentation.',
  category: 'pattern',
  icon: 'CloudApp',
  blocks: [
    // Pattern Header Block
    {
      blockType: 'patternHeader',
      icon: 'CloudApp',
      category: 'component',
      status: 'stable',
      lastUpdated: new Date().toISOString(),
    },

    // Rich Text Block - Introduction
    {
      blockType: 'richText',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'The SCDP Pattern Library uses a rich content blocks system to create visually engaging, structured documentation. This page demonstrates all available block types and their usage.',
                },
              ],
            },
          ],
        },
      },
    },

    // Divider
    {
      blockType: 'divider',
      style: 'line',
      spacing: 'medium',
    },

    // Rich Text - Section Header
    {
      blockType: 'richText',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Available Block Types' }],
            },
          ],
        },
      },
    },

    // Feature Grid
    {
      blockType: 'featureGrid',
      columns: '3',
      features: [
        {
          icon: 'Edit',
          title: 'Rich Text',
          description: 'Standard prose content with markdown support for paragraphs, lists, and formatting.',
        },
        {
          icon: 'Notification',
          title: 'Callouts',
          description: 'Highlighted notifications and alerts for important information (info, warning, success, error).',
        },
        {
          icon: 'Code',
          title: 'Code Blocks',
          description: 'Syntax-highlighted code snippets with language selection and copy functionality.',
        },
        {
          icon: 'Image',
          title: 'Images',
          description: 'Images with captions, alt text, and flexible width options.',
        },
        {
          icon: 'Compare',
          title: 'Do/Don\'t Comparisons',
          description: 'Two-column layouts showing good vs bad examples side by side.',
        },
        {
          icon: 'Grid',
          title: 'Feature Grids',
          description: 'Multi-column grid layouts for showcasing features, benefits, or options.',
        },
      ],
    },

    // Divider
    {
      blockType: 'divider',
      style: 'line',
      spacing: 'large',
    },

    // Rich Text - Callouts Section
    {
      blockType: 'richText',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Callout Blocks' }],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Use callouts to highlight important information, warnings, success messages, or errors.',
                },
              ],
            },
          ],
        },
      },
    },

    // Info Callout
    {
      blockType: 'callout',
      type: 'info',
      title: 'Information',
      content: 'This is an informational callout. Use it to provide helpful context or supplementary details.',
    },

    // Warning Callout
    {
      blockType: 'callout',
      type: 'warning',
      title: 'Important Consideration',
      content: 'This is a warning callout. Use it to highlight potential issues or things users should be aware of before proceeding.',
    },

    // Success Callout
    {
      blockType: 'callout',
      type: 'success',
      title: 'Best Practice',
      content: 'This is a success callout. Use it to highlight recommended approaches or successful patterns.',
    },

    // Error Callout
    {
      blockType: 'callout',
      type: 'error',
      title: 'Common Mistake',
      content: 'This is an error callout. Use it to warn about common mistakes or things to avoid.',
    },

    // Divider
    {
      blockType: 'divider',
      style: 'line',
      spacing: 'large',
    },

    // Rich Text - Code Blocks Section
    {
      blockType: 'richText',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Code Blocks' }],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Code blocks support syntax highlighting for multiple languages, optional line numbers, and a copy-to-clipboard button.',
                },
              ],
            },
          ],
        },
      },
    },

    // TypeScript Code Example
    {
      blockType: 'code',
      language: 'typescript',
      filename: 'Button.tsx',
      showLineNumbers: true,
      code: `import { Button } from '@carbon/react'

interface SupplierButtonProps {
  supplierId: string
  onApprove: (id: string) => void
}

export default function ApproveSupplierButton({
  supplierId,
  onApprove
}: SupplierButtonProps) {
  return (
    <Button
      kind="primary"
      onClick={() => onApprove(supplierId)}
    >
      Approve Supplier
    </Button>
  )
}`,
    },

    // CSS Code Example
    {
      blockType: 'code',
      language: 'css',
      filename: 'custom-styles.css',
      showLineNumbers: false,
      code: `.supplier-card {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 1.5rem;
  transition: box-shadow 0.2s;
}

.supplier-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}`,
    },

    // Divider
    {
      blockType: 'divider',
      style: 'line',
      spacing: 'large',
    },

    // Rich Text - Do/Don't Section
    {
      blockType: 'richText',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Do/Don\'t Comparison Blocks' }],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Use these to show good and bad examples side by side, making it easy for users to understand best practices.',
                },
              ],
            },
          ],
        },
      },
    },

    // Do/Don't Example - Microcopy
    {
      blockType: 'doDont',
      doTitle: 'Do',
      doContent: 'Delete Purchase Order #12345?\n\nThis action cannot be undone. The PO and all line items will be permanently removed.',
      dontTitle: 'Don\'t',
      dontContent: 'Are you sure?\n\nClick OK to continue or Cancel to go back.',
    },

    // Do/Don't Example - Button Labels
    {
      blockType: 'doDont',
      doTitle: 'Do',
      doContent: 'Use specific, action-oriented button labels:\n• Approve Supplier\n• Submit Requisition\n• Cancel Invoice',
      dontTitle: 'Don\'t',
      dontContent: 'Use generic button labels:\n• OK\n• Submit\n• Cancel',
    },

    // Divider
    {
      blockType: 'divider',
      style: 'spacer',
      spacing: 'large',
    },

    // Rich Text - Usage Guidelines
    {
      blockType: 'richText',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'When to Use Content Blocks' }],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Content blocks provide several advantages over plain markdown:',
                },
              ],
            },
          ],
        },
      },
    },

    // Benefits Feature Grid
    {
      blockType: 'featureGrid',
      columns: '2',
      features: [
        {
          icon: 'Renew',
          title: 'Consistency',
          description: 'Blocks ensure consistent styling and layout across all documentation, maintaining the IBM Carbon design system.',
        },
        {
          icon: 'SpeedIcon',
          title: 'Efficiency',
          description: 'Pre-built components accelerate content creation. No need to write custom HTML or CSS for common patterns.',
        },
        {
          icon: 'ViewIcon',
          title: 'Visual Hierarchy',
          description: 'Clear visual structure makes documentation easier to scan and understand, improving the user experience.',
        },
        {
          icon: 'CheckmarkOutline',
          title: 'Accessibility',
          description: 'All blocks are built with WCAG 2.1 AA accessibility standards, ensuring content is usable by everyone.',
        },
      ],
    },

    // Final Callout
    {
      blockType: 'callout',
      type: 'info',
      title: 'Getting Started',
      content: 'To use content blocks in your documentation, navigate to the custom admin panel at /admin-custom/patterns and create or edit a pattern. Add blocks using the intuitive block selector.',
    },
  ],
}

async function seedBlockShowcase() {
  try {
    console.log('🌱 Seeding Block System Showcase...')

    // Check if pattern already exists
    const checkResponse = await fetch(API_URL)
    if (!checkResponse.ok) {
      throw new Error('Failed to check existing patterns')
    }

    const existingData = await checkResponse.json()
    const existingPattern = existingData.docs.find(
      (p) => p.slug === blockShowcase.slug
    )

    if (existingPattern) {
      console.log('⚠️  Block Showcase already exists. Updating...')

      // Update existing pattern
      const updateResponse = await fetch(`${API_URL}/${existingPattern.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blockShowcase),
      })

      if (!updateResponse.ok) {
        const error = await updateResponse.json()
        throw new Error(`Update failed: ${JSON.stringify(error)}`)
      }

      console.log('✅ Block Showcase updated successfully!')
    } else {
      // Create new pattern
      const createResponse = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blockShowcase),
      })

      if (!createResponse.ok) {
        const error = await createResponse.json()
        throw new Error(`Seed failed: ${JSON.stringify(error)}`)
      }

      const result = await createResponse.json()
      console.log('✅ Block Showcase seeded successfully!')
      console.log(`   View at: http://localhost:3000/patterns/${result.doc.slug}`)
    }
  } catch (error) {
    console.error('❌ Seed failed:', error.message)
    process.exit(1)
  }
}

// Run the seed function
seedBlockShowcase()

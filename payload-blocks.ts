import type { Block } from 'payload'

/**
 * Rich Text Block
 * Standard prose content with markdown support
 */
export const RichTextBlock: Block = {
  slug: 'richText',
  labels: {
    singular: 'Rich Text',
    plural: 'Rich Text Blocks',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}

/**
 * Callout Block
 * Highlighted notification or alert (info, warning, success, error)
 */
export const CalloutBlock: Block = {
  slug: 'callout',
  labels: {
    singular: 'Callout',
    plural: 'Callouts',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'info',
      options: [
        { label: 'Info', value: 'info' },
        { label: 'Warning', value: 'warning' },
        { label: 'Success', value: 'success' },
        { label: 'Error', value: 'error' },
      ],
    },
    {
      name: 'title',
      type: 'text',
      required: false,
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
  ],
}

/**
 * Code Block
 * Code snippet with language and syntax highlighting
 */
export const CodeBlock: Block = {
  slug: 'code',
  labels: {
    singular: 'Code Block',
    plural: 'Code Blocks',
  },
  fields: [
    {
      name: 'language',
      type: 'select',
      required: true,
      defaultValue: 'typescript',
      options: [
        { label: 'TypeScript', value: 'typescript' },
        { label: 'JavaScript', value: 'javascript' },
        { label: 'JSX', value: 'jsx' },
        { label: 'TSX', value: 'tsx' },
        { label: 'CSS', value: 'css' },
        { label: 'SCSS', value: 'scss' },
        { label: 'HTML', value: 'html' },
        { label: 'JSON', value: 'json' },
        { label: 'Bash', value: 'bash' },
      ],
    },
    {
      name: 'code',
      type: 'textarea',
      required: true,
      admin: {
        rows: 10,
      },
    },
    {
      name: 'filename',
      type: 'text',
      required: false,
      admin: {
        description: 'Optional filename to display (e.g., "Button.tsx")',
      },
    },
    {
      name: 'showLineNumbers',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}

/**
 * Image Block
 * Image with caption and alt text
 */
export const ImageBlock: Block = {
  slug: 'image',
  labels: {
    singular: 'Image',
    plural: 'Images',
  },
  fields: [
    {
      name: 'url',
      type: 'text',
      required: true,
      admin: {
        description: 'Image URL or path',
      },
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description: 'Alt text for accessibility',
      },
    },
    {
      name: 'caption',
      type: 'text',
      required: false,
    },
    {
      name: 'width',
      type: 'select',
      defaultValue: 'full',
      options: [
        { label: 'Full Width', value: 'full' },
        { label: 'Large (75%)', value: 'large' },
        { label: 'Medium (50%)', value: 'medium' },
        { label: 'Small (33%)', value: 'small' },
      ],
    },
  ],
}

/**
 * Do/Don't Comparison Block
 * Two-column layout showing good vs bad examples
 */
export const DoDontBlock: Block = {
  slug: 'doDont',
  labels: {
    singular: 'Do/Don\'t',
    plural: 'Do/Don\'t Blocks',
  },
  fields: [
    {
      name: 'doTitle',
      type: 'text',
      defaultValue: 'Do',
      required: true,
    },
    {
      name: 'doContent',
      type: 'textarea',
      required: true,
    },
    {
      name: 'dontTitle',
      type: 'text',
      defaultValue: 'Don\'t',
      required: true,
    },
    {
      name: 'dontContent',
      type: 'textarea',
      required: true,
    },
  ],
}

/**
 * Feature Grid Block
 * Multi-column grid of feature cards
 */
export const FeatureGridBlock: Block = {
  slug: 'featureGrid',
  labels: {
    singular: 'Feature Grid',
    plural: 'Feature Grids',
  },
  fields: [
    {
      name: 'columns',
      type: 'select',
      defaultValue: '3',
      options: [
        { label: '2 Columns', value: '2' },
        { label: '3 Columns', value: '3' },
        { label: '4 Columns', value: '4' },
      ],
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      minRows: 2,
      maxRows: 12,
      fields: [
        {
          name: 'icon',
          type: 'text',
          required: false,
          admin: {
            description: 'Carbon icon name (e.g., "Checkmark", "WarningAlt")',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}

/**
 * Pattern Header Block
 * Special header with icon, metadata, and key info
 */
export const PatternHeaderBlock: Block = {
  slug: 'patternHeader',
  labels: {
    singular: 'Pattern Header',
    plural: 'Pattern Headers',
  },
  fields: [
    {
      name: 'icon',
      type: 'text',
      required: false,
      admin: {
        description: 'Carbon icon name',
      },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Component Pattern', value: 'component' },
        { label: 'Interaction Pattern', value: 'interaction' },
        { label: 'Layout Pattern', value: 'layout' },
        { label: 'Language Guideline', value: 'language' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'stable',
      options: [
        { label: 'Stable', value: 'stable' },
        { label: 'Beta', value: 'beta' },
        { label: 'Deprecated', value: 'deprecated' },
      ],
    },
    {
      name: 'lastUpdated',
      type: 'date',
      admin: {
        description: 'Last updated date',
      },
    },
  ],
}

/**
 * Section Divider Block
 * Visual separator between sections
 */
export const DividerBlock: Block = {
  slug: 'divider',
  labels: {
    singular: 'Divider',
    plural: 'Dividers',
  },
  fields: [
    {
      name: 'style',
      type: 'select',
      defaultValue: 'line',
      options: [
        { label: 'Line', value: 'line' },
        { label: 'Spacer', value: 'spacer' },
      ],
    },
    {
      name: 'spacing',
      type: 'select',
      defaultValue: 'medium',
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
    },
  ],
}

// Export all blocks as an array for easy import
export const contentBlocks = [
  RichTextBlock,
  CalloutBlock,
  CodeBlock,
  ImageBlock,
  DoDontBlock,
  FeatureGridBlock,
  PatternHeaderBlock,
  DividerBlock,
]

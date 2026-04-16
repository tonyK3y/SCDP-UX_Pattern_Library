import type { CollectionConfig } from 'payload'

export const Patterns: CollectionConfig = {
  slug: 'patterns',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Pattern Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: {
        description: 'URL-friendly version (e.g., "destructive-actions")',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Component',
          value: 'component',
        },
        {
          label: 'Interaction',
          value: 'interaction',
        },
        {
          label: 'Workflow',
          value: 'workflow',
        },
        {
          label: 'Data Display',
          value: 'data-display',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Archived',
          value: 'archived',
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      fields: [
        {
          name: 'tag',
          type: 'select',
          options: [
            { label: 'Critical', value: 'critical' },
            { label: 'Confirmation Required', value: 'confirmation-required' },
            { label: 'Supply Chain', value: 'supply-chain' },
            { label: 'Financial Impact', value: 'financial-impact' },
            { label: 'High Impact', value: 'high-impact' },
            { label: 'Workflow', value: 'workflow' },
          ],
        },
        {
          name: 'color',
          type: 'select',
          options: [
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
            { label: 'Purple', value: 'purple' },
            { label: 'Magenta', value: 'magenta' },
            { label: 'Green', value: 'green' },
            { label: 'Gray', value: 'gray' },
          ],
        },
      ],
    },
    {
      name: 'intro',
      type: 'textarea',
      required: true,
      label: 'Introduction',
      admin: {
        description: 'Brief introduction shown at the top of the pattern page',
      },
    },
    {
      name: 'overview',
      type: 'richText',
      required: true,
      label: 'Overview',
    },
    {
      name: 'whenToUse',
      type: 'array',
      label: 'When to Use',
      fields: [
        {
          name: 'item',
          type: 'richText',
        },
      ],
    },
    {
      name: 'whenNotToUse',
      type: 'array',
      label: 'When NOT to Use',
      fields: [
        {
          name: 'item',
          type: 'richText',
        },
      ],
    },
    {
      name: 'examples',
      type: 'array',
      label: 'Examples',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'tag',
          type: 'text',
          label: 'Tag Label (e.g., "High Impact")',
        },
        {
          name: 'tagColor',
          type: 'select',
          options: [
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
            { label: 'Magenta', value: 'magenta' },
            { label: 'Green', value: 'green' },
          ],
        },
        {
          name: 'componentType',
          type: 'text',
          label: 'Component Type (for interactive demos)',
          admin: {
            description: 'e.g., "delete-po-modal", "cancel-invoice-modal"',
          },
        },
      ],
    },
    {
      name: 'languageGuidelines',
      type: 'group',
      label: 'Language Guidelines',
      fields: [
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'doList',
          type: 'array',
          label: "Do's",
          fields: [
            {
              name: 'item',
              type: 'text',
            },
          ],
        },
        {
          name: 'dontList',
          type: 'array',
          label: "Don'ts",
          fields: [
            {
              name: 'item',
              type: 'text',
            },
          ],
        },
        {
          name: 'buttonText',
          type: 'richText',
          label: 'Button Text Guidelines',
        },
      ],
    },
    {
      name: 'codeExamples',
      type: 'relationship',
      relationTo: 'code-examples',
      hasMany: true,
      label: 'Code Examples',
    },
    {
      name: 'accessibility',
      type: 'array',
      label: 'Accessibility Considerations',
      fields: [
        {
          name: 'item',
          type: 'richText',
        },
      ],
    },
    {
      name: 'bestPractices',
      type: 'array',
      label: 'Best Practices',
      fields: [
        {
          name: 'item',
          type: 'richText',
        },
      ],
    },
    {
      name: 'relatedPatterns',
      type: 'relationship',
      relationTo: 'patterns',
      hasMany: true,
      label: 'Related Patterns',
    },
  ],
}

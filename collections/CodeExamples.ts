import type { CollectionConfig } from 'payload'

export const CodeExamples: CollectionConfig = {
  slug: 'code-examples',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Example Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'language',
      type: 'select',
      required: true,
      defaultValue: 'typescript',
      options: [
        { label: 'TypeScript', value: 'typescript' },
        { label: 'JavaScript', value: 'javascript' },
        { label: 'JSX/TSX', value: 'jsx' },
        { label: 'CSS/SCSS', value: 'css' },
        { label: 'JSON', value: 'json' },
      ],
    },
    {
      name: 'code',
      type: 'code',
      required: true,
      label: 'Code',
      admin: {
        language: 'typescript',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
      admin: {
        description: 'Lower numbers appear first',
      },
    },
  ],
}

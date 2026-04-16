import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Collections
import type { CollectionConfig } from 'payload'

// Inline collection definitions to avoid import issues
const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    // Allow public read access in development
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}

const Patterns: CollectionConfig = {
  slug: 'patterns',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    // Allow public access in development
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}

// Temporarily removed CodeExamples collection due to CodeEditor issue
// const CodeExamples: CollectionConfig = {
//   slug: 'code-examples',
//   admin: {
//     useAsTitle: 'title',
//   },
//   fields: [
//     {
//       name: 'title',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'code',
//       type: 'code',
//       required: true,
//     },
//   ],
// }

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Build and export config as a Promise for Next.js App Router compatibility
const config = buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Patterns],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key-change-this',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./payload.db',
    },
  }),
  sharp,
})

export default Promise.resolve(config)

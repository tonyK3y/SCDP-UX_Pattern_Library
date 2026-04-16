'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Form, TextInput, TextArea, Button, InlineNotification } from '@carbon/react'
import { Save } from '@carbon/icons-react'

export default function NewPatternPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setTitle(newTitle)

    // Auto-generate slug from title
    const autoSlug = newTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    setSlug(autoSlug)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/patterns', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          slug,
          description,
          content,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.errors?.[0]?.message || 'Failed to create pattern')
      }

      // Success - redirect to patterns list
      router.push('/admin-custom/patterns')
      router.refresh()
    } catch (err: any) {
      setError(err.message || 'An error occurred')
      setLoading(false)
    }
  }

  return (
    <div className="new-pattern-page">
      <h1 style={{ marginBottom: '2rem' }}>Create New Pattern</h1>

      {error && (
        <InlineNotification
          kind="error"
          title="Error"
          subtitle={error}
          onClose={() => setError('')}
          style={{ marginBottom: '2rem', maxWidth: '600px' }}
        />
      )}

      <Form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
        <div style={{ marginBottom: '2rem' }}>
          <TextInput
            id="title"
            labelText="Pattern Title"
            placeholder="e.g., Destructive Actions"
            value={title}
            onChange={handleTitleChange}
            required
            disabled={loading}
          />
          <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#525252' }}>
            The display name for this pattern
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <TextInput
            id="slug"
            labelText="Slug"
            placeholder="e.g., destructive-actions"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            disabled={loading}
          />
          <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#525252' }}>
            URL-friendly identifier (auto-generated from title)
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <TextArea
            id="description"
            labelText="Description (Optional)"
            placeholder="Brief description of the pattern"
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
            rows={3}
            disabled={loading}
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <TextArea
            id="content"
            labelText="Content (Optional)"
            placeholder="Detailed content for the pattern"
            value={content}
            onChange={(e: any) => setContent(e.target.value)}
            rows={10}
            disabled={loading}
          />
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <Button
            type="submit"
            renderIcon={Save}
            disabled={loading || !title || !slug}
          >
            {loading ? 'Creating...' : 'Create Pattern'}
          </Button>
          <Button
            kind="secondary"
            onClick={() => router.push('/admin-custom/patterns')}
            disabled={loading}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  )
}

'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import { Form, TextInput, TextArea, Button, InlineNotification, Loading } from '@carbon/react'
import { Save, TrashCan } from '@carbon/icons-react'

export default function EditPatternPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const { id } = use(params)
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    async function loadPattern() {
      try {
        const response = await fetch(`/api/patterns/${id}`)
        if (!response.ok) {
          throw new Error('Failed to load pattern')
        }
        const data = await response.json()
        setTitle(data.title)
        setSlug(data.slug)
        setDescription(data.description || '')
        setContent(data.content || '')
      } catch (err: any) {
        setError(err.message || 'Failed to load pattern')
      } finally {
        setLoading(false)
      }
    }

    loadPattern()
  }, [id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    setSuccess(false)

    try {
      const response = await fetch(`/api/patterns/${id}`, {
        method: 'PATCH',
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
        throw new Error(data.errors?.[0]?.message || 'Failed to update pattern')
      }

      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this pattern? This action cannot be undone.')) {
      return
    }

    setSaving(true)
    setError('')

    try {
      const response = await fetch(`/api/patterns/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete pattern')
      }

      router.push('/admin-custom/patterns')
      router.refresh()
    } catch (err: any) {
      setError(err.message || 'Failed to delete pattern')
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
        <Loading description="Loading pattern..." />
      </div>
    )
  }

  return (
    <div className="edit-pattern-page">
      <h1 style={{ marginBottom: '2rem' }}>Edit Pattern</h1>

      {error && (
        <InlineNotification
          kind="error"
          title="Error"
          subtitle={error}
          onClose={() => setError('')}
          style={{ marginBottom: '2rem', maxWidth: '600px' }}
        />
      )}

      {success && (
        <InlineNotification
          kind="success"
          title="Success"
          subtitle="Pattern updated successfully"
          onClose={() => setSuccess(false)}
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
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={saving}
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <TextInput
            id="slug"
            labelText="Slug"
            placeholder="e.g., destructive-actions"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            disabled={saving}
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <TextArea
            id="description"
            labelText="Description"
            placeholder="Brief description of the pattern"
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
            rows={3}
            disabled={saving}
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <TextArea
            id="content"
            labelText="Content"
            placeholder="Detailed content for the pattern"
            value={content}
            onChange={(e: any) => setContent(e.target.value)}
            rows={10}
            disabled={saving}
          />
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <Button
            type="submit"
            renderIcon={Save}
            disabled={saving || !title || !slug}
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
          <Button
            kind="secondary"
            onClick={() => router.push('/admin-custom/patterns')}
            disabled={saving}
          >
            Cancel
          </Button>
          <div style={{ marginLeft: 'auto' }}>
            <Button
              kind="danger"
              renderIcon={TrashCan}
              onClick={handleDelete}
              disabled={saving}
            >
              Delete Pattern
            </Button>
          </div>
        </div>
      </Form>
    </div>
  )
}

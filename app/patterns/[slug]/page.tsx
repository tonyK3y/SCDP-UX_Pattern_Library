'use client'

import { useState, useEffect, use } from 'react'
import { Grid, Column, Breadcrumb, BreadcrumbItem, Loading } from '@carbon/react'
import { ColorPalette } from '@carbon/icons-react'
import ReactMarkdown from 'react-markdown'

export default function PatternDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [pattern, setPattern] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadPattern() {
      try {
        // Fetch all patterns and find by slug
        const response = await fetch('/api/patterns', { cache: 'no-store' })
        if (!response.ok) {
          throw new Error('Failed to load patterns')
        }
        const data = await response.json()
        const foundPattern = data.docs.find((p: any) => p.slug === slug)

        if (!foundPattern) {
          throw new Error('Pattern not found')
        }

        setPattern(foundPattern)
      } catch (err: any) {
        setError(err.message || 'Failed to load pattern')
      } finally {
        setLoading(false)
      }
    }

    loadPattern()
  }, [slug])

  if (loading) {
    return (
      <Grid className="page-container">
        <Column lg={16} md={8} sm={4}>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
            <Loading description="Loading pattern..." />
          </div>
        </Column>
      </Grid>
    )
  }

  if (error || !pattern) {
    return (
      <Grid className="page-container">
        <Column lg={16} md={8} sm={4}>
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/patterns">Patterns</BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>Error</BreadcrumbItem>
          </Breadcrumb>
          <div className="page-header">
            <h1>Pattern Not Found</h1>
            <p className="page-description">{error}</p>
          </div>
        </Column>
      </Grid>
    )
  }

  return (
    <Grid className="page-container content-page">
      <Column lg={16} md={8} sm={4}>
        <Breadcrumb noTrailingSlash>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/patterns">Patterns</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>{pattern.title}</BreadcrumbItem>
        </Breadcrumb>

        <div className="page-header">
          <ColorPalette size={48} />
          <h1>{pattern.title}</h1>
          {pattern.description && (
            <p className="page-description">{pattern.description}</p>
          )}
        </div>

        <div className="pattern-content">
          <ReactMarkdown>{pattern.content || ''}</ReactMarkdown>
        </div>
      </Column>
    </Grid>
  )
}

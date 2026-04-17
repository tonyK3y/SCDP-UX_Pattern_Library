'use client'

import { useState, useEffect, use } from 'react'
import { Grid, Column, Breadcrumb, BreadcrumbItem, Loading } from '@carbon/react'
import { ColorPalette } from '@carbon/icons-react'
import * as CarbonIcons from '@carbon/icons-react'
import ReactMarkdown from 'react-markdown'
import BlockRenderer from '@/components/blocks/BlockRenderer'

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

  // Get the icon component dynamically if icon name is provided
  const getIcon = (iconName?: string) => {
    if (!iconName) return <ColorPalette size={48} />
    const IconComponent = (CarbonIcons as any)[iconName]
    if (!IconComponent) return <ColorPalette size={48} />
    return <IconComponent size={48} />
  }

  // Check if pattern has blocks or legacy content
  const hasBlocks = pattern.blocks && pattern.blocks.length > 0
  const hasContent = pattern.content

  return (
    <Grid className="page-container content-page">
      <Column lg={16} md={8} sm={4}>
        <Breadcrumb noTrailingSlash>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/patterns">Patterns</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>{pattern.title}</BreadcrumbItem>
        </Breadcrumb>

        <div className="page-header">
          {getIcon(pattern.icon)}
          <h1>{pattern.title}</h1>
          {pattern.description && (
            <p className="page-description">{pattern.description}</p>
          )}
        </div>

        <div className="pattern-content">
          {/* Render blocks if available */}
          {hasBlocks && <BlockRenderer blocks={pattern.blocks} />}

          {/* Fall back to markdown content if no blocks */}
          {!hasBlocks && hasContent && (
            <ReactMarkdown>{pattern.content}</ReactMarkdown>
          )}

          {/* Show message if no content at all */}
          {!hasBlocks && !hasContent && (
            <p style={{ color: '#525252', fontStyle: 'italic' }}>
              No content available for this pattern yet.
            </p>
          )}
        </div>
      </Column>
    </Grid>
  )
}

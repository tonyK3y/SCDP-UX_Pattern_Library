'use client'

import { useState, useEffect, use } from 'react'
import { Grid, Column, Breadcrumb, BreadcrumbItem, Loading } from '@carbon/react'
import { Document } from '@carbon/icons-react'
import * as CarbonIcons from '@carbon/icons-react'
import ReactMarkdown from 'react-markdown'
import BlockRenderer from '@/components/blocks/BlockRenderer'

export default function LanguageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [guide, setGuide] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadGuide() {
      try {
        const response = await fetch('/api/patterns', { cache: 'no-store' })
        if (!response.ok) {
          throw new Error('Failed to load guides')
        }
        const data = await response.json()
        const foundGuide = data.docs.find((p: any) => p.slug === slug)

        if (!foundGuide) {
          throw new Error('Guide not found')
        }

        setGuide(foundGuide)
      } catch (err: any) {
        setError(err.message || 'Failed to load guide')
      } finally {
        setLoading(false)
      }
    }

    loadGuide()
  }, [slug])

  if (loading) {
    return (
      <Grid className="page-container">
        <Column lg={16} md={8} sm={4}>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
            <Loading description="Loading guide..." />
          </div>
        </Column>
      </Grid>
    )
  }

  if (error || !guide) {
    return (
      <Grid className="page-container">
        <Column lg={16} md={8} sm={4}>
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/language">Language & Tone</BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>Error</BreadcrumbItem>
          </Breadcrumb>
          <div className="page-header">
            <h1>Guide Not Found</h1>
            <p className="page-description">{error}</p>
          </div>
        </Column>
      </Grid>
    )
  }

  // Get the icon component dynamically if icon name is provided
  const getIcon = (iconName?: string) => {
    if (!iconName) return <Document size={48} />
    const IconComponent = (CarbonIcons as any)[iconName]
    if (!IconComponent) return <Document size={48} />
    return <IconComponent size={48} />
  }

  // Check if guide has blocks or legacy content
  const hasBlocks = guide.blocks && guide.blocks.length > 0
  const hasContent = guide.content

  return (
    <Grid className="page-container content-page">
      <Column lg={16} md={8} sm={4}>
        <Breadcrumb noTrailingSlash>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/language">Language & Tone</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>{guide.title}</BreadcrumbItem>
        </Breadcrumb>

        <div className="page-header">
          {getIcon(guide.icon)}
          <h1>{guide.title}</h1>
          {guide.description && (
            <p className="page-description">{guide.description}</p>
          )}
        </div>

        <div className="pattern-content">
          {/* Render blocks if available */}
          {hasBlocks && <BlockRenderer blocks={guide.blocks} />}

          {/* Fall back to markdown content if no blocks */}
          {!hasBlocks && hasContent && (
            <ReactMarkdown>{guide.content}</ReactMarkdown>
          )}

          {/* Show message if no content at all */}
          {!hasBlocks && !hasContent && (
            <p style={{ color: '#525252', fontStyle: 'italic' }}>
              No content available for this guide yet.
            </p>
          )}
        </div>
      </Column>
    </Grid>
  )
}

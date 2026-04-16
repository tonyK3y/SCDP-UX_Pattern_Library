'use client'

import { useState, useEffect } from 'react'
import { Grid, Column, Breadcrumb, BreadcrumbItem, Loading } from '@carbon/react'
import { Rocket } from '@carbon/icons-react'
import ReactMarkdown from 'react-markdown'

export default function GettingStartedPage() {
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadContent() {
      try {
        const response = await fetch('/api/patterns', { cache: 'no-store' })
        if (!response.ok) {
          throw new Error('Failed to load content')
        }
        const data = await response.json()
        const gettingStarted = data.docs.find((p: any) => p.slug === 'getting-started')
        setContent(gettingStarted)
      } catch (err) {
        console.error('Error loading getting started content:', err)
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [])

  if (loading) {
    return (
      <Grid className="page-container">
        <Column lg={16} md={8} sm={4}>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
            <Loading description="Loading..." />
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
          <BreadcrumbItem href="/getting-started" isCurrentPage>
            Getting Started
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="page-header">
          <Rocket size={48} />
          <h1>{content?.title || 'Getting Started'}</h1>
          <p className="page-description">
            {content?.description || 'Learn the fundamentals of designing and building supply chain applications with the SCDP design system and best practices.'}
          </p>
        </div>

        <div className="pattern-content">
          {content?.content ? (
            <ReactMarkdown>{content.content}</ReactMarkdown>
          ) : (
            <div>
              <h2>Design Principles</h2>
              <p>Core principles for SCDP user experiences (Coming soon)</p>

              <h2>Brand Guidelines</h2>
              <p>Coupa SCDP branding and visual identity (Coming soon)</p>

              <h2>Setup Instructions</h2>
              <p>Developer onboarding and environment setup (Coming soon)</p>
            </div>
          )}
        </div>
      </Column>
    </Grid>
  )
}

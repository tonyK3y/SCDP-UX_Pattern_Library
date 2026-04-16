'use client'

import { useState, useEffect } from 'react'
import { Grid, Column, Breadcrumb, BreadcrumbItem, Tile, Loading } from '@carbon/react'
import { ColorPalette, ChevronRight } from '@carbon/icons-react'
import Link from 'next/link'

export default function PatternsPage() {
  const [patterns, setPatterns] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPatterns() {
      try {
        const response = await fetch('/api/patterns', { cache: 'no-store' })
        if (!response.ok) {
          throw new Error('Failed to load patterns')
        }
        const data = await response.json()
        // Filter to show only actual patterns (not language guides or getting started)
        const patternDocs = data.docs.filter((p: any) =>
          !p.slug.includes('language-tone') &&
          !p.slug.includes('getting-started') &&
          !p.slug.includes('microcopy') &&
          !p.slug.includes('terminology')
        )
        setPatterns(patternDocs)
      } catch (err) {
        console.error('Error loading patterns:', err)
      } finally {
        setLoading(false)
      }
    }

    loadPatterns()
  }, [])

  if (loading) {
    return (
      <Grid className="page-container">
        <Column lg={16} md={8} sm={4}>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
            <Loading description="Loading patterns..." />
          </div>
        </Column>
      </Grid>
    )
  }

  return (
    <Grid className="page-container">
      <Column lg={16} md={8} sm={4}>
        <Breadcrumb noTrailingSlash>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/patterns" isCurrentPage>
            Patterns
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="page-header">
          <ColorPalette size={48} />
          <h1>Components & Patterns</h1>
          <p className="page-description">
            Reusable UI patterns for building consistent supply chain experiences
            across Purchase Orders, Suppliers, Invoices, and Requisitions.
          </p>
        </div>

        <Grid className="pattern-grid" narrow>
          {patterns.map((pattern) => (
            <Column lg={8} md={4} sm={4} key={pattern.id} className="pattern-card-column">
              <Link href={`/patterns/${pattern.slug}`} style={{ textDecoration: 'none' }}>
                <Tile className="pattern-card">
                  <div className="pattern-card-content">
                    <h3>{pattern.title}</h3>
                    <p>{pattern.description}</p>
                  </div>
                  <ChevronRight className="pattern-card-arrow" />
                </Tile>
              </Link>
            </Column>
          ))}
        </Grid>
      </Column>
    </Grid>
  )
}

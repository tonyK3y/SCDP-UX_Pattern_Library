'use client'

import { useState, useEffect } from 'react'
import { Grid, Column, Breadcrumb, BreadcrumbItem, Tile, Loading } from '@carbon/react'
import { Document, ChevronRight } from '@carbon/icons-react'
import Link from 'next/link'

export default function LanguagePage() {
  const [guides, setGuides] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadGuides() {
      try {
        const response = await fetch('/api/patterns', { cache: 'no-store' })
        if (!response.ok) {
          throw new Error('Failed to load guides')
        }
        const data = await response.json()
        // Filter to show language & tone guides
        const languageGuides = data.docs.filter((p: any) =>
          p.slug.includes('language-tone') ||
          p.slug === 'microcopy' ||
          p.slug === 'terminology'
        )
        setGuides(languageGuides)
      } catch (err) {
        console.error('Error loading guides:', err)
      } finally {
        setLoading(false)
      }
    }

    loadGuides()
  }, [])

  if (loading) {
    return (
      <Grid className="page-container">
        <Column lg={16} md={8} sm={4}>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
            <Loading description="Loading guides..." />
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
          <BreadcrumbItem href="/language" isCurrentPage>
            Language & Tone
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="page-header">
          <Document size={48} />
          <h1>Language & Tone</h1>
          <p className="page-description">
            Guidelines for clear, professional communication in supply chain interfaces.
            Learn our voice, terminology, and microcopy standards.
          </p>
        </div>

        <Grid className="pattern-grid" narrow>
          {guides.map((guide) => (
            <Column lg={8} md={4} sm={4} key={guide.id} className="pattern-card-column">
              <Link href={`/language/${guide.slug}`} style={{ textDecoration: 'none' }}>
                <Tile className="pattern-card">
                  <div className="pattern-card-content">
                    <h3>{guide.title}</h3>
                    <p>{guide.description}</p>
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

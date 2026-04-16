'use client'

import { useState, useEffect } from 'react'
import {
  Grid,
  Column,
  Button,
  Tile,
  Tag,
  Loading,
} from '@carbon/react'
import {
  ArrowRight,
  Book,
  ColorPalette,
  Edit,
  DocumentBlank,
  Checkmark,
  TrashCan,
  View,
  DataTable as DataTableIcon,
} from '@carbon/icons-react'
import Link from 'next/link'

export default function Home() {
  const [stats, setStats] = useState({ patterns: 0, guides: 0, total: 0 })
  const [featuredPatterns, setFeaturedPatterns] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch('/api/patterns', { cache: 'no-store' })
        if (!response.ok) throw new Error('Failed to load data')

        const data = await response.json()
        const allDocs = data.docs || []

        // Calculate stats
        const patterns = allDocs.filter((p: any) =>
          !p.slug.includes('language-tone') &&
          !p.slug.includes('getting-started') &&
          !p.slug.includes('microcopy') &&
          !p.slug.includes('terminology')
        )
        const guides = allDocs.filter((p: any) =>
          p.slug.includes('language-tone') ||
          p.slug === 'microcopy' ||
          p.slug === 'terminology' ||
          p.slug === 'getting-started'
        )

        setStats({
          patterns: patterns.length,
          guides: guides.length,
          total: allDocs.length
        })

        // Get first 3 patterns for featured section
        setFeaturedPatterns(patterns.slice(0, 3))

      } catch (err) {
        console.error('Error loading data:', err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // Icon mapping for patterns
  const getPatternIcon = (slug: string) => {
    if (slug.includes('destructive')) return TrashCan
    if (slug.includes('modal')) return View
    if (slug.includes('table')) return DataTableIcon
    return ColorPalette
  }

  return (
    <main className="landing-page">
      <Grid className="landing-page__grid">
        {/* Hero Section */}
        <Column lg={16} md={8} sm={4} className="landing-page__hero">
          <h1 className="landing-page__heading">
            SCDP UX Pattern Library
          </h1>
          <p className="landing-page__subheading">
            Enterprise UX patterns and guidelines for Coupa Supply Chain Design Platform
          </p>
          <p className="landing-page__description">
            A comprehensive resource for designers, developers, and product teams
            building consistent, accessible experiences across procurement, supplier management,
            and invoice workflows.
          </p>

          {/* Stats Bar */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            margin: '2rem 0',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--cds-text-primary)' }}>
                {loading ? '...' : stats.patterns}
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--cds-text-secondary)' }}>
                Patterns
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--cds-text-primary)' }}>
                {loading ? '...' : stats.guides}
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--cds-text-secondary)' }}>
                Guides
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--cds-text-primary)' }}>
                {loading ? '...' : stats.total}
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--cds-text-secondary)' }}>
                Total Resources
              </div>
            </div>
          </div>

          <div className="landing-page__cta">
            <Button
              kind="primary"
              renderIcon={ArrowRight}
              href="/getting-started"
            >
              Get Started
            </Button>
            <Button
              kind="tertiary"
              renderIcon={Book}
              href="/patterns"
            >
              Browse Patterns
            </Button>
          </div>
        </Column>

        {/* Featured Patterns Section */}
        <Column lg={16} md={8} sm={4} className="landing-page__section">
          <h2 className="section-heading">Featured Patterns</h2>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
              <Loading description="Loading patterns..." />
            </div>
          ) : (
            <Grid narrow>
              {featuredPatterns.map((pattern) => {
                const Icon = getPatternIcon(pattern.slug)
                return (
                  <Column lg={5} md={4} sm={4} key={pattern.id} style={{ marginBottom: '1rem' }}>
                    <Link href={`/patterns/${pattern.slug}`} style={{ textDecoration: 'none' }}>
                      <Tile style={{
                        height: '100%',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                      className="featured-pattern-tile"
                      >
                        <div style={{ marginBottom: '1rem' }}>
                          <Icon size={32} style={{ color: 'var(--cds-icon-primary)' }} />
                        </div>
                        <h3 style={{
                          fontSize: '1.25rem',
                          fontWeight: '600',
                          marginBottom: '0.5rem',
                          color: 'var(--cds-text-primary)'
                        }}>
                          {pattern.title}
                        </h3>
                        <p style={{
                          fontSize: '0.875rem',
                          lineHeight: '1.5',
                          color: 'var(--cds-text-secondary)',
                          flex: 1
                        }}>
                          {pattern.description}
                        </p>
                        <div style={{ marginTop: '1rem' }}>
                          <Tag type="blue" size="sm">Pattern</Tag>
                        </div>
                      </Tile>
                    </Link>
                  </Column>
                )
              })}
            </Grid>
          )}
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Button
              kind="tertiary"
              renderIcon={ArrowRight}
              href="/patterns"
            >
              View all patterns
            </Button>
          </div>
        </Column>

        {/* Quick Links Section */}
        <Column lg={16} md={8} sm={4} className="landing-page__section">
          <h2 className="section-heading">Quick Access</h2>
          <Grid className="quick-links-grid" narrow>
            <Column lg={4} md={4} sm={4} className="quick-link-card">
              <div className="card">
                <DocumentBlank size={32} className="card-icon" />
                <h3>Getting Started</h3>
                <p>
                  Design principles, brand guidelines, and setup instructions
                  for building supply chain applications.
                </p>
                <Button
                  kind="ghost"
                  renderIcon={ArrowRight}
                  href="/getting-started"
                >
                  Learn more
                </Button>
              </div>
            </Column>

            <Column lg={4} md={4} sm={4} className="quick-link-card">
              <div className="card">
                <ColorPalette size={32} className="card-icon" />
                <h3>Components & Patterns</h3>
                <p>
                  Reusable UI patterns for modals, forms, tables, and workflows
                  across Purchase Orders, Suppliers, and Invoices.
                </p>
                <Button
                  kind="ghost"
                  renderIcon={ArrowRight}
                  href="/patterns"
                >
                  Explore patterns
                </Button>
              </div>
            </Column>

            <Column lg={4} md={4} sm={4} className="quick-link-card">
              <div className="card">
                <Edit size={32} className="card-icon" />
                <h3>Language & Tone</h3>
                <p>
                  Microcopy guidelines, terminology, and voice standards
                  for enterprise procurement experiences.
                </p>
                <Button
                  kind="ghost"
                  renderIcon={ArrowRight}
                  href="/language"
                >
                  View guidelines
                </Button>
              </div>
            </Column>

            <Column lg={4} md={4} sm={4} className="quick-link-card">
              <div className="card">
                <Book size={32} className="card-icon" />
                <h3>Resources</h3>
                <p>
                  Design files, code repositories, Carbon component library,
                  and developer tools.
                </p>
                <Button
                  kind="ghost"
                  renderIcon={ArrowRight}
                  href="/resources"
                >
                  Access resources
                </Button>
              </div>
            </Column>
          </Grid>
        </Column>

        {/* Key Features Section */}
        <Column lg={16} md={8} sm={4} className="landing-page__section">
          <h2 className="section-heading">Why Use This Library</h2>
          <Grid narrow>
            <Column lg={8} md={4} sm={4} style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Checkmark size={24} style={{ color: 'var(--cds-support-success)', flexShrink: 0, marginTop: '0.25rem' }} />
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Supply Chain Focused
                  </h4>
                  <p style={{ color: 'var(--cds-text-secondary)', lineHeight: '1.6' }}>
                    Every pattern is designed specifically for procurement workflows, Purchase Orders,
                    Suppliers, Invoices, and Requisitions.
                  </p>
                </div>
              </div>
            </Column>

            <Column lg={8} md={4} sm={4} style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Checkmark size={24} style={{ color: 'var(--cds-support-success)', flexShrink: 0, marginTop: '0.25rem' }} />
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Built with IBM Carbon
                  </h4>
                  <p style={{ color: 'var(--cds-text-secondary)', lineHeight: '1.6' }}>
                    All patterns use IBM Carbon Design System components, ensuring accessibility
                    and enterprise-grade quality.
                  </p>
                </div>
              </div>
            </Column>

            <Column lg={8} md={4} sm={4} style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Checkmark size={24} style={{ color: 'var(--cds-support-success)', flexShrink: 0, marginTop: '0.25rem' }} />
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Comprehensive Guidance
                  </h4>
                  <p style={{ color: 'var(--cds-text-secondary)', lineHeight: '1.6' }}>
                    From voice and tone to microcopy and terminology, get complete guidance
                    for building consistent experiences.
                  </p>
                </div>
              </div>
            </Column>

            <Column lg={8} md={4} sm={4} style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Checkmark size={24} style={{ color: 'var(--cds-support-success)', flexShrink: 0, marginTop: '0.25rem' }} />
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Real-World Examples
                  </h4>
                  <p style={{ color: 'var(--cds-text-secondary)', lineHeight: '1.6' }}>
                    Every pattern includes practical examples from actual supply chain workflows
                    with code snippets you can use.
                  </p>
                </div>
              </div>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </main>
  )
}

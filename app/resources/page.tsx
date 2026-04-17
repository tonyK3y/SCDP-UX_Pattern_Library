'use client'

import { Grid, Column, Breadcrumb, BreadcrumbItem, Tile, Link } from '@carbon/react'
import {
  Book,
  LogoGithub,
  Diagram,
  ColorPalette,
  CharacterWholeNumber,
  DataVis_1,
  Launch
} from '@carbon/icons-react'

export default function ResourcesPage() {
  return (
    <Grid className="page-container content-page">
      <Column lg={16} md={8} sm={4}>
        <Breadcrumb noTrailingSlash>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/resources" isCurrentPage>
            Resources
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="page-header">
          <Book size={48} />
          <h1>Resources</h1>
          <p className="page-description">
            Essential design files, code repositories, tools, and references
            for building supply chain applications with SCDP standards.
          </p>
        </div>

        <div className="pattern-content">
          {/* IBM Carbon Design System */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Diagram size={32} />
              IBM Carbon Design System
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              The SCDP Pattern Library is built on IBM Carbon. Use these official resources for components, guidelines, and implementation details.
            </p>

            <Grid narrow style={{ marginBottom: '1.5rem' }}>
              <Column lg={8} md={4} sm={4} style={{ marginBottom: '1rem' }}>
                <Tile style={{ height: '100%', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Carbon Components</h3>
                  <p style={{ marginBottom: '1rem', color: '#525252' }}>
                    React component library with full TypeScript support
                  </p>
                  <Link href="https://carbondesignsystem.com/components/overview/" target="_blank" rel="noopener noreferrer">
                    View components <Launch size={16} style={{ marginLeft: '0.25rem' }} />
                  </Link>
                </Tile>
              </Column>

              <Column lg={8} md={4} sm={4} style={{ marginBottom: '1rem' }}>
                <Tile style={{ height: '100%', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Design Guidelines</h3>
                  <p style={{ marginBottom: '1rem', color: '#525252' }}>
                    Accessibility, layout, and interaction patterns
                  </p>
                  <Link href="https://carbondesignsystem.com/guidelines/overview/" target="_blank" rel="noopener noreferrer">
                    Read guidelines <Launch size={16} style={{ marginLeft: '0.25rem' }} />
                  </Link>
                </Tile>
              </Column>
            </Grid>
          </section>

          {/* Icons & Pictograms */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <ColorPalette size={32} />
              Icons & Pictograms
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Browse and search IBM Carbon's extensive icon and pictogram libraries. All icons are available as React components.
            </p>

            <Grid narrow style={{ marginBottom: '1.5rem' }}>
              <Column lg={8} md={4} sm={4} style={{ marginBottom: '1rem' }}>
                <Tile style={{ height: '100%', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Icon Library</h3>
                  <p style={{ marginBottom: '1rem', color: '#525252' }}>
                    2,300+ UI icons for actions, objects, and states
                  </p>
                  <Link href="https://carbondesignsystem.com/guidelines/icons/library/" target="_blank" rel="noopener noreferrer">
                    Browse icons <Launch size={16} style={{ marginLeft: '0.25rem' }} />
                  </Link>
                </Tile>
              </Column>

              <Column lg={8} md={4} sm={4} style={{ marginBottom: '1rem' }}>
                <Tile style={{ height: '100%', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Pictogram Library</h3>
                  <p style={{ marginBottom: '1rem', color: '#525252' }}>
                    Large-scale illustrations for hero sections and empty states
                  </p>
                  <Link href="https://carbondesignsystem.com/guidelines/pictograms/library/" target="_blank" rel="noopener noreferrer">
                    Browse pictograms <Launch size={16} style={{ marginLeft: '0.25rem' }} />
                  </Link>
                </Tile>
              </Column>
            </Grid>
          </section>

          {/* Code Repositories */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <LogoGithub size={32} />
              Code Repositories
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Access the SCDP Pattern Library codebase and related Carbon repositories.
            </p>

            <Grid narrow style={{ marginBottom: '1.5rem' }}>
              <Column lg={8} md={4} sm={4} style={{ marginBottom: '1rem' }}>
                <Tile style={{ height: '100%', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>SCDP Pattern Library</h3>
                  <p style={{ marginBottom: '1rem', color: '#525252' }}>
                    This repository - Next.js 14, IBM Carbon, Payload CMS 3.0
                  </p>
                  <Link href="https://github.com/tonyK3y/SCDP-UX_Pattern_Library" target="_blank" rel="noopener noreferrer">
                    View on GitHub <Launch size={16} style={{ marginLeft: '0.25rem' }} />
                  </Link>
                </Tile>
              </Column>

              <Column lg={8} md={4} sm={4} style={{ marginBottom: '1rem' }}>
                <Tile style={{ height: '100%', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Carbon React Components</h3>
                  <p style={{ marginBottom: '1rem', color: '#525252' }}>
                    Official Carbon component source code and examples
                  </p>
                  <Link href="https://github.com/carbon-design-system/carbon" target="_blank" rel="noopener noreferrer">
                    View on GitHub <Launch size={16} style={{ marginLeft: '0.25rem' }} />
                  </Link>
                </Tile>
              </Column>
            </Grid>
          </section>

          {/* Design Files */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <DataVis_1 size={32} />
              Design Files
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Figma libraries and design assets for SCDP applications.
            </p>

            <Tile style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Carbon Design Kit (Figma)</h3>
              <p style={{ marginBottom: '1rem', color: '#525252' }}>
                Official Carbon design kit with all components, patterns, and styles
              </p>
              <Link href="https://www.figma.com/@carbondesignsystem" target="_blank" rel="noopener noreferrer">
                View Figma community <Launch size={16} style={{ marginLeft: '0.25rem' }} />
              </Link>
            </Tile>

            <Tile style={{ padding: '1.5rem', backgroundColor: '#f4f4f4' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>SCDP Design Files</h3>
              <p style={{ color: '#525252' }}>
                Custom Coupa SCDP design files and components (Coming soon - contact design team)
              </p>
            </Tile>
          </section>

          {/* Developer Tools */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <CharacterWholeNumber size={32} />
              Developer Tools & Utilities
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential tools for working with Carbon and the SCDP Pattern Library.
            </p>

            <Grid narrow>
              <Column lg={8} md={4} sm={4} style={{ marginBottom: '1rem' }}>
                <Tile style={{ height: '100%', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Carbon DevTools</h3>
                  <p style={{ marginBottom: '1rem', color: '#525252' }}>
                    Browser extension for inspecting Carbon components
                  </p>
                  <Link href="https://github.com/carbon-design-system/devtools" target="_blank" rel="noopener noreferrer">
                    View on GitHub <Launch size={16} style={{ marginLeft: '0.25rem' }} />
                  </Link>
                </Tile>
              </Column>

              <Column lg={8} md={4} sm={4} style={{ marginBottom: '1rem' }}>
                <Tile style={{ height: '100%', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Payload CMS Admin</h3>
                  <p style={{ marginBottom: '1rem', color: '#525252' }}>
                    Manage pattern library content (internal access only)
                  </p>
                  <Link href="/admin-custom/patterns">
                    Open admin panel <Launch size={16} style={{ marginLeft: '0.25rem' }} />
                  </Link>
                </Tile>
              </Column>
            </Grid>
          </section>

          {/* Additional Resources */}
          <section>
            <h2 style={{ marginBottom: '1rem' }}>Additional Resources</h2>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>
                <Link href="https://carbondesignsystem.com/developing/dev-resources/" target="_blank" rel="noopener noreferrer">
                  Carbon developer resources and tutorials
                </Link>
              </li>
              <li>
                <Link href="https://www.npmjs.com/package/@carbon/react" target="_blank" rel="noopener noreferrer">
                  @carbon/react npm package documentation
                </Link>
              </li>
              <li>
                <Link href="https://carbondesignsystem.com/community/overview/" target="_blank" rel="noopener noreferrer">
                  Carbon community and support channels
                </Link>
              </li>
              <li>
                <Link href="https://payloadcms.com/docs/getting-started/what-is-payload" target="_blank" rel="noopener noreferrer">
                  Payload CMS 3.0 documentation
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </Column>
    </Grid>
  )
}

'use client'

import { Grid, Column, Breadcrumb, BreadcrumbItem } from '@carbon/react'
import { Book } from '@carbon/icons-react'

export default function ResourcesPage() {
  return (
    <Grid className="page-container">
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
            Design files, code repositories, tools, and references
            for SCDP development.
          </p>
        </div>

        <div className="page-content">
          <h2>Design Files</h2>
          <p>Figma libraries and design assets (Coming soon)</p>

          <h2>Code Repositories</h2>
          <p>GitHub links to component libraries and code examples (Coming soon)</p>

          <h2>Tools & Utilities</h2>
          <p>IBM Carbon Design System, icons, and developer tools (Coming soon)</p>

          <h2>FAQ</h2>
          <p>Frequently asked questions about patterns and implementation (Coming soon)</p>
        </div>
      </Column>
    </Grid>
  )
}

import Link from 'next/link'
import { Tile, Heading } from '@carbon/react'
import { Document, UserMultiple } from '@carbon/icons-react'

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Heading style={{ marginBottom: '2rem' }}>
        SCDP Pattern Library - Admin Dashboard
      </Heading>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        <Link href="/admin-custom/patterns" style={{ textDecoration: 'none' }}>
          <Tile style={{ height: '200px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Document size={48} style={{ marginBottom: '1rem' }} />
            <h3>Manage Patterns</h3>
            <p style={{ marginTop: '0.5rem', color: '#525252' }}>
              Create and edit UX patterns for the library
            </p>
          </Tile>
        </Link>

        <Link href="/admin-custom/users" style={{ textDecoration: 'none' }}>
          <Tile style={{ height: '200px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <UserMultiple size={48} style={{ marginBottom: '1rem' }} />
            <h3>Manage Users</h3>
            <p style={{ marginTop: '0.5rem', color: '#525252' }}>
              Manage admin users and permissions
            </p>
          </Tile>
        </Link>
      </div>

      <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#f4f4f4', borderRadius: '4px' }}>
        <h4>Quick Stats</h4>
        <p style={{ marginTop: '1rem', color: '#525252' }}>
          Welcome to the SCDP Pattern Library admin. This custom interface manages content through Payload CMS API.
        </p>
      </div>
    </div>
  )
}

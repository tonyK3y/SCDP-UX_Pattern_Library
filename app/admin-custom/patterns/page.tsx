'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button, DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, Loading } from '@carbon/react'
import { Add } from '@carbon/icons-react'
import PatternActions from './components/PatternActions'

export default function PatternsPage() {
  const [patterns, setPatterns] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPatterns() {
      try {
        const res = await fetch('/api/patterns', {
          cache: 'no-store',
        })

        if (!res.ok) {
          console.error('Failed to fetch patterns:', res.status)
          setPatterns([])
          return
        }

        const data = await res.json()
        setPatterns(data.docs || [])
      } catch (error) {
        console.error('Error fetching patterns:', error)
        setPatterns([])
      } finally {
        setLoading(false)
      }
    }

    loadPatterns()
  }, [])

  const headers = [
    { key: 'title', header: 'Title' },
    { key: 'slug', header: 'Slug' },
    { key: 'createdAt', header: 'Created' },
    { key: 'actions', header: 'Actions' },
  ]

  const rows = patterns.map((pattern: any) => ({
    id: pattern.id,
    title: pattern.title,
    slug: pattern.slug,
    createdAt: new Date(pattern.createdAt).toLocaleDateString(),
    actions: pattern.id,
  }))

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
        <Loading description="Loading patterns..." />
      </div>
    )
  }

  return (
    <div className="patterns-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Patterns</h1>
        <Link href="/admin-custom/patterns/new">
          <Button renderIcon={Add}>
            New Pattern
          </Button>
        </Link>
      </div>

      {patterns.length === 0 ? (
        <div style={{ padding: '3rem', textAlign: 'center', backgroundColor: '#f4f4f4', borderRadius: '4px' }}>
          <h3>No patterns yet</h3>
          <p style={{ marginTop: '1rem', color: '#525252' }}>
            Create your first pattern to get started.
          </p>
          <Link href="/admin-custom/patterns/new">
            <Button
              renderIcon={Add}
              style={{ marginTop: '1.5rem' }}
            >
              Create Pattern
            </Button>
          </Link>
        </div>
      ) : (
        <DataTable rows={rows} headers={headers}>
          {({ rows, headers, getTableProps, getHeaderProps, getRowProps }: any) => (
            <TableContainer>
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map((header: any) => (
                      <TableHeader {...getHeaderProps({ header })} key={header.key}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row: any) => (
                    <TableRow {...getRowProps({ row })} key={row.id}>
                      {row.cells.map((cell: any) => {
                        if (cell.info.header === 'actions') {
                          return (
                            <TableCell key={cell.id}>
                              <PatternActions patternId={row.id} />
                            </TableCell>
                          )
                        }
                        return <TableCell key={cell.id}>{cell.value}</TableCell>
                      })}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>
      )}
    </div>
  )
}

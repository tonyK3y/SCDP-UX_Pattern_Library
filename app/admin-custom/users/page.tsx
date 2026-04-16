'use client'

import { useEffect, useState } from 'react'
import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, Loading } from '@carbon/react'

export default function UsersPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch('/api/users', {
          cache: 'no-store',
        })

        if (!res.ok) {
          console.error('Failed to fetch users:', res.status)
          setUsers([])
          return
        }

        const data = await res.json()
        setUsers(data.docs || [])
      } catch (error) {
        console.error('Error fetching users:', error)
        setUsers([])
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  const headers = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'createdAt', header: 'Created' },
  ]

  const rows = users.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleDateString(),
  }))

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
        <Loading description="Loading users..." />
      </div>
    )
  }

  return (
    <div className="users-page">
      <div style={{ marginBottom: '2rem' }}>
        <h1>Users</h1>
        <p style={{ marginTop: '0.5rem', color: '#525252' }}>
          Manage admin users for the pattern library
        </p>
      </div>

      {users.length === 0 ? (
        <div style={{ padding: '3rem', textAlign: 'center', backgroundColor: '#f4f4f4', borderRadius: '4px' }}>
          <h3>No users found</h3>
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
                      {row.cells.map((cell: any) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
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

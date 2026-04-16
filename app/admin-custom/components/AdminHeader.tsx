'use client'

import Link from 'next/link'
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from '@carbon/react'
import { Logout, User } from '@carbon/icons-react'

export default function AdminHeader() {
  return (
    <Header aria-label="SCDP Admin">
      <HeaderName as={Link} href="/admin-custom" prefix="SCDP">
        Admin
      </HeaderName>
      <HeaderNavigation aria-label="Admin navigation">
        <HeaderMenuItem as={Link} href="/admin-custom/patterns">
          Patterns
        </HeaderMenuItem>
        <HeaderMenuItem as={Link} href="/admin-custom/users">
          Users
        </HeaderMenuItem>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction
          aria-label="View site"
          as={Link}
          href="/"
          tooltipAlignment="end"
        >
          <User size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="Logout"
          onClick={() => {
            // TODO: Implement logout
            console.log('Logout clicked')
          }}
          tooltipAlignment="end"
        >
          <Logout size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  )
}

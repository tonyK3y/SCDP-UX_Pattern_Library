'use client'

import { useState } from 'react'
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderMenuButton,
  HeaderMenu,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
} from '@carbon/react'
import {
  UserAvatar,
  Search,
} from '@carbon/icons-react'
import Link from 'next/link'

export default function Navigation() {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false)

  const onClickSideNavExpand = () => {
    setIsSideNavExpanded(!isSideNavExpanded)
  }

  return (
    <HeaderContainer
      render={() => (
        <>
          <Header aria-label="SCDP UX Pattern Library">
            <SkipToContent />
            <HeaderMenuButton
              aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
              aria-expanded={isSideNavExpanded}
            />
            <HeaderName as={Link} href="/" prefix="Coupa">
              SCDP Pattern Library
            </HeaderName>
            <HeaderNavigation aria-label="Main navigation">
              <HeaderMenuItem as={Link} href="/getting-started">
                Getting Started
              </HeaderMenuItem>
              <HeaderMenuItem as={Link} href="/patterns">
                Patterns
              </HeaderMenuItem>
              <HeaderMenuItem as={Link} href="/language">
                Language & Tone
              </HeaderMenuItem>
              <HeaderMenuItem as={Link} href="/resources">
                Resources
              </HeaderMenuItem>
            </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="Search"
                tooltipAlignment="end"
              >
                <Search size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="User Profile"
                tooltipAlignment="end"
              >
                <UserAvatar size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
            onOverlayClick={onClickSideNavExpand}
          >
            <SideNavItems>
              <SideNavLink as={Link} href="/">
                Home
              </SideNavLink>
              <SideNavLink as={Link} href="/getting-started">
                Getting Started
              </SideNavLink>
              <SideNavLink as={Link} href="/patterns">
                Patterns
              </SideNavLink>
              <SideNavLink as={Link} href="/language">
                Language & Tone
              </SideNavLink>
              <SideNavLink as={Link} href="/resources">
                Resources
              </SideNavLink>
            </SideNavItems>
          </SideNav>
        </>
      )}
    />
  )
}

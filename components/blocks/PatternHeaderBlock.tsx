'use client'

import { Tag } from '@carbon/react'
import * as CarbonIcons from '@carbon/icons-react'

interface PatternHeaderBlockProps {
  icon?: string
  category?: 'component' | 'interaction' | 'layout' | 'language'
  status?: 'stable' | 'beta' | 'deprecated'
  lastUpdated?: string
}

export default function PatternHeaderBlock({
  icon,
  category,
  status = 'stable',
  lastUpdated,
}: PatternHeaderBlockProps) {
  const getIcon = (iconName?: string) => {
    if (!iconName) return null
    const IconComponent = (CarbonIcons as any)[iconName]
    if (!IconComponent) return null
    return <IconComponent size={24} />
  }

  const categoryLabels = {
    component: 'Component Pattern',
    interaction: 'Interaction Pattern',
    layout: 'Layout Pattern',
    language: 'Language Guideline',
  }

  const statusColors = {
    stable: 'green',
    beta: 'blue',
    deprecated: 'red',
  } as const

  const statusLabels = {
    stable: 'Stable',
    beta: 'Beta',
    deprecated: 'Deprecated',
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1.5rem 0',
        marginBottom: '1.5rem',
        borderBottom: '1px solid #e0e0e0',
        flexWrap: 'wrap',
      }}
    >
      {icon && (
        <div style={{ color: '#0f62fe' }}>
          {getIcon(icon)}
        </div>
      )}

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        {category && (
          <Tag type="gray" size="md">
            {categoryLabels[category]}
          </Tag>
        )}

        {status && (
          <Tag type={statusColors[status]} size="md">
            {statusLabels[status]}
          </Tag>
        )}

        {lastUpdated && (
          <span style={{ fontSize: '0.875rem', color: '#525252' }}>
            Last updated: {new Date(lastUpdated).toLocaleDateString()}
          </span>
        )}
      </div>
    </div>
  )
}

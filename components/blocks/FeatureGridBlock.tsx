'use client'

import { Grid, Column, Tile } from '@carbon/react'
import * as CarbonIcons from '@carbon/icons-react'

interface Feature {
  icon?: string
  title: string
  description: string
}

interface FeatureGridBlockProps {
  columns: '2' | '3' | '4'
  features: Feature[]
}

export default function FeatureGridBlock({ columns, features }: FeatureGridBlockProps) {
  const columnMap = {
    '2': { lg: 8, md: 4 },
    '3': { lg: 5, md: 4 },
    '4': { lg: 4, md: 4 },
  }

  const cols = columnMap[columns]

  const getIcon = (iconName?: string) => {
    if (!iconName) return null
    const IconComponent = (CarbonIcons as any)[iconName]
    if (!IconComponent) return null
    return <IconComponent size={32} />
  }

  return (
    <Grid narrow style={{ marginBottom: '2rem' }}>
      {features.map((feature, index) => (
        <Column key={index} lg={cols.lg} md={cols.md} sm={4} style={{ marginBottom: '1rem' }}>
          <Tile style={{ height: '100%', padding: '1.5rem' }}>
            {feature.icon && (
              <div style={{ marginBottom: '1rem', color: '#0f62fe' }}>
                {getIcon(feature.icon)}
              </div>
            )}
            <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{feature.title}</h3>
            <p style={{ color: '#525252', lineHeight: '1.6', margin: 0 }}>
              {feature.description}
            </p>
          </Tile>
        </Column>
      ))}
    </Grid>
  )
}

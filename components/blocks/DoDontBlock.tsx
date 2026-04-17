'use client'

import { Grid, Column, Tile } from '@carbon/react'
import { Checkmark, Close } from '@carbon/icons-react'

interface DoDontBlockProps {
  doTitle: string
  doContent: string
  dontTitle: string
  dontContent: string
}

export default function DoDontBlock({
  doTitle,
  doContent,
  dontTitle,
  dontContent,
}: DoDontBlockProps) {
  return (
    <Grid narrow style={{ marginBottom: '2rem' }}>
      <Column lg={8} md={4} sm={4}>
        <Tile
          style={{
            height: '100%',
            borderTop: '4px solid #24a148',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div
              style={{
                background: '#24a148',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Checkmark size={20} style={{ color: '#fff' }} />
            </div>
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{doTitle}</h3>
          </div>
          <p style={{ color: '#525252', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
            {doContent}
          </p>
        </Tile>
      </Column>

      <Column lg={8} md={4} sm={4}>
        <Tile
          style={{
            height: '100%',
            borderTop: '4px solid #da1e28',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div
              style={{
                background: '#da1e28',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Close size={20} style={{ color: '#fff' }} />
            </div>
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{dontTitle}</h3>
          </div>
          <p style={{ color: '#525252', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
            {dontContent}
          </p>
        </Tile>
      </Column>
    </Grid>
  )
}

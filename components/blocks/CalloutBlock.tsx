'use client'

import { InlineNotification } from '@carbon/react'

interface CalloutBlockProps {
  type: 'info' | 'warning' | 'success' | 'error'
  title?: string
  content: string
}

export default function CalloutBlock({ type, title, content }: CalloutBlockProps) {
  // Map our type to Carbon's kind
  const kindMap = {
    info: 'info',
    warning: 'warning',
    success: 'success',
    error: 'error',
  } as const

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <InlineNotification
        kind={kindMap[type] || 'info'}
        title={title || ''}
        subtitle={content}
        hideCloseButton
        lowContrast
      />
    </div>
  )
}

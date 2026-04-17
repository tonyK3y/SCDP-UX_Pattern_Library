'use client'

interface DividerBlockProps {
  style?: 'line' | 'spacer'
  spacing?: 'small' | 'medium' | 'large'
}

export default function DividerBlock({ style = 'line', spacing = 'medium' }: DividerBlockProps) {
  const spacingMap = {
    small: '1rem',
    medium: '2rem',
    large: '3rem',
  }

  if (style === 'spacer') {
    return <div style={{ height: spacingMap[spacing] }} />
  }

  return (
    <hr
      style={{
        border: 'none',
        borderTop: '1px solid #e0e0e0',
        margin: `${spacingMap[spacing]} 0`,
      }}
    />
  )
}

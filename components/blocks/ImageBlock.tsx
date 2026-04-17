'use client'

interface ImageBlockProps {
  url: string
  alt: string
  caption?: string
  width?: 'full' | 'large' | 'medium' | 'small'
}

export default function ImageBlock({ url, alt, caption, width = 'full' }: ImageBlockProps) {
  const widthMap = {
    full: '100%',
    large: '75%',
    medium: '50%',
    small: '33.33%',
  }

  return (
    <div
      style={{
        marginBottom: '2rem',
        maxWidth: widthMap[width],
        marginLeft: width === 'full' ? 0 : 'auto',
        marginRight: width === 'full' ? 0 : 'auto',
      }}
    >
      <img
        src={url}
        alt={alt}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '4px',
          border: '1px solid #e0e0e0',
        }}
      />
      {caption && (
        <p
          style={{
            marginTop: '0.5rem',
            fontSize: '0.875rem',
            color: '#525252',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
        >
          {caption}
        </p>
      )}
    </div>
  )
}

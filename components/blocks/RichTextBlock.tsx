'use client'

import ReactMarkdown from 'react-markdown'

interface RichTextBlockProps {
  content: any
}

export default function RichTextBlock({ content }: RichTextBlockProps) {
  // Extract text content from Lexical editor format
  const getTextContent = (content: any): string => {
    if (typeof content === 'string') {
      return content
    }

    if (content?.root?.children) {
      return content.root.children
        .map((child: any) => {
          if (child.type === 'paragraph' && child.children) {
            return child.children.map((c: any) => c.text || '').join('')
          }
          return child.text || ''
        })
        .join('\n\n')
    }

    return ''
  }

  const textContent = getTextContent(content)

  return (
    <div className="rich-text-block">
      <ReactMarkdown>{textContent}</ReactMarkdown>
    </div>
  )
}

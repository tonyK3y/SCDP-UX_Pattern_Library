'use client'

import { useState } from 'react'
import { CodeSnippet } from '@carbon/react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  language: string
  code: string
  filename?: string
  showLineNumbers?: boolean
}

export default function CodeBlock({
  language,
  code,
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      {filename && (
        <div
          style={{
            background: '#262626',
            color: '#f4f4f4',
            padding: '0.5rem 1rem',
            fontSize: '0.875rem',
            fontFamily: 'IBM Plex Mono, monospace',
            borderTopLeftRadius: '4px',
            borderTopRightRadius: '4px',
          }}
        >
          {filename}
        </div>
      )}
      <div style={{ position: 'relative' }}>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            borderRadius: filename ? '0 0 4px 4px' : '4px',
            fontSize: '0.875rem',
          }}
        >
          {code}
        </SyntaxHighlighter>
        <button
          onClick={handleCopy}
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            background: copied ? '#24a148' : '#393939',
            color: '#f4f4f4',
            border: 'none',
            borderRadius: '4px',
            padding: '0.375rem 0.75rem',
            fontSize: '0.75rem',
            cursor: 'pointer',
            fontWeight: 500,
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => {
            if (!copied) {
              e.currentTarget.style.background = '#4c4c4c'
            }
          }}
          onMouseLeave={(e) => {
            if (!copied) {
              e.currentTarget.style.background = '#393939'
            }
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}

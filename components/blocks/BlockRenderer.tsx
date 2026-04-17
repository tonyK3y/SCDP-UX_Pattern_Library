'use client'

import RichTextBlock from './RichTextBlock'
import CalloutBlock from './CalloutBlock'
import CodeBlock from './CodeBlock'
import ImageBlock from './ImageBlock'
import DoDontBlock from './DoDontBlock'
import FeatureGridBlock from './FeatureGridBlock'
import PatternHeaderBlock from './PatternHeaderBlock'
import DividerBlock from './DividerBlock'

interface Block {
  blockType: string
  id?: string
  [key: string]: any
}

interface BlockRendererProps {
  blocks: Block[]
}

export default function BlockRenderer({ blocks }: BlockRendererProps) {
  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <div className="block-content">
      {blocks.map((block, index) => {
        const key = block.id || `block-${index}`

        switch (block.blockType) {
          case 'richText':
            return <RichTextBlock key={key} content={block.content} />

          case 'callout':
            return (
              <CalloutBlock
                key={key}
                type={block.type}
                title={block.title}
                content={block.content}
              />
            )

          case 'code':
            return (
              <CodeBlock
                key={key}
                language={block.language}
                code={block.code}
                filename={block.filename}
                showLineNumbers={block.showLineNumbers}
              />
            )

          case 'image':
            return (
              <ImageBlock
                key={key}
                url={block.url}
                alt={block.alt}
                caption={block.caption}
                width={block.width}
              />
            )

          case 'doDont':
            return (
              <DoDontBlock
                key={key}
                doTitle={block.doTitle}
                doContent={block.doContent}
                dontTitle={block.dontTitle}
                dontContent={block.dontContent}
              />
            )

          case 'featureGrid':
            return (
              <FeatureGridBlock
                key={key}
                columns={block.columns}
                features={block.features}
              />
            )

          case 'patternHeader':
            return (
              <PatternHeaderBlock
                key={key}
                icon={block.icon}
                category={block.category}
                status={block.status}
                lastUpdated={block.lastUpdated}
              />
            )

          case 'divider':
            return (
              <DividerBlock
                key={key}
                style={block.style}
                spacing={block.spacing}
              />
            )

          default:
            console.warn(`Unknown block type: ${block.blockType}`)
            return null
        }
      })}
    </div>
  )
}

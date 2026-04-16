'use client'

import Link from 'next/link'
import { Button } from '@carbon/react'
import { Edit, TrashCan } from '@carbon/icons-react'
import { useRouter } from 'next/navigation'

export default function PatternActions({ patternId }: { patternId: string }) {
  const router = useRouter()

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this pattern?')) {
      return
    }

    try {
      const response = await fetch(`/api/patterns/${patternId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        alert('Failed to delete pattern')
        return
      }

      router.refresh()
    } catch (error) {
      console.error('Error deleting pattern:', error)
      alert('Failed to delete pattern')
    }
  }

  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Link href={`/admin-custom/patterns/${patternId}`}>
        <Button
          kind="ghost"
          size="sm"
          renderIcon={Edit}
          hasIconOnly
          iconDescription="Edit"
        />
      </Link>
      <Button
        kind="danger--ghost"
        size="sm"
        renderIcon={TrashCan}
        hasIconOnly
        iconDescription="Delete"
        onClick={handleDelete}
      />
    </div>
  )
}

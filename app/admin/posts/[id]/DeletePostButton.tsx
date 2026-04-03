'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DeletePostButton({ id }: { id: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    if (!confirm('게시글을 삭제하시겠습니까?')) return
    setLoading(true)
    const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' })
    if (res.ok) {
      router.push('/admin/dashboard')
      router.refresh()
    }
    setLoading(false)
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="px-4 py-2 border border-red-200 rounded-md text-sm text-red-500 hover:bg-red-50 transition duration-200 disabled:opacity-50"
    >
      {loading ? '삭제 중...' : '삭제'}
    </button>
  )
}

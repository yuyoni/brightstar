'use client'

import { useRouter } from 'next/navigation'

interface DeleteButtonProps {
  postId: string
}

export default function DeleteButton({ postId }: DeleteButtonProps) {
  const router = useRouter()

  async function handleDelete() {
    if (!confirm('게시글을 삭제하시겠습니까?')) return

    const res = await fetch(`/api/posts/${postId}`, { method: 'DELETE' })
    if (res.ok) {
      router.refresh()
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="text-red-400 hover:text-red-600 transition duration-200"
    >
      삭제
    </button>
  )
}

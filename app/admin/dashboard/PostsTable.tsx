'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Circle } from 'lucide-react'
import { Post } from '@/types'

interface PostsTableProps {
  posts: Post[]
  total: number
}

export default function PostsTable({ posts, total }: PostsTableProps) {
  const router = useRouter()
  const [selected, setSelected] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const allSelected = posts.length > 0 && selected.length === posts.length

  function toggleAll() {
    setSelected(allSelected ? [] : posts.map((p) => p.id))
  }

  function toggleOne(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  async function handleDelete(id: string) {
    if (!confirm('게시글을 삭제하시겠습니까?')) return
    setLoading(true)
    const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' })
    if (res.ok) {
      setSelected((prev) => prev.filter((x) => x !== id))
      router.refresh()
    }
    setLoading(false)
  }

  async function handleBulkDelete() {
    if (!confirm(`선택한 ${selected.length}개를 삭제하시겠습니까?`)) return
    setLoading(true)
    const res = await fetch('/api/posts/bulk-delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids: selected }),
    })
    if (res.ok) {
      setSelected([])
      router.refresh()
    }
    setLoading(false)
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <p className="text-sm text-gray-500">총 {total}개</p>
          {selected.length > 0 && (
            <>
              <span className="text-sm text-gray-400">{selected.length}개 선택됨</span>
              <button
                onClick={handleBulkDelete}
                disabled={loading}
                className="text-sm text-red-500 hover:text-red-700 transition duration-200 disabled:opacity-50"
              >
                선택 삭제
              </button>
            </>
          )}
        </div>
        <Link
          href="/admin/posts/new"
          className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition duration-200"
        >
          새 글 작성
        </Link>
      </div>



      {posts.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
          <p className="text-gray-400 text-sm">게시글이 없습니다.</p>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="px-4 py-3 w-10">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleAll}
                    className="w-4 h-4 rounded border-gray-300 accent-slate-900 cursor-pointer"
                  />
                </th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">제목</th>
                <th className="px-4 py-3 font-medium text-gray-500 w-28 text-center">카테고리</th>
                <th className="px-4 py-3 font-medium text-gray-500 w-20 text-center">상태</th>
                <th className="px-4 py-3 font-medium text-gray-500 w-32 text-center">작성일</th>
                <th className="px-4 py-3 w-24"></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50"
                >
                  <td className="px-4 py-3 text-center">
                    <input
                      type="checkbox"
                      checked={selected.includes(post.id)}
                      onChange={() => toggleOne(post.id)}
                      className="w-4 h-4 rounded border-gray-300 accent-slate-900 cursor-pointer"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/posts/${post.id}`}
                      className="line-clamp-1 text-slate-900 hover:text-slate-600 transition duration-200"
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {post.categories ? (
                      <span className="inline-flex items-center gap-1 text-xs text-gray-700">
                        <Circle
                          size={10}
                          stroke="transparent"
                          fill={post.categories.color ?? '#94a3b8'}
                        />
                        {post.categories.name}
                      </span>
                    ) : (
                      <span className="text-gray-300 text-xs">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${post.is_published
                        ? 'bg-green-50 text-green-700'
                        : 'bg-gray-100 text-gray-500'
                        }`}
                    >
                      {post.is_published ? '공개' : '비공개'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400 text-center text-xs">
                    {new Date(post.created_at).toLocaleDateString('ko-KR')}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3 justify-end">
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        className="text-slate-600 hover:text-slate-900 transition duration-200"
                      >
                        수정
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
                        disabled={loading}
                        className="text-red-400 hover:text-red-600 transition duration-200 disabled:opacity-50"
                      >
                        삭제
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Post, Category } from '@/types'
import ImageUploader from '@/components/ui/ImageUploader'

interface EditPostFormProps {
  post: Post
  categories: Category[]
}

export default function EditPostForm({ post, categories }: EditPostFormProps) {
  const router = useRouter()

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const [categoryId, setCategoryId] = useState(post.category_id ?? '')
  const [isPublished, setIsPublished] = useState(post.is_published)
  // 기존 image_url(단일) 보존 처리: image_urls 없으면 image_url로 초기화
  const [images, setImages] = useState<string[]>(
    post.image_urls?.length
      ? post.image_urls
      : post.image_url
      ? [post.image_url]
      : []
  )
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const res = await fetch(`/api/posts/${post.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        content,
        category_id: categoryId || null,
        is_published: isPublished,
        image_urls: images,
      }),
    })

    const data = await res.json()
    setLoading(false)

    if (!res.ok) {
      setError(data.error)
      return
    }

    router.push(`/admin/posts/${post.id}`)
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center gap-4">
          <Link href={`/admin/posts/${post.id}`} className="text-sm text-gray-400 hover:text-slate-600 transition duration-200">
            ← 상세로
          </Link>
          <h1 className="text-base font-semibold text-slate-900">게시글 수정</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* 제목 */}
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700">제목</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-400"
                required
              />
            </div>

            {/* 카테고리 */}
            {categories.length > 0 && (
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-slate-700">카테고리</label>
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
                >
                  <option value="">카테고리 없음</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
            )}

            {/* 공개 여부 */}
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700">공개 여부</label>
              <button
                type="button"
                onClick={() => setIsPublished(!isPublished)}
                className={`px-5 py-2 rounded-md text-sm font-medium transition duration-200 ${
                  isPublished
                    ? 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {isPublished ? '공개' : '비공개'}
              </button>
            </div>

            {/* 이미지 첨부 */}
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700">이미지</label>
              <ImageUploader
                images={images}
                onChange={setImages}
                uploading={uploading}
                onUploading={setUploading}
                onError={setError}
              />
            </div>

            {/* 내용 */}
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700">내용</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={16}
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-400 resize-none leading-relaxed"
                required
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <div className="flex gap-3 justify-end pt-2">
              <Link
                href={`/admin/posts/${post.id}`}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm text-slate-600 hover:bg-gray-50 transition duration-200"
              >
                취소
              </Link>
              <button
                type="submit"
                disabled={loading || uploading}
                className="bg-slate-900 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition duration-200 disabled:opacity-50"
              >
                {loading ? '저장 중...' : '저장'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

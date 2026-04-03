'use client'

import { Category } from '@/types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface PostSearchProps {
  categories: Category[]
  isAdmin?: boolean
}

export default function PostSearch({ categories, isAdmin = false }: PostSearchProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [q, setQ] = useState(searchParams.get('q') ?? '')
  const [from, setFrom] = useState(searchParams.get('from') ?? '')
  const [to, setTo] = useState(searchParams.get('to') ?? '')
  const [category, setCategory] = useState(searchParams.get('category') ?? '')
  const [published, setPublished] = useState(searchParams.get('published') ?? '')

  // URL 파라미터 변경 시 (정렬 등) 입력값 동기화
  useEffect(() => {
    setQ(searchParams.get('q') ?? '')
    setFrom(searchParams.get('from') ?? '')
    setTo(searchParams.get('to') ?? '')
    setCategory(searchParams.get('category') ?? '')
    setPublished(searchParams.get('published') ?? '')
  }, [searchParams])

  function buildParams() {
    const params = new URLSearchParams()
    if (q.trim()) params.set('q', q.trim())
    if (from) params.set('from', from)
    if (to) params.set('to', to)
    if (category) params.set('category', category)
    if (isAdmin && published) params.set('published', published)

    return params
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push(`${pathname}?${buildParams().toString()}`)
  }


  // 입력값만 초기화 (URL 변경 없음 — 이후 검색 버튼 클릭 시 적용)
  function handleReset() {
    setQ('')
    setFrom('')
    setTo('')
    setCategory('')
    setPublished('')
  }


  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-wrap gap-x-4 gap-y-3 items-end">
        {/* 상태 */}
        {isAdmin && (
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-500">상태</label>
            <select
              value={published}
              onChange={(e) => setPublished(e.target.value)}
              className="border border-gray-200 rounded-md px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
            >
              <option value="">전체</option>
              <option value="true">공개</option>
              <option value="false">비공개</option>
            </select>
          </div>)}

        {/* 카테고리 */}
        {categories.length > 0 && (
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-500">카테고리</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-200 rounded-md px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
            >
              <option value="">전체</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        )}

        {/* 검색어 */}
        <div className="flex-1 min-w-48 flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">검색어</label>
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="제목 또는 내용"
            className="border border-gray-200 rounded-md px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-400"
          />
        </div>

        {/* 시작일 */}
        {isAdmin && <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">시작일</label>
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="border border-gray-200 rounded-md px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-400"
          />
        </div>}

        {/* 종료일 */}
        {isAdmin && <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">종료일</label>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="border border-gray-200 rounded-md px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-400"
          />
        </div>}

        {/* 버튼 */}
        <div className="flex items-center gap-2 pb-0.5">
          <button
            type="button"
            onClick={handleReset}
            className="text-sm text-gray-400 hover:text-slate-600 transition duration-200 px-2 py-2"
          >
            초기화
          </button>
          <button
            type="submit"
            className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition duration-200"
          >
            검색
          </button>

        </div>
      </div>
    </form>
  )
}

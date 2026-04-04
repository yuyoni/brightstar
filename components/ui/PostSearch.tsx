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

  useEffect(() => {
    setQ(searchParams.get('q') ?? '')
    setFrom(searchParams.get('from') ?? '')
    setTo(searchParams.get('to') ?? '')
    setCategory(searchParams.get('category') ?? '')
    setPublished(searchParams.get('published') ?? '')
  }, [searchParams])

  function buildParams(overrides?: { q?: string; from?: string; to?: string; category?: string; published?: string }) {
    const vals = {
      q: overrides?.q ?? q,
      from: overrides?.from ?? from,
      to: overrides?.to ?? to,
      category: overrides?.category ?? category,
      published: overrides?.published ?? published,
    }
    const params = new URLSearchParams()
    if (vals.q.trim()) params.set('q', vals.q.trim())
    if (vals.from) params.set('from', vals.from)
    if (vals.to) params.set('to', vals.to)
    if (vals.category) params.set('category', vals.category)
    if (isAdmin && vals.published) params.set('published', vals.published)
    return params
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push(`${pathname}?${buildParams().toString()}`)
  }

  function handleReset() {
    setQ('')
    setFrom('')
    setTo('')
    setCategory('')
    setPublished('')
    router.push(pathname)
  }


  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end">

        {/* 상태 (admin only) */}
        {isAdmin && (
          <div className="flex flex-col gap-1 min-w-[300px] sm:min-w-0">
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
          </div>
        )}

        {/* 카테고리 */}
        {categories.length > 0 && (
          <div className="flex flex-col gap-1 min-w-[300px] sm:min-w-0">
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
        <div className="flex flex-col gap-1 flex-1 min-w-[300px] sm:min-w-48">
          <label className="text-xs font-medium text-gray-500">검색어</label>
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="제목 또는 내용"
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-400"
          />
        </div>

        {/* 기간 (admin only) */}
        {isAdmin && (
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-500">기간</label>
            <div className="flex items-center gap-1.5">
              <input
                type="date"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="border border-gray-200 rounded-md px-2.5 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-400 [color-scheme:light]"
                aria-label="시작일"
              />
              <span className="text-gray-300 text-xs">–</span>
              <input
                type="date"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="border border-gray-200 rounded-md px-2.5 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-400 [color-scheme:light]"
                aria-label="종료일"
              />
            </div>
          </div>
        )}

        {/* 버튼 */}
        <div className="flex items-center gap-2 justify-end sm:justify-start min-w-[300px] sm:min-w-0">
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

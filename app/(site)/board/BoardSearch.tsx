'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { Category } from '@/types'

interface BoardSearchProps {
  categories: Category[]
}

export default function BoardSearch({ categories }: BoardSearchProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const q = searchParams.get('q') ?? ''
  const from = searchParams.get('from') ?? ''
  const to = searchParams.get('to') ?? ''
  const category = searchParams.get('category') ?? ''
  const sort = searchParams.get('sort') ?? 'desc'

  const hasFilter = q || from || to || category

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const params = new URLSearchParams()

    const qVal = (fd.get('q') as string).trim()
    const fromVal = fd.get('from') as string
    const toVal = fd.get('to') as string
    const catVal = fd.get('category') as string

    if (qVal) params.set('q', qVal)
    if (fromVal) params.set('from', fromVal)
    if (toVal) params.set('to', toVal)
    if (catVal) params.set('category', catVal)
    params.set('sort', sort)

    router.push(`${pathname}?${params.toString()}`)
  }

  function handleSortToggle() {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sort === 'desc' ? 'asc' : 'desc')
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-10">
      <div className="flex flex-wrap gap-3 items-center">
        <input
          name="q"
          type="text"
          defaultValue={q}
          placeholder="제목 또는 내용 검색"
          className="flex-1 min-w-48 border border-gray-200 rounded-md px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-400"
        />
        {categories.length > 0 && (
          <select
            name="category"
            defaultValue={category}
            className="border border-gray-200 rounded-md px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-400 bg-white"
          >
            <option value="">전체 카테고리</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        )}
        <input
          name="from"
          type="date"
          defaultValue={from}
          className="border border-gray-200 rounded-md px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-400"
        />
        <input
          name="to"
          type="date"
          defaultValue={to}
          className="border border-gray-200 rounded-md px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-400"
        />
        <button
          type="submit"
          className="bg-slate-900 text-white px-4 py-2.5 rounded-md text-sm font-medium hover:bg-slate-800 transition duration-200"
        >
          검색
        </button>
        <button
          type="button"
          onClick={handleSortToggle}
          className="text-sm text-gray-500 hover:text-slate-900 transition duration-200 py-2.5 flex items-center gap-1"
        >
          작성일 {sort === 'desc' ? '↓' : '↑'}
        </button>
        {hasFilter && (
          <button
            type="button"
            onClick={() => router.push(pathname)}
            className="text-sm text-gray-400 hover:text-slate-600 transition duration-200"
          >
            초기화
          </button>
        )}
      </div>
    </form>
  )
}

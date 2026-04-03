import Link from 'next/link'
import { Suspense } from 'react'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { Category, Post } from '@/types'
import LogoutButton from './LogoutButton'
import PostSearch from '@/components/ui/PostSearch'
import PostsTable from './PostsTable'

export const dynamic = 'force-dynamic'

const ITEMS_PER_PAGE = 10

interface SearchParams {
  q?: string
  from?: string
  to?: string
  category?: string
  published?: string
  page?: string
}

interface DashboardPageProps {
  searchParams: SearchParams
}

async function getCategories(): Promise<Category[]> {
  const { data } = await supabaseAdmin.from('categories').select('*').order('name')
  return data ?? []
}

async function getPosts(
  p: SearchParams
): Promise<{ posts: Post[]; total: number }> {
  const page = Math.max(1, Number(p.page ?? 1))
  const offset = (page - 1) * ITEMS_PER_PAGE

  let query = supabaseAdmin
    .from('posts')
    .select('*, categories(id, name, color)', { count: 'exact' })

  if (p.q) query = query.or(`title.ilike.%${p.q}%,content.ilike.%${p.q}%`)
  if (p.from) query = query.gte('created_at', `${p.from}T00:00:00`)
  if (p.to) query = query.lte('created_at', `${p.to}T23:59:59`)
  if (p.category) query = query.eq('category_id', p.category)
  if (p.published === 'true') query = query.eq('is_published', true)
  if (p.published === 'false') query = query.eq('is_published', false)

  query = query
    .order('created_at', { ascending: false })
    .range(offset, offset + ITEMS_PER_PAGE - 1)

  const { data, count } = await query
  return { posts: (data ?? []) as Post[], total: count ?? 0 }
}

function buildHref(params: SearchParams, overrides: Partial<SearchParams>) {
  const merged = { ...params, ...overrides }
  const p = new URLSearchParams()
  if (merged.q) p.set('q', merged.q)
  if (merged.from) p.set('from', merged.from)
  if (merged.to) p.set('to', merged.to)
  if (merged.category) p.set('category', merged.category)
  if (merged.published) p.set('published', merged.published)
  if (merged.page && Number(merged.page) > 1) p.set('page', merged.page)
  return `/admin/dashboard${p.toString() ? `?${p.toString()}` : ''}`
}

export default async function AdminDashboardPage({ searchParams }: DashboardPageProps) {
  const [{ posts, total }, categories] = await Promise.all([
    getPosts(searchParams),
    getCategories(),
  ])

  const page = Math.max(1, Number(searchParams.page ?? 1))
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE)


  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <h1 className="text-base font-semibold text-slate-900">게시판 관리</h1>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-slate-600 transition duration-200"
            >
              사이트 보기
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>



      <main className="max-w-5xl mx-auto px-6 py-10">
        <Suspense>
          <PostSearch categories={categories} isAdmin />
        </Suspense>

        <PostsTable key={page} posts={posts} total={total} />

        {/* 페이지네이션 */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            {page > 1 ? (
              <Link
                href={buildHref(searchParams, { page: String(page - 1) })}
                className="px-3 py-1.5 text-sm border border-gray-200 rounded-md text-slate-600 hover:bg-gray-50 transition duration-200"
              >
                이전
              </Link>
            ) : (
              <span className="px-3 py-1.5 text-sm border border-gray-100 rounded-md text-gray-300 cursor-not-allowed">
                이전
              </span>
            )}

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(
                  (p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2
                )
                .reduce<(number | '...')[]>((acc, p, idx, arr) => {
                  if (idx > 0 && p - (arr[idx - 1] as number) > 1) acc.push('...')
                  acc.push(p)
                  return acc
                }, [])
                .map((p, idx) =>
                  p === '...' ? (
                    <span key={`ellipsis-${idx}`} className="px-1 text-gray-400 text-sm">
                      …
                    </span>
                  ) : (
                    <Link
                      key={p}
                      href={buildHref(searchParams, { page: String(p) })}
                      className={`w-8 h-8 flex items-center justify-center text-sm rounded-md transition duration-200 ${p === page
                        ? 'bg-slate-900 text-white'
                        : 'border border-gray-200 text-slate-600 hover:bg-gray-50'
                        }`}
                    >
                      {p}
                    </Link>
                  )
                )}
            </div>

            {page < totalPages ? (
              <Link
                href={buildHref(searchParams, { page: String(page + 1) })}
                className="px-3 py-1.5 text-sm border border-gray-200 rounded-md text-slate-600 hover:bg-gray-50 transition duration-200"
              >
                다음
              </Link>
            ) : (
              <span className="px-3 py-1.5 text-sm border border-gray-100 rounded-md text-gray-300 cursor-not-allowed">
                다음
              </span>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

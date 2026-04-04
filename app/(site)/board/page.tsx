import Link from 'next/link'
import { Suspense } from 'react'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { Post, Category } from '@/types'
import PostSearch from '@/components/ui/PostSearch'
import Container from '@/components/ui/Container'

export const dynamic = 'force-dynamic'

interface BoardPageProps {
  searchParams: { q?: string; from?: string; to?: string; category?: string; sort?: string }
}

async function getCategories(): Promise<Category[]> {
  const { data } = await supabaseAdmin.from('categories').select('*').order('name')
  return data ?? []
}

async function getPosts(p: BoardPageProps['searchParams']): Promise<Post[]> {
  let query = supabaseAdmin
    .from('posts')
    .select('*, categories(id, name, color)')
    .eq('is_published', true)

  if (p.q) query = query.or(`title.ilike.%${p.q}%,content.ilike.%${p.q}%`)
  if (p.from) query = query.gte('created_at', `${p.from}T00:00:00`)
  if (p.to) query = query.lte('created_at', `${p.to}T23:59:59`)
  if (p.category) query = query.eq('category_id', p.category)

  query = query.order('created_at', { ascending: p.sort === 'asc' })

  const { data } = await query
  return (data ?? []) as Post[]
}

export default async function BoardPage({ searchParams }: BoardPageProps) {
  const [posts, categories] = await Promise.all([getPosts(searchParams), getCategories()])

  return (
    <main className="pt-24">
      <Container className="gap-4">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">공지사항</h1>
          <p className="mt-3 text-gray-500 text-base">센터의 소식과 안내를 확인하세요.</p>
        </div>

        <Suspense>
          <PostSearch categories={categories} />
        </Suspense>

        {posts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-gray-400">게시글이 없습니다.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {posts.map((post, index) => (
              <Link key={post.id} href={`/board/${post.id}`} className="group block py-3 md:py-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6">
                  <div className="flex items-start gap-4 min-w-0">
                    <span className="text-sm text-gray-300 tabular-nums pt-0.5 shrink-0">
                      {String(posts.length - index).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        {post.categories && (
                          <span
                            className="text-xs font-medium shrink-0"
                            style={{ color: post.categories.color ?? '#f59e0b' }}
                          >
                            {post.categories.name}
                          </span>
                        )}
                        <h2 className="text-base font-medium text-slate-900 group-hover:text-amber-500 transition duration-200 line-clamp-1">
                          {post.title}
                        </h2>
                      </div>
                      <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                        {post.content}
                      </p>
                    </div>
                  </div>
                  <time className="text-sm text-gray-400 shrink-0 pt-0.5 text-right md:text-left">
                    {new Date(post.created_at).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </main>
  )
}

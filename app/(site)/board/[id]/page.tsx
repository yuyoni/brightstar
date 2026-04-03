import Link from 'next/link'
import { notFound } from 'next/navigation'
import { supabaseAdmin } from '@/lib/supabase-admin'
import ImageCarousel from '@/components/ui/ImageCarousel'
import PostNavigation from '@/components/ui/PostNavigation'

interface BoardDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function BoardDetailPage({ params }: BoardDetailPageProps) {
  const { id } = await params

  const { data: post, error } = await supabaseAdmin
    .from('posts')
    .select('*, categories(id, name)')
    .eq('id', id)
    .eq('is_published', true)
    .single()

  if (error || !post) notFound()

  // 이전글/다음글 (공개 게시글만)
  const [{ data: prevData }, { data: nextData }] = await Promise.all([
    supabaseAdmin
      .from('posts')
      .select('id, title')
      .eq('is_published', true)
      .lt('created_at', post.created_at)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle(),
    supabaseAdmin
      .from('posts')
      .select('id, title')
      .eq('is_published', true)
      .gt('created_at', post.created_at)
      .order('created_at', { ascending: true })
      .limit(1)
      .maybeSingle(),
  ])

  // 표시할 이미지 목록: image_urls 우선, 없으면 image_url 폴백
  const images: string[] =
    post.image_urls?.length
      ? post.image_urls
      : post.image_url
      ? [post.image_url]
      : []

  return (
    <main className="min-h-[70vh] max-w-3xl mx-auto px-6 py-24">
      <Link
        href="/board"
        className="inline-flex items-center text-sm text-gray-400 hover:text-slate-600 transition duration-200 mb-10"
      >
        ← 목록으로
      </Link>

      <article>
        <header className="mb-8 pb-8 border-b border-gray-100">
          {post.categories && (
            <span className="inline-block text-xs text-amber-500 font-medium mb-3">
              {post.categories.name}
            </span>
          )}
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-snug">
            {post.title}
          </h1>
          <time className="block mt-3 text-sm text-gray-400">
            {new Date(post.created_at).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </header>

        {/* 이미지 캐러셀 */}
        <ImageCarousel images={images} />

        <div className="text-base text-gray-600 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </article>

      {/* 이전/다음 글 */}
      <PostNavigation
        prev={prevData ?? null}
        next={nextData ?? null}
        basePath="/board"
      />
    </main>
  )
}

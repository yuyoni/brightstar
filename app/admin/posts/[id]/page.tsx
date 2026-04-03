import Link from 'next/link'
import { notFound } from 'next/navigation'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { Circle } from 'lucide-react'
import ImageCarousel from '@/components/ui/ImageCarousel'
import PostNavigation from '@/components/ui/PostNavigation'
import DeletePostButton from './DeletePostButton'

interface AdminPostDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function AdminPostDetailPage({ params }: AdminPostDetailPageProps) {
  const { id } = await params

  const { data: post, error } = await supabaseAdmin
    .from('posts')
    .select('*, categories(id, name, color)')
    .eq('id', id)
    .single()

  if (error || !post) notFound()

  // 이전글/다음글 (created_at 기준, admin은 전체 게시글 대상)
  const [{ data: prevData }, { data: nextData }] = await Promise.all([
    supabaseAdmin
      .from('posts')
      .select('id, title')
      .lt('created_at', post.created_at)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle(),
    supabaseAdmin
      .from('posts')
      .select('id, title')
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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/dashboard"
              className="text-sm text-gray-400 hover:text-slate-600 transition duration-200"
            >
              ← 목록으로
            </Link>
            <h1 className="text-base font-semibold text-slate-900">게시글 상세</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/admin/posts/${id}/edit`}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm text-slate-600 hover:bg-gray-50 transition duration-200"
            >
              수정
            </Link>
            <DeletePostButton id={id} />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          {/* 메타 정보 */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {post.categories && (
              <span className="inline-flex items-center gap-1 text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded">
                <Circle
                  size={8}
                  stroke="transparent"
                  fill={post.categories.color ?? '#94a3b8'}
                />
                {post.categories.name}
              </span>
            )}
            <span
              className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                post.is_published
                  ? 'bg-green-50 text-green-700'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {post.is_published ? '공개' : '비공개'}
            </span>
            <time className="text-xs text-gray-400 ml-auto">
              {new Date(post.created_at).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          {/* 제목 */}
          <h2 className="text-xl font-semibold text-slate-900 mb-6 leading-snug">
            {post.title}
          </h2>

          {/* 이미지 캐러셀 */}
          <ImageCarousel images={images} />

          {/* 내용 */}
          <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>

          {/* 이전/다음 글 */}
          <PostNavigation
            prev={prevData ?? null}
            next={nextData ?? null}
            basePath="/admin/posts"
          />
        </div>
      </main>
    </div>
  )
}

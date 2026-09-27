import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

// POST: 공개 - 조회수 1 증가 (중복 방지는 클라이언트 ViewTracker가 담당)
export async function POST(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const { data: post, error } = await supabaseAdmin
    .from('posts')
    .select('views')
    .eq('id', id)
    .eq('is_published', true)
    .single()

  if (error || !post) {
    return NextResponse.json({ error: '게시글을 찾을 수 없습니다.' }, { status: 404 })
  }

  const { error: updateError } = await supabaseAdmin
    .from('posts')
    .update({ views: post.views + 1 })
    .eq('id', id)

  if (updateError) {
    return NextResponse.json({ error: '조회수 반영에 실패했습니다.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

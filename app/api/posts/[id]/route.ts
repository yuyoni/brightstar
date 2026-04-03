import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { getAdminSession } from '@/lib/auth'

// GET: 어드민 전용 - 단일 글 조회 (수정 폼에서 사용)
export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 403 })
  }

  const { id } = await params

  const { data, error } = await supabaseAdmin
    .from('posts')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !data) {
    return NextResponse.json({ error: '게시글을 찾을 수 없습니다.' }, { status: 404 })
  }

  return NextResponse.json(data)
}

// PUT: 어드민 전용 - 글 수정
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 403 })
  }

  const { id } = await params
  const { title, content, is_published, category_id, image_urls } = await request.json()

  const { data, error } = await supabaseAdmin
    .from('posts')
    .update({ title, content, is_published, category_id: category_id ?? null, image_urls: image_urls ?? [] })
    .eq('id', id)
    .select()
    .single()

  if (error || !data) {
    return NextResponse.json({ error: '게시글 수정에 실패했습니다.' }, { status: 500 })
  }

  revalidatePath('/admin/dashboard')
  revalidatePath('/board')
  revalidatePath(`/board/${id}`)

  return NextResponse.json(data)
}

// DELETE: 어드민 전용 - 글 삭제
export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 403 })
  }

  const { id } = await params

  const { error } = await supabaseAdmin.from('posts').delete().eq('id', id)

  if (error) {
    return NextResponse.json({ error: '게시글 삭제에 실패했습니다.' }, { status: 500 })
  }

  revalidatePath('/admin/dashboard')
  revalidatePath('/board')

  return NextResponse.json({ success: true })
}

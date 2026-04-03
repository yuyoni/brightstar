import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { supabase } from '@/lib/supabase'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { getAdminSession } from '@/lib/auth'

// GET: 공개 - 발행된 글 목록
export async function GET() {
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, content, created_at')
    .eq('is_published', true)
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: '게시글을 불러오지 못했습니다.' }, { status: 500 })
  }

  return NextResponse.json(data)
}

// POST: 어드민 전용 - 글 생성
export async function POST(request: NextRequest) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 403 })
  }

  const { title, content, is_published, category_id, image_urls } = await request.json()

  if (!title || !content) {
    return NextResponse.json({ error: '제목과 내용을 입력해주세요.' }, { status: 400 })
  }

  const { data, error } = await supabaseAdmin
    .from('posts')
    .insert({ title, content, is_published: is_published ?? true, category_id: category_id ?? null, image_urls: image_urls ?? [] })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: '게시글 생성에 실패했습니다.' }, { status: 500 })
  }

  revalidatePath('/admin/dashboard')
  revalidatePath('/board')

  return NextResponse.json(data, { status: 201 })
}

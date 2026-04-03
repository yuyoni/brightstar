import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { getAdminSession } from '@/lib/auth'

export async function DELETE(request: NextRequest) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 403 })
  }

  const { ids } = await request.json()

  if (!Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json({ error: '삭제할 게시글 ID가 없습니다.' }, { status: 400 })
  }

  const { error } = await supabaseAdmin.from('posts').delete().in('id', ids)

  if (error) {
    return NextResponse.json({ error: '게시글 삭제에 실패했습니다.' }, { status: 500 })
  }

  revalidatePath('/admin/dashboard')
  revalidatePath('/board')

  return NextResponse.json({ success: true })
}

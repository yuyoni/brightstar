import { supabaseAdmin } from '@/lib/supabase-admin'
import { Category } from '@/types'
import { notFound } from 'next/navigation'
import EditPostForm from './EditPostForm'

interface EditPostPageProps {
  params: Promise<{ id: string }>
}

async function getCategories(): Promise<Category[]> {
  const { data } = await supabaseAdmin.from('categories').select('*').order('name')
  return data ?? []
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params

  const [{ data: post, error }, categories] = await Promise.all([
    supabaseAdmin.from('posts').select('*').eq('id', id).single(),
    getCategories(),
  ])

  if (error || !post) notFound()

  return <EditPostForm post={post} categories={categories} />
}

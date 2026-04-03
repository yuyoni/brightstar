import { supabaseAdmin } from '@/lib/supabase-admin'
import { Category } from '@/types'
import NewPostForm from './NewPostForm'

async function getCategories(): Promise<Category[]> {
  const { data } = await supabaseAdmin.from('categories').select('*').order('name')
  return data ?? []
}

export default async function NewPostPage() {
  const categories = await getCategories()
  return <NewPostForm categories={categories} />
}

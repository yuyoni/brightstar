import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// 서버 전용 클라이언트 - RLS 우회, 클라이언트에서 절대 사용 금지
// cache: 'no-store' — Next.js Data Cache 비활성화 (항상 최신 DB 데이터 조회)
export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
  global: {
    fetch: (url, options = {}) =>
      fetch(url, { ...options, cache: 'no-store' }),
  },
})

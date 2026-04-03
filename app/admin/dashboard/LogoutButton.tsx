'use client'

import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin')
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-gray-400 hover:text-slate-600 transition duration-200"
    >
      로그아웃
    </button>
  )
}

'use client'

import { useEffect } from 'react'

interface ViewTrackerProps {
  postId: string
}

// 같은 브라우저에서 24시간 내 재방문(새로고침 포함)은 조회수에 반영하지 않는다
const VIEW_TTL_MS = 24 * 60 * 60 * 1000

export default function ViewTracker({ postId }: ViewTrackerProps) {
  useEffect(() => {
    const key = `viewed:${postId}`

    try {
      const lastViewed = Number(localStorage.getItem(key))
      if (lastViewed && Date.now() - lastViewed < VIEW_TTL_MS) return
      // 요청 전에 기록해 StrictMode 이중 실행이나 빠른 연속 새로고침에도 한 번만 집계되도록 한다
      localStorage.setItem(key, String(Date.now()))
    } catch {
      // 저장소 접근이 막힌 환경(사생활 보호 모드 등)에서는 중복 방지 없이 집계한다
    }

    fetch(`/api/posts/${postId}/view`, { method: 'POST', keepalive: true }).catch(() => {})
  }, [postId])

  return null
}

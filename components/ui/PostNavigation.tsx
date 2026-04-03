import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface NavPost {
  id: string
  title: string
}

interface PostNavigationProps {
  prev: NavPost | null
  next: NavPost | null
  basePath: string
}

export default function PostNavigation({ prev, next, basePath }: PostNavigationProps) {
  if (!prev && !next) return null

  return (
    <div className="mt-12 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {prev ? (
        <Link
          href={`${basePath}/${prev.id}`}
          className="group flex items-center gap-3 border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition duration-200 min-w-0"
        >
          <ChevronLeft size={16} className="text-gray-400 shrink-0" />
          <div className="min-w-0">
            <p className="text-xs text-gray-400 mb-0.5">이전 글</p>
            <p className="text-sm text-slate-700 group-hover:text-slate-900 line-clamp-1 transition duration-200">
              {prev.title}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`${basePath}/${next.id}`}
          className="group flex items-center justify-end gap-3 border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition duration-200 min-w-0"
        >
          <div className="min-w-0 text-right">
            <p className="text-xs text-gray-400 mb-0.5">다음 글</p>
            <p className="text-sm text-slate-700 group-hover:text-slate-900 line-clamp-1 transition duration-200">
              {next.title}
            </p>
          </div>
          <ChevronRight size={16} className="text-gray-400 shrink-0" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}

import Link from 'next/link'

export default function AdminPostNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <p className="text-sm text-gray-400 mb-2">게시글을 찾을 수 없습니다.</p>
        <p className="text-xs text-gray-300 mb-8">삭제되었거나 존재하지 않는 게시글입니다.</p>
        <Link
          href="/admin/dashboard"
          className="bg-slate-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-800 transition duration-200"
        >
          목록으로 돌아가기
        </Link>
      </div>
    </div>
  )
}

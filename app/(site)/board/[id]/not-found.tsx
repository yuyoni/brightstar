import Link from 'next/link'

export default function BoardPostNotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm text-gray-400 mb-2">게시글을 찾을 수 없습니다.</p>
        <p className="text-xs text-gray-300 mb-8">삭제되었거나 존재하지 않는 게시글입니다.</p>
        <Link
          href="/board"
          className="bg-slate-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-800 transition duration-200"
        >
          목록으로 돌아가기
        </Link>
      </div>
    </main>
  )
}

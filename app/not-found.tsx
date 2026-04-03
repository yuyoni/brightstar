import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm text-gray-400 mb-4">404</p>
        <h1 className="text-2xl font-semibold text-slate-900 mb-3">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Link
          href="/"
          className="bg-slate-900 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-slate-800 transition duration-200"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  )
}

import { centerInfo } from "@/data/center"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{centerInfo.name}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              마음의 회복과 성장을 함께 걷는 공간입니다.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4 text-gray-300">연락처</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{centerInfo.phone}</p>
              <p>{centerInfo.email}</p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4 text-gray-300">주소</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              {centerInfo.address}
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © 2026 {centerInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

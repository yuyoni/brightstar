import Link from "next/link"
import { Award } from "lucide-react"
import Container from "../ui/Container"

export default function Qualification() {
  return (
    <section id="qualification" className="py-16 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* 텍스트 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-amber-400" />
              <p className="text-xs tracking-widest uppercase text-amber-400">
                한국직업능력연구원 등록 민간자격
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-snug">
              별자리 심리상담사<br />
              <span className="text-amber-400">공식 교육·자격 발급기관</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              빛나는 별 심리상담센터는 상담과 교육을 통합한 시스템을 통해 전문가를 양성합니다.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              교육과정 이수 후 소정의 평가를 거쳐 자격을 취득하고,
              상담·강의 활동으로 확장할 수 있는 기반을 마련하세요.
            </p>
            <Link
              href="/qualification"
              className="inline-block bg-amber-400 text-slate-900 px-6 py-3 rounded-md text-sm font-semibold hover:bg-amber-300 transition duration-200"
            >
              자격과정 자세히 보기
            </Link>
          </div>

          {/* 단계 카드 */}
          <div className="flex flex-col gap-4">
            {[
              { step: "01", level: "초급", title: "별자리 심리상담사 3급", desc: "기초 개념과 상담 입문" },
              { step: "02", level: "중급", title: "별자리 심리상담사 2급", desc: "심화 이론과 실습 역량 강화" },
              { step: "03", level: "고급", title: "별자리 심리상담사 1급", desc: "전문 상담사·강사 활동 준비" },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <span className="text-xs text-amber-400 font-mono tabular-nums shrink-0">{item.step}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                </div>
                <span className="text-xs text-gray-600 shrink-0">{item.level}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

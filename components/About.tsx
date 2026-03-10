import Container from "./Container"
import SectionTitle from "./SectionTitle"
import ScrollReveal from "./ScrollReveal"
import Link from "next/link"

export default function About() {
  return (
    <Container id="about">
      <ScrollReveal>
        <SectionTitle
          title="센터 소개"
          subtitle="빛나는 별 심리상담센터는 따뜻한 공감과 전문적인 상담을 통해 마음의 건강을 돕습니다."
        />
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ScrollReveal>
          <div>
            <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-4">
              우리의 철학
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              모든 사람은 스스로 치유하고 성장할 수 있는 내면의 힘을 가지고 있습니다.
              저희는 그 과정을 함께 걸어가는 동반자입니다.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              안전하고 편안한 환경에서 여러분의 이야기에 귀 기울이며,
              진정한 변화와 성장을 지원합니다.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div>
            <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-4">
              전문 분야
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-base md:text-lg text-gray-600">개인상담 및 심리치료</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-base md:text-lg text-gray-600">아동청소년 상담</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-base md:text-lg text-gray-600">가족 및 부부상담</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-base md:text-lg text-gray-600">트라우마 치료</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="mt-16 text-center">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-900 text-slate-900 font-medium rounded-md hover:bg-slate-900 hover:text-white transition-all duration-300"
          >
            <span>센터 소개 자세히 보기</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </ScrollReveal>
    </Container>
  )
}

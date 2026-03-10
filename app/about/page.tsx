import { Metadata } from "next"
import Container from "@/components/Container"
import SectionTitle from "@/components/SectionTitle"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "센터 소개 | 빛나는 별 심리상담센터",
  description: "빛나는 별 심리상담센터의 철학과 전문 분야를 소개합니다.",
}

export default function AboutPage() {
  return (
    <main className="pt-24">
      <Container>
        <ScrollReveal>
          <SectionTitle
            title="센터 소개"
            subtitle="빛나는 별 심리상담센터는 따뜻한 공감과 전문적인 상담을 통해 마음의 건강을 돕습니다."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
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
          <div className="bg-stone-50 rounded-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
              센터장 소개
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="aspect-square bg-gray-200 rounded-xl"></div>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  안녕하세요. 빛나는 별 심리상담센터 센터장입니다.
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  저는 20년 이상 심리상담 분야에서 활동하며 많은 내담자분들과 함께 성장해왔습니다.
                  상담은 단순히 문제를 해결하는 것이 아니라, 스스로를 이해하고 받아들이는 과정이라고 믿습니다.
                </p>

                <div className="mt-6">
                  <h4 className="text-lg font-medium text-slate-900 mb-3">학력 및 경력</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 서울대학교 심리학과 박사</li>
                    <li>• 한국상담심리학회 상담심리사 1급</li>
                    <li>• 전 ○○대학교 학생상담센터 센터장</li>
                    <li>• 현 빛나는 별 심리상담센터 센터장</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8 text-center">
              상담 공간
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-[4/3] bg-gray-100 rounded-xl"></div>
              <div className="aspect-[4/3] bg-gray-100 rounded-xl"></div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              편안하고 안전한 환경에서 상담을 진행합니다.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </main>
  )
}

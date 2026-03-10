import { Metadata } from "next"
import Container from "@/components/Container"
import SectionTitle from "@/components/SectionTitle"
import ScrollReveal from "@/components/ScrollReveal"
import Link from "next/link"

export const metadata: Metadata = {
  title: "상담 프로세스 | 빛나는 별 심리상담센터",
  description: "체계적이고 단계적인 상담 과정을 안내합니다.",
}

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "초기 상담",
      description:
        "전화 또는 온라인으로 상담 일정을 예약하고, 첫 만남에서 현재 상황을 나눕니다.",
      details: [
        "전화 또는 이메일로 상담 예약",
        "초기 면담을 통한 현재 상태 파악",
        "상담 목표 및 기대사항 논의",
        "상담자와의 라포 형성",
      ],
    },
    {
      number: "02",
      title: "상담 계획 수립",
      description:
        "상담 목표와 방향을 함께 설정하고, 개인에게 맞는 상담 계획을 수립합니다.",
      details: [
        "내담자의 욕구와 목표 명확화",
        "상담 방법 및 기법 선정",
        "상담 주기 및 기간 설정",
        "필요시 심리검사 실시",
      ],
    },
    {
      number: "03",
      title: "정기 상담 진행",
      description:
        "정해진 일정에 따라 상담을 진행하며, 변화와 성장 과정을 함께 점검합니다.",
      details: [
        "정기적인 상담 세션 진행",
        "치료적 개입 및 피드백",
        "과제 및 실천 사항 점검",
        "필요시 상담 계획 조정",
      ],
    },
    {
      number: "04",
      title: "종결 및 사후 관리",
      description:
        "목표 달성 후 상담을 마무리하며, 필요시 사후 관리를 진행합니다.",
      details: [
        "상담 목표 달성 평가",
        "종결 과정 논의 및 준비",
        "향후 대처 방안 수립",
        "필요시 추후 상담 안내",
      ],
    },
  ]

  return (
    <main className="pt-24">
      <Container>
        <ScrollReveal>
          <SectionTitle
            title="상담 프로세스"
            subtitle="체계적이고 단계적인 상담 과정을 통해 긍정적인 변화를 경험하실 수 있습니다."
          />
        </ScrollReveal>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number}>
              <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-12">
                <div className="flex gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <span className="text-5xl font-semibold text-amber-400">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="pl-0 md:pl-20">
                  <h4 className="text-lg font-medium text-slate-900 mb-3">주요 내용</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span className="text-base text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 bg-stone-50 rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
              상담을 시작하고 싶으신가요?
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              언제든지 편안한 마음으로 연락 주세요.
              첫 상담 예약부터 친절하게 안내해드리겠습니다.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-slate-900 text-white px-8 py-4 rounded-md hover:bg-slate-800 transition duration-300"
            >
              상담 예약하기
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </main>
  )
}

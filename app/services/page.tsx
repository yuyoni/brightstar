import { Metadata } from "next"
import Container from "@/components/Container"
import SectionTitle from "@/components/SectionTitle"
import ScrollReveal from "@/components/ScrollReveal"
import { services } from "@/data/services"
import Link from "next/link"

export const metadata: Metadata = {
  title: "상담 서비스 | 빛나는 별 심리상담센터",
  description: "개인상담, 아동청소년상담, 가족상담 등 전문적인 심리상담 서비스를 제공합니다.",
}

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <Container>
        <ScrollReveal>
          <SectionTitle
            title="상담 서비스"
            subtitle="전문적이고 따뜻한 상담을 통해 마음의 건강을 회복하도록 돕습니다."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollReveal key={service.id}>
              <div
                className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-400 mr-2 text-sm">✓</span>
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-stone-50 rounded-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
              상담 방식
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-slate-900 mb-3">대면 상담</h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  센터 내 편안한 상담실에서 안전하고 편안한 분위기 속에서 진행됩니다.
                  개인의 프라이버시가 완벽하게 보장됩니다.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-slate-900 mb-3">온라인 상담</h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  거리나 시간의 제약으로 방문이 어려운 경우, 화상 상담을 통해
                  전문적인 심리상담을 받으실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
              상담 시간 및 비용
            </h3>
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium text-slate-900 mb-3">상담 시간</h4>
                  <ul className="space-y-2 text-base text-gray-600">
                    <li>• 개인상담: 50분</li>
                    <li>• 부부/가족상담: 80분</li>
                    <li>• 아동상담: 40분</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900 mb-3">상담 비용</h4>
                  <p className="text-base text-gray-600 mb-2">
                    상담 유형에 따라 상이하며, 자세한 내용은 문의 주시기 바랍니다.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block text-sm text-slate-900 font-medium hover:text-amber-400 transition"
                  >
                    문의하기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </main>
  )
}

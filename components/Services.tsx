import Container from "./Container"
import SectionTitle from "./SectionTitle"
import ScrollReveal from "./ScrollReveal"
import Link from "next/link"
import { services } from "@/data/services"

export default function Services() {
  return (
    <Container id="services" className="bg-white">
      <ScrollReveal>
        <SectionTitle
          title="상담 서비스"
          subtitle="전문적이고 따뜻한 상담을 통해 마음의 건강을 회복하도록 돕습니다."
        />
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ScrollReveal key={service.id}>
            <div
              className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-sm transition duration-300"
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
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-900 text-slate-900 font-medium rounded-md hover:bg-slate-900 hover:text-white transition-all duration-300"
          >
            <span>상담 서비스 자세히 보기</span>
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

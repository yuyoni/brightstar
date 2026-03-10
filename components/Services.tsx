import Container from "./Container"
import SectionTitle from "./SectionTitle"
import { services } from "@/data/services"

export default function Services() {
  return (
    <Container className="bg-white">
      <SectionTitle
        title="상담 서비스"
        subtitle="전문적이고 따뜻한 상담을 통해 마음의 건강을 회복하도록 돕습니다."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-sm transition duration-300"
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
        ))}
      </div>
    </Container>
  )
}

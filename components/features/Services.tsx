import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import ScrollReveal from "../ui/ScrollReveal"
import Link from "next/link"
import homeData from "@/data/home.json"
import servicesData from "@/data/services.json"

const { services: section } = homeData

export default function Services() {
  return (
    <Container id="services" className="bg-white justify-center">
      <ScrollReveal>
        <SectionTitle title={section.section.title} subtitle={section.section.subtitle} />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ScrollReveal key={service.id}>
            <div
              className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-sm transition duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-3">{service.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
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
            href={section.cta.href}
            className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-900 text-slate-900 font-medium rounded-md hover:bg-slate-900 hover:text-white transition-all duration-300"
          >
            <span>{section.cta.text}</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </ScrollReveal>
    </Container>
  )
}

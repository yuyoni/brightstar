import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import ScrollReveal from "../ui/ScrollReveal"
import ServiceGrid from "../ui/ServiceGrid"
import Link from "next/link"
import homeData from "@/data/home.json"
import { services } from "@/data/services"

const { services: section } = homeData

export default function Services() {
  return (
    <Container id="services" className="bg-white justify-center">
      <ScrollReveal>
        <SectionTitle title={section.section.title} subtitle={section.section.subtitle} />
      </ScrollReveal>

      <ServiceGrid services={services} />

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

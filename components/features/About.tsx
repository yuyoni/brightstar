import { Baby, ClipboardCheck, HouseHeart, User, type LucideIcon } from "lucide-react"
import Link from "next/link"
import Container from "../ui/Container"
import ScrollReveal from "../ui/ScrollReveal"
import SectionTitle from "../ui/SectionTitle"
import homeData from "@/data/home.json"

const { about } = homeData

const iconMap: Record<string, LucideIcon> = {
  User,
  Baby,
  HouseHeart,
  ClipboardCheck,
}

export default function About() {
  return (
    <Container id="about" className="justify-center">
      <ScrollReveal>
        <SectionTitle title={about.section.title} subtitle={about.section.subtitle} />
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-8 text-center">전문 분야</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {about.specialties.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <div key={item.icon} className="border border-gray-200 rounded-xl p-6 bg-white flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-6 h-6 text-amber-400" />}
                  </div>
                  <h4 className="text-base font-medium text-slate-900 leading-snug">
                    {item.line1}<br />{item.line2}
                  </h4>
                </div>
              )
            })}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mt-16 text-center">
          <Link
            href={about.cta.href}
            className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-900 text-slate-900 font-medium rounded-md hover:bg-slate-900 hover:text-white transition-all duration-300"
          >
            <span>{about.cta.text}</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </ScrollReveal>
    </Container>
  )
}

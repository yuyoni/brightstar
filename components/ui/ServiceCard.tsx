import type { Service } from "@/types"
import IconMap from "./Icon"
import ScrollReveal from "./ScrollReveal"

interface ServiceCardProps {
  service: Service
  delay?: number
}

export default function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  const Icon = IconMap[service.icon]

  return (
    <ScrollReveal>
      <div
        className="h-full border border-gray-200 rounded-xl p-6 bg-white hover:shadow-sm transition duration-300"
        style={{ transitionDelay: `${delay}ms` }}
      >
        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-medium text-slate-900 mb-3">
          {Icon && <Icon className="w-6 h-6 text-amber-400" />}
          {service.title}
        </h3>
        <p className="text-base text-gray-600 leading-relaxed mb-4">{service.description}</p>
        <ul className="space-y-2">
          {service.details.map((detail) => (
            <li key={detail} className="flex items-start">
              <span className="text-amber-400 mr-2 text-sm">✓</span>
              <span className="text-sm text-gray-600">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  )
}

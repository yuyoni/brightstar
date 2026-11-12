import type { Service } from "@/types"
import ServiceCard from "./ServiceCard"

interface ServiceGridProps {
  services: Service[]
  className?: string
}

export default function ServiceGrid({ services, className = "" }: ServiceGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} delay={index * 100} />
      ))}
    </div>
  )
}

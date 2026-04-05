import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import ScrollReveal from "../ui/ScrollReveal"
import homeData from "@/data/home.json"

const { process } = homeData

export default function Process() {
  return (
    <Container id="process" className="bg-white">
      <ScrollReveal>
        <SectionTitle title={process.section.title} subtitle={process.section.subtitle} />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {process.steps.map((step, index) => (
          <ScrollReveal key={step.number}>
            <div className="flex gap-4" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="flex-shrink-0">
                <span className="text-4xl font-semibold text-amber-400">{step.number}</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-2">{step.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  )
}

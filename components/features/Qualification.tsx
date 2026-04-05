import Link from "next/link"
import { Award } from "lucide-react"
import homeData from "@/data/home.json"

const { qualification } = homeData

export default function Qualification() {
  return (
    <section id="qualification" className="py-16 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* 텍스트 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-amber-400" />
              <p className="text-xs tracking-widest uppercase text-amber-400">{qualification.badge}</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-snug">
              {qualification.heading}<br />
              <span className="text-amber-400">{qualification.subheading}</span>
            </h2>
            {qualification.descriptions.map((desc, i) => (
              <p key={i} className="text-gray-400 text-base leading-relaxed mb-4">{desc}</p>
            ))}
            <Link
              href={qualification.cta.href}
              className="inline-block bg-amber-400 text-slate-900 px-6 py-3 rounded-md text-sm font-semibold hover:bg-amber-300 transition duration-200"
            >
              {qualification.cta.text}
            </Link>
          </div>

          {/* 단계 카드 */}
          <div className="flex flex-col gap-4">
            {qualification.courses.map((item) => (
              <div key={item.step} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <span className="text-xs text-amber-400 font-mono tabular-nums shrink-0">{item.step}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                </div>
                <span className="text-xs text-gray-600 shrink-0">{item.level}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

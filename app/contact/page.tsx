import { Metadata } from "next"
import Container from "@/components/Container"
import SectionTitle from "@/components/SectionTitle"
import ScrollReveal from "@/components/ScrollReveal"
import { centerInfo } from "@/data/center"

export const metadata: Metadata = {
  title: "문의 및 예약 | 빛나는 별 심리상담센터",
  description: "상담 예약 및 문의는 전화 또는 이메일로 연락 주시기 바랍니다.",
}

export default function ContactPage() {
  return (
    <main className="pt-24">
      <Container>
        <ScrollReveal>
          <SectionTitle
            title="문의 및 예약"
            subtitle="전화 또는 이메일로 상담 예약이 가능합니다. 편안한 마음으로 연락 주세요."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          <ScrollReveal>
            <div>
              <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-6">
                센터 정보
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">주소</p>
                  <p className="text-base md:text-lg text-gray-600">
                    {centerInfo.address}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">전화</p>
                  <a
                    href={`tel:${centerInfo.phone.replace(/-/g, "")}`}
                    className="text-base md:text-lg text-slate-900 hover:text-amber-400 transition duration-300"
                  >
                    {centerInfo.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">이메일</p>
                  <a
                    href={`mailto:${centerInfo.email}`}
                    className="text-base md:text-lg text-slate-900 hover:text-amber-400 transition duration-300"
                  >
                    {centerInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-6">
                운영 시간
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">평일</p>
                  <p className="text-base md:text-lg text-gray-600">
                    {centerInfo.hours.weekday}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">주말</p>
                  <p className="text-base md:text-lg text-gray-600">
                    {centerInfo.hours.weekend}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8 text-center">
              오시는 길
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-400">지도가 여기에 표시됩니다</p>
                </div>
                <div className="p-6">
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    <strong className="text-slate-900">{centerInfo.name}</strong>
                    <br />
                    {centerInfo.address}
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  대중교통 또는 자가용으로 방문하실 수 있습니다.
                  <br />
                  주차 공간이 마련되어 있습니다.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-stone-50 rounded-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6 text-center">
              상담 예약 안내
            </h3>
            <div className="max-w-2xl mx-auto space-y-4 text-base text-gray-600">
              <p className="leading-relaxed">
                <strong className="text-slate-900">1.</strong> 전화 또는 이메일로 예약을 신청해주세요.
              </p>
              <p className="leading-relaxed">
                <strong className="text-slate-900">2.</strong> 상담사가 연락드려 일정을 조율합니다.
              </p>
              <p className="leading-relaxed">
                <strong className="text-slate-900">3.</strong> 예약 확정 후 방문 또는 온라인 상담을 진행합니다.
              </p>
              <div className="mt-8 text-center">
                <a
                  href={`tel:${centerInfo.phone.replace(/-/g, "")}`}
                  className="inline-block bg-slate-900 text-white px-8 py-4 rounded-md hover:bg-slate-800 transition duration-300"
                >
                  전화로 상담 예약하기
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </main>
  )
}

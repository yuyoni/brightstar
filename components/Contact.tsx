import Container from "./Container"
import SectionTitle from "./SectionTitle"
import { centerInfo } from "@/data/center"

export default function Contact() {
  return (
    <Container className="bg-white" id="contact">
      <SectionTitle
        title="문의 및 예약"
        subtitle="전화 또는 이메일로 상담 예약이 가능합니다. 편안한 마음으로 연락 주세요."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
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
                href={`tel:${centerInfo.phone.replace(/-/g, '')}`}
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
      </div>
      <div className="mt-12 text-center">
        <a
          href={`tel:${centerInfo.phone.replace(/-/g, '')}`}
          className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-800 transition duration-300"
        >
          전화로 상담 예약하기
        </a>
      </div>
    </Container>
  )
}

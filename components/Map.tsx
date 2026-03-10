import Container from "./Container"
import SectionTitle from "./SectionTitle"
import { centerInfo } from "@/data/center"

export default function Map() {
  return (
    <Container className="bg-stone-50">
      <SectionTitle
        title="오시는 길"
        subtitle="부산 북구 화명동에 위치한 편안한 상담 공간입니다."
      />
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
    </Container>
  )
}

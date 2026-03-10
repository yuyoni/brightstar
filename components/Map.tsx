import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";
import KakaoMap from "./KakaoMap";
import { centerInfo } from "@/data/center";

export default function Map() {
    return (
        <Container className="bg-white">
            <ScrollReveal>
                <SectionTitle
                    title="오시는 길"
                    subtitle="부산 북구 화명동에 위치한 편안한 상담 공간입니다."
                />
            </ScrollReveal>
            <ScrollReveal>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                        <KakaoMap
                            address="부산 북구 화명신도시로 129"
                            detailAddress="부산 북구 화명신도시로 129 골든프라자 7층"
                        />
                        <div className="p-6">
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                <strong className="text-slate-900">
                                    {centerInfo.name}
                                </strong>
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
            </ScrollReveal>
        </Container>
    );
}

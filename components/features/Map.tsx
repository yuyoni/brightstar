import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import KakaoMap from "./KakaoMap";
import { centerInfo } from "@/data/center";

export default function Map() {
    return (
        <Container className="bg-white">
            <ScrollReveal>
                <SectionTitle
                    title="오시는 길"
                    subtitle="주차 공간이 마련되어 있어 대중교통 또는 자가용으로 방문하실 수 있습니다."
                />
            </ScrollReveal>
            <ScrollReveal>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                        <KakaoMap
                            address={centerInfo.shortAddress}
                            detailAddress={centerInfo.address}
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
                </div>
            </ScrollReveal>
        </Container>
    );
}

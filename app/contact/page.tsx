import { Metadata } from "next";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import { centerInfo } from "@/data/center";
import Map from "@/components/Map";

export const metadata: Metadata = {
    title: "문의 및 예약 | 빛나는 별 심리상담센터",
    description: "상담 예약 및 문의는 전화 또는 이메일로 연락 주시기 바랍니다.",
};

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
                                    <p className="text-sm text-gray-400 mb-1">
                                        주소
                                    </p>
                                    <p className="text-base md:text-lg text-gray-600">
                                        {centerInfo.address}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">
                                        전화
                                    </p>
                                    <a
                                        href={`tel:${centerInfo.phone.replace(/-/g, "")}`}
                                        className="text-base md:text-lg text-slate-900 hover:text-amber-400 transition duration-300"
                                    >
                                        {centerInfo.phone}
                                    </a>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">
                                        이메일
                                    </p>
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
                                    <p className="text-sm text-gray-400 mb-1">
                                        평일
                                    </p>
                                    <p className="text-base md:text-lg text-gray-600">
                                        {centerInfo.hours.weekday}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">
                                        주말
                                    </p>
                                    <p className="text-base md:text-lg text-gray-600">
                                        {centerInfo.hours.weekend}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal>
                    <Map />
                </ScrollReveal>
            </Container>
        </main>
    );
}

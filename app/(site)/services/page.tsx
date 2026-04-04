import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { services } from "@/data/services";
import Link from "next/link";

export const metadata: Metadata = {
    title: "상담 서비스 | 빛나는 별 심리상담센터",
    description:
        "개인상담, 아동청소년상담, 가족상담 등 전문적인 심리상담 서비스를 제공합니다.",
};

export default function ServicesPage() {
    return (
        <main className="pt-24">
            <Container className="gap-4">
                <ScrollReveal>
                    <SectionTitle
                        title="상담 서비스"
                        subtitle="전문적이고 따뜻한 상담을 통해 마음의 건강을 회복하도록 돕습니다."
                    />
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <ScrollReveal key={service.id}>
                            <div
                                className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition duration-300"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.details.map((detail, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start"
                                        >
                                            <span className="text-amber-400 mr-2 text-sm">
                                                ✓
                                            </span>
                                            <span className="text-sm text-gray-600">
                                                {detail}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal>
                    <div className="mt-16">
                        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                            상담 방식
                        </h3>
                        <div className="bg-white border border-gray-200 rounded-xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-lg font-medium text-slate-900 mb-3">
                                        대면 상담
                                    </h4>
                                    <p className="text-base text-gray-600 leading-relaxed">
                                        센터 내 편안한 상담실에서 안전하고 편안한
                                        분위기 속에서 진행됩니다. 개인의
                                        프라이버시가 완벽하게 보장됩니다.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-slate-900 mb-3">
                                        온라인 상담
                                    </h4>
                                    <p className="text-base text-gray-600 leading-relaxed">
                                        센터 내 편안한 상담실에서 안전하고 편안한
                                        분위기 속에서 진행됩니다. 개인의
                                        프라이버시가 완벽하게 보장됩니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="mt-16">
                        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                            상담 시간 및 비용
                        </h3>
                        <div className="bg-white border border-gray-200 rounded-xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-lg font-medium text-slate-900 mb-3">
                                        상담 시간
                                    </h4>
                                    <ul className="space-y-2 text-base text-gray-600">
                                        <li>• 개인상담: 50분</li>
                                        <li>• 부부/가족상담: 80분</li>
                                        <li>• 아동상담: 40분</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-slate-900 mb-3">
                                        상담 비용
                                    </h4>
                                    <p className="text-base text-gray-600 mb-2">
                                        상담 유형에 따라 상이하며, 자세한 내용은
                                        문의 주시기 바랍니다.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-block text-sm text-slate-900 font-medium hover:text-amber-400 transition"
                                    >
                                        문의하기 →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* 상담 절차 */}
                <ScrollReveal>
                    <div className="mt-24">
                        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3 text-center">
                            상담 절차
                        </h3>
                        <p className="text-base text-gray-500 text-center mb-12">
                            체계적이고 단계적인 상담 과정을 통해 긍정적인 변화를 경험하실 수 있습니다.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    number: "01",
                                    title: "초기 상담",
                                    description: "전화 또는 온라인으로 상담 일정을 예약하고, 첫 만남에서 현재 상황을 나눕니다.",
                                    details: ["전화 또는 이메일로 상담 예약", "초기 면담을 통한 현재 상태 파악", "상담 목표 및 기대사항 논의", "상담자와의 라포 형성"],
                                },
                                {
                                    number: "02",
                                    title: "상담 계획 수립",
                                    description: "상담 목표와 방향을 함께 설정하고, 개인에게 맞는 상담 계획을 수립합니다.",
                                    details: ["내담자의 욕구와 목표 명확화", "상담 방법 및 기법 선정", "상담 주기 및 기간 설정", "필요시 심리검사 실시"],
                                },
                                {
                                    number: "03",
                                    title: "정기 상담 진행",
                                    description: "정해진 일정에 따라 상담을 진행하며, 변화와 성장 과정을 함께 점검합니다.",
                                    details: ["정기적인 상담 세션 진행", "치료적 개입 및 피드백", "과제 및 실천 사항 점검", "필요시 상담 계획 조정"],
                                },
                                {
                                    number: "04",
                                    title: "종결 및 사후 관리",
                                    description: "목표 달성 후 상담을 마무리하며, 필요시 사후 관리를 진행합니다.",
                                    details: ["상담 목표 달성 평가", "종결 과정 논의 및 준비", "향후 대처 방안 수립", "필요시 추후 상담 안내"],
                                },
                            ].map((step) => (
                                <div key={step.number} className="bg-white border border-gray-200 rounded-xl p-6">
                                    <div className="flex gap-4 mb-4">
                                        <span className="text-3xl font-semibold text-amber-400 tabular-nums shrink-0">{step.number}</span>
                                        <div>
                                            <h4 className="text-lg font-medium text-slate-900 mb-1">{step.title}</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-1.5 pl-1">
                                        {step.details.map((d) => (
                                            <li key={d} className="flex items-start gap-2 text-sm text-gray-600">
                                                <span className="text-amber-400 shrink-0">✓</span>
                                                {d}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="mt-16 rounded-xl p-8 md:p-12 text-center">
                        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
                            상담을 시작하고 싶으신가요?
                        </h3>
                        <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto">
                            언제든지 편안한 마음으로 연락 주세요. 첫 상담 예약부터 친절하게 안내해드리겠습니다.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-slate-900 text-white px-8 py-4 rounded-md hover:bg-slate-800 transition duration-300"
                        >
                            상담 예약하기
                        </Link>
                    </div>
                </ScrollReveal>
            </Container>
        </main>
    );
}

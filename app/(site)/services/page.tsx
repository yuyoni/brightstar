import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { services } from "@/data/services";
import consultationData from "@/data/consultation.json";
import Link from "next/link";
import IconMap from "@/components/ui/Icon";

export const metadata: Metadata = {
    title: "상담 서비스 | 빛나는 별 심리상담센터",
    description:
        "개인상담, 아동청소년상담, 가족상담 등 전문적인 심리상담 서비스를 제공합니다.",
};

const { methods, duration, process } = consultationData;

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {

                        services.map((service, index) => {
                            const Icon = IconMap[service.icon]

                            return <ScrollReveal key={service.id}>
                                <div
                                    className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition duration-300"
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <h3 className="flex items-center gap-2 text-xl md:text-2xl font-medium text-slate-900 mb-3">
                                        <Icon className="w-6 h-6 text-amber-400" /> {service.title}
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
                        })}
                </div>

                <ScrollReveal>
                    <div className="mt-16">
                        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                            상담 방식
                        </h3>
                        <div className="bg-white border border-gray-200 rounded-xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {methods.map((method) => (
                                    <div key={method.title}>
                                        <h4 className="text-lg font-medium text-slate-900 mb-3">
                                            {method.title}
                                        </h4>
                                        <p className="text-base text-gray-600 leading-relaxed">
                                            {method.description}
                                        </p>
                                    </div>
                                ))}
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
                                        {duration.map((d) => (
                                            <li key={d}>• {d}</li>
                                        ))}
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
                                        href="/#contact"
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
                            {process.map((step) => (
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
                            href="/#contact"
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

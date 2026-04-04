import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import Link from "next/link";

export default function Process() {
    const steps = [
        {
            number: "01",
            title: "초기 상담",
            description:
                "전화 또는 온라인으로 상담 일정을 예약하고, 첫 만남에서 현재 상황을 나눕니다.",
        },
        {
            number: "02",
            title: "상담 계획 수립",
            description:
                "상담 목표와 방향을 함께 설정하고, 개인에게 맞는 상담 계획을 수립합니다.",
        },
        {
            number: "03",
            title: "정기 상담 진행",
            description:
                "정해진 일정에 따라 상담을 진행하며, 변화와 성장 과정을 함께 점검합니다.",
        },
        {
            number: "04",
            title: "종결 및 사후 관리",
            description:
                "목표 달성 후 상담을 마무리하며, 필요시 사후 관리를 진행합니다.",
        },
    ];

    return (
        <Container id="process" className="bg-white">
            <ScrollReveal>
                <SectionTitle
                    title="상담 절차"
                    subtitle="체계적이고 단계적인 상담 과정을 통해 긍정적인 변화를 경험하실 수 있습니다."
                />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {steps.map((step, index) => (
                    <ScrollReveal key={step.number}>
                        <div
                            className="flex gap-4"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex-shrink-0">
                                <span className="text-4xl font-semibold text-amber-400">
                                    {step.number}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            <ScrollReveal>
                <div className="mt-16 text-center">
                    <Link
                        href="/process"
                        className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-900 text-slate-900 font-medium rounded-md hover:bg-slate-900 hover:text-white transition-all duration-300"
                    >
                        <span>상담 절차 자세히 보기</span>
                        <svg
                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </ScrollReveal>
        </Container>
    );
}

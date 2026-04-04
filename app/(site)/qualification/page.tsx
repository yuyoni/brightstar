import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { Award, BookOpen, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
    title: "자격과정 | 빛나는 별 심리상담센터",
    description:
        "한국직업능력연구원 등록 민간자격 '별자리 심리상담사' 공식 교육·자격 발급기관. 상담을 넘어 전문가를 양성합니다.",
};

const courses = [
    {
        level: "초급",
        title: "별자리 심리상담사 3급",
        description: "별자리 심리학의 기초 개념과 상담 입문 과정",
        duration: "8주 과정",
    },
    {
        level: "중급",
        title: "별자리 심리상담사 2급",
        description: "심화 이론과 실습 중심의 상담 역량 강화 과정",
        duration: "12주 과정",
    },
    {
        level: "고급",
        title: "별자리 심리상담사 1급",
        description: "전문 상담사 및 강사 활동을 위한 심화 자격 과정",
        duration: "16주 과정",
    },
];

const features = [
    {
        icon: Award,
        title: "공식 자격 발급",
        description: "한국직업능력연구원 등록 민간자격으로 소정의 평가 후 자격증이 발급됩니다.",
    },
    {
        icon: BookOpen,
        title: "체계적인 교육과정",
        description: "초급·중급·고급 단계별 커리큘럼으로 이론과 실습을 균형 있게 학습합니다.",
    },
    {
        icon: Users,
        title: "현장 중심 양성",
        description: "실제 상담 현장에서 바로 활용 가능한 실전형 전문가를 양성합니다.",
    },
    {
        icon: TrendingUp,
        title: "활동 영역 확장",
        description: "자격 취득 후 상담·강의·교육 등 다양한 전문 활동으로 확장할 수 있습니다.",
    },
];

export default function QualificationPage() {
    return (
        <main className="pt-24">
            <Container className="gap-4">

                {/* 헤더 */}
                <ScrollReveal>
                    <SectionTitle
                        title="자격과정"
                        subtitle="빛나는 별 심리상담센터는 상담과 교육을 통합한 시스템으로 전문가를 양성합니다."
                    />
                </ScrollReveal>

                {/* 자격 인증기관 안내 */}
                <ScrollReveal>
                    <div className="bg-slate-900 text-white rounded-xl p-8 md:p-12 mb-16">
                        <div className="max-w-2xl">
                            <p className="text-xs tracking-widest uppercase text-amber-400 mb-4">공식 인증기관</p>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
                                별자리 심리상담사<br />
                                공식 교육·자격 발급기관
                            </h3>
                            <p className="text-gray-300 text-base leading-relaxed mb-4">
                                빛나는 별 심리상담센터는 한국직업능력연구원에 등록된 민간자격
                                '별자리 심리상담사'의 교육 및 자격 발급기관입니다.
                            </p>
                            <p className="text-gray-300 text-base leading-relaxed">
                                본 센터의 교육과정을 이수한 수강생은 소정의 평가를 거쳐 자격 취득이 가능하며,
                                상담 및 강의 활동으로 확장할 수 있는 기반을 마련할 수 있습니다.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* 특장점 4개 */}
                <ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {features.map((f) => (
                            <div key={f.title} className="border border-gray-200 rounded-xl p-6 bg-white flex gap-5 items-start">
                                <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                                    <f.icon className="w-5 h-5 text-amber-400" />
                                </div>
                                <div>
                                    <h4 className="text-base font-semibold text-slate-900 mb-1">{f.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* 과정 단계 */}
                <ScrollReveal>
                    <div className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8 text-center">
                            교육 과정
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {courses.map((course, i) => (
                                <div key={course.level} className="border border-gray-200 rounded-xl p-6 bg-white relative overflow-hidden">
                                    <span className="absolute top-4 right-4 text-xs font-medium text-amber-400 border border-amber-200 rounded-full px-2.5 py-0.5">
                                        {course.level}
                                    </span>
                                    <p className="text-xs text-gray-400 mb-2">STEP {i + 1}</p>
                                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{course.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{course.description}</p>
                                    <p className="text-xs text-gray-400">{course.duration}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* CTA */}
                <p className="w-full text-base text-center text-gray-600 mb-8 leading-relaxed">
                    교육 일정, 비용, 세부 커리큘럼 등 자격 과정에 대한 자세한 내용은 문의를 통해 안내드립니다.
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-slate-900 text-white px-8 py-3 rounded-md text-sm mx-auto font-medium hover:bg-slate-800 transition duration-200"
                >
                    문의하기
                </Link>

            </Container>
        </main >
    );
}

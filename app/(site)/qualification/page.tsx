import { Metadata } from "next";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { Award, BookOpen, Users, TrendingUp, LucideIcon } from "lucide-react";
import qualificationData from "@/data/qualification.json";

export const metadata: Metadata = {
    title: "자격과정 | 빛나는 별 심리상담센터",
    description:
        "한국직업능력연구원 등록 민간자격 '별자리 심리상담사' 공식 교육·자격 발급기관. 상담을 넘어 전문가를 양성합니다.",
};

const iconMap: Record<string, LucideIcon> = { Award, BookOpen, Users, TrendingUp };

const { courses, features } = qualificationData;

export default function QualificationPage() {
    return (
        <main className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen pt-24">
            <Container className="gap-4">

                {/* 헤더 */}
                <ScrollReveal>
                    <div className="mb-16">
                        <p className="text-xs tracking-widest uppercase text-amber-400 mb-4">Qualification</p>
                        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">자격과정</h2>
                        <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
                            빛나는 별 심리상담센터는 상담과 교육을 통합한 시스템으로 전문가를 양성합니다.
                        </p>
                    </div>
                </ScrollReveal>

                {/* 자격 인증기관 안내 */}
                <ScrollReveal>
                    <div className="border border-slate-600 rounded-xl p-8 md:p-12 mb-16">
                        <div className="max-w-2xl">
                            <p className="text-xs tracking-widest uppercase text-amber-400 mb-4">공식 인증기관</p>
                            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 leading-snug">
                                별자리 심리상담사<br />
                                공식 교육·자격 발급기관
                            </h3>
                            <p className="text-gray-400 text-base leading-relaxed mb-4">
                                빛나는 별 심리상담센터는 한국직업능력연구원에 등록된 민간자격
                                [별자리 심리상담사]의 교육 및 자격 발급기관입니다.
                            </p>
                            <p className="text-gray-400 text-base leading-relaxed">
                                본 센터의 교육과정을 이수한 수강생은 소정의 평가를 거쳐 자격 취득이 가능하며,
                                상담 및 강의 활동으로 확장할 수 있는 기반을 마련할 수 있습니다.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* 특장점 4개 */}
                <ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {features.map((f) => {
                            const Icon = iconMap[f.icon];
                            return (
                                <div key={f.title} className="border border-slate-600 rounded-xl p-6 bg-slate-700 flex gap-5 items-start">
                                    <div className="w-11 h-11 rounded-full bg-amber-400/10 flex items-center justify-center shrink-0">
                                        <Icon className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-semibold text-white mb-1">{f.title}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">{f.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </ScrollReveal>

                {/* 과정 단계 */}
                <ScrollReveal>
                    <div className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center">
                            교육 과정
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {courses.map((course, i) => (
                                <div key={course.level} className="border border-slate-600 rounded-xl p-6 bg-slate-700 relative overflow-hidden">
                                    <span className="absolute top-4 right-4 text-xs font-medium text-amber-400 border border-amber-400/30 rounded-full px-2.5 py-0.5">
                                        {course.level}
                                    </span>
                                    <p className="text-xs text-amber-400/60 mb-2">STEP {i + 1}</p>
                                    <h4 className="text-lg font-semibold text-white mb-2">{course.title}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{course.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* CTA */}
                <p className="w-full text-base text-center text-gray-400 mb-8 leading-relaxed">
                    교육 일정, 비용, 세부 커리큘럼 등 자격 과정에 대한 자세한 내용은 문의를 통해 안내드립니다.
                </p>
                <Link
                    href="/#contact"
                    className="inline-block bg-amber-400 text-slate-900 px-8 py-3 rounded-md text-sm mx-auto font-semibold hover:bg-amber-300 transition duration-200"
                >
                    문의하기
                </Link>

            </Container>
        </main>
    );
}

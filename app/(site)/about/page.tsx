import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import aboutData from "@/data/about.json";

export const metadata: Metadata = {
    title: "센터 소개 | 빛나는 별 심리상담센터",
    description: "빛나는 별 심리상담센터의 철학과 전문 분야를 소개합니다.",
};

const { director } = aboutData;

export default function AboutPage() {
    return (
        <main className="pt-24">
            <Container>
                <ScrollReveal>
                    <SectionTitle
                        title="센터 소개"
                        subtitle="빛나는 별 심리상담센터는 따뜻한 공감과 전문적인 상담을 통해 마음의 건강을 돕습니다."
                        subtitleClassName="text-gray-700"
                    />
                </ScrollReveal>

                <ScrollReveal>
                    <div className="bg-stone-50 rounded-xl p-8 md:p-12 mb-16">
                        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">
                            센터장 소개
                        </h3>

                        {/* 프로필 영역 */}
                        <div className="flex flex-col sm:flex-row gap-8 mb-10">
                            <div className="w-full sm:w-40 shrink-0">
                                <div className="aspect-[3/4] bg-gray-200 rounded-xl w-full sm:w-40"></div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-base font-medium text-slate-900 mb-1">{director.name}</p>
                                <div className="w-8 h-px bg-amber-400 mb-4"></div>
                                {director.bio.map((paragraph, i) => (
                                    <p key={i} className="text-base text-gray-700 leading-relaxed mb-3">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* 자격·경력 2단 */}
                        <div className="border-t border-gray-200 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">자격 및 면허</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    {director.qualifications.map((q) => (
                                        <li key={q}>• {q}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">강의 및 활동 경력</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    {director.career.map((c) => (
                                        <li key={c}>• {c}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="mt-16">
                        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8 text-center">
                            상담 공간
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                                <Image src="/place1.jpeg" alt="센터 공간 1" fill className="object-cover" />
                            </div>
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                                <Image src="/place2.jpeg" alt="센터 공간 2" fill className="object-cover" />
                            </div>
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                                <Image src="/place3.jpeg" alt="센터 공간 3" fill className="object-cover" />
                            </div>
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                                <Image src="/place4.jpeg" alt="센터 공간 4" fill className="object-cover" />
                            </div>
                        </div>
                        <p className="text-center text-sm text-gray-600 mt-4">
                            편안하고 안전한 환경에서 상담을 진행합니다.
                        </p>
                    </div>
                </ScrollReveal>
            </Container>
        </main>
    );
}

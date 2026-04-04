import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { User, Baby, HouseHeart, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "센터 소개 | 빛나는 별 심리상담센터",
    description: "빛나는 별 심리상담센터의 철학과 전문 분야를 소개합니다.",
};

export default function AboutPage() {
    return (
        <main className="pt-24">
            <Container>
                <ScrollReveal>
                    <SectionTitle
                        title="센터 소개"
                        subtitle="빛나는 별 심리상담센터는 따뜻한 공감과 전문적인 상담을 통해 마음의 건강을 돕습니다."
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
                                <p className="text-base font-medium text-slate-900 mb-1">센터장 이남주</p>
                                <div className="w-8 h-px bg-amber-400 mb-4"></div>
                                <p className="text-base text-gray-600 leading-relaxed mb-3">
                                    우리는 인공지능이 발전한 시대에 살고 있지만, 인간의 복잡하고 미묘한 마음까지 완전히 이해하기는 어렵습니다.
                                    그래서 심리상담은 여전히 사람의 공감과 이해가 필요한 소중한 영역입니다.
                                </p>
                                <p className="text-base text-gray-600 leading-relaxed mb-3">
                                    ‘빛나는 별’ 심리상담센터에는 각기 다른 삶의 이야기와 상처를 가진 분들이 찾아옵니다.
                                    밤하늘의 별처럼, 여러분 모두는 저마다 빛날 자격이 있는 소중한 존재입니다.
                                </p>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    마음이 힘들 때 혼자 견디려 하지 마세요. 언제든 상담센터의 문을 두드리시면, 여러분의 이야기를 함께 나누며 다시 빛날 수 있도록 진심으로 돕겠습니다.
                                </p>
                            </div>
                        </div>

                        {/* 자격·경력 2단 */}
                        <div className="border-t border-gray-200 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">자격 및 면허</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• 심리 상담사 수련</li>
                                    <li>• 정신건강상담사(전문가) (보건복지부 / 한국미술치료상담학회)</li>
                                    <li>• 임상심리사 2급 (보건복지부 / 한국산업인력공단)</li>
                                    <li>• 평생교육사 2급 (교육부 / 국가평생교육진흥원)</li>
                                    <li>• 미술심리상담사 1급 (한국미술치료상담학회)</li>
                                    <li>• 가정폭력 상담원 수료 (부산여성의전화)</li>
                                    <li>• 고전읽기 공동탐구 지도사 (부산교육대학교 교육대학원)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">강의 및 활동 경력</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• 부산시 교육청(남부·서부·북부) 교육공무직 대상 직무연수 강사</li>
                                    <li>• 공공 기관, 대기업, 중소기업, 공무원, 교직원 등 근로자 정신 건강 지원 프로그램(EAP)상담 협약 기관운영</li>
                                    <li>• 공공기관 및 지역사회 연계 집단상담 진행</li>
                                    <li>• 별자리 심리학 초급·중급·고급 과정 강의 운영</li>
                                    <li>• 부경대학교 미래교육원 별자리심리상담사 자격과정 강의</li>
                                    <li>• 기장군민대학(부산디지털대하교)인문학여행기 강사</li>
                                    <li>• 현대백화점 문화센터 별자리 심리학 강사</li>
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
                        <p className="text-center text-sm text-gray-500 mt-4">
                            편안하고 안전한 환경에서 상담을 진행합니다.
                        </p>
                    </div>
                </ScrollReveal>
            </Container>
        </main>
    );
}

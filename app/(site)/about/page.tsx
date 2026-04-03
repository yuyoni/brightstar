import { Metadata } from "next";
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
                    <div className="mb-16">
                        <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-8 text-center">
                            전문 분야
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="border border-gray-200 rounded-xl p-6 bg-white flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                                    <User className="w-6 h-6 text-amber-400" />
                                </div>
                                <h4 className="text-base font-medium text-slate-900 leading-snug">
                                    개인상담<br />및 심리치료
                                </h4>
                            </div>
                            <div className="border border-gray-200 rounded-xl p-6 bg-white flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                                    <Baby className="w-6 h-6 text-amber-400" />
                                </div>
                                <h4 className="text-base font-medium text-slate-900 leading-snug">
                                    아동청소년<br />상담
                                </h4>
                            </div>
                            <div className="border border-gray-200 rounded-xl p-6 bg-white flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                                    <HouseHeart className="w-6 h-6 text-amber-400" />
                                </div>
                                <h4 className="text-base font-medium text-slate-900 leading-snug">
                                    가족 및<br />부부상담
                                </h4>
                            </div>
                            <div className="border border-gray-200 rounded-xl p-6 bg-white flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                                    <ClipboardCheck className="w-6 h-6 text-amber-400" />
                                </div>
                                <h4 className="text-base font-medium text-slate-900 leading-snug">
                                    MMPI, TCI, <br />웩슬러 지능검사
                                </h4>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="bg-stone-50 rounded-xl p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                            센터장 소개
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                <div className="aspect-square bg-gray-200 rounded-xl"></div>
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                    안녕하세요. 빛나는 별 심리상담센터
                                    센터장 이남주 입니다.
                                </p>
                                <p className="text-base text-gray-600 leading-relaxed mb-4">
                                우리는 인공지능이 발전한 시대에 살고 있지만, 인간의 복잡하고 미묘한 마음까지 완전히 이해하기는 어렵습니다. 
                                그래서 심리상담은 여전히 사람의 공감과 이해가 필요한 소중한 영역입니다.<br /><br />

                                ‘빛나는 별’ 심리상담센터에는 각기 다른 삶의 이야기와 상처를 가진 분들이 찾아옵니다.<br />
                                밤하늘의 별처럼, 여러분 모두는 저마다 빛날 자격이 있는 소중한 존재입니다.<br /><br />
                                마음이 힘들 때 혼자 견디려 하지 마세요. 언제든 상담센터의 문을 두드리시면, 여러분의 이야기를 함께 나누며 다시 빛날 수 있도록 진심으로 돕겠습니다.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-lg font-medium text-slate-900 mb-3">
                                약력
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• 심리 상담사 수련</li>
                                <li>
                                    • 공공 기관, 대기업, 중소기업, 공무원, 교직원 등 근로자 정신 건강 지원 프로그램(EAP)상담 협약 기관
                                </li>
                                <li>
                                    • 평생교육사
                                </li>
                                <li>
                                    • 임상심리사
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-lg font-medium text-slate-900 mb-3">
                                활동
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• 부경대학교 미래교육원 - 별자리 심리상담사 자격과정</li> 
                            </ul>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="mt-16">
                        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8 text-center">
                            상담 공간
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="aspect-[4/3] bg-gray-100 rounded-xl"></div>
                            <div className="aspect-[4/3] bg-gray-100 rounded-xl"></div>
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

import { Baby, ClipboardCheck, HouseHeart, User } from "lucide-react";
import Link from "next/link";
import Container from "../ui/Container";
import ScrollReveal from "../ui/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
    return (
        <Container id="about">
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
                <div className="mt-16 text-center">
                    <Link
                        href="/about"
                        className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-900 text-slate-900 font-medium rounded-md hover:bg-slate-900 hover:text-white transition-all duration-300"
                    >
                        <span>센터 소개 자세히 보기</span>
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

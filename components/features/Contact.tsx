import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import Link from "next/link";
import { centerInfo } from "@/data/center";

export default function Contact() {
    return (
        <Container className="bg-white" id="contact">
            <ScrollReveal>
                <SectionTitle
                    title="문의 및 예약"
                    subtitle="전화 또는 이메일로 상담 예약이 가능합니다. 편안한 마음으로 연락 주세요."
                />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
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
                <div className="mt-16 flex flex-col items-center gap-4">
                    <a
                        href={`tel:${centerInfo.phone.replace(/-/g, "")}`}
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-medium rounded-md hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <span>전화로 상담 예약하기</span>
                    </a>

                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-900 text-slate-900 font-medium rounded-md hover:bg-slate-900 hover:text-white transition-all duration-300"
                    >
                        <span>상세 정보 및 오시는 길 보기</span>
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

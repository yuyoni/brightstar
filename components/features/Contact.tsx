import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import ScrollReveal from "../ui/ScrollReveal"
import homeData from "@/data/home.json"
import centerData from "@/data/center.json"

const { contact } = homeData

export default function Contact() {
    return (
        <Container id="contact" className="bg-white justify-center">
            <ScrollReveal>
                <SectionTitle title={contact.section.title} subtitle={contact.section.subtitle} />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <ScrollReveal>
                    <div>
                        <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-6">센터 정보</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">주소</p>
                                <p className="text-base md:text-lg text-gray-600">{centerData.address}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">전화</p>
                                <a href={`tel:${centerData.phone.replace(/-/g, "")}`} className="text-base md:text-lg text-slate-900 hover:text-amber-400 transition duration-300">
                                    {centerData.phone}
                                </a>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">이메일</p>
                                <a href={`mailto:${centerData.email}`} className="text-base md:text-lg text-slate-900 hover:text-amber-400 transition duration-300">
                                    {centerData.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div>
                        <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-6">운영 시간</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">평일</p>
                                <p className="text-base md:text-lg text-gray-600">{centerData.hours.weekday}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">주말</p>
                                <p className="text-base md:text-lg text-gray-600">{centerData.hours.weekend}</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            <ScrollReveal>
                <div className="mt-16 flex flex-row flex-wrap justify-center gap-4">
                    <a
                        href={`tel:${centerData.phone.replace(/-/g, "")}`}
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-medium rounded-md hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>전화로 상담 예약하기</span>
                    </a>
                    <a
                        href={contact.kakaoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#FEE500] text-[#3A1D1D] font-medium rounded-md hover:bg-[#F5DC00] transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3C6.477 3 2 6.694 2 11.25c0 2.91 1.73 5.478 4.354 7.02-.192.693-.695 2.516-.795 2.907-.124.49.18.483.377.351.155-.103 2.46-1.668 3.459-2.348.847.12 1.72.183 2.605.183 5.523 0 10-3.694 10-8.25C22 6.694 17.523 3 12 3z" />
                        </svg>
                        <span>카카오톡으로 문의하기</span>
                    </a>
                </div>
            </ScrollReveal>
        </Container>
    )
}

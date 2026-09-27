import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import ScrollReveal from "../ui/ScrollReveal"
import ContactButtons from "../ui/ContactButtons"
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
                            <div>
                                <p className="text-sm text-gray-400 mb-1">유튜브</p>
                                <a
                                    href={centerData.youtubeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 py-2 rounded-md text-base md:text-lg font-medium text-slate-900 hover:text-[#FF0000] transition duration-300"
                                >
                                    <svg className="w-6 h-6 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                    <span>별자리 심리학 채널 바로가기</span>
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
                <div className="mt-16">
                    <ContactButtons />
                </div>
            </ScrollReveal>
        </Container>
    )
}

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

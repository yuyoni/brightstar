"use client"

import Image from "next/image"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="snap-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 영화 필름 스타일 배경 슬라이드 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="film-strip">
          {/* 이미지 반복 (무한 루프 효과) */}
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="film-strip-set">
              {[0, 1, 2, 3, 4].map((index) => (
                <div key={index} className="film-item">
                  {/* 실제 이미지 사용 시 아래 주석 해제 */}
                  <Image
                    src={`/place${(index % 3) + 1}.jpeg`}
                    alt={`상담실 이미지`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* 오버레이 */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      </div>

      {/* 컨텐츠 */}
      <div className="flex flex-col items-center relative z-10 max-w-6xl mx-auto px-6 text-center">
        <Image src="/logo.png" alt="빛나는 별" width={280} height={280} className="object-cover" />
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8 animate-fade-in-delay">
          마음의 회복과 성장을 함께 걷는 공간 <span className="text-slate-900 font-semibold"> 빛나는 별 심리상담센터 </span>에서 여러분을 기다립니다.
        </p>
        <button
          onClick={scrollToContact}
          className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-800 transition duration-300 animate-fade-in-delay-2"
        >
          상담 문의하기
        </button>
      </div>
    </section>
  )
}

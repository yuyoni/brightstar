"use client"

import Image from "next/image"
import homeData from "@/data/home.json"

const { hero } = homeData

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
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="film-strip-set">
              {[0, 1, 2, 3, 4].map((index) => (
                <div key={index} className="film-item">
                  <Image
                    src={`/place${(index % 3) + 1}.jpeg`}
                    alt="상담실 이미지"
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
          {hero.subtitlePrefix}{" "}
          <span className="text-slate-900 font-semibold">{hero.subtitleBrand}</span>
          {hero.subtitleSuffix}
        </p>
        <button
          onClick={scrollToContact}
          className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-800 transition duration-300 animate-fade-in-delay-2"
        >
          {hero.ctaText}
        </button>
      </div>
    </section>
  )
}

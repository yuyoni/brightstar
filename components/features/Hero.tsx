"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import homeData from "@/data/home.json"

const { hero } = homeData

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const isHoveringRef = useRef(false)
  const mousePosRef = useRef({ x: 50, y: 50 })
  const animFrameRef = useRef<number>(0)
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    let currentX = 50, currentY = 50
    let angle = 0
    let offsetX = 0, offsetY = 0
    let prevHovering = false

    const animate = () => {
      const hovering = isHoveringRef.current

      if (!hovering) {
        if (prevHovering) {
          // 마우스가 떠난 순간 — 현재 위치와 리사주 곡선의 차이를 offset으로 저장
          const lissX = 50 + Math.cos(angle) * 28
          const lissY = 50 + Math.sin(angle * 0.7) * 22
          offsetX = currentX - lissX
          offsetY = currentY - lissY
        }
        angle += 0.006
        // offset을 서서히 소멸시켜 자연스럽게 자동 궤도로 합류
        offsetX *= 0.97
        offsetY *= 0.97
        const targetX = 50 + Math.cos(angle) * 28 + offsetX
        const targetY = 50 + Math.sin(angle * 0.7) * 22 + offsetY
        currentX += (targetX - currentX) * 0.08
        currentY += (targetY - currentY) * 0.08
      } else {
        currentX += (mousePosRef.current.x - currentX) * 0.07
        currentY += (mousePosRef.current.y - currentY) * 0.07
      }

      prevHovering = hovering
      setLightPos({ x: currentX, y: currentY })
      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    mousePosRef.current = {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="snap-section relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => { isHoveringRef.current = true }}
      onMouseLeave={() => { isHoveringRef.current = false }}
    >
      {/* 영화 필름 스타일 배경 슬라이드 */}
      {/*
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="film-strip">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="film-strip-set">
              {[1, 2, 3].map((index) => (
                <div key={index} className="film-item">
                  <Image
                    src={`/place${index + 1}.jpeg`}
                    alt="상담실 이미지"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      </div>
      */}

      {/* 소프트 앰비언트 라이트 배경 */}
      <div className="absolute inset-0 z-0 bg-stone-50">
        <div className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full bg-amber-100/60 blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-slate-200/50 blur-[120px]" />
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full bg-stone-200/40 blur-[100px]" />

        {/* 마우스 따라다니는 외곽 빛 */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(251,191,36,0.22) 0%, rgba(251,191,36,0.06) 55%, transparent 75%)",
            left: `${lightPos.x}%`,
            top: `${lightPos.y}%`,
            transform: "translate(-50%, -50%)",
            filter: "blur(60px)",
          }}
        />
        {/* 마우스 따라다니는 중심 밝은 빛 */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(254,243,199,0.4) 50%, transparent 100%)",
            left: `${lightPos.x}%`,
            top: `${lightPos.y}%`,
            transform: "translate(-50%, -50%)",
            filter: "blur(16px)",
          }}
        />
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

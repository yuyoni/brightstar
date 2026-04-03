'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)

  if (images.length === 0) return null

  if (images.length === 1) {
    return (
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-100 mb-8">
        <Image
          src={images[0]}
          alt="게시글 이미지"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    )
  }

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-100 mb-8 group">
      <Image
        src={images[current]}
        alt={`이미지 ${current + 1}`}
        fill
        className="object-cover"
        unoptimized
      />

      {/* 이전 버튼 */}
      <button
        onClick={prev}
        aria-label="이전 이미지"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition duration-200 md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronLeft size={18} />
      </button>

      {/* 다음 버튼 */}
      <button
        onClick={next}
        aria-label="다음 이미지"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition duration-200 md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronRight size={18} />
      </button>

      {/* 도트 */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`${i + 1}번 이미지`}
            className={`w-1.5 h-1.5 rounded-full transition duration-200 ${
              i === current ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* 카운터 */}
      <span className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full tabular-nums">
        {current + 1} / {images.length}
      </span>
    </div>
  )
}

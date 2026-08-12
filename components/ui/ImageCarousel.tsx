'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length)
  }, [images.length])

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length)
  }, [images.length])

  const openLightbox = () => {
    setIsOpen(true)
  }

  const closeLightbox = () => {
    setIsOpen(false)
  }

  // ESC / 방향키로 Lightbox 조작
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox()
        return
      }

      if (images.length > 1 && e.key === 'ArrowLeft') {
        prev()
      }

      if (images.length > 1 && e.key === 'ArrowRight') {
        next()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, images.length, prev, next])

  // Lightbox가 열려 있을 때 배경 스크롤 방지
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  // Hook은 모두 호출한 후 조건부 return
  if (images.length === 0) return null

  return (
    <>
      {/* 이미지 영역 */}
      <div
        className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-100 mb-8 group bg-gray-50 cursor-zoom-in"
        onClick={openLightbox}
      >
        {/* 이미지 */}
        <Image
          src={images[current]}
          alt={`이미지 ${current + 1}`}
          fill
          className="object-contain"
          unoptimized
        />

        {/* 호버 딤 + 확대 안내 */}
        <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/30 transition duration-200 flex items-center justify-center pointer-events-none">
          <div className="opacity-0 group-hover:opacity-100 transition duration-200 bg-black/60 text-white rounded-full px-4 py-2 text-sm flex items-center gap-2">
            <ZoomIn size={16} />
            이미지 크게 보기
          </div>
        </div>

        {/* 여러 이미지일 때만 좌우 버튼 */}
        {images.length > 1 && (
          <>
            {/* 이전 버튼 */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="이전 이미지"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition duration-200 md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronLeft size={18} />
            </button>

            {/* 다음 버튼 */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="다음 이미지"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition duration-200 md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronRight size={18} />
            </button>

            {/* 도트 */}
            <div
              className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 flex gap-1.5"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`${i + 1}번 이미지`}
                  className={`w-1.5 h-1.5 rounded-full transition duration-200 ${i === current
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/80'
                    }`}
                />
              ))}
            </div>

            {/* 카운터 */}
            <span className="absolute top-3 right-3 z-20 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full tabular-nums">
              {current + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {/* 이미지 상세보기 Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* 닫기 버튼 */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
            aria-label="이미지 닫기"
            className="absolute top-4 right-4 z-30 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition"
          >
            <X size={24} />
          </button>

          {/* 이미지 */}
          <div
            className="relative w-full h-full max-w-7xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[current]}
              alt={`이미지 ${current + 1}`}
              fill
              className="object-contain"
              unoptimized
              sizes="90vw"
            />
          </div>

          {/* 팝업 이전 버튼 */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="이전 이미지"
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* 팝업 다음 버튼 */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="다음 이미지"
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* 팝업 카운터 */}
          {images.length > 1 && (
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 bg-black/60 text-white text-sm px-3 py-1 rounded-full tabular-nums">
              {current + 1} / {images.length}
            </span>
          )}
        </div>
      )}
    </>
  )
}
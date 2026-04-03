'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface ImageUploaderProps {
  images: string[]
  onChange: (images: string[]) => void
  uploading: boolean
  onUploading: (v: boolean) => void
  onError: (msg: string) => void
}

const MAX = 5

export default function ImageUploader({
  images,
  onChange,
  uploading,
  onUploading,
  onError,
}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? [])
    if (!files.length) return

    const remaining = MAX - images.length
    const toUpload = files.slice(0, remaining)

    onUploading(true)
    const urls: string[] = []

    for (const file of toUpload) {
      const formData = new FormData()
      formData.append('file', file)
      const res = await fetch('/api/upload', { method: 'POST', body: formData })
      const data = await res.json()
      if (res.ok) {
        urls.push(data.url)
      } else {
        onError(data.error ?? '이미지 업로드에 실패했습니다.')
        break
      }
    }

    onChange([...images, ...urls])
    onUploading(false)
    e.target.value = ''
  }

  function remove(index: number) {
    onChange(images.filter((_, i) => i !== index))
  }

  function moveLeft(index: number) {
    if (index === 0) return
    const next = [...images]
    ;[next[index - 1], next[index]] = [next[index], next[index - 1]]
    onChange(next)
  }

  function moveRight(index: number) {
    if (index === images.length - 1) return
    const next = [...images]
    ;[next[index], next[index + 1]] = [next[index + 1], next[index]]
    onChange(next)
  }

  return (
    <div className="space-y-3">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/gif,image/webp"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />

      {images.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {images.map((url, i) => (
            <div
              key={url + i}
              className="relative group aspect-square rounded-lg overflow-hidden border border-gray-200 bg-gray-50"
            >
              <Image
                src={url}
                alt={`이미지 ${i + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-200 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100">
                <button
                  type="button"
                  onClick={() => moveLeft(i)}
                  disabled={i === 0}
                  className="bg-white/90 rounded p-1 disabled:opacity-30 hover:bg-white transition"
                >
                  <ChevronLeft size={12} className="text-slate-700" />
                </button>
                <button
                  type="button"
                  onClick={() => remove(i)}
                  className="bg-white/90 rounded p-1 hover:bg-white transition"
                >
                  <X size={12} className="text-red-500" />
                </button>
                <button
                  type="button"
                  onClick={() => moveRight(i)}
                  disabled={i === images.length - 1}
                  className="bg-white/90 rounded p-1 disabled:opacity-30 hover:bg-white transition"
                >
                  <ChevronRight size={12} className="text-slate-700" />
                </button>
              </div>
              <span className="absolute top-1 left-1 bg-black/50 text-white text-[10px] leading-none px-1 py-0.5 rounded">
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      )}

      {images.length < MAX && (
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="w-full border border-dashed border-gray-300 rounded-lg py-7 text-sm text-gray-400 hover:border-slate-400 hover:text-slate-500 transition duration-200 disabled:opacity-50"
        >
          {uploading
            ? '업로드 중...'
            : `+ 이미지 추가 (${images.length}/${MAX} · 최대 5MB)`}
        </button>
      )}
    </div>
  )
}

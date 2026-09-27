'use client'

import { useRef, useState } from 'react'
import { Link2 } from 'lucide-react'
import { buildLinkToken, toSafeUrl } from '@/lib/postContent'

interface ContentEditorProps {
  value: string
  onChange: (value: string) => void
}

const inputClassName =
  'w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-slate-900 bg-white focus:outline-none focus:ring-1 focus:ring-slate-400'

export default function ContentEditor({ value, onChange }: ContentEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const selectionRef = useRef({ start: 0, end: 0 })

  const [isLinkOpen, setIsLinkOpen] = useState(false)
  const [linkLabel, setLinkLabel] = useState('')
  const [linkUrl, setLinkUrl] = useState('')
  const [linkError, setLinkError] = useState('')

  function openLinkPanel() {
    const textarea = textareaRef.current
    const start = textarea?.selectionStart ?? value.length
    const end = textarea?.selectionEnd ?? value.length
    selectionRef.current = { start, end }
    // 본문에서 선택한 글자가 있으면 표시 텍스트로 미리 채운다.
    setLinkLabel(value.slice(start, end).trim())
    setLinkUrl('')
    setLinkError('')
    setIsLinkOpen(true)
  }

  function closeLinkPanel() {
    setIsLinkOpen(false)
    textareaRef.current?.focus()
  }

  function insertLink() {
    const href = toSafeUrl(linkUrl)
    if (!href) {
      setLinkError('http:// 또는 https:// 로 시작하는 올바른 주소를 입력해주세요.')
      return
    }

    const { start, end } = selectionRef.current
    const before = value.slice(0, start)
    const after = value.slice(end)
    // 링크는 버튼 블록으로 보이도록 항상 독립된 줄에 넣는다.
    const prefix = before && !before.endsWith('\n') ? '\n' : ''
    const suffix = after && !after.startsWith('\n') ? '\n' : ''
    const token = buildLinkToken(linkLabel, href)

    onChange(`${before}${prefix}${token}${suffix}${after}`)
    setIsLinkOpen(false)

    const cursor = before.length + prefix.length + token.length
    requestAnimationFrame(() => {
      textareaRef.current?.focus()
      textareaRef.current?.setSelectionRange(cursor, cursor)
    })
  }

  function handlePanelKeyDown(e: React.KeyboardEvent) {
    // 게시글 폼 안에 있으므로 Enter가 글 저장으로 이어지지 않게 막는다.
    if (e.key === 'Enter') {
      e.preventDefault()
      insertLink()
    }
    if (e.key === 'Escape') {
      e.preventDefault()
      closeLinkPanel()
    }
  }

  return (
    <div className="border border-gray-200 rounded-md focus-within:ring-1 focus-within:ring-slate-400">
      <div className="flex items-center gap-1 border-b border-gray-200 px-2 py-1.5">
        <button
          type="button"
          onClick={openLinkPanel}
          aria-expanded={isLinkOpen}
          className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-slate-700 hover:bg-gray-100 transition duration-200"
        >
          <Link2 className="w-4 h-4" aria-hidden="true" />
          링크 추가
        </button>
      </div>

      {isLinkOpen && (
        <div className="space-y-3 border-b border-gray-200 bg-gray-50 p-4" onKeyDown={handlePanelKeyDown}>
          <div className="space-y-1">
            <label htmlFor="link-label" className="block text-xs font-medium text-slate-600">
              표시할 텍스트
            </label>
            <input
              id="link-label"
              type="text"
              value={linkLabel}
              onChange={(e) => setLinkLabel(e.target.value)}
              maxLength={100}
              className={inputClassName}
              placeholder="예: 별자리 심리학 유튜브 채널"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="link-url" className="block text-xs font-medium text-slate-600">
              링크 주소
            </label>
            <input
              id="link-url"
              type="url"
              value={linkUrl}
              onChange={(e) => {
                setLinkUrl(e.target.value)
                setLinkError('')
              }}
              autoFocus
              className={inputClassName}
              placeholder="https://"
            />
          </div>
          {linkError && <p className="text-xs text-red-500">{linkError}</p>}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={closeLinkPanel}
              className="px-3 py-1.5 border border-gray-300 rounded-md text-sm text-slate-600 bg-white hover:bg-gray-50 transition duration-200"
            >
              취소
            </button>
            <button
              type="button"
              onClick={insertLink}
              className="bg-slate-900 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-slate-800 transition duration-200"
            >
              추가
            </button>
          </div>
        </div>
      )}

      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={16}
        className="block w-full rounded-b-md px-4 py-3 text-sm text-slate-900 focus:outline-none resize-none leading-relaxed"
        placeholder="내용을 입력하세요"
        required
      />
      <p className="border-t border-gray-100 px-4 py-2 text-xs text-gray-400">
        링크는 [표시할 텍스트](주소) 형식으로 들어가며, 게시글에서는 버튼으로 보입니다.
      </p>
    </div>
  )
}

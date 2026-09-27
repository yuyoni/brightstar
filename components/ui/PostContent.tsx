import { ArrowUpRight, Link2 } from 'lucide-react'
import { getHostname, parseContent, type ContentSegment } from '@/lib/postContent'

interface PostContentProps {
  content: string
  className?: string
}

interface LinkBlockProps {
  label: string
  href: string
}

const EXTERNAL_LINK_REL = 'noopener noreferrer nofollow'

function LinkBlock({ label, href }: LinkBlockProps) {
  const hostname = getHostname(href)

  return (
    <a
      href={href}
      target="_blank"
      rel={EXTERNAL_LINK_REL}
      className="group my-4 flex items-center gap-4 rounded-xl bg-gray-50 p-4 hover:bg-gray-100 transition duration-300"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white">
        <Link2 className="w-6 h-6 text-gray-700" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-base font-medium text-slate-900 group-hover:text-amber-500 transition duration-300">
          {label}
        </span>
        <span className="block truncate text-sm text-gray-400">{hostname}</span>
      </span>
      <ArrowUpRight className="w-5 h-5 shrink-0 text-gray-400" aria-hidden="true" />
    </a>
  )
}

function renderSegment(segment: ContentSegment, key: number) {
  if (segment.type === 'text') return segment.text

  return (
    <a
      key={key}
      href={segment.href}
      target="_blank"
      rel={EXTERNAL_LINK_REL}
      className="text-slate-900 underline decoration-gray-300 underline-offset-4 hover:decoration-slate-900 transition duration-300"
    >
      {segment.label}
    </a>
  )
}

export default function PostContent({ content, className }: PostContentProps) {
  return (
    <div className={className}>
      {parseContent(content).map((block, i) =>
        block.type === 'link' ? (
          <LinkBlock key={i} label={block.label} href={block.href} />
        ) : (
          <p key={i} className="whitespace-pre-wrap">
            {block.segments.map(renderSegment)}
          </p>
        )
      )}
    </div>
  )
}

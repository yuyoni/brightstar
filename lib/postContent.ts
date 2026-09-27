const LINK_TOKEN = /\[([^[\]\n]{1,100})\]\(([^\s()]{1,2000})\)/g
const ALLOWED_PROTOCOLS = ['http:', 'https:']
// 한글 도메인은 URL 파서가 punycode(xn--)로 바꿔주므로 영문·숫자·하이픈·점만 허용하면 된다.
const VALID_HOSTNAME = /^[a-z0-9-]+(\.[a-z0-9-]+)+$/i

export type ContentSegment =
  | { type: 'text'; text: string }
  | { type: 'link'; label: string; href: string }

export type ContentBlock =
  | { type: 'text'; segments: ContentSegment[] }
  | { type: 'link'; label: string; href: string }

// 저장된 본문은 신뢰하지 않고 렌더링 시점에 다시 검증 (javascript:, data: 등 차단).
export function toSafeUrl(value: string): string | null {
  const trimmed = value.trim()
  if (!trimmed) return null
  const withScheme = /^[a-z][a-z0-9+.-]*:/i.test(trimmed) ? trimmed : `https://${trimmed}`

  try {
    const url = new URL(withScheme)
    if (!ALLOWED_PROTOCOLS.includes(url.protocol) || !VALID_HOSTNAME.test(url.hostname)) return null
    return url.href
  } catch {
    return null
  }
}

export function getHostname(href: string): string {
  try {
    return new URL(href).hostname.replace(/^www\./, '')
  } catch {
    return href
  }
}

export function buildLinkToken(label: string, href: string): string {
  const safeLabel = label.replace(/[[\]\s]+/g, ' ').trim().slice(0, 100) || getHostname(href)
  // 괄호가 들어간 주소가 토큰 형식을 깨지 않도록 인코딩
  const safeHref = href.replace(/\(/g, '%28').replace(/\)/g, '%29')
  return `[${safeLabel}](${safeHref})`
}

function parseLine(line: string): ContentSegment[] {
  const segments: ContentSegment[] = []
  let cursor = 0

  for (const match of Array.from(line.matchAll(LINK_TOKEN))) {
    const index = match.index ?? 0
    const href = toSafeUrl(match[2])
    if (!href) continue

    if (index > cursor) segments.push({ type: 'text', text: line.slice(cursor, index) })
    segments.push({ type: 'link', label: match[1].trim(), href })
    cursor = index + match[0].length
  }
  if (cursor < line.length) segments.push({ type: 'text', text: line.slice(cursor) })

  return segments
}

// 링크만 단독으로 있는 줄은 버튼 블록으로, 문장 속 링크는 텍스트 링크로 분리
export function parseContent(content: string): ContentBlock[] {
  const blocks: ContentBlock[] = []
  let textLines: ContentSegment[][] = []

  const flushText = () => {
    if (!textLines.length) return
    const segments = textLines.flatMap((line, i) =>
      i === 0 ? line : [{ type: 'text', text: '\n' } as ContentSegment, ...line]
    )
    blocks.push({ type: 'text', segments })
    textLines = []
  }

  for (const line of content.split('\n')) {
    const segments = parseLine(line.trim())
    const only = segments.length === 1 ? segments[0] : null

    if (only?.type === 'link') {
      flushText()
      blocks.push(only)
    } else {
      textLines.push(parseLine(line))
    }
  }
  flushText()

  return blocks
}

// 목록 미리보기 등에서 링크 문법 대신 표시 텍스트만 보여줌
export function toPlainText(content: string): string {
  return content.replace(LINK_TOKEN, (token, label: string, href: string) =>
    toSafeUrl(href) ? label.trim() : token
  )
}

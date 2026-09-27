import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const MAX_SEARCH_LENGTH = 100

// 검색어를 PostgREST or() 필터에 넣을 때 쉼표·괄호 등이 필터 문법으로 해석되지 않도록
// 값을 큰따옴표로 감싸고, %·_ 는 LIKE 와일드카드가 아닌 일반 문자로 검색되도록 이스케이프한다.
export function buildSearchFilter(columns: string[], keyword: string): string | null {
  const trimmed = keyword.trim().slice(0, MAX_SEARCH_LENGTH)
  if (!trimmed) return null

  const likeEscaped = trimmed.replace(/[\\%_]/g, (char) => `\\${char}`)
  const quoted = `"%${likeEscaped.replace(/[\\"]/g, (char) => `\\${char}`)}%"`

  return columns.map((column) => `${column}.ilike.${quoted}`).join(',')
}

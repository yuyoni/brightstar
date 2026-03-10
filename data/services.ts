import { Service } from "@/types"

export const services: Service[] = [
  {
    id: "individual",
    title: "개인상담",
    description: "일상의 스트레스, 우울, 불안 등 개인의 심리적 어려움을 함께 나눕니다.",
    details: [
      "우울, 불안, 스트레스 관리",
      "자존감 및 정체성 탐색",
      "대인관계 어려움",
      "심리적 트라우마 치유"
    ]
  },
  {
    id: "child",
    title: "아동상담",
    description: "아동의 정서, 행동 문제를 이해하고 건강한 성장을 돕습니다.",
    details: [
      "정서 및 행동 문제",
      "학교 부적응",
      "또래 관계 어려움",
      "학습 및 주의력 문제"
    ]
  },
  {
    id: "family",
    title: "가족상담",
    description: "가족 간의 갈등을 해결하고 건강한 소통을 회복합니다.",
    details: [
      "부부 갈등 및 소통 문제",
      "부모-자녀 관계 개선",
      "가족 내 역할 조정",
      "가족 구조 및 경계 문제"
    ]
  }
]

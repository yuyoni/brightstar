# 빛나는 별 심리상담센터 웹사이트 개발 지침

## 1. 개발 목표

정적 사이트로 시작하지만 향후 기능 확장을 고려한 구조로 설계한다.

필수 요구사항:
- SEO 최적화
- 빠른 로딩 속도
- 모바일 중심 반응형
- 상담 신청 기능 확장 가능

---

## 2. 기술 스택

- **Framework**: Next.js
- **Rendering**: Static Export
- **CSS**: Tailwind CSS
- **Font**: Pretendard

---

## 3. 프로젝트 구조

```
/app
  layout.tsx
  page.tsx

/components
  Hero.tsx
  About.tsx
  Philosophy.tsx
  Services.tsx
  Process.tsx
  Space.tsx
  Contact.tsx
  Map.tsx

/data
  services.ts
  center.ts

/public
  /images
```

---

## 4. 컴포넌트 설계

각 섹션을 독립적인 컴포넌트 단위로 분리:

- **Hero** - 메인 히어로 섹션
- **About** - 센터 소개
- **Services** - 상담 서비스 안내
- **Process** - 상담 프로세스
- **Contact** - 연락처 및 문의

---

## 5. 미래 확장 설계

상담 신청 폼 추가를 대비한 구조:

```
/contact
  page.tsx
```

**향후 폼 필드**:
- 이름
- 연락처
- 상담 유형
- 문의 내용

**API Route**:
```
/api/consultation
```

---

## 6. SEO

### Metadata 설정

**Title 예시**:
```
부산 화명동 심리상담 | 빛나는 별 심리상담센터
```

**Description 예시**:
```
부산 북구 화명동에 위치한 심리상담센터. 개인상담, 아동상담, 가족상담을 통해 마음의 회복과 성장을 돕습니다.
```

**포함 요소**:
- title
- description
- Open Graph tags

---

## 7. 성능 최적화

**이미지 처리**:
- `next/image` 사용
- lazy loading 적용

---

## 8. 배포

**배포 플랫폼**:
- Vercel (우선)
- 또는 Cloudflare Pages

---

## 9. 향후 확장 계획

- **Phase 2**: 온라인 상담 신청 폼
- **Phase 3**: 예약 시스템 통합
- **Phase 4**: 블로그 (심리 칼럼)

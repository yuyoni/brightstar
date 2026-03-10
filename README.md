# 빛나는 별 심리상담센터 웹사이트

심리상담센터 공식 웹사이트

## 기술 스택

- **Framework**: Next.js 14.2.15
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Deployment**: Vercel

## 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 보안 설정

### Vercel 무료 플랜 기본 보호

✅ **자동으로 포함되는 보안 기능:**

1. **DDoS 보호**: Vercel의 CDN이 기본적으로 제공
2. **HTTPS**: 자동 SSL 인증서
3. **Edge Network**: 전 세계 분산 서버로 트래픽 분산
4. **Rate Limiting**: Vercel이 자동으로 비정상적인 트래픽 감지

### 무료 플랜 제한사항 (자동 보호)

- **대역폭**: 100GB/월 (초과 시 자동으로 사이트 일시 중지, 과금 없음)
- **빌드 시간**: 6,000분/월
- **Serverless Functions**: 100GB-Hrs/월

⚠️ **정적 사이트라 걱정 안 해도 되는 이유:**

- 서버리스 함수(API Routes)를 사용하지 않음
- 카카오맵 API는 클라이언트에서 직접 호출 (Vercel 서버 통하지 않음)
- 정적 파일만 제공하므로 서버 비용 없음

### 카카오맵 API 보안

카카오맵 API를 추가할 때는:

1. **Kakao Developers**에서 도메인 등록
    - 허용된 도메인에서만 API 호출 가능
    - 예: `your-domain.vercel.app`

2. **환경 변수 설정**

    ```bash
    # .env.local 파일 생성
    NEXT_PUBLIC_KAKAO_MAP_KEY=your_api_key
    ```

3. **API 키 사용량 모니터링**
    - Kakao Developers 콘솔에서 무료 할당량 확인
    - 무료: 일 300,000회 요청
    - 초과 시 API 자동 차단 (과금 없음, 옵션 설정 필요)

## 추가 보안 권장사항 (선택)

### 1. 환경 변수 보호

```bash
# .gitignore에 추가됨
.env.local
.env*.local
```

### 2. 카카오 API 사용 시 Referer 제한

- Kakao Developers 콘솔에서 웹 플랫폼 설정
- 사이트 도메인만 허용

### 3. Vercel 프로젝트 설정

- **Vercel Dashboard** → **Settings** → **General**
    - "Automatically expose System Environment Variables" 비활성화
    - 프로덕션 전용 환경 변수 설정

## 배포

```bash
# Vercel CLI 설치 (선택)
npm i -g vercel

# 배포
vercel
```

또는 GitHub 연동으로 자동 배포

## 비용 걱정 없는 이유

✅ **정적 사이트 = 무료**

- Next.js Static Export 사용
- 서버 없이 HTML/CSS/JS만 제공
- Vercel 무료 플랜으로 충분

✅ **Vercel 무료 플랜 제한 초과 시**

- 자동으로 사이트 일시 중지
- **절대 자동 과금 안 됨**
- 이메일 알림 받음

✅ **카카오맵 API**

- 무료 할당량: 일 300,000회
- 초과 시 API 차단 (과금 X)
- 상담센터 사이트는 하루 300,000회 넘기 불가능

## 모니터링 방법

### Vercel 대시보드

- **Analytics**: 방문자 수, 페이지뷰
- **Usage**: 대역폭, 빌드 시간 확인
- **Logs**: 에러 로그 확인

### 카카오 Developers (API 추가 시)

- **통계**: API 호출 횟수
- **알림 설정**: 일일 사용량 80% 시 이메일

## 문의

궁금한 점이 있으시면 이슈를 등록해주세요.

# Supabase 스키마 설계 문서

## 개요

빛나는 별 심리상담센터 게시판 기능을 위한 Supabase 데이터베이스 설계.

- **admins**: 어드민 계정 저장 (회원가입 없음, 사전 등록된 계정만 사용)
- **categories**: 게시판 카테고리 (DB에서 직접 관리, 앱은 읽기만)
- **posts**: 게시판 글 저장 (공개 읽기, 어드민 CRUD, categories FK)
 

---

## 1. admins 테이블

```sql
create table public.admins (
  id uuid default gen_random_uuid() primary key,
  username text unique not null,
  password_hash text not null,
  created_at timestamp with time zone default now()
);
```

> RLS 비활성화 상태로 유지. 서버에서 service role key로만 접근.

---

## 2. posts 테이블

```sql
create table public.posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  content text not null,
  is_published boolean default true not null,
  category_id uuid references public.categories(id) on delete set null,
  image_url text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);
```

> 기존 테이블 마이그레이션 (신규라면 위 CREATE에 포함):
> ```sql
> -- 단일 이미지 (레거시, 폴백용 유지)
> alter table public.posts add column image_url text;
> -- 다중 이미지 (최대 5장, 순서 보존)
> alter table public.posts add column image_urls text[] default '{}';
> ```

---

### RLS 정책

```sql
-- RLS 활성화
alter table public.posts enable row level security;

-- 공개: 발행된 글만 읽기 가능
create policy "public_read_published"
  on public.posts
  for select
  using (is_published = true);
```

> 어드민의 CRUD (insert/update/delete)는 service role key로 RLS 우회하여 처리.

### updated_at 자동 갱신 트리거

```sql
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger posts_updated_at
  before update on public.posts
  for each row execute procedure public.handle_updated_at();
```

---

## 3. categories 테이블 

```sql
create table public.categories (
  id uuid default gen_random_uuid() primary key,
  name text unique not null,
  color text default '#94a3b8',
  created_at timestamp with time zone default now()
);
-- RLS 비활성화 (공개 읽기 전용 데이터, service role key로 접근)
```

> 카테고리는 Supabase 대시보드에서 직접 추가/수정/삭제. 앱은 읽기만 수행.

> 기존 테이블에 `color` 컬럼 추가 마이그레이션:
> ```sql
> alter table public.categories add column color text default '#94a3b8';
> ```

**카테고리 추가 예시:**
```sql
insert into public.categories (name, color) values
  ('공지', '#ef4444'),
  ('상담안내', '#3b82f6'),
  ('센터소식', '#22c55e');
```

---

## 4. Storage 버킷 설정

이미지 업로드를 위한 `post-images` 버킷 생성:

1. Supabase 대시보드 → Storage → New bucket
2. 버킷 이름: `post-images`
3. Public bucket: **활성화** (공개 URL로 이미지 접근 필요)

**Storage 정책 (서비스 롤만 업로드 가능):**
- 서버에서 service role key를 사용하므로 별도 Storage RLS 정책 불필요
- 업로드는 `/api/upload` API Route에서만 처리 (어드민 JWT 검증 후)


---

## 5. 어드민 계정 시드

> Supabase 대시보드 SQL Editor에서 1회 실행

### 방법 1: Node.js 스크립트로 해시 생성 후 삽입

```bash
# 로컬에서 해시 생성
node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('원하는비밀번호', 12).then(h => console.log(h))"
```

### 방법 2: Supabase SQL Editor에서 직접 삽입

```sql
-- 위에서 생성한 해시값을 아래에 입력
insert into public.admins (username, password_hash)
values ('admin', '$2b$12$여기에bcrypt해시값입력');
```

---

## 6. 환경변수 (.env.local)

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
JWT_SECRET=랜덤32바이트문자열
```

> `JWT_SECRET` 생성: `openssl rand -base64 32`

---

## 7. Supabase 프로젝트 설정 체크리스트

- [ ] Supabase 프로젝트 생성
- [ ] `categories` 테이블 생성 (`color` 컬럼 포함)
- [ ] `admins` 테이블 생성
- [ ] `posts` 테이블 생성 (`image_url` 컬럼 포함) + RLS 정책 적용
- [ ] `updated_at` 트리거 생성
- [ ] `posts` 테이블에 `image_urls text[] default '{}'` 컬럼 추가
- [ ] `post-images` Storage 버킷 생성 (Public)
- [ ] 어드민 계정 시드 삽입
- [ ] `.env.local` 환경변수 설정

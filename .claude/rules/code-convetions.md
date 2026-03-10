# Code Convention

This document defines coding conventions for this project.

The goal is to maintain:

- readability
- consistency
- maintainability
- predictable structure

Claude must strictly follow these rules when generating code.

---

# 1. Tech Stack

Framework
Next.js (App Router)

Language
TypeScript

Styling
TailwindCSS

Font
Pretendard

Deployment
Static export compatible

---

# 2. Project Structure

The project must follow a clear feature-based structure.

app/
layout.tsx
page.tsx

components/
Hero.tsx
About.tsx
Philosophy.tsx
Services.tsx
Process.tsx
Contact.tsx
Map.tsx

lib/
utils.ts

types/
index.ts

data/
services.ts

public/
images/

Rules

- UI sections must be placed in `components`
- Reusable logic goes in `lib`
- Static content goes in `data`
- Types go in `types`

---

# 3. File Naming

Use **PascalCase** for components.

Example

Hero.tsx
ContactSection.tsx
ServiceCard.tsx

Use **camelCase** for utilities.

formatDate.ts
scrollToSection.ts

Use **kebab-case** for folders when needed.

consultation-form
blog-post

---

# 4. Component Rules

All components must follow these rules.

## Functional Components Only

Do not use class components.

Correct

export default function Hero() {}

---

## Props Interface Required

Every component with props must define a TypeScript interface.

Example

interface ServiceCardProps {
title: string
description: string
}

---

## Component Size Rule

Components should stay under **150 lines** when possible.

If a component grows too large:

- split subcomponents
- move logic to hooks

---

# 5. Tailwind Usage

Only use Tailwind for styling.

Do NOT create CSS files unless absolutely necessary.

Correct

className="max-w-6xl mx-auto px-6 py-20"

Avoid

inline styles
style={{}}

---

# 6. Layout Rules

All pages must follow this layout width.

max width

max-w-6xl

container pattern

mx-auto px-6

Example

<section className="max-w-6xl mx-auto px-6 py-24">

---

# 7. Typography Rules

Heading hierarchy must be consistent.

h1

Used only once per page.

h2

Section titles.

h3

Sub sections.

Example

<h1>빛나는 별 심리상담센터</h1>
<h2>상담</h2>

---

# 8. Accessibility

Follow accessibility best practices.

Required

- semantic HTML
- alt text for images
- button instead of div for clickable elements

Example

<button>
<a>

Avoid

div onClick

---

# 9. Image Handling

Use next/image for all images.

Example

import Image from "next/image"

<Image
 src="/images/space.jpg"
 alt="상담 공간"
 width={800}
 height={600}
/>

---

# 10. SEO

Use metadata API in layout.

Example

export const metadata = {
title: "빛나는 별 심리상담센터 | 별자리 심리학",
description:
"별자리 심리학을 통한 상담, 빛나는 별 심리상담센터 "
}

---

# 11. Reusability

Common UI should be reusable.

Example

SectionTitle
Container
Button

Avoid duplicated markup across sections.

---

# 12. Performance

Avoid unnecessary client components.

Default

Server Components

Only add

"use client"

when required.

Example

forms
interactive UI

---

# 13. Comment Rules

Use comments only when explaining **intent**.

Avoid obvious comments.

Bad

// create hero section

Good

// hero animation is intentionally subtle to keep calm UX

---

# 14. Git Commit Style

Use conventional commit style. It always write only with Korean and English.

Examples

feat: 섹션 추가
feat: 상담 문의 폼 추가
style: 모바일 반응형 layout 간격 조정
refactor: 서비스 카드 컴포넌트 분리

---

# 15. Design Principles

The design should reflect:

- calm
- minimal
- warm
- trustworthy

Avoid:

- heavy animations
- flashy colors
- crowded layouts

White space is important.

---

# 16. Mobile First

Design must start from mobile.

Breakpoints

sm
md
lg

Example

className="text-2xl md:text-4xl"

---

# 17. Future Features Consideration

The architecture must support future additions.

Planned features

- consultation form
- reservation system
- blog / psychology column

Do not hardcode structures that block future expansion.

Example

Contact section should allow future form integration.

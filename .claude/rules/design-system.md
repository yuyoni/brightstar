# Design System

When generating UI, consistency is more important than creativity.
Follow the design system strictly.

This document defines the design system used in this project.

Claude must strictly follow these rules when generating UI.

The design goal is:

calm  
minimal  
trustworthy  
warm

The website represents a psychology counseling center, therefore the UI must feel safe, quiet, and professional.

Avoid flashy visuals.

---

# 1. Layout System

All sections must follow the same container layout.

Container width

max-w-6xl

Horizontal padding

px-6

Vertical spacing

py-24

Example

<section className="max-w-6xl mx-auto px-6 py-24">

Do NOT use random widths.

---

# 2. Grid System

Use Tailwind grid utilities.

Common patterns

2 column layout

grid grid-cols-1 md:grid-cols-2 gap-12

3 column cards

grid grid-cols-1 md:grid-cols-3 gap-8

Avoid uneven layouts.

---

# 3. Spacing System

Spacing must follow a consistent rhythm.

Allowed vertical spacing

py-16  
py-20  
py-24

Allowed gap spacing

gap-6  
gap-8  
gap-12

Avoid random values.

---

# 4. Typography

Use a clear hierarchy.

Font family

Pretendard

Heading sizes

H1

text-4xl md:text-5xl font-semibold

H2

text-3xl md:text-4xl font-semibold

H3

text-xl md:text-2xl font-medium

Body

text-base md:text-lg text-gray-600 leading-relaxed

Avoid too many font sizes.

---

# 5. Color System

The color palette must stay minimal.

Primary

bg-slate-900  
text-slate-900

Background

bg-white

Accent

text-amber-400

Body text

text-gray-600

Muted text

text-gray-400

Avoid bright colors.

Avoid gradients.

---

# 6. Section Structure

Every section should follow this pattern.

Section title

Description text

Content

Example structure

<section>
  title
  description
  grid or content
</section>

Keep sections simple.

---

# 7. Buttons

Primary button style

bg-slate-900  
text-white  
px-6 py-3  
rounded-md

Hover

hover:bg-slate-800

Example

<button className="bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-800">

Secondary button

border border-gray-300

---

# 8. Card UI

Cards must follow consistent styling.

Style

rounded-xl  
border  
border-gray-200  
p-6  
bg-white

Example

<div className="border border-gray-200 rounded-xl p-6 bg-white">

Avoid shadows unless very subtle.

---

# 9. Images

Images must feel calm and natural.

Recommended subjects

counseling room  
warm lighting  
minimal interior  
plants  
quiet spaces

Image styling

rounded-xl

Example

<Image className="rounded-xl" />

Avoid stock photos that feel corporate.

---

# 10. Icon Usage

Icons should be minimal.

Use

lucide-react

Example icons

heart  
message-circle  
users  
brain

Icon size

w-6 h-6

Color

text-gray-700

---

# 11. Animation

Animations must be subtle.

Allowed

fade-in
small translate

Example

transition duration-300

Avoid

large movement
parallax
complex animation

---

# 12. White Space

White space is important.

Do not crowd sections.

Content width should remain readable.

Text blocks should be around

max-w-2xl

Example

<p className="max-w-2xl">

---

# 13. Mobile Design

Mobile must be prioritized.

Rules

single column layout on mobile

Example

grid-cols-1 md:grid-cols-2

Padding

px-6

Avoid dense layouts on mobile.

---

# 14. Image Ratios

Use consistent image ratios.

Recommended

4:3

or

3:2

Example

aspect-[4/3]

---

# 15. Map Section

Map section must remain simple.

Title  
address text  
embedded map

Avoid complex layout.

---

# 16. Contact Section

Contact section must be visually clear.

Show

phone  
consultation CTA

Future

online consultation form

Design should support form expansion later.

---

# 17. Footer

Footer must be minimal.

Content

center name  
address  
contact

Example style

text-sm text-gray-500

Avoid heavy footer navigation.

---

# 18. Overall UX Principle

The UI must communicate

safety  
calmness  
trust

If a UI element feels visually loud or distracting, it should not be used.

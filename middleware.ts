import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!)

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('admin_token')?.value

  // /admin 로그인 페이지: 이미 인증된 경우 대시보드로 리다이렉트
  if (pathname === '/admin') {
    if (token) {
      try {
        await jwtVerify(token, JWT_SECRET)
        return NextResponse.redirect(new URL('/admin/dashboard', request.url))
      } catch {
        return NextResponse.next()
      }
    }
    return NextResponse.next()
  }

  // /admin/dashboard, /admin/posts: 미인증 시 로그인으로 리다이렉트
  if (!token) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  try {
    await jwtVerify(token, JWT_SECRET)
    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL('/admin', request.url))
  }
}

export const config = {
  matcher: ['/admin', '/admin/dashboard/:path*', '/admin/posts/:path*'],
}

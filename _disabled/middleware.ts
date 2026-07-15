import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken, SESSION_COOKIE } from './app/lib/auth'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Login page + login/logout API routes are always public
  if (
    pathname === '/admin' ||
    pathname.startsWith('/api/admin/login') ||
    pathname.startsWith('/api/admin/logout')
  ) {
    return NextResponse.next()
  }

  // All other /admin/* and /api/admin/* require a valid JWT session cookie
  const token = request.cookies.get(SESSION_COOKIE)?.value
  const payload = token ? await verifyToken(token) : null

  if (!payload) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ ok: false, error: 'Unauthorized.' }, { status: 401 })
    }
    const url = new URL('/admin', request.url)
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path+', '/api/admin/:path+'],
}

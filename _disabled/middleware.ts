import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ADMIN_TOKEN = process.env.ADMIN_TOKEN ?? 'twa-session-token-change-me'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Login + logout routes are always public
  if (
    pathname === '/admin' ||
    pathname.startsWith('/api/admin/login') ||
    pathname.startsWith('/api/admin/logout')
  ) {
    return NextResponse.next()
  }

  // All other /admin/* and /api/admin/* require a valid session cookie
  const token = request.cookies.get('admin_token')?.value
  if (token !== ADMIN_TOKEN) {
    const url = new URL('/admin', request.url)
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path+', '/api/admin/:path+'],
}

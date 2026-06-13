import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const { password } = await request.json()

  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'twa-admin-2024'
  const ADMIN_TOKEN    = process.env.ADMIN_TOKEN    ?? 'twa-session-token-change-me'

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ ok: false, error: 'Incorrect password.' }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set('admin_token', ADMIN_TOKEN, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    // secure: true — uncomment in production (requires HTTPS)
    maxAge: 60 * 60 * 8, // 8 hours
  })
  return res
}

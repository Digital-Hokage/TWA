import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { generateToken, SESSION_COOKIE, SESSION_MAX_AGE } from '../../../lib/auth'
import { comparePassword } from '../../../lib/password'
import { prisma } from '../../../lib/db'

export async function POST(request: NextRequest) {
  let password = ''
  try {
    const body = await request.json()
    password = typeof body?.password === 'string' ? body.password : ''
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request payload.' }, { status: 400 })
  }

  const hash = process.env.ADMIN_PASSWORD_HASH
  if (!hash) {
    return NextResponse.json(
      { ok: false, error: 'Admin login is not configured. Set ADMIN_PASSWORD_HASH in .env.local.' },
      { status: 500 },
    )
  }

  const valid = password.length > 0 && (await comparePassword(password, hash))
  if (!valid) {
    try {
      await prisma.adminLog.create({
        data: { action: 'login_failed', detail: `Failed admin login attempt at ${new Date().toISOString()}` },
      })
    } catch {
      // Logging must never block the auth response
    }
    return NextResponse.json({ ok: false, error: 'Incorrect password.' }, { status: 401 })
  }

  const token = await generateToken({ role: 'admin' })

  try {
    await prisma.adminLog.create({ data: { action: 'login', detail: 'Admin signed in' } })
  } catch {
    // non-fatal
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  })
  return res
}

// Edge-safe JWT/session helpers (imported by middleware — keep Node-only deps out).
// Password hashing lives in app/lib/password.ts (bcryptjs, Node runtime only).
import { SignJWT, jwtVerify, type JWTPayload } from 'jose'

const SESSION_HOURS = 8
export const SESSION_MAX_AGE = SESSION_HOURS * 60 * 60 // seconds
export const SESSION_COOKIE = 'twa_admin'

function getSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET
  if (!secret) throw new Error('JWT_SECRET is not set. Add it to .env.local.')
  return new TextEncoder().encode(secret)
}

export async function generateToken(payload: JWTPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_HOURS}h`)
    .sign(getSecret())
}

export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret())
    return payload
  } catch {
    return null
  }
}

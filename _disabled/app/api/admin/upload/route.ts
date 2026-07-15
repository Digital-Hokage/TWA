import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'

// Whitelisted upload destinations under /public
const DESTINATIONS: Record<string, string[]> = {
  resources: ['public', 'resources'],
  partners: ['public', 'images', 'partners'],
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const files    = formData.getAll('files') as File[]
    const destKey  = (formData.get('dir') as string | null) ?? 'resources'
    const destPath = DESTINATIONS[destKey]

    if (!destPath) {
      return NextResponse.json({ ok: false, error: 'Invalid upload destination.' }, { status: 400 })
    }
    if (!files.length) {
      return NextResponse.json({ ok: false, error: 'No files provided.' }, { status: 400 })
    }

    const dir = join(process.cwd(), ...destPath)
    await mkdir(dir, { recursive: true })

    const publicPrefix = '/' + destPath.slice(1).join('/')
    const uploaded: { name: string; path: string; size: string }[] = []

    for (const file of files) {
      const bytes    = await file.arrayBuffer()
      const buffer   = Buffer.from(bytes)
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_').toLowerCase()
      const filepath = join(dir, safeName)
      await writeFile(filepath, buffer)

      const sizeMB = buffer.length / (1024 * 1024)
      const size   = sizeMB < 0.1
        ? `${(buffer.length / 1024).toFixed(1)} KB`
        : `${sizeMB.toFixed(1)} MB`

      uploaded.push({ name: safeName, path: `${publicPrefix}/${safeName}`, size })
    }

    return NextResponse.json({ ok: true, uploaded })
  } catch (err) {
    console.error('[upload]', err)
    return NextResponse.json({ ok: false, error: 'Upload failed.' }, { status: 500 })
  }
}

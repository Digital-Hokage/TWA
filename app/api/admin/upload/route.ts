import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const files    = formData.getAll('files') as File[]

    if (!files.length) {
      return NextResponse.json({ ok: false, error: 'No files provided.' }, { status: 400 })
    }

    const resourcesDir = join(process.cwd(), 'public', 'resources')
    await mkdir(resourcesDir, { recursive: true })

    const uploaded: { name: string; path: string; size: string }[] = []

    for (const file of files) {
      const bytes    = await file.arrayBuffer()
      const buffer   = Buffer.from(bytes)
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_').toLowerCase()
      const filepath = join(resourcesDir, safeName)
      await writeFile(filepath, buffer)

      const sizeMB = buffer.length / (1024 * 1024)
      const size   = sizeMB < 0.1
        ? `${(buffer.length / 1024).toFixed(1)} KB`
        : `${sizeMB.toFixed(1)} MB`

      uploaded.push({ name: safeName, path: `/resources/${safeName}`, size })
    }

    return NextResponse.json({ ok: true, uploaded })
  } catch (err) {
    console.error('[upload]', err)
    return NextResponse.json({ ok: false, error: 'Upload failed.' }, { status: 500 })
  }
}

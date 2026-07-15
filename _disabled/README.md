# `_disabled/` — Server-side backend (not part of the static build)

This folder holds the full-stack backend that **cannot run on static/FTP shared
hosting** (no Node.js process). It was moved out of the build when the site was
converted to a Next.js static export (`output: 'export'`). **Nothing here is
deleted** — it is preserved so it can be restored if you ever move to a
Node-capable host (VPS, Railway, Render, or a cPanel/DirectAdmin plan with a
Node.js Selector).

## What's here
- `app/api/`   — all API route handlers (contact, volunteers, donations, admin, Razorpay create-order/verify, uploads, CMS endpoints)
- `app/admin/` — the admin CMS pages (dashboard, donations, volunteers, messages, stats, media, partners, faqs, log, integrations, …)
- `app/lib/db.ts`, `app/lib/auth.ts`, `app/lib/password.ts` — Prisma client + JWT auth + bcrypt helpers
- `middleware.ts` — JWT route protection for `/admin` and `/api/admin`

The Prisma schema, migrations and seed remain in the top-level `prisma/` folder.

`_disabled/` and `prisma/` are excluded from `tsconfig.json` so they are not
type-checked or bundled by `next build`.

## To restore the backend (on a Node-capable host)
1. Move `_disabled/app/api`, `_disabled/app/admin` back to `app/`.
2. Move `_disabled/app/lib/*.ts` back to `app/lib/`.
3. Move `_disabled/middleware.ts` back to the repo root.
4. Remove `output: 'export'` (and the export-only options) from `next.config.js`.
5. Remove `_disabled`/`prisma` from the `tsconfig.json` `exclude` array.
6. Point `DATABASE_URL` at MySQL (or keep SQLite) and run `npx prisma migrate deploy`.

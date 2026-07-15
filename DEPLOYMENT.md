# Deployment Guide — TWA Chennai (twachennai.org)

## Hosting Setup
- **Host:** DirectAdmin shared hosting (LiteSpeed), FTP + SSH access
- **Domain:** twachennai.org
- **Type:** Next.js **static export** (`output: 'export'` → `./out` folder)
- **Auto-deploy:** GitHub Actions uploads `./out` via FTP on every push to `main`

> **Why static?** This shared plan has **no Node.js runtime**, so the Next.js
> server, API routes, admin CMS, Prisma database and server-side Razorpay
> verification cannot run on it. Those were moved to `_disabled/` (preserved, not
> deleted — see `_disabled/README.md`). The public marketing site is exported to
> pure HTML/CSS/JS. Forms are delivered by **Web3Forms** (email); donations use a
> **Razorpay hosted Payment Page** (optional) plus an email pledge flow.

## GitHub Secrets Required
GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**

| Secret Name | Value | Where to get it |
|---|---|---|
| `FTP_SERVER` | Your FTP host (e.g. `ftp.twachennai.org` or the server IP) | DirectAdmin → FTP Management |
| `FTP_USERNAME` | Your FTP username | DirectAdmin → FTP Management |
| `FTP_PASSWORD` | Your FTP password | DirectAdmin → FTP Management |
| `FTP_SERVER_DIR` | Web root — usually `/public_html/` (see options below) | DirectAdmin |
| `WEB3FORMS_KEY` | Your Web3Forms access key | web3forms.com (free) |
| `GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` | analytics.google.com |
| `RAZORPAY_PAYMENT_URL` | *(optional)* URL of a hosted Razorpay Payment Page | Razorpay Dashboard → Payment Pages |

If you omit `RAZORPAY_PAYMENT_URL`, the donate form simply shows the pledge-only
flow (no "Pay online" button) — that's fine.

### `FTP_SERVER_DIR` options
- Primary domain: **`/public_html/`**
- Addon/secondary domain on DirectAdmin: often **`/domains/twachennai.org/public_html/`**

If unsure, log in via FTP once with FileZilla and note the folder your existing
site files live in. That exact path is your `FTP_SERVER_DIR`.

## How Deployment Works
1. You push any change to the `main` branch.
2. GitHub Actions automatically:
   - `npm ci` — installs dependencies
   - `npm run build` — produces the static `/out` folder (with `NEXT_PUBLIC_*` values baked in)
   - Uploads only changed files to your host via FTP
3. Site is live within a couple of minutes.

## Local Development
```bash
npm install
cp .env.example .env.local   # then fill in your NEXT_PUBLIC_* values
npm run dev                  # http://localhost:3000
npm run build                # produces ./out
npm run serve                # preview the static ./out locally
```

## Manual Deploy (fallback)
```bash
npm run build
```
Then upload the **contents of `/out`** (including the hidden `.htaccess`) to your
web root via FileZilla or DirectAdmin File Manager.

## What the `.htaccess` does (in `public/.htaccess`, copied into `/out`)
- Forces HTTPS
- Redirects `www.twachennai.org` → `twachennai.org`
- Serves clean URLs (`/about` → `/about/index.html`)
- Sets security + caching headers
- `ErrorDocument 404 → /404.html`

## Restoring the backend later
If you move to a Node-capable host and want the admin CMS + database + server-side
payments back, follow `_disabled/README.md`.

---

**After adding GitHub secrets, push any commit to `main`. GitHub Actions will build
and FTP-upload automatically. Watch the Actions tab on GitHub to see it run. First
deploy takes 3–5 minutes. After that, 1–2 minutes per push.**

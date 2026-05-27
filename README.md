# Thalassemia Welfare Association — Chennai

Production website for the Thalassemia Welfare Association, a registered
non-profit supporting thalassemia patients across Tamil Nadu.

Built with **Next.js 14 (App Router)**, **TypeScript** and a small, hand-rolled
design system (no UI framework, no Tailwind, no runtime CSS-in-JS — just
plain CSS variables and utility classes).

## What's in the site

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, programmes, cost transparency, tax calculator, blood donor CTA, FAQ |
| `/about` | Mission, story, values, governance |
| `/what-is-thalassemia` | Patient/family-facing primer on the disease and treatment |
| `/programs` | Detailed breakdown of each programme |
| `/get-involved` | Volunteer roles + application form |
| `/donate` | Donation form, cost breakdown, 80G tax calculator, trust signals |
| `/transparency` | Registrations, annual reports, governance principles, grievance redressal |
| `/contact` | Address, helpline, email, contact form |
| `/stories` | Patient stories (consent-first; to be filled with real stories) |
| `/privacy`, `/terms` | Legal pages |
| `/sitemap.xml`, `/robots.txt` | SEO |

API routes (Next.js route handlers, no separate backend needed):

- `POST /api/donations` — validates input, records pledge
- `POST /api/volunteers` — validates input, records application
- `POST /api/contact` — validates input, records message

All three routes do server-side validation, return structured
`{ ok, data?, error?, fields? }` JSON, and log accepted submissions.

## Local development

```powershell
npm install
npm run dev
```

Open <http://localhost:3000>.

## Production build

```powershell
npm run build
npm run start
```

## Before launch — required edits

The codebase is content-complete but uses clearly-marked placeholders for
information only the organisation can provide. Replace them in
[`app/lib/constants.ts`](app/lib/constants.ts):

- `CONTACT.phonePrimary`, `phoneHelpline`, `addressLine1`, `addressLine2`, `pincode`
- `REGISTRATION.societyRegNo`, `pan`, `reg80G`, `reg12A`, `csrRegNo`
- `SOCIAL.*` (Facebook / Instagram / etc.)
- `ORG.url` if not `https://twachennai.org`

Outstanding integrations to wire up before going live with donations:

1. **Payment gateway** — `POST /api/donations` currently records the pledge
   only. Plug in Razorpay (recommended in India) and replace the `TODO` in
   [`app/api/donations/route.ts`](app/api/donations/route.ts) with order creation
   and signature verification.
2. **Transactional email** — connect SendGrid / Postmark / Resend and send:
   - 80G receipt on successful payment
   - Volunteer application acknowledgement
   - Contact-form auto-reply and team notification
3. **Submission storage** — pick a database (Postgres, MongoDB, or even a
   form backend like Formspree) and persist the validated submissions from
   the three route handlers.

The `backend/` Express/Mongo skeleton from the original prototype is kept
in the repository for reference but is **not used** by the live site. Either
flesh it out into a real service or delete it; the App Router route handlers
are sufficient for the launch surface.

## Design notes

- Light, calm palette (deep medical red `#B91C1C` + teal `#0F766E`).
- Single source of truth for tokens in
  [`app/globals.css`](app/globals.css) under `:root`.
- All icons are a single inline-SVG component
  ([`app/components/Icon.tsx`](app/components/Icon.tsx)) with accessible
  labels — no emoji headers anywhere.
- Animations are subtle CSS only and respect `prefers-reduced-motion`.
- Structured data (`schema.org/NGO`) is emitted from
  [`app/layout.tsx`](app/layout.tsx).
- Security headers are set in [`next.config.js`](next.config.js).

## Accessibility

- Skip-link, semantic landmarks, `aria-current` on the active nav link.
- Forms use real `<label>` elements, `aria-invalid`, and `aria-pressed`
  on toggle buttons.
- Colour contrast meets WCAG 2.1 AA on all text.
- Reduced-motion preference is honoured globally.

## License

Source code: MIT. Brand assets and donor data are not licensed for reuse.

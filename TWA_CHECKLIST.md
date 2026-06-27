# TWA Website — Development Checklist

Two-way list: what you need to GET from TWA, and what you need to GIVE them.

---

## PART A — What You Need to COLLECT from TWA

### 1. Registration & Legal Numbers  *(blocking — site should NOT go live without these)*

| Item | Where it's used | Status |
|------|----------------|--------|
| Society Registration Number | Footer, Transparency page | ✅ **273/2005** — filled in constants.ts |
| PAN (Permanent Account Number) | Donate page, 80G receipts | ✅ **AABTT4267D** — filled in constants.ts |
| 80G certificate number + validity date | Footer, Donate page, Transparency | `TODO` — still needed |
| 12A certificate number | Transparency page, CSR profile | `TODO` — still needed |
| CSR-1 registration number | Transparency page | `TODO` — still needed |
| FCRA registration (if they have it) | Transparency page | Not confirmed |

---

### 2. Contact Details  *(blocking)*

| Item | Where it's used | Status |
|------|----------------|--------|
| Primary phone number | Header, footer, Contact page | ✅ **044-22542201** — filled in constants.ts |
| Helpline phone number | Contact page | ✅ **044-22542202** — filled as phoneHelpline |
| Full postal address with pincode | Footer, Contact page, Google Maps | ✅ **VHS Thalassaemia Transfusion Centre... Chennai 600113** — filled in constants.ts |
| Confirm: is `twachennai@gmail.com` the right mailbox? | All 4 forms email this address | `TODO` — still needs confirmation |
| Separate email for donations (if they want one) | Donate page, footer | `TODO` — placeholder domain used |
| Separate email for volunteers (if they want one) | Get Involved page | `TODO` — placeholder domain used |

---

### 3. Bank / Donation Details  *(blocking)*

| Item | Notes |
|------|-------|
| Bank account name, number, IFSC code | Must be in TWA's registered name |
| UPI ID (if any) | For donors who prefer UPI |
| Razorpay / payment gateway access (if they have one) | Right now all donations go by email — no live payment link |

> **Note:** The current donate flow sends a pledge email to twachennai@gmail.com.
> Before launch, decide: keep email-based OR integrate Razorpay. Get their answer first.

---

### 4. Photos & Images  *(high priority — every page has placeholders)*

| Photo needed | Used on | Notes |
|-------------|---------|-------|
| TWA official logo (SVG or PNG, white + colour) | Header, footer, all pages | Vector preferred; PNG min 1000px wide, transparent bg |
| Dr. Revathi Raj portrait | Homepage, About, Our Story | Portrait orientation (3:4), clear face |
| Group photo — team/patients/volunteers at VHS | Homepage hero | Landscape 16:9 or wider, high resolution |
| Blood transfusion session at VHS Taramani | Programs page | **Requires signed patient media consent** |
| Awareness camp / World Thalassemia Day event | Homepage, Our Story | Landscape 16:9 |
| Diwali celebration after BMT | Our Story | Existing photo from records |
| Prenatal diagnosis / CVS procedure photo | Our Story, Programs | Coordinate with Mediscan if needed |
| BMT context photo (Apollo Hospitals or VHS) | Programs, Our Story | Clinical setting; patient consent required |
| Camp Rainbow art therapy session | Programs page | Cheerful, children doing art; consent required |
| Annamayil meal service | Programs page | Food being served to patients |
| Partner logos (Apollo, Mediscan, Annamayil, Camp Rainbow, Masonic Medical, Rotary Nellore) | Homepage partners section, Our Story | Logos from each partner's comms team |

---

### 5. Documents to Upload  *(can come after launch)*

| Document | Where |
|----------|-------|
| Audited annual report PDF (latest year) | Transparency page — public download |
| Scanned 80G certificate | Transparency page — donors ask for proof |
| Scanned 12A certificate | Transparency page |
| Scanned society registration certificate | Transparency page |
| MoU summary with Apollo Hospitals (redacted ok) | Transparency page (optional) |
| MoU summary with Mediscan Systems (redacted ok) | Transparency page (optional) |
| Press kit PDF (logo + boilerplate + Dr. Revathi Raj bio) | /resources/ — for journalists |

---

### 6. Content & Stats to Confirm  *(need Dr. Revathi Raj sign-off)*

| Item | Current value on site | Needs confirmation |
|------|----------------------|-------------------|
| Active patient count (2026) | 199 | Confirm or update |
| Total BMTs performed | 300+ | Confirm exact number |
| Deaths over two decades | 23 | Confirm or remove |
| Babies delivered in TWA cohort | 9 | Confirm |
| CVS procedures facilitated | 100+ | Confirm |
| All clinical facts on What is Thalassemia page | Various | Dr. Revathi Raj must review |
| All programme descriptions on Programs page | Various | Dr. Revathi Raj must review |

---

### 7. Missing Media Article URLs

Five articles on the Media page still have `url: '#'` as a placeholder. Get live URLs or confirm they are unavailable:

- LiveChennai, 6 September 2010 — *"Four children cured of Thalassemia..."*
- New Indian Express, 1 July 2013 — *"Undetected thalassemia preying on Dharmapuri kids"*
- The News Minute, 1 June 2023 — *"Rays of hope for thalassemia"* (authored by Dr. Revathi Raj)
- Apollo Hospitals, 31 May 2023 — *"Highest number of thalassemia affected children..."*
- Times of India, 15 May 2026 — *"Hosp marks World Thalassemia Day"*

---

### 8. Social Media

| Platform | Status |
|----------|--------|
| Facebook page URL | Empty in constants.ts |
| Instagram handle | Empty in constants.ts |
| YouTube channel URL | Empty — also needed for the awareness video embed on Our Story |
| LinkedIn page URL | Empty in constants.ts |
| Twitter / X handle | Empty in constants.ts |

---

### 9. TWA Awareness Video

The Our Story page has a **video placeholder** waiting for a YouTube link from "Reva."
- Get the YouTube URL for the TWA awareness film
- Goes directly into the `<iframe>` embed on Our Story page — 5 minute job once URL is provided

---

## PART B — What You Need to GIVE / SHOW TWA

### 1. Before Launch — Get Their Approval On

- [ ] **Full site walkthrough** — share a preview link (deploy to Vercel/Netlify) so Dr. Revathi Raj and the rep can review every page
- [ ] **All factual/clinical content** — especially the What is Thalassemia page and Programs page descriptions
- [ ] **Donation flow** — show them exactly what happens when someone clicks "Pledge": the email that opens, what it says, where it goes
- [ ] **How forms work** — Contact, Volunteer, and Donate forms all currently email twachennai@gmail.com. Confirm this is what they want.
- [ ] **Privacy Policy and Terms of Service** — these pages exist but have placeholder text. TWA or their legal contact must review and approve before launch.

---

### 2. Image Specifications to Give Them

Give this spec sheet to whoever is collecting photos:

| Image | Minimum size | Format | Aspect ratio |
|-------|-------------|--------|-------------|
| Logo (colour) | 400 × 150 px | SVG or PNG (transparent bg) | ~3:1 |
| Logo (white) | 400 × 150 px | SVG or PNG (transparent bg) | ~3:1 |
| Hero photo (homepage) | 1400 × 900 px | JPG or WebP | 16:10 |
| Dr. Revathi Raj portrait | 800 × 1000 px | JPG | 4:5 |
| Story/event photos (landscape) | 1200 × 675 px | JPG or WebP | 16:9 |
| Partner logos | 400 × 400 px | SVG or PNG (transparent bg) | 1:1 or brand original |

---

### 3. What to Tell Them About the Donate Flow

Right now the site does NOT have a live payment gateway. This is what currently happens:
1. Donor fills the form and clicks "Pledge ₹X"
2. Their email app opens with a pre-filled message to twachennai@gmail.com
3. Donor sends the email
4. TWA team manually follows up with a bank transfer or payment link

Tell them: this is fine for now, but if they want **online payments with automatic receipts**, they need a Razorpay account. You can integrate it once they confirm they want it.

---

### 4. What to Tell Them the Site Can NOT Do Yet

Be upfront so they don't expect features that aren't built:

- No online payment — donations go by email pledge only
- No patient login or patient records portal
- No volunteer database — volunteer applications go by email
- No newsletter / mailing list integration
- No blog or CMS — all content is in code files (you have to update it)
- No multi-language support (English only)

---

### 5. After Launch — Provide Them

- [ ] **How to update content** — write a simple 1-page guide: how to change phone number, how to add a new media article, how to update patient count. Point them to `app/lib/constants.ts` for the quick-change fields.
- [ ] **How to add photos** — explain: put the file in `/public/images/`, replace the `data-src` or `src` attribute in the relevant page file.
- [ ] **Domain setup** — if `twachennai.org` needs to be pointed to the hosting, give them or the domain owner the DNS instructions.
- [ ] **Admin password** — change the default `ADMIN_PASSWORD` and `ADMIN_TOKEN` in `.env.local` before going live. Do not commit to git.
- [ ] **Google Analytics** — set up a GA4 property at analytics.google.com, get the `G-XXXXXXXXXX` measurement ID, and add it to `.env.local` as `NEXT_PUBLIC_GA_ID`.

---

## Quick Priority Summary

### Can't go live without these (BLOCKING):
1. ~~Phone numbers and full address~~ ✅ Done
2. ~~Society registration number~~ ✅ Done (273/2005)
3. PAN + 80G registration number — still needed
4. Bank details for donation instructions — still needed
5. ~~TWA logo~~ ✅ Done — logo.jpeg copied to public/images, Logo component updated
6. Confirm twachennai@gmail.com as the correct mailbox for all forms — still needed
7. Dr. Revathi Raj review and sign-off on clinical content — still needed
8. Patient photo consent forms for any patient images — still needed

### Should be done before launch but won't break the site:
- Partner logos
- Hero photo and at least 2–3 content photos
- Social media handles
- Confirm all impact statistics

### Can come after launch:
- Annual report PDFs
- Full photo library
- Patient stories
- YouTube video embed
- Payment gateway integration
- Missing media article URLs

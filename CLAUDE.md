@AGENTS.md
# Project: Harthfield Homes — Real Estate Website

---

## 🚧 ACTIVE TODO LIST

### ✅ Completed
- [x] Update business name to "Harthfield Homes" in all documentation
- [x] Set up core utilities (`/lib/db.ts` — Supabase client + TypeScript types)
- [x] Set up email handler (`/lib/email.ts` — Resend integration)
- [x] Build UI primitives (`Button.tsx`, `Input.tsx`, `Textarea.tsx`)
- [x] Build ContactForm component (`/components/sections/ContactForm.tsx`)
- [x] Build contact API route (`/app/api/contact/route.ts`)
- [x] Create basic homepage with hero section and embedded contact form
- [x] Test and verify Supabase database integration (ContactForm table)
- [x] Test and verify Resend email delivery (using onboarding@resend.dev)
- [x] Set up dev server and confirm site loads properly

### Phase 1 Completion
- [ ] Build Projects page (`/app/projects/page.tsx`) — clean photo grid with placeholders
- [ ] Build Contact page (`/app/contact/page.tsx`) — reuse ContactForm + contact info
- [ ] Add navigation header — logo + nav links (Home, Projects, Contact)
- [ ] Add footer — minimal with basic info
- [ ] Test full site navigation flow

### Styling & Polish (Later)
- [ ] Review and refine contact form styling
- [ ] Review and refine homepage hero section styling
- [ ] Add subtle light tan/olive green accent colors where appropriate
- [ ] Test responsive design on mobile/tablet
- [ ] Review typography and spacing consistency

### Email & Domain Setup (Future)
- [ ] Verify custom domain in Resend (harthfieldhomes.com or chosen domain)
- [ ] Update `lib/email.ts` from address from `onboarding@resend.dev` to `noreply@harthfieldhomes.com`
- [ ] Test email delivery from custom domain

### Images & Content (Future)
- [ ] Upload project photos to Cloudflare R2
- [ ] Create/update Supabase `properties` table with R2 image URLs
- [ ] Replace placeholder images on Projects page with real photos
- [ ] Add 1-2 project photo teasers to homepage
- [ ] Write final copy for homepage (headline, explainer, credibility section)

### Database & Backend (Future)
- [ ] Rename Supabase table from `ContactForm` to `contacts` (update API route accordingly)
- [ ] Enable RLS (Row Level Security) when authentication is added
- [ ] Create `properties` table schema
- [ ] Create `customers`, `contractors`, `designers` tables (Phase 2)

---

## Business Context
Real estate company focused on soliciting property sales and purchases.
Two partners: Mark (fullstack/technical lead) and Adam (business).
Early-stage startup — prioritize clean, maintainable, scalable code over complexity.

## Site Philosophy
This is a digital business card + proof of capability + lead intake tool.
A credible landing hub that turns curiosity into conversations.

It is NOT:
- A marketing funnel
- A content-heavy blog or resource site
- A corporate brochure
- An investor mailer

Every design and copy decision should reflect: boutique real estate developer.
Clean. Intentional. Trustworthy. Minimal.

## Brand & Style Guide

### Brand Identity
- Company: Harthfield Holdings
- Tagline: "Building Legacies. Creating Places to Call Home."
- Location: Brentwood, Tennessee
- Services: Real Estate Investments, Custom Home Building, Property Management, Land Development
- Brand voice: Rooted, trustworthy, refined. Not corporate. Not flashy.

### Color Palette
Use these exact hex values throughout — no substitutions:
- Sage Green: #6F7D6B
- Limestone: #E6E0D6
- Soft White: #F7F5F2
- Natural Clay: #CBB9A6
- Charcoal: #2B2B2B

### Typography
Import both fonts from Google Fonts.

Primary font (Montserrat) — used for: navigation, buttons, labels, body text, 
all-caps section headings. Descriptors: Clean, Modern, Confident.

Accent font (Playfair Display) — used for: hero headlines, section titles, 
pull quotes, anywhere gravitas is needed. Descriptors: Elegant, Refined, Timeless.

Example usage:
- Hero headline → Playfair Display, large, normal weight
- Nav links → Montserrat, small, tracked out, uppercase
- Body copy → Montserrat, regular weight
- Sub-headings → Playfair Display or Montserrat depending on context

### Iconography
Thin, minimal line icons — no filled/solid icons. Style matches the brand board:
simple house outline, leaf/botanical motifs, key outline, landscape/mountain line.
Use Lucide React for icons as it matches this aesthetic closely.

### General UI Feel
- Lots of whitespace — let elements breathe
- Neutral backgrounds (Soft White #F7F5F2 or white) 
- Charcoal (#2B2B2B) for primary text — not pure black
- Sage Green (#6F7D6B) for accents, hover states, and subtle details
- Natural Clay (#CBB9A6) for dividers, borders, secondary accents
- Limestone (#E6E0D6) for section background alternates
- Photography is the hero — UI should frame it, not compete with it
- Buttons: outlined or minimal — avoid heavy filled buttons except for primary CTA
- No drop shadows, no gradients, no rounded pill shapes
- Subtle separators using thin lines or spacing rather than cards or boxes

## Tech Stack
- **Framework:** Next.js (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Image Storage:** Cloudflare R2 (S3-compatible, zero egress fees)
- **Frontend + API Hosting:** Vercel (monorepo — frontend and serverless API routes together)
- **Transactional Email:** Resend (sends contact form submissions to Adam)
- **Domain + Business Email + Phone:** Northwest Registered Agent
- **Version Control:** GitHub → auto-deploys to Vercel on push

## Repository Structure
Single monorepo. Next.js API Route Handlers serve as the backend (Vercel serverless
functions). Do not split into separate frontend/backend repos or introduce a separate
backend service unless explicitly discussed.

/app
/page.tsx                   ← Homepage
/projects/page.tsx          ← Projects/gallery page
/contact/page.tsx           ← Contact page
/api/contact/route.ts       ← Contact form POST handler
/components
/ui                         ← Small reusable primitives (Button, Input, etc.)
/sections                   ← Page sections (Hero, ContactForm, ProjectGrid, etc.)
/lib
/db.ts                      ← Supabase client
/email.ts                   ← Resend logic
/public
/images                     ← Any local static images (logo, placeholders)
CLAUDE.md                     ← This file
README.md                     ← Setup and deployment instructions
.env.local                    ← Local secrets — never commit

## Pages (Phase 1 Scope — 3 pages)

### 1. Homepage (`/`)
- Hero section: bold headline, one-line value proposition, CTA button to contact form
- Brief explainer: what the company does, who it's for (2-3 sentences max)
- Credibility section: a few stats, a short trust statement, or a brief about blurb
- 1-2 high quality project photos (teaser, links to /projects)
- Contact form (reusable component, same form used on /contact)

### 2. Projects (`/projects`)
- Clean photo grid of completed properties
- Minimal captions if any — let the photos speak
- Images served from Cloudflare R2 URLs stored in Supabase

### 3. Contact (`/contact`)
- Reused contact form component
- Phone number
- Email address
- Optional: brief friendly copy above the form

## Contact Form
- Fields: name, email, phone (optional), message
- On submit: POST to `/api/contact`
- API route:
  1. Validates input
  2. Inserts row into Supabase `contacts` table
  3. Sends email notification to Adam via Resend
- Shows clear success or error state after submission
- Component lives in /components/sections/ContactForm.tsx
- Reused on both homepage and /contact page

## Database (Supabase / PostgreSQL)
- Region: US East
- Client: `@supabase/supabase-js` initialized in `/lib/db.ts`
- RLS disabled for now — enable when auth is introduced
- Data API enabled, tables auto-exposed

### Current table schemas:
create table public."Contact" (
  "contactID" bigint generated by default as identity not null,
  "createdDate" timestamp with time zone not null default now(),
  "FirstName" character varying null default ''::character varying,
  "LastName" character varying null default ''::character varying,
  "Company" character varying null,
  "Email" character varying null default ''::character varying,
  "Phone" character varying null default ''::character varying,
  constraint Contact_pkey primary key ("contactID")
) TABLESPACE pg_default;

create table public."ContactForm" (
  id bigint generated by default as identity not null,
  "contactDate" timestamp with time zone not null default now(),
  "firstName" character varying not null default ''::character varying,
  "lastName" character varying not null default ''::character varying,
  email character varying not null default ''::character varying,
  phone character varying null,
  message text null default ''::text,
  "propertyAddress" character varying null,
  "contactMethodID" bigint null,
  constraint ContactForm_pkey primary key (id),
  constraint ContactForm_contactMethodID_fkey foreign KEY ("contactMethodID") references "ContactMethod" ("contactMethodID")
) TABLESPACE pg_default;

create table public."Property" (
  "propertyID" bigint generated by default as identity not null,
  "createdDate" timestamp with time zone not null default now(),
  "AddressLine1" character varying null default ''::character varying,
  "AddressLine2" character varying null default ''::character varying,
  "City" character varying null default ''::character varying,
  "State" character varying null default ''::character varying,
  "Postal" character varying null default ''::character varying,
  "contactID" bigint null,
  constraint Property_pkey primary key ("propertyID"),
  constraint Property_contactID_fkey foreign KEY ("contactID") references "Contact" ("contactID")
) TABLESPACE pg_default;

create table public."PropertyImages" (
  "propertyImageID" bigint generated by default as identity not null,
  "createdDate" timestamp with time zone not null default now(),
  "propertyID" bigint null,
  "Description" character varying null default ''::character varying,
  "AltText" character varying null default ''::character varying,
  "Featured" boolean null,
  "Url" character varying null default ''::character varying,
  "Filename" character varying null default ''::character varying,
  constraint PropertyImages_pkey primary key ("propertyImageID"),
  constraint PropertyImages_propertyID_fkey foreign KEY ("propertyID") references "Property" ("propertyID")
) TABLESPACE pg_default;

create table public."ContactMethod" (
  "contactMethodID" bigint generated by default as identity not null,
  "Method" character varying null default ''::character varying,
  constraint ContactMethod_pkey primary key ("contactMethodID")
) TABLESPACE pg_default;

### Future tables (Phase 2)
- `properties` — address, description, status, R2 image URLs
- `customers` — buyer/seller contact records
- `contractors` — contractor info and project associations
- `designers` — designer info

Images are NEVER stored in the database — R2 URLs only.

## Image Handling
- Images live in Cloudflare R2
- Public R2 URL stored in Supabase
- Always use Next.js `<Image />` — never raw `<img>`
- Web-optimized versions preferred for gallery display
- Future: admin upload UI for Adam

## Environment Variables
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
RESEND_API_KEY=
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET_NAME=
R2_PUBLIC_URL=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=

Stored in `.env.local` locally. Mirrored in Vercel dashboard. Never committed to git.

## Code Style & Conventions
- TypeScript strict mode — type all props, API responses, and DB results
- async/await only — no .then() chains
- API route handlers stay thin — logic lives in /lib
- Tailwind for all styling — no CSS modules, no inline styles
- No external UI component libraries — keep dependencies minimal
- Next.js `<Image />` for all images
- No HTML `<form>` tags — use controlled React state and onClick handlers
- Component filenames: PascalCase (`ContactForm.tsx`)
- All other files: camelCase (`db.ts`, `email.ts`)

## Deployment
- GitHub push → Vercel auto-deploys
- Environment variables set in Vercel dashboard
- Never commit `.env.local`

## Out of Scope (Phase 1)
- Authentication or admin dashboard
- CRM features
- Property listings or search
- E-commerce or payments
- Any Railway services

## Phase 2 (Future)
- Admin upload UI for Adam (drag and drop → R2)
- Full CRM tables (properties, customers, contractors, designers)
- Per-property galleries from R2 URLs in DB
- Custom image domain (images.businessname.com)
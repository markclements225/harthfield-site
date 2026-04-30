@AGENTS.md
# Project: [Business Name] — Real Estate Website

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

## Design Direction
- Color palette: black, white, gray, subtle earth tones (warm beige, taupe)
- Typography: clean serif or modern sans-serif — nothing decorative or loud
- Layout: lots of whitespace, high-quality photos do the talking
- No stock-photo filler, no clip art, no busy layouts
- Think architectural firm website, not real estate listing portal

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
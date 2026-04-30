# [Business Name] — Company Website

## Tech Stack
Next.js · TypeScript · Tailwind CSS · Supabase · Cloudflare R2 · Vercel · Resend

## Local Development

### 1. Clone the repo
git clone https://github.com/yourusername/repo-name.git
cd repo-name

### 2. Install dependencies
npm install

### 3. Set up environment variables
cp .env.example .env.local
# Fill in all values in .env.local

### 4. Run the dev server
npm run dev
# Open http://localhost:3000

## Environment Variables
| Variable | Description |
|---|---|
| NEXT_PUBLIC_SUPABASE_URL | Supabase project URL |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Supabase anon/public key |
| RESEND_API_KEY | Resend API key for email |
| R2_ACCOUNT_ID | Cloudflare account ID |
| R2_ACCESS_KEY_ID | R2 access key |
| R2_SECRET_ACCESS_KEY | R2 secret key |
| R2_BUCKET_NAME | R2 bucket name |
| R2_PUBLIC_URL | Public R2 base URL |

## Deployment
Vercel — auto-deploys on push to main branch.
Set all environment variables in Vercel dashboard under Settings → Environment Variables.

## Project Structure
See CLAUDE.md for full architecture and conventions reference.
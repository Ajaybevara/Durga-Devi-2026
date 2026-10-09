# Sri Durga Devi Festival Application

Responsive bilingual festival website and content-management dashboard for the
Sri Durga Devi Sharannavaratri Mahotsavam in Koragam.

## Commands

- `npm run dev` — run the local development server.
- `npm run build` — validate and create the production build.
- `npm run start` — serve the production build.

## Project structure

```text
app/                  Thin Next.js page and API route entry points
frontend/             Public bilingual festival interface
admin/                Administrative dashboard interface
backend/              Authentication, content, storage, and Neon logic
backend/data/         Persisted festival content fallback
public/images/        Categorized application images
public/videos/        Gallery and puja videos
public/admin-uploads/ Administrator-uploaded media
scripts/              Media-generation utility
neon/                 Neon PostgreSQL schema
docs/                 Media credits and supporting documentation
```

The public website is available at `/` and the protected content dashboard is
available at `/admin`. Runtime-generated folders such as `.next/`, `out/`, and
`node_modules/` are excluded from source control.

Copy `.env.example` to `.env.local` for local development. The local file is
excluded from source control so authentication and service keys remain private.
Set `DATABASE_URL` to the pooled connection string from the Neon Console. The
application creates its required tables automatically, or you can run
`neon/schema.sql` in the Neon SQL Editor.

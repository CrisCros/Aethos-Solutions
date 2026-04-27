# Aethos Solutions Landing Page

High-conversion landing page built with **Next.js App Router**, **TypeScript**, and **TailwindCSS**.

## Features

- Conversion-focused single page with one main CTA: **Book a free call**
- Mobile-first responsive layout
- Modular reusable components
- Contact form (`name`, `email`, `message`)
- API endpoint for form submissions (`/api/contact`)
- Optional webhook forwarding (`WEBHOOK_URL`) for n8n/Zapier/etc.
- Optional Calendly integration (`NEXT_PUBLIC_CALENDLY_URL`)
- SEO metadata configured in `app/layout.tsx`

## Project structure

```txt
.
├── app
│   ├── api/contact/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── buttons.tsx
│   ├── contact-form.tsx
│   ├── section.tsx
│   └── workflow-diagram.tsx
├── lib
│   └── site.ts
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── vercel.json
└── ...
```

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

Variables:

- `NEXT_PUBLIC_SITE_URL`: canonical site URL for SEO metadata (production domain).
- `NEXT_PUBLIC_CALENDLY_URL` (optional): direct scheduling link.
- `WEBHOOK_URL` (optional): receives contact form submissions.

## Production deploy (Vercel)

1. Push repository to GitHub.
2. Import project in Vercel.
3. Confirm these settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `.`
   - **Install Command:** `npm install`
   - **Build Command:** `npm run build`
4. Add environment variables from `.env.example` in **Project Settings → Environment Variables**.
5. Set your production domain (for example `aethos-solutions.vercel.app` or a custom domain) and match `NEXT_PUBLIC_SITE_URL`.
6. Redeploy.

### Quick checklist if deployment is "Ready" but site config still feels incomplete

- Check that `Production Branch` is set correctly (usually `main`).
- Re-run deployment after adding environment variables.
- Confirm DNS status in **Domains** if using a custom domain.
- Test the form endpoint in production at `https://<your-domain>/api/contact`.


### Fix for error: `The Next.js output directory ".next" was not found at "/vercel/path0/app/.next"`

If you see that exact error in Vercel logs, apply this checklist in order:

1. **Project Settings → General → Root Directory** must be `.` (repo root), **not** `app`.
2. **Project Settings → Build & Development Settings → Output Directory** should be empty (recommended) or `.next`.
3. Redeploy after saving settings.
4. Keep the standard Next.js build (`npm run build`) to avoid tracing mismatches in Vercel runtimes.


### Fix for error: `ENOENT ... /app/node_modules/styled-jsx/index.js`

This usually happens when Vercel runtime traces are being read from `app/.next` while dependencies are installed at repository root.

- Ensure **Root Directory** is `.`
- Do **not** mirror `.next` manually into `/app/.next`
- Use the default build command: `npm run build`
- Redeploy after clearing previous failed deployment cache


## Guías adicionales

- Guía en español para producción en Vercel: `docs/VERCEL_DEPLOY_ES.md`

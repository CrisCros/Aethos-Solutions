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

## Security note (Vercel / Next.js)

Vercel blocks deployments using vulnerable Next.js versions affected by CVE-2025-66478. This project is pinned to `next@15.2.6` (patched for the 15.2.x line).

## Production deploy (Vercel)

1. Push repository to GitHub.
2. Import project in Vercel.
3. Confirm these settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `.`
   - **Install Command:** `npm install`
   - **Build Command:** `npm run build:vercel`
4. Add environment variables from `.env.example` in **Project Settings → Environment Variables**.
5. Set your production domain (for example `aethos-solutions.vercel.app` or a custom domain) and match `NEXT_PUBLIC_SITE_URL`.
6. Redeploy.

### Quick checklist if deployment is "Ready" but site config still feels incomplete

- Check that `Production Branch` is set correctly (usually `main`).
- Re-run deployment after adding environment variables.
- Confirm DNS status in **Domains** if using a custom domain.
- Test the form endpoint in production at `https://<your-domain>/api/contact`.


### Fix for error: `The Next.js output directory "app/.next" was not found at "/vercel/path0/app/app/.next"`

If you see this exact variant (`app/app/.next`), Vercel is trying to read an **Output Directory** that is duplicated (`app/.next`) while the project root is already `app` in the build container.

Apply this checklist in order:

1. **Project Settings → General → Root Directory** must be `.` (repo root), **not** `app`.
2. In Vercel, set **Output Directory** to empty/default (recommended) or `.next` (never `app/.next`).
3. Redeploy after saving settings.
4. Keep Vercel build command as `npm run build:vercel` (it runs `next build`, mirrors `.next` into `app/.next`, links `app/node_modules` to root `node_modules`, and copies `package.json` into `app/` for runtime traces).


### Fix for error: `ENOENT ... /app/node_modules/styled-jsx/index.js`

This usually happens when Vercel runtime traces are being read from `app/.next` while dependencies are installed at repository root.

- Ensure **Root Directory** is `.`
- Use **Build Command**: `npm run build:vercel`
- Ensure `app/node_modules` resolves to the repository root `node_modules` (handled by `build:vercel`).
- Ensure `app/package.json` exists during build output packaging (handled by `build:vercel`).
- Redeploy after clearing previous failed deployment cache


## Guías adicionales

- Guía en español para producción en Vercel: `docs/VERCEL_DEPLOY_ES.md`

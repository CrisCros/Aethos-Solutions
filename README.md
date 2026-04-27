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
├── next.config.ts
├── tailwind.config.ts
└── ...
```

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Create `.env.local` (optional):

```bash
WEBHOOK_URL=https://your-n8n-or-webhook-endpoint
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
```

## Deploy to Vercel

1. Push repository to GitHub.
2. Import project in Vercel.
3. Add optional environment variables in Vercel settings.
4. Deploy.

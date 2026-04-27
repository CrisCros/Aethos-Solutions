# Guía rápida de despliegue en Vercel (Aethos Solutions)

Esta guía evita los errores más comunes que aparecieron en los despliegues previos.

## 1) Configuración del proyecto en Vercel

En **Project Settings**:

- **Framework Preset:** `Next.js`
- **Root Directory:** `.` (raíz del repositorio)
- **Build Command:** `npm run build`
- **Install Command:** `npm install`
- **Output Directory:** dejar vacío (recomendado)

## 2) Variables de entorno

En **Project Settings → Environment Variables** agrega:

- `NEXT_PUBLIC_SITE_URL` = URL de producción (por ejemplo `https://aethos-solutions.vercel.app`)
- `NEXT_PUBLIC_CALENDLY_URL` (opcional)
- `WEBHOOK_URL` (opcional, para n8n/Zapier)

## 3) Errores comunes y solución

### Error A
`The Next.js output directory ".next" was not found at "/vercel/path0/app/.next"`

**Causa probable:** `Root Directory` mal configurado en `app` o `Output Directory` incorrecto.

**Solución:**
1. Cambiar `Root Directory` a `.`
2. Limpiar `Output Directory` (vacío) o usar `.next`
3. Redeploy

### Error B
`ENOENT: ... /vercel/path0/app/node_modules/styled-jsx/index.js`

**Causa probable:** trazas/rutas de build inconsistentes (normalmente por configuración de carpeta raíz/salida incorrecta).

**Solución:**
1. Confirmar `Root Directory = .`
2. Confirmar `Build Command = npm run build`
3. No mover/copiar manualmente `.next` dentro de `app/`
4. Hacer redeploy y, si hace falta, limpiar caché

## 4) Validación final

- Abrir el dominio de preview/producción y verificar que cargue la landing.
- Probar `POST /api/contact` desde la UI del formulario.
- Si hay webhook, confirmar recepción del payload en n8n.

# Municipalidad — Demo gestión interna Centro Ovalle

Aplicación React (Vite) de demostración para gestión interna municipal. Antes estaba publicada en **centroovalle.cl** vía GitHub Pages; ahora se despliega en **Vercel**.

## Desarrollo local

```bash
npm install
cp .env.example .env
npm run dev
```

## Despliegue (Vercel)

Cada push a `main` despliega automáticamente si el proyecto está conectado en Vercel.

Variables de entorno en Vercel:

- `VITE_DEMO_PASSWORD` — clave de acceso a la demo

## Origen

Respaldo del proyecto `muni-gestiona-demo` que ocupaba centroovalle.cl antes del hub turístico Next.js.

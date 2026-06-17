# Publicar la demo en centroovalle.cl (GitHub Pages)

## Si GitHub dice: “Yowza, that’s a lot of files…”

Eso pasa al **subir archivos con el navegador** (arrastrar carpetas): GitHub limita a **~100 archivos** por tanda y el proyecto tiene muchos más (sobre todo si incluyes `node_modules`).

**No puedo subir el repo yo** desde aquí: haría falta **tu cuenta** y un **token** (o que lo hagas en tu Mac).

**Qué sí debes hacer:** subir con **Git por terminal** (o **GitHub Desktop**). Solo se versionan los archivos del código; `node_modules` y `dist` están en `.gitignore`, así que van **pocas decenas de archivos** y no aparece ese error.

Pasos rápidos:

1. En GitHub crea un repositorio **vacío** (sin README) y copia la URL `https://github.com/TU_USUARIO/TU_REPO.git`.
2. En tu Mac, en la carpeta del proyecto:

```bash
cd /ruta/a/muni-gestiona-demo
git init
git add -A
git status   # revisa que NO aparezca node_modules ni dist
git commit -m "Demo gestión interna"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

Si GitHub te pide login, usa **HTTPS + token personal** (Settings → Developer settings → PAT) o instala **GitHub CLI** (`brew install gh`) y `gh auth login`.

---

## Antes de apuntar el dominio

Si **centroovalle.cl** ya tiene otra web en producción, al usar el dominio en GitHub Pages **sustituirás** esa web mientras el DNS apunte aquí. Para una demo temporal, valorar **`www.centroovalle.cl`** o un subdominio; en ese caso cambia `public/CNAME` y el dominio en GitHub Pages.

## 1. Subir el código a GitHub

```bash
cd muni-gestiona-demo
git init
git add -A
git commit -m "Demo gestión interna — Pages centroovalle.cl"
git branch -M main
git remote add origin https://github.com/TU_ORG/TU_REPO.git
git push -u origin main
```

## 2. Activar GitHub Pages (Actions)

1. Repositorio → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. Repositorio → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
   - Nombre: `VITE_DEMO_PASSWORD`
   - Valor: el de `.env.example` (demo con clave)

## 3. Dominio personalizado en GitHub

1. **Settings** → **Pages** → **Custom domain** → escribe **`centroovalle.cl`**
2. Marca **Enforce HTTPS** cuando el chequeo esté en verde.

El archivo **`public/CNAME`** ya contiene `centroovalle.cl` y se copia a `dist/` en cada build.

## 4. DNS en el proveedor de centroovalle.cl

Para el **dominio raíz** (`centroovalle.cl`), crea **cuatro registros A** apuntando a GitHub Pages:

| Tipo | Nombre / Host | Valor        |
|------|----------------|--------------|
| A    | `@`            | 185.199.108.153 |
| A    | `@`            | 185.199.109.153 |
| A    | `@`            | 185.199.110.153 |
| A    | `@`            | 185.199.111.153 |

(Valores oficiales: [Documentación GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain).)

Opcional **AAAA** para IPv6: ver la misma página de ayuda de GitHub.

Tras propagar DNS (puede tardar horas), vuelve a **Pages** y usa **Check DNS**.

## 5. Ruta base (`VITE_BASE_PATH`)

- Dominio **centroovalle.cl** en la **raíz** del sitio Pages → **no** hace falta variable `VITE_BASE_PATH` (queda `/`).
- Solo si la URL fuera del tipo `usuario.github.io/nombre-repo/` sin dominio propio: en el repo, **Variables** → `VITE_BASE_PATH` = `/nombre-repo/` (con barras).

## 6. Despliegue

Cada **push a `main`** ejecuta `.github/workflows/deploy-pages.yml` y publica `dist/`.

También puedes lanzar el workflow a mano: pestaña **Actions** → workflow **Deploy GitHub Pages** → **Run workflow**.

## 7. SPA (rutas internas)

El script **`postbuild`** copia `index.html` a **`404.html`** para que al recargar en rutas como `/panel` GitHub Pages sirva la app y no un 404 plano.

## 8. Clave local

Copia `.env.example` a `.env` y ajusta si hace falta. `.env` no se sube al repo (está en `.gitignore`).

# Portfolio — Data Analyst

Sitio personal construido con **Astro 5 + Tailwind CSS v4**. Tema oscuro, tipografía editorial (Instrument Serif + Geist + JetBrains Mono) y acento violeta. Pensado para perfiles de Analista de Datos.

##  Cómo correrlo

### 1. Pre-requisitos
Instalá Node.js 20 o superior: https://nodejs.org

### 2. Instalar dependencias
```bash
npm install
```

### 3. Modo desarrollo
```bash
npm run dev
```
Abrí http://localhost:4321 en tu navegador. Cualquier cambio se refleja al instante.

### 4. Build de producción
```bash
npm run build
```
Se genera la carpeta `dist/` con el sitio estático listo para subir.

---

## Cómo personalizarlo

**El 90% del contenido se edita en un solo archivo:** `src/data/content.ts`. Ahí tenés:
- Tu nombre, rol, ubicación, email
- Tagline del hero
- Links a redes (GitHub, LinkedIn, Kaggle)
- URL del CV
- Lista de proyectos (título, descripción, herramientas, repo, demo)
- Lista de especialidades

Editá ese archivo y el sitio se actualiza solo.

### Para cambiar la foto
Poné tu imagen en `public/` (por ejemplo `public/yo.jpg`) y en `content.ts` cambiá `photoUrl: "/yo.jpg"`. Si lo dejás vacío, aparecen tus iniciales como placeholder.

### Para subir tu CV
Poné el PDF en `public/cv.pdf` (ya está ruteado por defecto).

### Para cambiar colores
En `src/styles/global.css`, dentro del bloque `@theme`, modificá las variables. Por ejemplo, si querés acento azul: `--color-accent: #3a5cff;`

---

##  Estructura

```
src/
├── data/content.ts          ← TODO el contenido editable
├── pages/index.astro        ← Página principal
├── layouts/Layout.astro     ← HTML wrapper con meta tags
├── components/
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── SectionHeader.astro  ← Patrón de header reutilizable
│   ├── Projects.astro
│   ├── ProjectCard.astro
│   ├── Specialties.astro
│   ├── About.astro
│   ├── Contact.astro
│   └── Footer.astro
└── styles/global.css        ← Tokens de diseño + utilities
```

---

## 🌐 Deploy gratis

### Opción A: Vercel (recomendado)
1. Subí el proyecto a un repo en GitHub.
2. Entrá a https://vercel.com, conectá tu cuenta de GitHub.
3. Importá el repo. Vercel detecta Astro automáticamente. Click "Deploy".
4. Listo. Tu sitio queda en `tu-proyecto.vercel.app`.

### Opción B: Netlify
Mismo flujo: conectá GitHub, importá, deploy.

### Dominio propio
En Vercel/Netlify, en la config del proyecto buscá "Domains" y agregá tu dominio. Comprá uno en NIC.ar (`.com.ar`) o Namecheap (`.dev`, `.me`).

---

## Para aprender más

- Tutorial oficial de Astro: https://docs.astro.build/tutorial
- Tailwind CSS v4: https://tailwindcss.com
- Inspiración: https://www.gleal.cl

---

Hecho por Rebeca Olivera More.

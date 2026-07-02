# Portafolio Creativo 🎨

Portafolio interactivo hecho con **React + Vite** y **Framer Motion**.
Diseño colorido y vibrante con cursor personalizado, efectos de mouse,
animaciones al hacer scroll, tarjetas con inclinación 3D y más.

## 🚀 Cómo verlo

Abre una terminal en esta carpeta y ejecuta:

```bash
npm run dev
```

Luego abre en el navegador la dirección que aparece (normalmente
`http://localhost:5173`).

## ✏️ Cómo editar tu contenido

Casi todo lo que necesitas cambiar está en **un solo archivo**:

```
src/data.js
```

Ahí editas:
- Tu **nombre**, rol, frase y datos de contacto
- Los **números/estadísticas** del inicio
- Los **servicios** que ofreces
- Los **proyectos** (título, categoría, descripción, colores y etiquetas)
- Tus **habilidades** con su nivel (0–100)
- Tus **redes sociales**

Los colores generales (rosa, morado, cian, etc.) están en `src/index.css`,
en la sección `:root` de arriba.

## 📦 Publicar en internet

Para generar la versión final optimizada:

```bash
npm run build
```

Se crea una carpeta `dist/` que puedes subir gratis a
**Netlify**, **Vercel** o **GitHub Pages** (solo arrastras la carpeta).

## 🧩 Estructura

```
src/
├─ data.js      ← TU CONTENIDO (edita aquí)
├─ App.jsx      ← estructura y componentes interactivos
├─ index.css    ← estilos y colores
└─ main.jsx     ← punto de entrada
```

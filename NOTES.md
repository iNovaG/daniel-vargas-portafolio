# NOTES.md — Contexto del proyecto (para retomar en cualquier PC)

> Si abres esto con Claude Code en otro computador: **lee este archivo y continúa**.
> Resume quién es el cliente, el diseño, la estructura, lo hecho y lo pendiente.

---

## 👤 Cliente / dueño
- **Daniel Alberto Vargas Figueroa** — Diseñador Gráfico Profesional, 23 años, Bucaramanga (Colombia).
- +3 años de experiencia: branding, publicidad, contenido digital, ilustración, edición de video, renders 3D.
- 📧 dv056806@gmail.com · 📱 +57 322 639 9175 · Inglés B2
- Instagram: **@im_daniel_vargas**
- Experiencia: CHP Materiales para Construcción (2025–hoy), Freelance/BetelMotors (2022–hoy), Amedik S.A.S. (2021–2022).

## 🎨 Identidad visual (su marca)
- **Paleta:** negro + verdes en tonalidades (lima `#7ed957`, verde `#2f9e3f`, esmeralda `#1c6e2c`, profundo `#0f3d18`). Definidas en `:root` de `src/index.css`.
- **Motivo de marca:** 3 cuadrados (verde oscuro, medio, lima) — su firma visual.
- **Tipografía:** **Instrument Serif** (títulos editoriales) + **Montserrat** (cuerpo) + **Caveat** (toques manuscritos). En `index.html` (Google Fonts) y variables `--font-*` del CSS.

## 💡 Concepto del diseño actual
Rediseño **inspirado en [uthinhpham.com](https://uthinhpham.com)** (con sello propio de Daniel):
- **Tapete de corte** de diseñador (fondo verde con cuadrícula) a pantalla completa.
- **Barra superior** (marca + nav con emojis + "Agenda un proyecto"). NO hay barra lateral (se eliminó a pedido del cliente).
- **Polaroids arrastrables** de los proyectos sobre el tapete (arrastre SIN inercia: `dragMomentum={false}`; solo navegan con clic, no al soltar).
- Nombre en serif centrado + etiquetas manuscritas ("trabajos", "servicios").
- Secciones scroll: Sobre mí (con foto), Experiencia (timeline), Herramientas (insignias de software).
- Páginas: `/` (inicio), `/work` (grilla masonry), `/proyecto/:slug` (detalle editorial), `/servicios`.

## 🛠️ Stack técnico
- **React + Vite** + **framer-motion** (animaciones/drag) + **react-router-dom** (rutas, BrowserRouter).
- Sin base de datos (sitio estático). No hace falta.

## 📁 Estructura y dónde editar
```
src/
├─ data.js        ← ⭐ TODO EL CONTENIDO (perfil, proyectos, experiencia, servicios, herramientas)
├─ App.jsx        ← layout: barra superior, footer y rutas
├─ components.jsx ← cursor personalizado, Reveal, etc.
├─ index.css      ← estilos y paleta (:root arriba)
└─ pages/
   ├─ Home.jsx          ← tapete + polaroids + secciones
   ├─ Work.jsx          ← grilla de proyectos
   ├─ ProjectDetail.jsx ← detalle de cada proyecto
   └─ Services.jsx      ← servicios
public/
├─ daniel.jpg     ← foto de Daniel (avatar/polaroid/sobre mí)
└─ proyectos/     ← imágenes de los proyectos (p-03.jpg … p-20.jpg), extraídas de su PDF
```
- Para cambiar textos/proyectos/datos → **`src/data.js`**.
- Para cambiar colores → `:root` en `src/index.css`.
- Las imágenes de proyectos hoy son capturas de su PDF portafolio (temporal). Ideal: reemplazar por piezas originales sueltas.

## ▶️ Cómo correr / construir / publicar
```bash
npm install       # primera vez (o en un PC nuevo)
npm run dev       # desarrollo → http://localhost:5173
npm run build     # genera dist/ para producción
vercel --prod     # publica en Vercel (requiere haber hecho 'vercel login')
```
- **Sitio en vivo:** https://daniel-vargas-portafolio.vercel.app
- **Repo:** https://github.com/iNovaG/daniel-vargas-portafolio
- Cuenta Vercel: equipo `nova-g`. Cuenta GitHub: `iNovaG`.

## 🔁 Flujo Git (guardar cambios)
```bash
git add -A
git commit -m "descripción del cambio"
git push
```

## ✅ Hecho
- Rediseño editorial completo (tapete, polaroids, serif) con la marca de Daniel.
- Contenido real: perfil actualizado, 6–8 proyectos con imágenes del PDF, experiencia, servicios, herramientas.
- Foto de Daniel integrada (`public/daniel.jpg`).
- Publicado en Vercel + código en GitHub.

## ⏳ Pendiente / ideas
- [ ] Conectar el repo de GitHub a Vercel para **auto-deploy** en cada `git push` (Vercel → proyecto → Settings → Git → Connect).
- [ ] Reemplazar imágenes de proyectos por **piezas originales** (más nítidas, sin el texto del PDF).
- [ ] Foto de Daniel más tipo **retrato/fondo neutro** (la actual es en un centro comercial).
- [ ] Links reales de **Behance** y **LinkedIn** en `src/data.js` (`redes`).
- [ ] Idea futura del cliente: iterar hacia un diseño **aún más creativo**.
- [ ] (Opcional) Título de pestaña/SEO más profesional en `index.html`.

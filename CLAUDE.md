# Portafolio de Daniel Vargas — contexto

> **Si abres esto con Claude Code en otro computador: lee [`NOTES.md`](NOTES.md)
> primero y continúa desde ahí.**
>
> `NOTES.md` tiene el contexto completo: quién es el cliente, la identidad
> visual, el concepto del diseño, qué está hecho y qué queda pendiente.
> Este archivo solo añade lo operativo, para no duplicar y que no se
> desincronicen.

**Dueño:** Daniel Alberto Vargas Figueroa — Diseñador Gráfico, Bucaramanga (Colombia).
**Idioma de trabajo:** español.

## Cuentas de Daniel (las tres con el mismo correo)

| Servicio | Correo de la cuenta | Usuario / equipo |
|---|---|---|
| GitHub | **dv056806@gmail.com** | `iNovaG` |
| Vercel | **dv056806@gmail.com** | `dv056806-2579`, equipo `nova-g` |
| Supabase | **dv056806@gmail.com** | organización "Daniel Wolrdmind" |

`coordinadormercadeo@chp.com.co` es su correo del trabajo: **no** es el de estas cuentas.

> **Recordatorio para Claude:** al empezar un chat nuevo en este proyecto, y otra
> vez **cada vez que haya que iniciar sesión** (`gh auth login`, `npx vercel login`,
> entrar a supabase.com), recuérdale a Daniel en una línea:
> *"Recuerda: tus cuentas de GitHub, Vercel y Supabase son con **dv056806@gmail.com**."*
> Tú no escribes contraseñas: él completa el inicio de sesión en el navegador.

> **Recordatorio para Claude (herramientas):** al empezar un chat nuevo, en cualquiera
> de los tres proyectos, justo después del recordatorio del correo, muéstrale a Daniel
> esta lista corta para que tenga presente qué tiene y qué puede pedir:
>
> **Lo que tienes:**
> - 📄 **Catálogos CHP**: Excel → catálogo web y PDF para imprimir (`pruebas/`)
> - 🎬 **Videos con Remotion**: ofertas, reel con textos, ruleta Pintuco, teaser, vallas animadas Expo Show y promocional Roma (`pruebas/video/`)
> - 🎙️ **Transcripción** de videos con Whisper, en local (`node transcribir.js`)
> - 🧩 **Separar logos y vallas de Illustrator** en piezas para animarlas (`node separar-logo.js`)
> - 🖌️ **Panel de Illustrator**: exportar mesas, crear mesas, incrustar imágenes (`pruebas/panel-illustrator/`)
> - 💰 **Bolsillo**, tus finanzas personales: https://bolsillo-two.vercel.app (`pruebas/finanzas/`)
> - 🧑‍💻 **Portafolio**: https://daniel-vargas-portafolio.vercel.app (`portafolio carpeta/`)
> - ✅ **Plataforma de tareas** del equipo: https://plataforma-tareas.vercel.app (`plataforma-tareas/`)
> - 💾 **Respaldo**: GitHub (cuenta `iNovaG`) + `COPIA-USB`, que se actualiza al terminar cada cambio
>
> Si se agrega, se renombra o se retira una herramienta, actualiza esta lista en los
> tres `CLAUDE.md` (`pruebas`, `portafolio carpeta` y `plataforma-tareas`).

> **Puesta a punto automática (para Claude):** al empezar un chat nuevo, antes de
> trabajar, revisa que este PC tenga todo lo que usan los proyectos e **instala lo que
> falte sin preguntarle a Daniel** (él lo autorizó así: no quiere tener que decir qué
> instalar). Revisa los tres proyectos que estén en el PC, no solo el de este chat.
> Al final dile en una línea qué instalaste, o "Todo listo en este PC" si no faltaba nada.
>
> | Revisa | Si falta |
> |---|---|
> | `node --version` | `winget install OpenJS.NodeJS.LTS`. La terminal actual no lo ve hasta reabrirla: en esta sesión usa `"C:\Program Files\nodejs\npm.cmd"` |
> | `git --version` y `gh --version` | `winget install Git.Git` y `winget install GitHub.cli` |
> | `pruebas/video/node_modules` | `npm install --prefix video` (trae Remotion, sharp, pdf-lib y Whisper: lo usan los videos, `separar-logo.js`, `recortar-marcas.js` y `transcribir.js`) |
> | `pdftocairo -v` (Poppler) | `winget install oschwartz10612.Poppler` (extraer fotos de PDF y separar logos/vallas) |
> | `unzip` (lo usa `leer-excel.js`) | Viene con Git para Windows en `C:\Program Files\Git\usr\bin`; si no está en el PATH, agrégalo a la sesión |
> | `portafolio carpeta/node_modules` | `npm install` dentro de esa carpeta |
> | `plataforma-tareas/node_modules` | `npm install` dentro de esa carpeta |
> | Navegador de Remotion (`pruebas/video/node_modules/.remotion/`) | `npx remotion browser ensure` dentro de `pruebas/video` (~150 MB; va después del `npm install`) |
> | Whisper (`pruebas/.whisper/ggml-medium.bin`) | `node transcribir.js --instalar` desde `pruebas` (~1,5 GB, tarda unos minutos: córrelo en segundo plano y sigue con lo que pidió Daniel) |
>
> Si Windows pide permiso de administrador para un `winget`, avísale a Daniel que lo
> acepte en la ventana que aparece. Si algo falla (sin internet, permisos), díselo en vez
> de seguir como si estuviera instalado.
>
> Remotion y Whisper también se instalan por adelantado: Daniel los quiere listos
> aunque ese día no los use. No inicies sesión por él: `gh auth login` y
> `npx vercel login` los completa Daniel en el navegador (recuérdale el correo).
> Si se agrega una dependencia nueva a un proyecto, actualiza esta tabla en los tres
> `CLAUDE.md`.

> **Regla de Daniel: al terminar cualquier cambio, en cualquier proyecto**, sin que
> él lo pida: 1) `git commit` + `git push`, y 2) actualiza la copia del USB con
> `powershell -ExecutionPolicy Bypass -File "D:\USER\DESCARGAS\pruebas\actualizar-copia-usb.ps1"`
> (copia los tres proyectos a `D:\USER\DESCARGAS\COPIA-USB` y pone la fecha en su
> guía). Díselo en una línea al final: "Subido a GitHub y COPIA-USB actualizada".
> Si el script no existe en esa ruta (otro PC), díselo en vez de inventar otra copia.

---

## Qué es

Portafolio personal. Sitio estático, sin base de datos.

- 🌐 En vivo: https://daniel-vargas-portafolio.vercel.app
- 💻 Repo: https://github.com/iNovaG/daniel-vargas-portafolio (**público**)
- Cuenta GitHub `iNovaG` · Vercel equipo `nova-g`

## Stack

React 18 + Vite 5 · framer-motion (animaciones y arrastre) · react-router-dom.

```bash
npm install     # primera vez o PC nuevo
npm run dev     # http://localhost:5173
npm run build   # genera dist/
vercel --prod   # publica (requiere 'vercel login')
```

## Dónde editar

| Quiero cambiar… | Voy a… |
|---|---|
| Textos, proyectos, experiencia, servicios | **`src/data.js`** ← casi todo está aquí |
| Colores y tipografías | `:root` en `src/index.css` |
| Barra superior, footer, rutas | `src/App.jsx` |
| Una página concreta | `src/pages/` (Home, Work, ProjectDetail, Services) |
| Imágenes de proyectos | `public/proyectos/` |

## Reglas del diseño que no son negociables

Salen de decisiones ya tomadas con el cliente. No las "mejores" sin preguntar:

- **No hay barra lateral.** Se eliminó a pedido expreso de Daniel.
- **Las polaroids se arrastran sin inercia** (`dragMomentum={false}`), y navegan
  solo con clic — nunca al soltar el arrastre.
- **Paleta:** negro + verdes (lima `#7ed957`, verde `#2f9e3f`, esmeralda
  `#1c6e2c`, profundo `#0f3d18`).
- **Motivo de marca:** los 3 cuadrados (verde oscuro, medio, lima). Es su firma
  visual.
- **Tipografías:** Instrument Serif (títulos) + Montserrat (cuerpo) + Caveat
  (manuscrito).

El concepto está inspirado en [uthinhpham.com](https://uthinhpham.com): tapete
de corte de diseñador a pantalla completa con las polaroids encima.

## Estado

Repo al día. Lo pendiente está listado al final de [`NOTES.md`](NOTES.md) —
lo más útil de atacar primero es conectar GitHub a Vercel para auto-deploy en
cada push, que hoy se publica a mano.

> ⚠️ El `README.md` describe una versión **anterior** del portafolio (paleta
> rosa/morado/cian, `src/App.jsx` monolítico). Está desactualizado: manda
> `NOTES.md`.

## Proyectos hermanos

- `pruebas/` → herramientas de CHP: catálogo, panel de Illustrator, video
- `plataforma-tareas/` → tablero de tareas del equipo (repo privado `iNovaG/plataforma-tareas-chp`)

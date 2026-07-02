import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import { Reveal } from '../components.jsx'
import {
  perfil,
  sobreMi,
  proyectos,
  experiencia,
  herramientas,
  competencias,
} from '../data.js'

/* Posiciones dispersas de las polaroids (dejan libre el centro para el nombre) */
const POS = [
  { top: '7%', left: '30%', rot: -6 },
  { top: '9%', left: '66%', rot: 5 },
  { top: '52%', left: '9%', rot: 4 },
  { top: '55%', left: '73%', rot: -5 },
  { top: '30%', left: '7%', rot: 7 },
]

function Polaroid({ p, pos, constraints, navigate }) {
  const dragging = useRef(false)
  return (
    <motion.div
      className="polaroid"
      style={{ top: pos.top, left: pos.left }}
      initial={{ opacity: 0, scale: 0.8, rotate: pos.rot }}
      animate={{ opacity: 1, scale: 1, rotate: pos.rot }}
      transition={{ duration: 0.6, delay: 0.2 }}
      drag
      dragConstraints={constraints}
      dragElastic={0}
      dragMomentum={false}
      whileDrag={{ scale: 1.06, zIndex: 30 }}
      whileHover={{ scale: 1.04, zIndex: 20 }}
      onDragStart={() => { dragging.current = true }}
      onDragEnd={() => { setTimeout(() => { dragging.current = false }, 80) }}
      onClick={() => { if (!dragging.current) navigate(`/proyecto/${p.slug}`) }}
    >
      <span className="pin" />
      <img src={p.portada} alt={p.titulo} draggable="false" />
      <span className="cap">{p.titulo}</span>
    </motion.div>
  )
}

/* Polaroid con la foto de Daniel: se arrastra y, al hacer clic, baja a "Sobre mí" */
function PersonalPolaroid({ matRef }) {
  const dragging = useRef(false)
  return (
    <motion.div
      className="polaroid polaroid-me"
      style={{ top: '28%', left: '73%' }}
      initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
      animate={{ opacity: 1, scale: 1, rotate: 3 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      drag
      dragConstraints={matRef}
      dragElastic={0}
      dragMomentum={false}
      whileDrag={{ scale: 1.06, zIndex: 30 }}
      whileHover={{ scale: 1.04, zIndex: 20 }}
      onDragStart={() => { dragging.current = true }}
      onDragEnd={() => { setTimeout(() => { dragging.current = false }, 80) }}
      onClick={() => {
        if (!dragging.current) {
          document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })
        }
      }}
    >
      <span className="pin" />
      <img src={perfil.foto} alt={perfil.nombre} draggable="false" />
      <span className="cap">¡hola! soy Daniel</span>
    </motion.div>
  )
}

function Badge({ h, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      className="badge"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: i * 0.06, ease: 'backOut' }}
    >
      <div className="badge-ring"><span>{h.abbr}</span></div>
      <small>{h.nombre}</small>
    </motion.div>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const matRef = useRef(null)
  const destacados = proyectos.slice(0, POS.length)

  return (
    <>
      {/* TAPETE DE CORTE INTERACTIVO */}
      <section className="mat" ref={matRef}>
        <motion.div
          className="mat-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="mat-title">{perfil.nombre}</h1>
          <span className="mat-sub">diseñador gráfico · Bucaramanga</span>
          <div className="mat-labels">
            <Link to="/work" className="hand-label">trabajos</Link>
            <Link to="/servicios" className="hand-label">servicios</Link>
          </div>
        </motion.div>

        {/* Polaroid personal (foto de Daniel) */}
        <PersonalPolaroid matRef={matRef} />

        {destacados.map((p, i) => (
          <Polaroid
            key={p.slug}
            p={p}
            pos={POS[i]}
            constraints={matRef}
            navigate={navigate}
          />
        ))}

        <span className="mat-hint">✦ arrastra las fotos · haz clic para ver el proyecto</span>
      </section>

      {/* SOBRE MÍ */}
      <section className="section" id="sobre-mi">
        <div className="section-inner about-grid">
          <div className="about-photo">
            <img src={perfil.foto} alt={perfil.nombre} loading="lazy" />
          </div>
          <div>
            <span className="eyebrow">Sobre mí</span>
            <h2 className="h-serif">
              Hola, soy {perfil.nombre.split(' ')[0]}.
            </h2>
            {sobreMi.parrafos.map((t, i) => (
              <p className="lead" key={i}>{t}</p>
            ))}
            <div className="about-data">
              {sobreMi.datos.map(([k, v]) => (
                <div key={k}>
                  <span className="k">{k}</span>
                  <span className="v">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="section" id="experiencia">
        <div className="section-inner">
          <span className="eyebrow">Trayectoria</span>
          <h2 className="h-serif">Experiencia profesional</h2>
          <div className="timeline">
            {experiencia.map((e, i) => (
              <Reveal key={e.empresa} delay={i * 0.08}>
                <div className="exp">
                  <div className="exp-dot" />
                  <span className="exp-periodo">{e.periodo}</span>
                  <h4>{e.cargo}</h4>
                  <span className="exp-empresa">{e.empresa} · {e.lugar}</span>
                  <p>{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HERRAMIENTAS */}
      <section className="section" id="skills">
        <div className="section-inner">
          <span className="eyebrow">Herramientas</span>
          <h2 className="h-serif">Software & competencias</h2>
          <div className="badges">
            {herramientas.map((h, i) => (
              <Badge key={h.nombre} h={h} i={i} />
            ))}
          </div>
          <div className="chips">
            {competencias.map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-box">
        <h2>¿Creamos algo juntos?</h2>
        <p>Cuéntame tu idea y la convierto en una pieza visual con personalidad.</p>
        <a href={`mailto:${perfil.email}`} className="btn">{perfil.email}</a>
      </div>
    </>
  )
}

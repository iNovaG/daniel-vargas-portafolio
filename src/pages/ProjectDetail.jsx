import { motion } from 'framer-motion'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Reveal } from '../components.jsx'
import { proyectos, perfil } from '../data.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = proyectos.findIndex((p) => p.slug === slug)
  const p = proyectos[index]
  if (!p) return <Navigate to="/work" replace />

  const siguiente = proyectos[(index + 1) % proyectos.length]

  return (
    <article className="detail">
      <Link to="/work" className="detail-back">← Volver a trabajos</Link>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {p.titulo}
      </motion.h1>

      <div className="detail-block">
        <div className="lbl">Descripción</div>
        <p>{p.descripcionLarga}</p>
      </div>
      <div className="detail-block">
        <div className="lbl">Categoría</div>
        <p>{p.categoria} · {p.año}</p>
      </div>
      <div className="detail-block">
        <div className="lbl">Cliente</div>
        <p>{p.cliente}</p>
      </div>
      <div className="detail-block">
        <div className="lbl">Mi rol</div>
        <p>{p.rol}</p>
      </div>
      <div className="detail-block">
        <div className="lbl">Etiquetas</div>
        <p>{p.tags.join(' · ')}</p>
      </div>

      <div className="detail-gallery">
        {p.imagenes.map((src, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <img src={src} alt={`${p.titulo} ${i + 1}`} loading="lazy" />
          </Reveal>
        ))}
      </div>

      <Link to={`/proyecto/${siguiente.slug}`} className="detail-next">
        <div>
          <div className="nl">Siguiente proyecto</div>
          <div className="nt">{siguiente.titulo}</div>
        </div>
        <span className="nt">→</span>
      </Link>

      <div className="cta-box" style={{ marginLeft: 0, marginRight: 0 }}>
        <h2>¿Trabajamos juntos?</h2>
        <p>Hablemos y hagamos algo memorable.</p>
        <a href={`mailto:${perfil.email}`} className="btn">{perfil.email}</a>
      </div>
    </article>
  )
}

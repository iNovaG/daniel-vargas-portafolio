import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Reveal } from '../components.jsx'
import { proyectos } from '../data.js'

export default function Work() {
  return (
    <section className="work">
      <div className="work-head">
        <span className="eyebrow">Portafolio</span>
        <h1 className="h-serif">Trabajos seleccionados</h1>
      </div>

      <div className="work-grid">
        {proyectos.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08}>
            <Link to={`/proyecto/${p.slug}`} className="work-card">
              <div className="work-thumb">
                <img src={p.portada} alt={p.titulo} loading="lazy" />
              </div>
              <div className="work-info">
                <h3>{p.titulo}</h3>
                <p>{p.categoria} — {p.tags.join(', ')}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

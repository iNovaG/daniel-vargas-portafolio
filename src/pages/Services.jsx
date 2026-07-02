import { Reveal } from '../components.jsx'
import { servicios, perfil } from '../data.js'

export default function Services() {
  return (
    <section className="services">
      <span className="eyebrow">Lo que hago</span>
      <h1 className="h-serif">Servicios</h1>

      <div className="serv-grid">
        {servicios.map((s, i) => (
          <Reveal key={s.titulo} delay={(i % 2) * 0.08}>
            <div className="serv-card">
              <div className="ic">{s.icono}</div>
              <h3>{s.titulo}</h3>
              <p>{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="cta-box" style={{ marginLeft: 0, marginRight: 0 }}>
        <h2>¿Tienes un proyecto en mente?</h2>
        <p>Escríbeme y lo hacemos realidad.</p>
        <a href={`mailto:${perfil.email}`} className="btn">{perfil.email}</a>
      </div>
    </section>
  )
}

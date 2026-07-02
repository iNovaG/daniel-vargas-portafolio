import { Routes, Route, NavLink, Link } from 'react-router-dom'
import { CustomCursor, ScrollToTop } from './components.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Services from './pages/Services.jsx'
import { perfil, redes } from './data.js'

/* BARRA SUPERIOR (marca + navegación + contacto) */
function TopBar() {
  return (
    <header className="topbar">
      <Link to="/" className="tb-brand">
        <span className="sb-squares"><span /><span /><span /></span>
        <span className="tb-name">{perfil.nombre}</span>
      </Link>

      <nav className="tb-nav">
        <NavLink to="/work"><span className="em">📁</span> Trabajos</NavLink>
        <NavLink to="/" end><span className="em">👨🏻‍💻</span> Sobre mí</NavLink>
        <NavLink to="/servicios"><span className="em">💡</span> Servicios</NavLink>
      </nav>

      <a href={`mailto:${perfil.email}`} className="tb-cta">
        Agenda un proyecto ↗
      </a>
    </header>
  )
}

/* PIE DE PÁGINA */
function Footer() {
  return (
    <footer className="site-footer">
      <span className="sb-copy">© {new Date().getFullYear()} {perfil.nombre} · Bucaramanga</span>
      <div className="footer-socials">
        {redes.map((r) => (
          <a key={r.nombre} href={r.url} target="_blank" rel="noreferrer">{r.nombre}</a>
        ))}
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <div className="main">
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/proyecto/:slug" element={<ProjectDetail />} />
          <Route path="/servicios" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  animate,
} from 'framer-motion'
import { useLocation } from 'react-router-dom'

/* ============================================================
   CURSOR PERSONALIZADO (punto + anillo que sigue al mouse)
   ============================================================ */
export function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    let rx = 0,
      ry = 0,
      mx = 0,
      my = 0
    let raf

    const move = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
      }
    }
    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      if (ring.current) {
        ring.current.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    const over = (e) => {
      if (e.target.closest('a, button, .proyecto, .magnetic')) {
        ring.current?.classList.add('hovering')
      }
    }
    const out = (e) => {
      if (e.target.closest('a, button, .proyecto, .magnetic')) {
        ring.current?.classList.remove('hovering')
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    window.addEventListener('mouseout', out)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mouseout', out)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  )
}

/* ============================================================
   FONDO DE BLOBS QUE REACCIONA AL MOUSE (parallax suave)
   ============================================================ */
export function AnimatedBackground() {
  const wrap = useRef(null)
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      const blobs = wrap.current?.querySelectorAll('.blob')
      blobs?.forEach((b, i) => {
        const depth = (i + 1) * 18
        b.style.marginLeft = `${x * depth}px`
        b.style.marginTop = `${y * depth}px`
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
  return (
    <div className="bg-blobs" ref={wrap}>
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
    </div>
  )
}

/* ============================================================
   BOTÓN / ELEMENTO MAGNÉTICO (se acerca al cursor)
   ============================================================ */
export function Magnetic({ children }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 })
  const sy = useSpring(y, { stiffness: 200, damping: 15 })

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.4)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.4)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className="magnetic"
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  )
}

/* ============================================================
   REVELADO AL HACER SCROLL
   ============================================================ */
export function Reveal({ children, delay = 0, y = 40 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ============================================================
   CONTADOR ANIMADO (para los stats)
   ============================================================ */
export function Counter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(value)

  const num = parseInt(value.replace(/\D/g, ''), 10)
  const prefix = value.match(/^\D*/)[0]
  const suffix = value.match(/\D*$/)[0]

  useEffect(() => {
    if (!inView || isNaN(num)) return
    const controls = animate(0, num, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(prefix + Math.round(v) + suffix),
    })
    return () => controls.stop()
  }, [inView, num, prefix, suffix])

  return <span ref={ref}>{isNaN(num) ? value : display}</span>
}

/* ============================================================
   SUBE AL TOPE AL CAMBIAR DE PÁGINA
   ============================================================ */
export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import Container from './Container'
import Logo from './Logo'

export default function Navbar() {
  const { key } = useLocation()
  return <Header key={key} />
}

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const reduced = useReducedMotion()
  const onAbout = pathname.replace(/\/$/, '') === '/about'
  const links = navigation.map(({ to, label }) => {
    const isDairyAlias = onAbout && to === '/dairy'
    return <NavLink key={to} to={to} end
      aria-current={isDairyAlias ? 'page' : undefined}
      className={({ isActive }) => isActive || isDairyAlias ? 'active' : undefined}
      onClick={() => setOpen(false)}>{label}</NavLink>
  })
  return <header className="site-header" onKeyDown={(event) => {
    if (event.key === 'Escape' && open) {
      setOpen(false)
      document.getElementById('menu-toggle')?.focus()
    }
  }}>
    <Container className="header-row">
      <Logo />
      <nav className="desktop-nav" aria-label="Main navigation">{links}</nav>
      <NavLink className="header-action" to="/contact">Get in touch</NavLink>
      <button id="menu-toggle" className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open} aria-controls={open ? 'mobile-nav' : undefined} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </Container>
    <AnimatePresence>
      {open && <motion.nav id="mobile-nav" className="mobile-nav" aria-label="Main navigation"
        initial={{ opacity: 0, x: reduced ? 0 : 36 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: reduced ? 0 : 36 }}
        transition={{ duration: reduced ? 0 : 0.18 }}>{links}<NavLink className="mobile-action" to="/contact">Start an enquiry</NavLink></motion.nav>}
    </AnimatePresence>
  </header>
}

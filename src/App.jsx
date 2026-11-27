import { useLayoutEffect } from 'react'
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import ScrollToTopButton from './components/common/ScrollToTopButton'
import Container from './components/common/Container'
import Button from './components/common/Button'
import { company } from './data/companyData'
import { navigation } from './data/navigation'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Manufacturing from './pages/Manufacturing'
import Contact from './pages/Contact'
import Disposables from './pages/Disposables'

function NotFound() {
  return <section className="section"><Container>
    <p className="eyebrow">404</p><h1>Page not found.</h1><p className="intro">The page you requested may have moved.</p><Button to="/">Back to home</Button>
  </Container></section>
}

export default function App() {
  const location = useLocation()
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    const route = navigation.find(({ to }) => to === location.pathname.replace(/\/+$/, '') || to === location.pathname)
    const pageName = route?.label ?? { '/about': 'Dairy Farm', '/products': 'Dairy Products', '/manufacturing': 'Dairy Production' }[location.pathname.replace(/\/+$/, '')]
    document.title = location.pathname === '/' ? `${company.name} | Dairy & Disposables` : `${pageName ?? 'Page not found'} | ${company.name}`
    if (location.key !== 'default') document.getElementById('main-content')?.focus({ preventScroll: true })
  }, [location.key, location.pathname])

  return <MotionConfig reducedMotion="user">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navbar /><ScrollToTop />
    <main id="main-content" tabIndex={-1}>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div key={location.pathname} initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }} exit={{ opacity: reduced ? 1 : 0 }}
          transition={{ duration: reduced ? 0 : 0.2 }}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dairy" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/disposables" element={<Disposables />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </main>
    <Footer /><ScrollToTopButton />
  </MotionConfig>
}

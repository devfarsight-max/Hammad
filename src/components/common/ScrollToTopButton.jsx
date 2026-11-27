import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 600)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return visible && <button type="button" className="scroll-top" aria-label="Scroll to top"
    onClick={() => window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' })}><ArrowUp size={21} /></button>
}

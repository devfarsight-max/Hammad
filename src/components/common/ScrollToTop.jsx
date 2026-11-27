import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }

    const target = document.getElementById(hash.slice(1))
    target?.scrollIntoView({ block: 'start', behavior: 'instant' })
  }, [pathname, hash])
  return null
}

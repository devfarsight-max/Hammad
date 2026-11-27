import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import { motion } from 'framer-motion'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import { imageReveal } from '../../utils/animations'

export default function Photo({ src, alt, priority = false, className = '' }) {
  const [failed, setFailed] = useState(false)
  const animation = useScrollAnimation(imageReveal)
  return <motion.div className={`photo ${className}`} {...(priority ? {} : animation)}>
    {failed ? <div className="photo-fallback" role="img" aria-label={alt}><ImageOff aria-hidden="true" /></div>
      : <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" onError={() => setFailed(true)} />}
  </motion.div>
}

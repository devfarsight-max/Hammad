import { motion } from 'framer-motion'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import Container from './Container'
import Photo from './Photo'

export default function SplitSection({ image, alt, children, reverse = false, cream = false }) {
  const animation = useScrollAnimation()
  return <section className={`section ${cream ? 'surface' : ''}`}><Container className={`split ${reverse ? 'split--reverse' : ''}`}>
    <Photo src={image} alt={alt} />
    <motion.div className="split-copy" {...animation}>{children}</motion.div>
  </Container></section>
}

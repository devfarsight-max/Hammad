import { useReducedMotion } from 'framer-motion'
import { reveal } from '../utils/animations'

export default function useScrollAnimation(variants = reveal) {
  const reduced = useReducedMotion()
  return reduced ? {} : { variants, initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.12 } }
}

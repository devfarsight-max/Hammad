import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

const MotionLink = motion.create(Link)

export default function Button({ to, children, variant = 'primary', type = 'button', ...props }) {
  const reduced = useReducedMotion()
  const interaction = reduced ? {} : { whileHover: { y: -2 }, whileTap: { scale: 0.97 } }
  const className = `button button--${variant}`
  return to
    ? <MotionLink to={to} className={className} {...interaction} {...props}>{children}</MotionLink>
    : <motion.button type={type} className={className} {...interaction} {...props}>{children}</motion.button>
}

import { motion } from 'framer-motion'
import { reveal } from '../../utils/animations'

export default function FeatureCard({ icon: Icon, title, description }) {
  return <motion.article className="feature-card" variants={reveal}>
    {Icon && <span className="feature-icon"><Icon size={22} aria-hidden="true" /></span>}
    <h3>{title}</h3><p>{description}</p>
  </motion.article>
}

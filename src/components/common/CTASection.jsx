import Button from './Button'
import Container from './Container'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import { motion } from 'framer-motion'

export default function CTASection({ title = 'Let’s talk dairy supply.' }) {
  const animation = useScrollAnimation()
  return <section className="cta-section"><Container><motion.div className="cta-row" {...animation}>
    <div><h2>{title}</h2><p>Tell us what you need, from product formats to delivery requirements.</p></div>
    <Button to="/contact" variant="cream">Get in touch</Button>
  </motion.div></Container></section>
}

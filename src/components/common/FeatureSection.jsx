import { motion } from 'framer-motion'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import { stagger } from '../../utils/animations'
import Container from './Container'
import SectionHeading from './SectionHeading'
import FeatureCard from '../cards/FeatureCard'

export default function FeatureSection({ eyebrow, title, items, cream = false }) {
  const animation = useScrollAnimation(stagger)
  return <section className={`section ${cream ? 'surface' : ''}`}><Container>
    <SectionHeading eyebrow={eyebrow} title={title} />
    <motion.div className="card-grid" {...animation}>
      {items.map((item) => <FeatureCard key={item.title} {...item} />)}
    </motion.div>
  </Container></section>
}

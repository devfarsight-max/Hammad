import { motion } from 'framer-motion'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import { stagger } from '../../utils/animations'
import ProductCard from './ProductCard'

export default function ProductGrid({ products }) {
  const animation = useScrollAnimation(stagger)
  return <motion.div className="card-grid" {...animation}>
    {products.map((product) => <ProductCard key={product.id} product={product} />)}
  </motion.div>
}

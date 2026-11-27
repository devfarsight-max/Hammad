import { motion } from 'framer-motion'
import { reveal } from '../../utils/animations'
import Photo from '../common/Photo'

export default function ProductCard({ product }) {
  return <motion.article className="product-card" variants={reveal}>
    <Photo src={product.image} alt={product.name} />
    <div className="product-copy"><p className="eyebrow">{product.category}</p><h3>{product.name}</h3><p>{product.description}</p></div>
  </motion.article>
}

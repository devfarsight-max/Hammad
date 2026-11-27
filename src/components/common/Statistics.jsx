import { products, categories } from '../../data/products'
import StatCard from '../cards/StatCard'
import Container from './Container'

export default function Statistics() {
  return <section className="section stats-section" aria-labelledby="stats-title"><Container>
    <h2 id="stats-title">Our range at a glance</h2>
    <div className="stats-grid">
      <StatCard value={products.length} label="Dairy products in the catalogue" />
      <StatCard value={categories.length} label="Product categories" />
    </div>
  </Container></section>
}

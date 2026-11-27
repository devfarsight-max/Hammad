import { useState } from 'react'
import { categories, products } from '../../data/products'
import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import ProductGrid from '../../components/cards/ProductGrid'
import ProductCategories from './ProductCategories'

const all = 'All products'

export default function ProductListing() {
  const [selected, setSelected] = useState(all)
  const visible = selected === all ? products : products.filter((product) => product.category === selected)
  return <section className="section surface"><Container>
    <SectionHeading eyebrow="The catalogue" title="Find the right dairy staple.">
      Browse the full range or choose a category to narrow your selection.
    </SectionHeading>
    <ProductCategories categories={[all, ...categories]} selected={selected} onChange={setSelected} />
    <p className="sr-only" aria-live="polite">{visible.length} products shown</p>
    <ProductGrid key={selected} products={visible} />
  </Container></section>
}

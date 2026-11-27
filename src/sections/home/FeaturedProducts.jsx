import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import Button from '../../components/common/Button'
import ProductGrid from '../../components/cards/ProductGrid'
import { products } from '../../data/products'

const featuredProducts = products.filter(({ featuredImage }) => featuredImage)
  .map((product) => ({ ...product, image: product.featuredImage }))

export default function FeaturedProducts() {
  return <section className="section surface"><Container>
    <div className="heading-row"><SectionHeading eyebrow="Our dairy range" title="Fresh staples for everyday kitchens." />
      <Button to="/products" variant="secondary">View all products</Button></div>
    <ProductGrid products={featuredProducts} />
  </Container></section>
}

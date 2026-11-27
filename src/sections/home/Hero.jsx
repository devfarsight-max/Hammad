import { motion } from 'framer-motion'
import Button from '../../components/common/Button'
import Container from '../../components/common/Container'
import Photo from '../../components/common/Photo'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import hero from '../../assets/images/hero.jpg'

export default function Hero() {
  return <section className="home-hero">
    <Container className="home-hero-grid">
      <motion.div className="home-hero-copy" {...useScrollAnimation()}>
        <p className="eyebrow">Dairy &amp; foodservice packaging</p>
        <h1>From the farm.<br /><em>For foodservice.</em></h1>
        <p className="intro">Explore everyday dairy staples and disposable packaging for shops, cafés and commercial kitchens.</p>
        <div className="button-row">
          <Button to="/products">Explore dairy products</Button>
          <Button to="/disposables" variant="secondary">Explore packaging</Button>
        </div>
      </motion.div>
      <figure className="home-hero-visual">
        <Photo src={hero} alt="Dairy cows in a sunlit pasture" priority />
        <figcaption>Dairy farm <span aria-hidden="true">/</span> From pasture to production</figcaption>
      </figure>
    </Container>
  </section>
}

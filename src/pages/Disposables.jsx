import { Coffee, Package, Soup } from 'lucide-react'
import disposables from '../assets/images/disposable-manufacturing.jpg'
import Button from '../components/common/Button'
import Container from '../components/common/Container'
import DivisionHero from '../components/common/DivisionHero'
import Photo from '../components/common/Photo'
import SectionHeading from '../components/common/SectionHeading'

const actions = [
  { label: 'Discuss a packaging order', to: '/contact' },
  { label: 'See packaging formats', to: '#packaging-formats' },
]

const formats = [
  [Coffee, 'cups', 'Paper cups', 'For cafés, beverage counters and takeaway drinks. Specify cup capacity, drink temperature and whether you need a lid.'],
  [Package, 'containers', 'Takeaway containers', 'For prepared meals and takeaway counters. Share the dimensions, closure style and portion sizes you need.'],
  [Soup, 'bowls', 'Bowls and trays', 'For serving, display or delivery. Include food type, serving size and any stacking requirements.'],
]

export default function Disposables() {
  return <>
    <DivisionHero eyebrow="Disposable manufacturing" title="Packaging for food on the move." image={disposables} alt="Illustrative paper cups and molded fiber food containers" actions={actions}>
      Explore example foodservice packaging formats and share your material, size and volume requirements.
    </DivisionHero>
    <section className="section" id="packaging-formats">
      <Container>
        <SectionHeading title="Packaging formats">
          Use these examples to describe the product you’re looking to source.
        </SectionHeading>
        <div className="packaging-grid">
          {formats.map(([Icon, crop, title, description]) =>
            <article className="feature-card packaging-format" key={title}>
              <Photo src={disposables} alt="" className={`packaging-detail packaging-detail--${crop}`} />
              <div className="packaging-copy">
                <span className="feature-icon"><Icon size={21} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          )}
        </div>
      </Container>
    </section>
    <section className="section surface">
      <Container className="faq-grid">
        <SectionHeading title="Prepare your enquiry">
          Share a reference photo or a product specification if you already have one.
        </SectionHeading>
        <div>
          <details><summary>What should I specify about materials?</summary><p>Include your preferred material and whether the packaging will be exposed to heat, moisture or oil.</p></details>
          <details><summary>How do I describe my order size?</summary><p>Share the estimated number of units per order, delivery location and reorder frequency.</p></details>
          <details><summary>What if I need a specific size or fit?</summary><p>Provide dimensions, lid or closure requirements, and any handling or storage constraints.</p></details>
        </div>
      </Container>
    </section>
    <section className="cta-section">
      <Container className="cta-row">
        <div><h2>Discuss your packaging needs.</h2><p>Send the intended use, specifications and estimated quantities.</p></div>
        <Button to="/contact" variant="cream">Get in touch about packaging</Button>
      </Container>
    </section>
  </>
}

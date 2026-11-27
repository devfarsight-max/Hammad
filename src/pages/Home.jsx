import Hero from '../sections/home/Hero'
import BusinessDivisions from '../sections/home/BusinessDivisions'
import FeaturedProducts from '../sections/home/FeaturedProducts'
import WhyChooseUs from '../sections/home/WhyChooseUs'
import ProductionProcess from '../sections/manufacturing/ProductionProcess'
import { Coffee, Milk, Package, Soup, Utensils } from 'lucide-react'
import disposables from '../assets/images/disposable-manufacturing.jpg'
import bottlingLine from '../assets/images/bottling-line.jpg'
import Button from '../components/common/Button'
import Container from '../components/common/Container'
import Photo from '../components/common/Photo'
import SectionHeading from '../components/common/SectionHeading'

const buyerGuides = [
  {
    title: 'From milk intake to dispatch',
    category: 'Dairy production',
    image: bottlingLine,
    alt: 'Illustrative milk bottles on a filling line',
    description: 'Follow the dairy process through chilled intake, pasteurisation, filling and storage. When comparing dairy products, check the pack size and storage instructions against your kitchen or shop’s needs.',
    to: '/manufacturing',
    action: 'See how dairy is produced',
  },
  {
    title: 'Choose packaging for the job',
    category: 'Disposable packaging',
    image: disposables,
    alt: 'Illustrative cups and containers in several sizes',
    description: 'Start with how the item will be used. Consider drink temperature for cups, closure fit for takeaway meals, and stacking or carrying requirements for bowls and trays.',
    to: '/disposables',
    action: 'Explore packaging specifications',
  },
]

const buyerQuestions = [
  ['Which dairy products suit a café or kitchen?', 'Milk is a starting point for drinks and cooking. Paneer and curd suit prepared dishes, while butter and ghee are useful for baking and cooking.'],
  ['How much dairy should I plan to order?', 'Estimate your weekly use for each product, then check that the pack sizes and delivery frequency fit your chilled storage space.'],
  ['What details help identify a takeaway container?', 'Include the portion size, whether the food is hot or chilled, and any lid, stacking or transport requirements.'],
  ['Can I enquire about both product ranges?', 'Yes. List the products and estimated quantities you need from each range when you get in touch.'],
]

const businesses = [
  {
    title: 'Dairy Farm',
    range: [
      [Milk, 'Fresh milk', 'For drinking, cooking and coffee.'],
      [Utensils, 'Paneer and curd', 'Kitchen staples for cooking and serving.'],
      [Soup, 'Butter and ghee', 'For baking, sautéing and finishing dishes.'],
    ],
    rangeLink: '/products',
    rangeAction: 'View dairy products',
  },
  {
    title: 'Disposable Manufacturing',
    range: [
      [Coffee, 'Paper cups', 'Browse examples for hot and cold drinks.'],
      [Package, 'Takeaway containers', 'Compare sizes and closures for packed meals.'],
      [Soup, 'Bowls and trays', 'Explore formats for serving and transport.'],
    ],
    rangeLink: '/disposables#packaging-formats',
    rangeAction: 'View packaging formats',
  },
]

export default function Home() {
  return <>
    <Hero />
    <BusinessDivisions />
    <FeaturedProducts />
    <section className="section range-section">
      <Container>
        <h2>Explore the product ranges</h2>
        <div className="business-grid">
          {businesses.map(({ title, range, rangeLink, rangeAction }) =>
            <article className="range-panel" key={title}>
              <h3>{title}</h3>
              <ul>
                {range.map(([Icon, name, description]) =>
                  <li key={name}>
                    <span className="range-icon"><Icon size={20} aria-hidden="true" /></span>
                    <div><strong>{name}</strong><p>{description}</p></div>
                  </li>
                )}
              </ul>
              <Button to={rangeLink} variant="secondary">{rangeAction}</Button>
            </article>
          )}
        </div>
      </Container>
    </section>
    <WhyChooseUs />
    <ProductionProcess />
    <section className="section buyer-guides">
      <Container>
        <SectionHeading title="What to consider before ordering" />
        <div className="business-grid">
          {buyerGuides.map(({ title, category, image, alt, description, to, action }) =>
            <article className="buyer-guide" key={to}>
              <Photo src={image} alt={alt} />
              <div className="buyer-guide-copy">
                <p className="eyebrow">{category}</p>
                <h3>{title}</h3>
                <p className="buyer-guide-description">{description}</p>
                <Button to={to} variant="secondary">{action}</Button>
              </div>
            </article>
          )}
        </div>
      </Container>
    </section>
    <section className="section surface">
      <Container className="faq-grid">
        <SectionHeading title="Common buying questions" />
        <div>
          {buyerQuestions.map(([question, answer]) =>
            <details key={question}><summary>{question}</summary><p>{answer}</p></details>
          )}
        </div>
      </Container>
    </section>
    <section className="section enquiry-band">
      <Container className="enquiry-layout">
        <div>
          <h2>Planning an order?</h2>
          <p>Tell us what you need, your estimated quantities and where the order should go.</p>
          <Button to="/contact" variant="cream">Start an enquiry</Button>
        </div>
        <dl>
          <div><dt>Product</dt><dd>Include pack sizes for dairy or dimensions and materials for disposables.</dd></div>
          <div><dt>Quantity</dt><dd>Share the order size and how often you expect to reorder.</dd></div>
          <div><dt>Delivery</dt><dd>Provide your postcode and preferred delivery dates.</dd></div>
        </dl>
      </Container>
    </section>
  </>
}

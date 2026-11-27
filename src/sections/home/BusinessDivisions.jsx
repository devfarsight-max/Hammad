import { Package, Milk, Factory } from 'lucide-react'
import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import Button from '../../components/common/Button'

const divisions = [
  { icon: Milk, title: 'Dairy farm', description: 'Fresh milk, paneer, curd, butter and ghee for everyday kitchens and wholesale supply.', to: '/dairy' },
  { icon: Package, title: 'Disposables', description: 'Discuss cups, takeaway containers, bowls and trays for foodservice.', to: '/disposables' },
  { icon: Factory, title: 'Dairy manufacturing', description: 'Follow the production process from chilled milk intake to packing and dispatch.', to: '/manufacturing' },
]

export default function BusinessDivisions() {
  return <section className="section divisions">
    <Container className="divisions-layout">
      <SectionHeading eyebrow="The business" title="Dairy supply and packaging for busy kitchens.">
        HAMMAD brings together everyday dairy products and foodservice packaging enquiries for retailers and foodservice teams.
      </SectionHeading>
      <div>
        {divisions.map(({ icon: Icon, title, description, to }) => <article className="division-row" key={to}>
          <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
          <div><h3>{title}</h3><p>{description}</p></div>
          <Button to={to} variant="text">Explore<span className="sr-only"> {title}</span></Button>
        </article>)}
      </div>
    </Container>
  </section>
}

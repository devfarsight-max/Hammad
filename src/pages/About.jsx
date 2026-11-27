import MissionVision from '../sections/about/MissionVision'
import pasture from '../assets/images/pasture.jpg'
import DivisionHero from '../components/common/DivisionHero'
import CompanyStory from '../sections/about/CompanyStory'
import FeaturedProducts from '../sections/home/FeaturedProducts'
import CompanyValues from '../sections/about/CompanyValues'
import CTASection from '../components/common/CTASection'

const actions = [
  { label: 'Browse dairy products', to: '/products' },
  { label: 'See dairy production', to: '/manufacturing' },
]

export default function About() {
  return <>
    <DivisionHero eyebrow="About our dairy" title="A dairy built around everyday staples." image={pasture} alt="Dairy cows grazing in a green pasture" actions={actions}>
      Explore fresh milk, paneer, curd, butter and ghee and see how milk moves from the farm through processing and packing.
    </DivisionHero>
    <CompanyStory />
    <MissionVision />
    <CompanyValues />
    <FeaturedProducts />
    <CTASection />
  </>
}

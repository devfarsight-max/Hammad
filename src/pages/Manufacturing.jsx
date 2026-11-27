import bottlingLine from '../assets/images/bottling-line.jpg'
import PageBanner from '../components/common/PageBanner'
import Infrastructure from '../sections/manufacturing/Infrastructure'
import ProductionProcess from '../sections/manufacturing/ProductionProcess'
import QualityControl from '../sections/manufacturing/QualityControl'
import FactoryGallery from '../sections/manufacturing/FactoryGallery'
import CTASection from '../components/common/CTASection'

export default function Manufacturing() {
  return <>
    <PageBanner image={bottlingLine} alt="Illustrative dairy bottling line" eyebrow="Manufacturing" title="Inside the dairy.">See how milk moves through intake, processing, packing and dispatch.</PageBanner>
    <Infrastructure />
    <ProductionProcess />
    <QualityControl />
    <FactoryGallery />
    <CTASection title="Discuss your supply requirements." />
  </>
}

import paneer from '../assets/images/paneer-featured.jpg'
import PageBanner from '../components/common/PageBanner'
import ProductListing from '../sections/products/ProductListing'
import WhyChooseUs from '../sections/home/WhyChooseUs'
import CTASection from '../components/common/CTASection'

export default function Products() {
  return <>
    <PageBanner image={paneer} alt="Fresh paneer cut into cubes" eyebrow="Our products" title="The everyday dairy range.">Discover fresh milk, paneer, ghee, set curd and creamery butter.</PageBanner>
    <ProductListing /><WhyChooseUs /><CTASection title="Need product or pack details?" />
  </>
}

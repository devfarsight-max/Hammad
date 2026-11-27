import pasture from '../../assets/images/pasture.jpg'
import SplitSection from '../../components/common/SplitSection'
import SectionHeading from '../../components/common/SectionHeading'
import Button from '../../components/common/Button'

export default function AboutPreview() {
  return <SplitSection image={pasture} alt="Dairy cattle in a green pasture">
    <SectionHeading eyebrow="Rooted in dairy" title="The care behind every drop.">
      Good dairy starts before the milk reaches the factory. We focus on careful collection, temperature-controlled handling and the details that keep dairy fresh through packing.
    </SectionHeading>
    <Button to="/about">Meet Meadow & Milk</Button>
  </SplitSection>
}


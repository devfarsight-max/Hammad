import coldStorage from '../../assets/images/cold-storage.jpg'
import processPiping from '../../assets/images/process-piping.jpg'
import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import Photo from '../../components/common/Photo'

export default function FactoryGallery() {
  return <section className="section surface"><Container>
    <SectionHeading eyebrow="Facility gallery" title="Inside dairy production.">
      Illustrative views of the equipment used in dairy processing.
    </SectionHeading>
    <div className="gallery-grid">
      <figure><Photo src={coldStorage} alt="Reusable crates on shelving in a dairy cold-storage room" /><figcaption>Cold storage</figcaption></figure>
      <figure><Photo src={processPiping} alt="Stainless steel valves, gauges and dairy process piping" /><figcaption>Process equipment</figcaption></figure>
    </div>
  </Container></section>
}


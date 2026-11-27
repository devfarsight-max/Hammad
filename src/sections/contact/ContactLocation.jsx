import { MapPin } from 'lucide-react'
import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import { company } from '../../data/companyData'

export default function ContactLocation() {
  return <section className="section surface">
    <Container className="divisions-layout">
      <SectionHeading eyebrow="Location" title="Business address." />
      <div className="location-panel">
        <MapPin aria-hidden="true" />
        <strong>{company.address}</strong>
        <p>{company.demo ? 'Sample location for this demo.' : 'Contact the team for directions.'}</p>
      </div>
    </Container>
  </section>
}

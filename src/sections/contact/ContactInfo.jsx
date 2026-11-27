import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import ContactDetails from './ContactDetails'

export default function ContactInfo() {
  return <section className="section"><Container className="divisions-layout">
    <SectionHeading title="Contact details">
      Include the products you need, an estimated order size and your delivery area.
    </SectionHeading>
    <ContactDetails />
  </Container></section>
}

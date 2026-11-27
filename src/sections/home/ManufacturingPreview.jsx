import bottlingLine from '../../assets/images/bottling-line.jpg'
import SplitSection from '../../components/common/SplitSection'
import SectionHeading from '../../components/common/SectionHeading'
import Button from '../../components/common/Button'

export default function ManufacturingPreview() {
  return <SplitSection image={bottlingLine} alt="Glass milk bottles on a stainless steel filling line" reverse cream>
    <SectionHeading eyebrow="Inside the dairy" title="From milk intake to finished pack.">
      Follow our dairy production process, from chilled intake to dispatch, and learn how to enquire about disposable manufacturing.
    </SectionHeading>
    <Button to="/manufacturing">Explore manufacturing</Button>
  </SplitSection>
}


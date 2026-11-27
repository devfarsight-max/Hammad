import facility from '../../assets/images/facility.jpg'
import SplitSection from '../../components/common/SplitSection'
import SectionHeading from '../../components/common/SectionHeading'

export default function Infrastructure({ image = facility, alt = "Illustrative dairy facility with stainless steel tanks and pipes" }) {
  return <SplitSection image={image} alt={alt}>
    <SectionHeading eyebrow="Facility & equipment" title="A clear path through production.">
      Chilled intake tanks, stainless steel processing vessels and dedicated packing areas support the journey from raw milk to finished dairy. Separate storage areas help keep products at the appropriate temperature before dispatch.
    </SectionHeading>
  </SplitSection>
}


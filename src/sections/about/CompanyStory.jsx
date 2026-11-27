import dairyFarmer from '../../assets/images/dairy-farmer.jpg'
import SplitSection from '../../components/common/SplitSection'
import SectionHeading from '../../components/common/SectionHeading'

export default function CompanyStory() {
  return <SplitSection image={dairyFarmer} alt="Dairy farmer walking beside a herd">
    <SectionHeading eyebrow="Our story" title="From milk to the staples kitchens use daily.">
      Meadow & Milk brings together the dairy products that kitchens rely on most. The range starts with fresh milk and extends to paneer, set curd, butter and ghee for retail and foodservice.
    </SectionHeading>
  </SplitSection>
}


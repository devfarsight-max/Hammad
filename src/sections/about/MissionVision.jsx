import FeatureSection from '../../components/common/FeatureSection'
import { Compass, Telescope } from 'lucide-react'

const items = [
  { icon: Compass, title: 'Our mission', description: 'Make everyday dairy easy to source through careful production and clear communication with buyers.' },
  { icon: Telescope, title: 'Our vision', description: 'Build lasting supply relationships with retailers and foodservice teams that value consistent dairy essentials.' },
]

export default function MissionVision() {
  return <FeatureSection eyebrow="Our purpose" title="What we’re working towards." items={items} cream />
}

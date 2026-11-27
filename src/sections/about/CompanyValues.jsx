import FeatureSection from '../../components/common/FeatureSection'
import { HeartHandshake, ListChecks, Milk } from 'lucide-react'

const items = [
  { icon: Milk, title: 'Care at intake', description: 'Give milk handling the same attention as the finished product.' },
  { icon: ListChecks, title: 'Consistent routines', description: 'Use clear processes that teams can follow and review from batch to batch.' },
  { icon: HeartHandshake, title: 'Clear communication', description: 'Discuss pack sizes, storage and delivery needs early so buyers can plan.' },
]

export default function CompanyValues() {
  return <FeatureSection eyebrow="Our values" title="How we work." items={items} />
}

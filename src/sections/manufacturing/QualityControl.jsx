import { ClipboardCheck, ShieldCheck, Thermometer } from 'lucide-react'
import FeatureSection from '../../components/common/FeatureSection'

const items = [
  { icon: ClipboardCheck, title: 'Batch checks', description: 'Review intake, processing and packaging records before a batch is released.' },
  { icon: ShieldCheck, title: 'Hygiene and safety', description: 'Follow cleaning schedules, use suitable protective clothing and keep processing areas orderly.' },
  { icon: Thermometer, title: 'Temperature control', description: 'Monitor chilled storage and review conditions before loading orders for dispatch.' },
]

export default function QualityControl() {
  return <FeatureSection eyebrow="Quality control" title="Checks throughout production." items={items} />
}

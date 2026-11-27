import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'

const steps = [
  ['Receive & chill', 'Review incoming milk and hold it under chilled conditions before processing.'],
  ['Process by product', 'Pasteurise milk and route it to the appropriate process for each dairy product.'],
  ['Fill & pack', 'Fill, seal and identify each batch in the packing area.'],
  ['Store & dispatch', 'Hold products under suitable conditions and prepare orders for delivery.'],
]

export default function ProductionProcess() {
  return <section className="section surface"><Container>
    <SectionHeading eyebrow="Production process" title="Four stages from intake to dispatch." />
    <ol className="process-grid">{steps.map(([title, description], index) => <li key={title}>
      <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p>
    </li>)}</ol>
  </Container></section>
}

import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'

const questions = [
  ['What should I include in a wholesale enquiry?', 'Share your business type, preferred products, estimated order quantities and delivery area.'],
  ['Where can I find storage instructions?', 'Use the storage directions on the pack. For wholesale specifications, include the product name and pack size in your enquiry.'],
  ['What should I include in a packaging enquiry?', 'Share the intended use, preferred materials, dimensions and estimated order quantity.'],
  ['Can I ask about availability or delivery?', 'Yes. Include your postcode, approximate quantities and preferred delivery schedule so the team can discuss what is available.'],
]

export default function ContactFAQ() {
  return <section className="section"><Container className="faq-grid">
    <SectionHeading eyebrow="FAQ" title="Common questions." />
    <div>{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
  </Container></section>
}

import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { company } from '../../data/companyData'

export default function ContactDetails() {
  const details = [
    { icon: MapPin, label: 'Address', value: company.address },
    { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: Phone, label: 'Phone', value: company.phone, href: `tel:${company.phone.replace(/[^+\d]/g, '')}` },
    { icon: Clock, label: 'Business hours', value: company.hours },
  ]

  return <address className="contact-details">
    {details.map(({ icon: Icon, label, value, href }) => <div key={label}>
      <span className="feature-icon"><Icon size={20} aria-hidden="true" /></span>
      <div><strong>{label}</strong>{href && !company.demo ? <a href={href}>{value}</a> : <span>{value}</span>}</div>
    </div>)}
  </address>
}

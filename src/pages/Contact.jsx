import PageBanner from '../components/common/PageBanner'
import ContactInfo from '../sections/contact/ContactInfo'
import ContactLocation from '../sections/contact/ContactLocation'
import ContactFAQ from '../sections/contact/ContactFAQ'

export default function Contact() {
  return <>
    <PageBanner eyebrow="Contact us" title="Talk to our team.">Ask about dairy supply or disposable packaging, including product formats, quantities and delivery requirements.</PageBanner>
    <ContactInfo /><ContactLocation /><ContactFAQ />
  </>
}

import { useState } from 'react'
import { CircleCheck } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import Button from '../common/Button'

const fields = [
  { id: 'name', label: 'Name', autoComplete: 'name' },
  { id: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { id: 'company', label: 'Business name', autoComplete: 'organization', optional: true },
  { id: 'message', label: 'Message', multiline: true },
]

export default function ContactForm() {
  const [searchParams] = useSearchParams()
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function submit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const email = data.get('email').trim()
    const nextErrors = {}

    if (!data.get('name').trim()) nextErrors.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Enter a valid email address.'
    if (!data.get('message').trim()) nextErrors.message = 'Enter your message.'

    setErrors(nextErrors)
    const firstError = Object.keys(nextErrors)[0]
    setSubmitted(!firstError)
    if (firstError) form.elements.namedItem(firstError).focus()
    else form.reset()
  }

  return <form className="contact-form" onSubmit={submit} noValidate onChange={() => setSubmitted(false)}>
    <h2>Business enquiry</h2><p>This demo validates your enquiry locally.</p>
    <div className="form-field">
      <label htmlFor="business">I'm enquiring about</label>
      <select id="business" name="business" defaultValue={searchParams.get('business') === 'disposables' ? 'disposables' : ''}>
        <option value="">Select a business</option>
        <option value="dairy">Dairy Farm</option>
        <option value="disposables">Disposable Manufacturing</option>
        <option value="both">Both businesses</option>
      </select>
    </div>
    {fields.map(({ id, label, type = 'text', autoComplete, optional, multiline }) => {
      const props = {
        id, name: id, required: !optional, autoComplete,
        'aria-invalid': errors[id] ? true : undefined,
        'aria-describedby': errors[id] ? `${id}-error` : undefined,
        onChange: () => {
          if (errors[id]) setErrors((current) => ({ ...current, [id]: undefined }))
        },
      }
      return <div className="form-field" key={id}>
        <label htmlFor={id}>{label}{optional && <span> (optional)</span>}</label>
        {multiline ? <textarea {...props} rows={5} /> : <input {...props} type={type} />}
        {errors[id] && <span className="field-error" id={`${id}-error`}>{errors[id]}</span>}
      </div>
    })}
    <Button type="submit">Submit enquiry</Button>
    <div role="status">{submitted && <p className="form-success"><CircleCheck size={19} aria-hidden="true" /> Enquiry validated successfully in this demo.</p>}</div>
  </form>
}

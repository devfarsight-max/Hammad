export const company = {
  name: 'HAMMAD',
  descriptor: 'DAIRY & DISPOSABLES',
  email: 'rainhammad98@gmail.com',
  phone: '+91 97604 00792',
  address: 'Sample dairy facility, Anand, Gujarat, India',
  hours: 'Monday–Saturday · 9 am–6 pm IST',
  demo: true,
}

export const emailHref = `mailto:${company.email}`
export const phoneHref = `tel:${company.phone.replace(/\s/g, '')}`

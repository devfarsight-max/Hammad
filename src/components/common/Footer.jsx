import { Link } from 'react-router-dom'
import { company } from '../../data/companyData'
import Container from './Container'
import Logo from './Logo'

export default function Footer() {
  return <footer className="site-footer">
    <Container>
      <div className="footer-grid">
        <div><Logo /><p>Dairy products and disposable packaging enquiries for retailers and foodservice businesses.</p></div>
        <nav aria-label="Company">
          <h2>Company</h2>
          <Link to="/">Home</Link>
          <Link to="/dairy">Dairy farm</Link>
          <Link to="/manufacturing">Manufacturing</Link>
        </nav>
        <nav aria-label="Product ranges">
          <h2>Product ranges</h2>
          <Link to="/products">Dairy products</Link>
          <Link to="/disposables#packaging-formats">Packaging formats</Link>
        </nav>
        <div>
          <h2>Get in touch</h2>
          <p>{company.demo ? company.email : <a href={`mailto:${company.email}`}>{company.email}</a>}</p>
          <p>{company.address}</p>
          <p><Link to="/contact">Contact details</Link></p>
        </div>
      </div>
      <div className="footer-end">
        <span>© {new Date().getFullYear()} {company.name}</span>
        {company.demo && <span>Sample business website</span>}
      </div>
    </Container>
  </footer>
}

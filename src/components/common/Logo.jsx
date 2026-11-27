import { Link } from 'react-router-dom'
import mark from '../../assets/icons/hammad-mark.svg'
import { company } from '../../data/companyData'

export default function Logo() {
  return <Link to="/" className="brand" aria-label={`${company.name} home`}>
    <img className="brand-mark" src={mark} width="44" height="44" alt="" />
    <span><strong>{company.name}</strong><small>{company.descriptor}</small></span>
  </Link>
}

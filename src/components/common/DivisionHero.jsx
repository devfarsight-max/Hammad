import Button from './Button'
import Container from './Container'
import Photo from './Photo'

export default function DivisionHero({ eyebrow, title, image, alt, children, actions }) {
  return <section className="section division-hero">
    <Container className="split">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="intro">{children}</p>
        <div className="button-row">
          {actions.map(({ label, to }, index) =>
            <Button key={to} to={to} variant={index === 0 ? 'primary' : 'secondary'}>{label}</Button>
          )}
        </div>
      </div>
      <Photo src={image} alt={alt} priority />
    </Container>
  </section>
}

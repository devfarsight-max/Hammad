import Container from './Container'
import Photo from './Photo'

export default function PageBanner({ eyebrow, title, children, image, alt }) {
  return <section className={image ? 'page-banner page-banner--image' : 'page-banner'}>
    <Container>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="intro">{children}</p>
      </div>
      {image && <Photo src={image} alt={alt} priority />}
    </Container>
  </section>
}

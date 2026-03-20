export function Container({ children }) {
  return <div className="container">{children}</div>
}

export function PageHero({ title, text, image, alt, eyebrow = 'Liuli Society' }) {
  return (
    <section className="page-hero">
      <Container>
        <div className="page-hero-grid">
          <div className="page-copy">
            <div className="eyebrow">{eyebrow}</div>
            <h1 className="page-title">{title}</h1>
            <p className="page-text">{text}</p>
          </div>
          <div className="page-image-wrap">
            <img src={image} alt={alt} className="page-image" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export function SectionTitle({ title, text, eyebrow = 'Section' }) {
  return (
    <div className="section-head">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {text ? <p className="section-text">{text}</p> : null}
    </div>
  )
}

export function Card({ children, className = '' }) {
  return <div className={`card ${className}`}>{children}</div>
}

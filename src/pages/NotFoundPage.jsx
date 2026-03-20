import { Container, Card } from '../components/Layout'

export default function NotFoundPage() {
  return (
    <section className="section">
      <Container>
        <Card>
          <h3>Page not found</h3>
          <p>Please use the website navigation to continue exploring the Liuli Society website.</p>
          <a href="#/home" className="button button-deep" style={{ marginTop: 12 }}>Back to Home</a>
        </Card>
      </Container>
    </section>
  )
}

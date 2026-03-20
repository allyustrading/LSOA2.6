import supportImg from '../assets/support-classic.jpg'
import { PageHero, Container, Card } from '../components/Layout'

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support Us"
        title="Supporting the long-term growth of a public-serving nonprofit mission"
        text="This page is designed to help establish nonprofit credibility and prepare for future partnerships, contributions, and educational collaboration."
        image={supportImg}
        alt="Support page banner"
      />
      <section className="section">
        <Container>
          <div className="grid-2">
            <Card>
              <h3>Why support Liuli Society</h3>
              <p>Support can help expand educational work, community learning initiatives, research-informed development, and nonprofit capacity.</p>
            </Card>
            <Card>
              <h3>Tax-deductible giving</h3>
              <p>Liuli Society is a registered 501(c)(3) nonprofit organization in the United States. Contributions may be tax-deductible to the extent permitted by law.</p>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}

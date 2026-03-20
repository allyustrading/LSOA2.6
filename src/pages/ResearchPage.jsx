import researchImg from '../assets/research-classic.jpg'
import { PageHero, Container, Card } from '../components/Layout'

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Advancing a thoughtful and research-informed approach to wellbeing"
        text="Our research page presents Liuli Society as a serious, nonprofit-centered platform for learning, innovation, and future collaboration."
        image={researchImg}
        alt="Research page banner"
      />
      <section className="section">
        <Container>
          <div className="grid-2">
            <Card>
              <h3>Our research direction</h3>
              <p>We explore how wellness education, supportive routines, and thoughtful innovation can be presented responsibly within a nonprofit structure.</p>
            </Card>
            <Card>
              <h3>Future collaboration</h3>
              <p>We welcome mission-aligned conversations with educators, researchers, and institutions interested in public-facing wellness learning.</p>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}

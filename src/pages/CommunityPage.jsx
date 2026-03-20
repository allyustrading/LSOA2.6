import communityImg from '../assets/community-classic.jpg'
import { PageHero, Container, Card } from '../components/Layout'

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Connecting and supporting communities through education and shared participation"
        text="Liuli Society aims to create a space for workshops, dialogue, volunteer interest, and long-term relationship-based support."
        image={communityImg}
        alt="Community page banner"
      />
      <section className="section">
        <Container>
          <div className="grid-2">
            <Card>
              <h3>Community engagement</h3>
              <p>We aim to make wellness learning more accessible through group experiences, supportive conversations, and thoughtful public-facing activities.</p>
            </Card>
            <Card>
              <h3>Shared growth</h3>
              <p>Our vision is to foster a culture of support, learning, and trust that helps communities feel more connected and more informed.</p>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}

import contactImg from '../assets/contact-classic.jpg'
import { PageHero, Container, Card } from '../components/Layout'

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Connect with Liuli Society"
        text="We welcome inquiries related to education, research, community partnership, volunteer interest, and mission-aligned collaboration."
        image={contactImg}
        alt="Contact page banner"
      />
      <section className="section">
        <Container>
          <div className="grid-2">
            <Card>
              <h3>Inquiry areas</h3>
              <p>University collaboration, research conversations, community partnerships, educational programming, and volunteer participation.</p>
            </Card>
            <Card>
              <h3>Contact form preview</h3>
              <div className="form-grid">
                <input className="field" placeholder="Your name" />
                <input className="field" placeholder="Email address" />
                <input className="field" placeholder="Subject" />
                <textarea className="field" rows="6" placeholder="How would you like to connect with Liuli Society?" />
                <button className="button button-deep" style={{ width: 'fit-content' }}>Send Message</button>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}

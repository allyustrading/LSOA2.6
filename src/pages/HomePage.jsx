import { Heart, Microscope, Users } from 'lucide-react'
import heroImg from '../assets/hero-classic.jpg'
import { Container, Card, SectionTitle } from '../components/Layout'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero-card">
            <div className="hero-media">
              <img src={heroImg} alt="Classic Liuli Society hero" />
            </div>
            <div className="hero-content">
              <div className="eyebrow">Liuli Society</div>
              <h1 className="hero-title">Cultivating wellness, education, and community understanding</h1>
              <p className="hero-text">
                Liuli Society is a U.S. 501(c)(3) nonprofit organization dedicated to
                research-informed wellness education, thoughtful innovation, and
                community-centered support. This classic design direction is calmer,
                warmer, and more traditional in tone.
              </p>
              <div className="hero-actions">
                <a href="#/about" className="button button-deep">Learn More</a>
                <a href="#/support" className="button button-bronze">Get Involved</a>
              </div>

              <div className="icon-row">
                <div className="icon-box">
                  <Heart size={24} />
                  <strong>Holistic Education</strong>
                  <span>Clear and responsible public-facing wellness learning.</span>
                </div>
                <div className="icon-box">
                  <Microscope size={24} />
                  <strong>Innovative Research</strong>
                  <span>Research-informed exploration shaped by nonprofit values.</span>
                </div>
                <div className="icon-box">
                  <Users size={24} />
                  <strong>Community Engagement</strong>
                  <span>Programs and partnerships grounded in trust and care.</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionTitle
            eyebrow="Mission"
            title="A standard institutional presentation for a nonprofit wellness platform"
            text="This version is designed to feel more classic, more traditional, and more rooted in public trust."
          />
          <div className="grid-3">
            <Card>
              <div className="tagline">Mission</div>
              <h3>Education first</h3>
              <p>We help make wellness ideas more understandable through accessible language, thoughtful structure, and nonprofit-safe communication.</p>
            </Card>
            <Card>
              <div className="tagline">Research</div>
              <h3>Responsible exploration</h3>
              <p>We present innovation as an educational and research-informed process, rather than as direct product promotion.</p>
            </Card>
            <Card>
              <div className="tagline">Community</div>
              <h3>Supportive engagement</h3>
              <p>We aim to create a more humane model for learning, conversation, and mission-aligned collaboration.</p>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}

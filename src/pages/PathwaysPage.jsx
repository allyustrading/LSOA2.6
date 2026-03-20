import pathwaysImg from '../assets/pathways-classic.jpg'
import { PageHero, Container, Card } from '../components/Layout'

const items = [
  ['Mindfulness & Reflection', 'Practices that support presence, calm, and thoughtful daily rhythm.'],
  ['Natural Care Principles', 'Supportive daily care approaches rooted in gentle and responsible habits.'],
  ['Balanced Living', 'Educational guidance for routines, atmosphere, and everyday wellbeing.'],
  ['Community Learning', 'Shared spaces for discussion, workshops, and supportive participation.'],
  ['Rest & Renewal', 'Approaches that encourage restoration, comfort, and steadiness.'],
  ['Focus & Clarity', 'Ideas that help support intentional attention and more grounded engagement.'],
]

export default function PathwaysPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Pathways"
        title="Guiding people toward a more balanced and informed daily life"
        text="The pathway model presents wellness themes in a nonprofit-friendly framework that supports education, accessibility, and future exploration."
        image={pathwaysImg}
        alt="Pathways page banner"
      />
      <section className="section">
        <Container>
          <div className="grid-3">
            {items.map(([title, text]) => (
              <Card key={title}>
                <div className="tagline">Pathway</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

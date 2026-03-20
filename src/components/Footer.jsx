export default function Footer() {
  return (
    <footer className="footer footer-classic">
      <div className="container footer-top">
        <div className="footer-brand">
          <div className="footer-mark">Liuli Society</div>
          <p>
            A U.S. 501(c)(3) nonprofit organization focused on wellness education,
            research-informed innovation, and community-centered support.
          </p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <a href="#/home">Home</a>
          <a href="#/about">About Us</a>
          <a href="#/pathways">Pathways</a>
          <a href="#/research">Research</a>
          <a href="#/community">Community</a>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <a href="#/support">Support Us</a>
          <a href="#/contact">Contact</a>
          <a href="#/about">Mission</a>
          <a href="#/research">Innovation</a>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>General inquiries for mission-aligned education, research, and community conversations.</p>
          <a href="#/contact">Open contact page</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Liuli Society. All rights reserved.</span>
        <span>Registered U.S. 501(c)(3) nonprofit.</span>
      </div>
    </footer>
  )
}

const navItems = [
  ['Home', 'home'],
  ['About Us', 'about'],
  ['Pathways', 'pathways'],
  ['Research', 'research'],
  ['Community', 'community'],
  ['Support Us', 'support'],
]

export default function Header({ route }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#/home" className="brandmark">
          <div className="brand-logo">Liuli</div>
          <div className="brand-sub">Society</div>
        </a>

        <nav className="nav">
          {navItems.map(([label, key]) => (
            <a key={key} href={`#/${key}`} className={route === key ? 'nav-link active' : 'nav-link'}>
              {label}
            </a>
          ))}
        </nav>

        <a href="#/contact" className="button button-bronze">Get In Touch</a>
      </div>
    </header>
  )
}

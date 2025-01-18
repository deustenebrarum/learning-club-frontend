import './layout.css';

export default function LandingLayout({ children }) {
  return <>
    <header>
      <div className="logo-container">
        <span className="logo-text">LearningClub</span>
      </div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">About</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      {children}
    </main>
  </>;
}

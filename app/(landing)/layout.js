import './layout.module.css';

export default function LandingLayout({ children }) {
  return <>
    <header>
      <div class="logo-container">
        <span class="logo-text">LearningClub</span>
      </div>
      <nav class="nav-container">
        <ul class="nav-list">
          <li class="nav-item">
            <a href="#">Home</a>
          </li>
          <li class="nav-item">
            <a href="#">About</a>
          </li>
          <li class="nav-item">
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

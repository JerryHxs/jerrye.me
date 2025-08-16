/* App.tsx */
import './App.css'
import logo from './assets/je_logo.svg'
import profilePic from './assets/black_pfp.png'
import projectsIcon from './assets/projects_icon.png'
import resume from './assets/resume.pdf'

function App() {
  return (
    <div className="site-wrapper">
      {/* Header */}
      <header className="site-header">
        <div className="header-content">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="site-title">Jerry Portfolio</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img src={profilePic} alt="Jerry" className="hero-pic" />
        <h2>Hello, I’m Jerry 👋</h2>
        <p className="subtitle">Software Engineer & Photographer + Filmmaker</p>
        <p className="hero-text">
          Building scalable apps and capturing timeless moments through film
          and photography.
        </p>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View Resume
        </a>
      </section>

      {/* Projects Section */}
      <section className="section projects">
        <div className="section-header">
          <img src={projectsIcon} alt="Projects Icon" className="icon-small" />
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <img src={projectsIcon} alt="Weather Warriors" className="project-img" />
            <h3>Weather Warriors</h3>
            <p>React, Node.js</p>
          </div>
          <div className="project-card">
            <img src={projectsIcon} alt="Personal Portfolio" className="project-img" />
            <h3>Personal Portfolio</h3>
            <p>React, Tailwind CSS</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact">
        <h2>Get In Touch</h2>
        <p>Let’s connect and build something amazing!</p>
        <div className="contact-links">
          <a href="https://github.com/yourprofile">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
          <a href="mailto:youremail@example.com">Email</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        © {new Date().getFullYear()} Jerry. All rights reserved.
      </footer>
    </div>
  )
}

export default App

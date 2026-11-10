
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Khushi.</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HOME */}
      <section id="home" className="home">
        <div className="home-content">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Khushi Saini</span>
          </h1>

          <h2>Computer Science Engineering Student</h2>

          <p className="home-description">
            I am passionate about web development, programming
            and learning new technologies. I enjoy building
            creative and useful projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View My Projects
            </a>

            <a
              href="/Khushi-Resume.pdf"
              download="Khushi-Resume.pdf"
              className="btn resume-btn"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <p>
            Hello! I am Khushi Saini, a Computer Science
            Engineering student at Chandigarh University.
            I am interested in programming, web development
            and problem-solving.
          </p>

          <p>
            I enjoy learning new technologies and applying
            my knowledge through practical projects. My goal
            is to improve my technical skills and become a
            successful software developer.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-heading">
          <p>WHAT I KNOW</p>
          <h2>My Skills</h2>
        </div>

        <div className="skills-container">
          <div className="skill-card">C</div>
          <div className="skill-card">C++</div>
          <div className="skill-card">Java</div>
          <div className="skill-card">Python</div>
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React.js</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">Machine Learning</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-heading">
          <p>MY RECENT WORK</p>
          <h2>My Projects</h2>
        </div>

        <div className="projects-container">

          <div className="project-card">
            <h3>Fake News Detection</h3>
            <p>
              A machine learning project that predicts whether
              a given news article is real or fake.
            </p>
            <span>Python | Machine Learning | Flask</span>
          </div>

          <div className="project-card">
            <h3>House Price Prediction</h3>
            <p>
              A machine learning project that estimates house
              prices using different property features.
            </p>
            <span>Python | Machine Learning</span>
          </div>

          <div className="project-card">
            <h3>Personal Portfolio Website</h3>
            <p>
              A responsive personal portfolio website to
              showcase my skills, education, projects and resume.
            </p>
            <span>React.js | HTML | CSS | JavaScript</span>
          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <div className="section-heading">
          <p>MY ACADEMIC BACKGROUND</p>
          <h2>Education</h2>
        </div>

        <div className="education-card">
          <h3>Bachelor of Technology (B.Tech)</h3>
          <h4>Computer Science and Engineering</h4>
          <p>Chandigarh University</p>
          <p>Currently Pursuing</p>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="section">
        <div className="section-heading">
          <p>MY ACHIEVEMENTS</p>
          <h2>Certificates</h2>
        </div>

        <div className="certificates-container">

          <div className="certificate-card">
            <h3>Machine Learning</h3>
            <p>Add your certificate details here.</p>
          </div>

          <div className="certificate-card">
            <h3>Big Data Computing</h3>
            <p>Add your certificate details here.</p>
          </div>

          <div className="certificate-card">
            <h3>Programming</h3>
            <p>Add your certificate details here.</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-form">
          <p>
            Have a question or want to work together?
            Send me a message!
          </p>

          <form
            action="https://formsubmit.co/khushisaini0741@gmail.com"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              rows="5"
              required
            ></textarea>

            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact Message"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © 2026 Khushi Saini. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;

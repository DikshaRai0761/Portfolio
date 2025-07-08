import "./About.css";

const About = () => {
  return (
    <div className="About">
      {/* Bio + Image Block */}
      <div className="about-container">
        <div className="about-text">
          <h2 className="about-name">Diksha Rai</h2>
          <p className="about-bio">
           "As a Full Stack Web Developer with extensive experience in both front-end and back-end technologies, I'm dedicated to crafting dynamic, high-performance web applications. I specialize in Mern stack development, building scalable and responsive user experiences, and seamlessly integrating robust backend ecosystems."
          </p>
        </div>

        <div className="about-image-wrapper">
          <img
            src="https://i.postimg.cc/50ZkHyT6/Diksha.jpg"
            alt="Diksha Rai"
            className="about-image"
          />
        </div>
      </div>

      {/* Skills */}
      <div className="skills-section">
        <h3 className="section-title">Skills & Strengths</h3>
        <hr />
        <ul className="skills-list">
          <li>🌐 Cloud Deployment: Vercel, Render</li>
          <li>🎨 Frontend: HTML, CSS, JavaScript, React.js</li>
          <li>🔧 Backend: Node.js, Express.js</li>
          <li>🛢️ Database: MySQL, MongoDB</li>
          <li>📊 Git, Github, CI/CD</li>
          <li>⚙️ Debugging & Error Handling</li>
        </ul>
      </div>

      {/* Fun Facts */}
      <div className="fun-fact">
        <h3 className="section-title">Fun Fact</h3>
        <hr />
        <p className="fun-text">🎵 I often code while listening to lo-fi or soft Hindi Music - it boosts my creativity!</p>
        <p className="fun-text">🎯 I'm the kind of person who fixes a bug and then celebrates like I won a trophy!</p>
        <p className="fun-text">🎤 I've always enjoyed explainig tech to others - I believe in making complex things simple and fun.</p>
      </div>
    </div>
  );
};

export default About;

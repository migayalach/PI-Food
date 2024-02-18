// HOOK'S
import React from "react";

// COMPONENTS

// REDUX

// CSS
import "./about.css";

// JAVASCRIP

function About() {
  return (
    <div className="about-container">
      <div className="about-description">
        <h2>About Me</h2>
        <p>
          Hi there! 👋 I'm Miguel, a full-stack developer currently living in La
          Paz, Bolivia 🇧🇴.
        </p>
        <p>🔭 I am currently looking for a job.</p>
        <p>
          📂 Main tech skills: JavaScript | React | Next.js | Redux | Java |
          Node.js | Express | MySQL | Prisma | PostgreSQL | Testing.
        </p>
        <p>
          📫 How to reach me:{" "}
          <a href="mailto:ayalachavezmiguel@gmail.com">
            ayalachavezmiguel@gmail.com
          </a>
          .
        </p>
        <p>Thanks for visiting my profile! 😄</p>
      </div>
    </div>
  );
}

export default About;

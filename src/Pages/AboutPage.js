import React from "react";

// this page gives a peak at who the developer is, their contact info & what the site has to offer

const About = () => {
  const emailAmber = "amberking@pursuit.org";

  return (
    <div className="about-page">
      <h1>About Developer</h1>
      <div className="about-content">
        <img
          src="https://ca.slack-edge.com/TCVA3PF24-U04215X7ZQR-387d4394a939-512"
          alt="Amber"
          className="author-image"
        />
        <div className="author-description">
          <h2>Hi, I'm Amber King 😁👋🏾</h2>
          <bold>
            <h3>
              Currently enrolled and finishing up my role as a fellow at Pursuit
              Fellowship I created this application to work on my Full Stack Web
              Design skills. The focus of this application was to create a CRUD
              informational site about crystals thats user-friendly, with simple
              and clean design along with an switch to dark mode to minimize eye
              strain.Also,I expanded on understanding how the data flow through
              backend and frontend fully works and re-learning how to manage and
              create my own database via Postgres SQL with much reach to support
              the data shared on this site.
              <p>
                Below is links to all my contact information, for any questions
                or suggestions for this or future projects, Thanks and I hope
                you enjoy this site. 🤗
              </p>
            </h3>
          </bold>
          <br></br>
          <div className="author-buttons">
            <a href={`mailto:${emailAmber}`} className="author-button">
              Email
            </a>
            <br></br>
            <a
              href="https://github.com/amber-king"
              target="_blank"
              rel="noopener noreferrer"
              className="author-button"
            >
              GitHub
            </a>
            <br></br>

            <a
              href="https://www.linkedin.com/in/amber-king-6210b0126/"
              target="_blank"
              rel="noopener noreferrer"
              className="author-button"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

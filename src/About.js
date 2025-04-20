import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <header className="about-hero">
        <h1>About Our Deepfake Detection</h1>
        <p>Empowering individuals and organizations to detect AI-generated fake media with advanced machine learning.</p>
      </header>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our goal is to provide a reliable and user-friendly tool that helps individuals, businesses, and organizations 
          identify and combat deepfake content. By leveraging artificial intelligence, we strive to enhance media 
          authenticity and promote digital trust.
        </p>
      </section>
      <section className="how-it-works">
        <h2>How Our System Works</h2>
        <div className="steps">
          <div className="step">
            <h3>Step 1</h3>
            <p>Upload an image or video that you suspect is a deepfake.</p>
          </div>
          <div className="step">
            <h3>Step 2</h3>
            <p>Our AI model analyzes patterns and artifacts in the media.</p>
          </div>
          <div className="step">
            <h3>Step 3</h3>
            <p>Receive a detailed result indicating if the media is real or fake.</p>
          </div>
        </div>
      </section>
      <section className="team">
        <h2>Meet Our Team</h2>
        <p>We are a team of AI researchers, developers, and cybersecurity experts dedicated to fighting digital deception.</p>
        <div className="team-list">
          <div className="team-member">
            <h3>Sohail Shaikh</h3>
            <p>Team Leader | AI Researcher</p>
          </div>
          <div className="team-member">
            <h3>Anas Chougle</h3>
            <p>Machine Learning Engineer</p>
          </div>
          <div className="team-member">
            <h3>Piyush Gharat</h3>
            <p>Full-Stack Developer</p>
          </div>
          <div className="team-member">
            <h3>Om Kadam</h3>
            <p>Cybersecurity & Backend Engineer</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2025 Deepfake Detection | Promoting Digital Truth</p>
      </footer>
    </div>
  );
}

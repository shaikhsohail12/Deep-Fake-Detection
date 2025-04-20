import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
  return (
    <div className="home-container">

      <header className="hero">
        <h1>Detect Deepfake Images & Videos</h1>
        <p>Protect yourself from AI-generated fake media with our cutting-edge deepfake detection system.</p>
        <Link to="/detect">
          <button className="cta-btn">Start Detection</button>
        </Link>
      </header>

      <section className="about">
        <h2>What is Deepfake?</h2>
        <p>Deepfake technology uses artificial intelligence to manipulate images and videos, making them appear real. 
           While deepfakes can be used for entertainment, they also pose significant risks such as misinformation and fraud.</p>
      </section>

      <section className="features">
        <h2>Why Use Our Deepfake Detection System?</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>AI-Powered Detection</h3>
            <p>Our system uses advanced machine learning models to detect deepfake content accurately.</p>
          </div>
          <div className="feature">
            <h3>Fast & Reliable</h3>
            <p>Upload an image or video and get instant results on whether it is real or fake.</p>
          </div>
          <div className="feature">
            <h3>User-Friendly</h3>
            <p>Simple interface allowing anyone to check deepfake content with ease.</p>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Deepfake Detection | Built with AI & ML</p>
          <ul className="footer-links">
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Terms of Service</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

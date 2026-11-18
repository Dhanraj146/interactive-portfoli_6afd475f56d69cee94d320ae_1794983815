import React from 'react';
import './HeroSection.css';

export function HeroSection({ personal }) {
  return (
    <div id="home" className="section hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-status">
            <span>{personal.statusBadge}</span>
          </div>

          <div className="hero-title">
            Hi, I'm {personal.name}
          </div>

          <div className="hero-headline">
            {personal.title}
          </div>

          <div className="hero-tagline">
            {personal.tagline}
          </div>

          <div className="hero-metadata">
            <div>Location: {personal.location}</div>
          </div>

          <div className="hero-cta-group">
            {/* Non-functional or plain hash links */}
            <a href="#" className="btn">View Projects</a>
            <a href="#" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="static-profile-box">
            <div className="avatar-placeholder">
              {personal.name.slice(0, 2).toUpperCase()}
            </div>
            <div className="static-code">
              <div>name: "{personal.name}"</div>
              <div>role: "Developer"</div>
              <div>status: "Available"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

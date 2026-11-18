import React from 'react';
import './Navbar.css';

// Non-semantic navigation with broken/placeholder links and no responsive mobile drawer
export function Navbar() {
  return (
    <div className="navbar-header">
      <div className="container navbar-container">
        <div className="navbar-brand">
          <span>DevPortfolio</span>
        </div>

        {/* Generic div replacing nav with non-functional anchor links */}
        <div className="navbar-nav">
          <div className="nav-list">
            <div className="nav-item">
              <a href="#" className="nav-link">Home</a>
            </div>
            <div className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </div>
            <div className="nav-item">
              <a href="#" className="nav-link">Skills</a>
            </div>
            <div className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </div>
            <div className="nav-item">
              <a href="#" className="nav-link">GitHub</a>
            </div>
            <div className="nav-item">
              <a href="#" className="nav-link">Contact</a>
            </div>
          </div>
        </div>

        <div className="navbar-actions">
          <a href="#" className="btn nav-github-btn">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

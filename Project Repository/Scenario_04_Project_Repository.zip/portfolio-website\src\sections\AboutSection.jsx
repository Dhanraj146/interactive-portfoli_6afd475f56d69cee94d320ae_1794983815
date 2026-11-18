import React from 'react';
import './AboutSection.css';

export function AboutSection({ personal, education, interests, goals }) {
  return (
    <div id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">About Me</div>
          <div className="section-description">Developer summary and education</div>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <div className="card">
              <div className="card-title">Bio</div>
              {personal.bio.map((paragraph, idx) => (
                <div key={idx} className="bio-para">{paragraph}</div>
              ))}
            </div>

            <div className="card">
              <div className="card-title">Goals</div>
              {goals.map((goal, idx) => (
                <div key={idx} className="goal-row">{idx + 1}. {goal}</div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="card">
              <div className="card-title">Education</div>
              {education.map((edu, idx) => (
                <div key={idx} className="edu-box">
                  <div className="edu-degree">{edu.degree}</div>
                  <div className="edu-inst">{edu.institution} ({edu.period})</div>
                  <div className="edu-desc">{edu.details}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './SkillsSection.css';

export function SkillsSection({ skills }) {
  const categoryKeys = Object.keys(skills);

  return (
    <div id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">Skills &amp; Technologies</div>
          <div className="section-description">Technical overview</div>
        </div>

        <div className="skills-fixed-grid">
          {categoryKeys.map((key) => {
            const cat = skills[key];
            return (
              <div key={key} className="card skill-flat-card">
                <div className="skill-cat-name">{cat.category}</div>
                <div className="skill-items-list">
                  {cat.items.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-plain-tag">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

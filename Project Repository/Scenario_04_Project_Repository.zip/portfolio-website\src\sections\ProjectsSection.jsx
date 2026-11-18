import React from 'react';
import './ProjectsSection.css';

export function ProjectsSection({ projects }) {
  return (
    <div id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">Projects</div>
          <div className="section-description">Project list</div>
        </div>

        <div className="projects-fixed-list">
          {projects.map((project) => (
            <div key={project.id} className="card project-flat-card">
              <div className="project-heading">{project.title}</div>
              <div className="project-body">{project.description}</div>
              <div className="project-tags">
                {project.technologies.join(', ')}
              </div>
              <div className="project-links">
                {/* Non-functional or dead links */}
                <a href="#" className="plain-link">GitHub Code</a> | <a href="#" className="plain-link">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

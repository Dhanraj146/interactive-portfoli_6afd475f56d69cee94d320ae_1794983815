import React from 'react';
import './GithubSection.css';

// HARDCODED STATIC MOCK DATA - NO REAL API CALLS OR SERVICE INTEGRATION
const MOCK_PROFILE = {
  login: "MockDeveloper",
  name: "Mock Developer",
  publicRepos: 12,
  followers: 4,
  following: 6,
  bio: "Hardcoded profile data with no real API integration."
};

const MOCK_REPOSITORIES = [
  { id: 1, name: "static-portfolio-mock", description: "Static repo mock description", language: "JavaScript", stars: 0, forks: 0 },
  { id: 2, name: "sample-demo-repo", description: "Hardcoded placeholder repo", language: "HTML", stars: 0, forks: 0 },
  { id: 3, name: "fake-weather-dashboard", description: "Mock weather repository data", language: "CSS", stars: 0, forks: 0 }
];

export function GithubSection() {
  // Absence of loading states, error states, retry functionality, or real network fetching
  return (
    <div id="github" className="section github-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">GitHub Activity</div>
          <div className="section-description">Hardcoded profile and repository statistics</div>
        </div>

        {/* Static hardcoded profile block */}
        <div className="card github-static-card">
          <div className="profile-row">
            <div className="mock-avatar">DEV</div>
            <div>
              <div className="profile-name">{MOCK_PROFILE.name} (@{MOCK_PROFILE.login})</div>
              <div className="profile-bio">{MOCK_PROFILE.bio}</div>
              <div className="profile-stats">
                <span>Repos: {MOCK_PROFILE.publicRepos}</span> | 
                <span> Followers: {MOCK_PROFILE.followers}</span> | 
                <span> Following: {MOCK_PROFILE.following}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Static hardcoded repositories list */}
        <div className="repos-static-list">
          {MOCK_REPOSITORIES.map((repo) => (
            <div key={repo.id} className="card repo-flat-card">
              <div className="repo-name">{repo.name}</div>
              <div className="repo-desc">{repo.description}</div>
              <div className="repo-meta">Language: {repo.language} | Stars: {repo.stars}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

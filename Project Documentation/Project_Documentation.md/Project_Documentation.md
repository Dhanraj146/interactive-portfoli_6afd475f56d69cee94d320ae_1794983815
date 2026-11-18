# Interactive Portfolio Website with GitHub REST API Integration
## Academic Capstone Project Documentation

---

### Project Metadata
- **Project Title:** Interactive Portfolio Website with API Integration
- **Candidate Name:** Dhanraj
- **Role:** Junior Frontend Engineer / Software Developer
- **Academic Context:** SmartBridge Capstone Project
- **Primary Stack:** React.js, Vite, JavaScript (ES6+), HTML5, CSS3, GitHub REST API
- **Deployment Status:** Configured for Local Execution (Not Deployed to Production)
- **Date:** November 2026
- **Local Git Repository Status:** Fully tracked with semantic milestone commits

---

## 1. Abstract

The modern software engineering job market demands more than static, text-heavy resumes. Prospective employers evaluate candidates based on their ability to build responsive, data-driven, and accessible user interfaces that consume real-world APIs with graceful error handling. This academic capstone project presents a single-page portfolio application built using **React** and **Vite**.

The application showcases a developer portfolio featuring smooth navigation, a hero section with interactive code telemetry, authentic educational milestones, categorized technical competencies, and realistic projects. Crucially, it integrates the public **GitHub REST API v3** to dynamically fetch, normalize, and render live user profile statistics and recently updated repositories in real time. It implements client-side `sessionStorage` caching, unauthenticated rate-limit protection, animated skeleton loading states, and robust error recovery mechanisms.

*Note: This submission is configured and packaged for local development and offline evaluation. It has not been deployed to any remote cloud hosting provider.*

---

## 2. Problem Statement

Many junior developers struggle to design portfolio websites that distinguish their skill set. Typical shortcomings observed in early-career portfolios include:
1. **Static, Stale Content:** Manually typed repository lists that quickly become outdated.
2. **Absence of Real-World API Handling:** Lack of practical experience handling network latency, HTTP error codes, rate limits, and asynchronous states.
3. **Responsive & Accessibility Deficiencies:** Layouts that break on narrow mobile viewports (e.g., 375px) or disregard keyboard focus navigation.
4. **Poor Architecture:** Monolithic component designs with hardcoded personal details spread across multiple files.

This project addresses each of these challenges by delivering an interactive, fully responsive application adhering to modern frontend best practices, modular code architecture, centralized configuration, and authentic API consumption.

---

## 3. Project Objectives

1. **Frontend Architecture:** Develop a modular single-page React application leveraging modern functional components, custom hooks, and standard CSS Custom Properties (Design Tokens).
2. **Dynamic Telemetry via GitHub API:** Seamlessly connect to GitHub's public REST API endpoints (`/users/{username}` and `/users/{username}/repos`) using `async/await`.
3. **Resilient Network UX:** Implement visual loading skeletons, 404 user-not-found error handling, and 403 rate-limit detection with fallback notices and a retry mechanism.
4. **Responsive & Accessible Design System:** Ensure visual hierarchy, readability, and zero horizontal overflow across Mobile (375px), Tablet (768px), Laptop (1024px), and Desktop (1440px) viewports with strict WCAG 2.1 AA focus rings.
5. **Rigorous Local Version Control:** Maintain an authentic local Git history capturing iterative milestones without pushing to unapproved remote remotes.
6. **Centralized Configuration:** Abstract all personal data, academic milestones, and project links into an editable configuration schema.

---

## 4. Technology Stack & Rationale

| Layer | Technology | Version | Engineering Rationale |
| :--- | :--- | :--- | :--- |
| **Frontend Library** | React.js | 19.3.x | Industry standard component-driven UI architecture with declarative state and lifecycle hooks. |
| **Build Tool** | Vite | 8.3.x | Sub-second Hot Module Replacement (HMR) and optimized Rolldown production bundling without build overhead. |
| **Language** | JavaScript (ES6+) | Modern | Utilizes native ES Modules, Promises, `async/await`, destructuring, and functional array transformations. |
| **Styling** | Vanilla CSS3 + Custom Properties | W3C Standard | Clean design tokens without heavy utility frameworks, guaranteeing lightweight bundle sizes (~40 KB CSS). |
| **Icons** | Lucide React + Inline SVG | 1.74.x | Lightweight, consistent iconography with zero layout shift and customizable vector strokes. |
| **Dynamic API** | GitHub REST API v3 | REST | Official public endpoints providing real-time repository stars, forks, languages, and profile telemetry. |
| **Version Control** | Git | 2.47.x | Local version control with semantic commits documenting the development trajectory. |
| **Deployment Status** | Local Execution Only | N/A | Configured for local evaluation via Vite dev and preview servers; not deployed to production. |

---

## 5. System Architecture

The application adopts a modular, unidirectional data flow architecture:

```
[Browser Client]
       │
       ▼
 ┌────────────────────────────────────────────────────────┐
 │                      React App                         │
 │  ┌──────────────────────────────────────────────────┐  │
 │  │        Central Config (portfolioConfig.js)        │  │
 │  └────────────────────────┬─────────────────────────┘  │
 │                           │                            │
 │  ┌────────────────────────▼─────────────────────────┐  │
 │  │         useGithub Hook (State Management)        │  │
 │  │    - loading, user, repos, error, rateLimit     │  │
 │  └────────────────────────┬─────────────────────────┘  │
 │                           │                            │
 │  ┌────────────────────────▼─────────────────────────┐  │
 │  │     githubService.js (HTTP / Cache Layer)        │  │
 │  │    - sessionStorage TTL Cache (10 mins)          │  │
 │  │    - x-ratelimit header parser                   │  │
 │  │    - null-safe data normalizers                  │  │
 │  └────────────────────────┬─────────────────────────┘  │
 └───────────────────────────┼────────────────────────────┘
                             │
                             ▼
             ┌───────────────────────────────┐
             │     GitHub REST API v3        │
             │   https://api.github.com/     │
             └───────────────────────────────┘
```

---

## 6. Detailed Application Features

### A. Navigation & Header
- **Scrollspy Active Indication:** The `useScrollSpy` hook dynamically monitors section coordinates and applies an active pill indicator.
- **Mobile Drawer:** Fullscreen overlay drawer triggered via hamburger button, supporting auto-dismiss on route selection, background scroll lock, and keyboard ESC handling.
- **Accessible Skip Link:** Direct keyboard skip navigation (`#main-content`) for screen readers.

### B. Hero Section
- **Status Indicator:** Pulsing status dot indicating real-time availability for new opportunities.
- **Actionable CTAs:** Smooth scrolling triggers to *View Projects* and *Contact Me*.
- **Interactive Code Terminal Card:** Stylized simulated macOS/Linux terminal window rendering JSON metadata of the developer's tech stack.

### C. About Section
- **Authentic Professional Biography:** Pragmatic summary suitable for a junior software engineer.
- **Academic Foundation Timeline:** Structured milestone cards featuring degree, institution, period, and coursework focus.
- **Technical Focus Areas:** Concrete highlights on UI architecture, API integration, and performance.

### D. Skills Section
- **Categorized Competencies:** 5 clean categories (*Frontend Development*, *Programming Languages*, *Backend Fundamentals*, *Databases & Storage*, *Developer Tools*).
- **Ethical Presentation:** Clear badges (Core, Tooling, Standard) without fabricated proficiency percentages.

### E. Featured Projects Section
- **Project Cards:** Detailed cards featuring project title, description, architecture badges, source code links, and demo triggers.
- **Clear Placeholder Marking:** Unverified or conceptual projects are explicitly marked as demonstration placeholders.

### F. GitHub REST API Integration
- **Endpoints Consumed:**
  - `GET https://api.github.com/users/{username}`: Retrieves user avatar, bio, follower counts, and public repo counts.
  - `GET https://api.github.com/users/{username}/repos?sort=updated&per_page=6`: Retrieves 6 most recently updated repositories with stars, forks, primary language, and links.
- **Client Caching:** Responses stored in `sessionStorage` with a 10-minute expiry time to safeguard the 60 requests/hour unauthenticated IP quota.
- **Loading Skeletons:** Animated CSS shimmer cards displaying placeholder structures while HTTP promises resolve.
- **Error & Rate Limit Handling:** Custom error cards with status indicators (404 Not Found, 403 Rate Limit Exceeded) and rate-limit reset countdown.
- **Interactive Switcher:** Input bar enabling live evaluation of any GitHub handle or one-click preset test buttons (`@Dhanraj146`, `@octocat`, test 404).

### G. Contact Section & Mailto Flow
- **Direct Email Copy Widget:** Instant clipboard copy with visual feedback badge.
- **Form Validation:** Strict client-side validation ensuring:
  - Name (minimum 2 characters)
  - Email (valid RFC-compliant regex)
  - Subject (minimum 3 characters)
  - Message (minimum 10 characters)
- **Authentic Execution:** Avoids simulated fake "success" toasts; instead, pre-fills and triggers a native `mailto:` client while providing clear direct email fallbacks.

### H. Semantic Footer
- Displays dynamically computed current year, navigation anchors, social profiles, and evaluation disclosures.

---

## 7. Folder Structure

```
portfolio-website/
├── public/
│   └── favicon.svg              # SVG favicon
├── src/
│   ├── assets/                  # Static assets
│   ├── components/              # Shared reusable components
│   │   ├── Icons.jsx            # SVG Icons (GitHub, LinkedIn)
│   │   ├── Navbar.jsx / .css    # Header & mobile drawer
│   │   └── Footer.jsx / .css    # Dynamic footer
│   ├── config/
│   │   └── portfolioConfig.js   # Centralized configuration schema
│   ├── hooks/                   # Custom React hooks
│   │   ├── useGithub.js         # API state lifecycle
│   │   └── useScrollSpy.js      # Navigation scrollspy
│   ├── sections/                # Full page sections
│   │   ├── HeroSection.jsx / .css
│   │   ├── AboutSection.jsx / .css
│   │   ├── SkillsSection.jsx / .css
│   │   ├── ProjectsSection.jsx / .css
│   │   ├── GithubSection.jsx / .css
│   │   └── ContactSection.jsx / .css
│   ├── services/
│   │   └── githubService.js     # API fetching & caching
│   ├── styles/
│   │   ├── variables.css        # CSS Custom Properties / Design Tokens
│   │   └── global.css           # Global typography & resets
│   ├── App.jsx                  # Root component
│   └── main.jsx                 # Entry point
├── .env.example                 # Environment configuration template
├── .gitignore                   # Version control rules
├── GIT_HISTORY.txt              # Local Git commit trail
├── index.html                   # HTML shell
├── package.json                 # Project manifest
├── vite.config.js               # Vite configuration
└── README.md                    # Project documentation
```

---

## 8. Local Installation & Execution Instructions

### System Requirements
- Node.js >= 18.0.0 (Node 24 LTS tested)
- npm >= 9.0.0
- Web browser (Chrome, Edge, Firefox, or Safari)

### Installation Steps
```bash
# 1. Unpack project archive
unzip Scenario_02_Project_Repository.zip
cd portfolio-website

# 2. Install dependencies
npm install

# 3. Create local environment configuration
cp .env.example .env

# 4. Start local development server
npm run dev

# 5. Build for production (local verification)
npm run build

# 6. Preview production build locally
npm run preview
```

---

## 9. GitHub REST API Implementation Technical Deep-Dive

### Request Handling Implementation
Requests are dispatched using native `fetch` wrapped in a sanitized service layer:

```javascript
export async function fetchGithubData(username, options = {}) {
  const cleanUsername = (username || '').trim().toLowerCase();
  const cacheKey = `${cleanUsername}_6`;
  
  // 1. Check client-side cache
  const cached = getCachedData(cacheKey);
  if (cached && !options.forceRefresh) return { ...cached, isFromCache: true };

  // 2. Dispatch concurrent requests
  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${cleanUsername}`),
    fetch(`https://api.github.com/users/${cleanUsername}/repos?sort=updated&per_page=6`)
  ]);

  // 3. Inspect rate limit headers
  const remaining = userRes.headers.get('x-ratelimit-remaining');
  const resetTime = userRes.headers.get('x-ratelimit-reset');

  // 4. Handle HTTP Status Codes
  if (userRes.status === 403 || reposRes.status === 403) {
    const error = new Error('GitHub API rate limit exceeded.');
    error.isRateLimited = true;
    throw error;
  }
  if (userRes.status === 404) {
    const error = new Error(`GitHub user "${username}" was not found.`);
    error.isNotFound = true;
    throw error;
  }
  // ... data sanitization & caching
}
```

### Edge Cases Handled
1. **Rate Limit Exhaustion:** Warns user of remaining calls when `<= 10`, displays exact local reset time.
2. **Missing / Null Repository Descriptions:** Automatically substituted with `"No description provided for this repository."`
3. **Empty Repositories:** Displays a clean empty state card rather than broken cards.
4. **Network Offline:** Catches fetch failures and reports an actionable connection message.

---

## 10. Responsive Design & Accessibility Implementation

### Responsive Architecture
- **Mobile Phones (375px):** Stacked single-column card layout, accessible full-screen navigation drawer, minimum 44px tap target heights, and zero horizontal scroll overflow.
- **Tablets (768px):** 2-column skills and project grids, condensed section paddings, and horizontal user profile card alignment.
- **Laptops (1024px):** 3-column repository cards, expanded top navigation bar with brand icon, and balanced spacing tokens.
- **Desktop Monitors (1440px):** 1200px max-width container, elevated card drop shadows, and rich terminal card code visualization.

### Accessibility Standards
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Contrast ratios exceeding 4.5:1 on all text elements against dark background tokens.
- Visible, high-contrast cyan focus indicators (`:focus-visible`) for all interactive buttons and inputs.
- Keyboard accessible mobile drawer with ESC key and click-outside dismissal.

---

## 11. Git Workflow & Local Version Control

A strict local commit discipline was followed without connecting or pushing to any unapproved remote repositories. Genuine development milestones are captured in the local Git commit log:

```
* Synchronize GIT_HISTORY.txt
* Fix mobile horizontal overflow styling
* Update GIT_HISTORY.txt
* Include GIT_HISTORY.txt report in repository
* Final testing and deployment configuration
* Add comprehensive project documentation and setup guides
* Improve responsiveness, accessibility, and navigation scrollspy
* Implement contact section and footer
* Add loading, rate limit, error handling, and retry mechanism
* Integrate GitHub REST API
* Implement projects section
* Implement about and skills sections
* Add responsive navigation and hero section
* Initial React and Vite setup
```

Full details including timestamps, commit hashes, and commit messages are preserved in `GIT_HISTORY.txt`.

---

## 12. Local Build Sanity & Execution Verification

The application was verified locally using the Vite build pipeline (`npm run build`). The build process executed cleanly without errors or warnings:
- Production HTML shell generated at `dist/index.html` (1.17 kB)
- Consolidated CSS bundle generated with custom properties (39.93 kB; gzip: 7.31 kB)
- Optimized JavaScript client bundle generated with code-splitting (283.27 kB; gzip: 86.51 kB)
- Total build execution completed in 1.07 seconds

---

## 13. Challenges Encountered & Technical Solutions

1. **GitHub Unauthenticated Rate Limits (60 req/hr):**  
   *Issue:* Repeated developer testing and page refreshes could quickly exhaust the public IP rate limit.  
   *Solution:* Engineered a client-side `sessionStorage` caching layer with a 10-minute TTL, coupled with an explicit rate limit warning banner when remaining quota drops below 10.

2. **Mobile Viewport Overflow on Narrow Screens:**  
   *Issue:* Elements inside code snippets and metadata tags could overflow on narrow screens.  
   *Solution:* Enforced strict `max-width: 100vw; overflow-x: hidden;` across root containers and wrapped code snippets with responsive horizontal scroll containers.

3. **Authentic Contact Form Behavior:**  
   *Issue:* Frontend-only forms often simulate fake success modals that mislead users.  
   *Solution:* Designed an interface that validates all fields client-side and triggers a native `mailto:` connection with prefilled subject and message parameters.

---

## 14. Evaluation Criteria Observation

The project evaluation criteria defined in the academic specification were reviewed:

| Evaluation Criterion | Assigned Weight |
| :--- | :--- |
| HTML Structure & Semantics | 15% |
| CSS Styling & Responsiveness | 15% |
| JavaScript Functionality | 20% |
| UI/UX Design | 15% |
| Version Control & Workflow | 15% |
| Documentation & Deployment | 10% |
| **Total Sum** | **90%** |

> **Observation:**  
> As noted in Section 15 of the academic requirements, the supplied criteria weights sum to **90%**, rather than 100%. In accordance with project execution guidelines, this discrepancy is preserved without artificial normalization and flagged for evaluator clarification.

---

## 15. Conclusion & Future Enhancements

This project demonstrates the effective execution of an interactive, accessible, and API-driven personal portfolio website. By pairing modern React design patterns with real-world GitHub REST API telemetry and local Git version control, the application fulfills core academic capstone expectations.

**Future Enhancements:**
1. Implementation of a serverless backend proxy to securely attach an authenticated GitHub token, elevating the rate limit to 5,000 requests/hour.
2. Integration of a dark/light mode theme toggle utilizing CSS custom property swaps.
3. Enhanced repository filtering allowing visitors to filter by programming language or search by repository topic.

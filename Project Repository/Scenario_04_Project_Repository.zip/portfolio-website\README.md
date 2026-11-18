# Interactive Portfolio Website with GitHub REST API Integration

> **Academic Capstone Project**  
> An interactive, responsive personal portfolio website integrating the public GitHub REST API for real-time profile and repository telemetry.

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/ES6+-JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub REST API](https://img.shields.io/badge/GitHub_API-v3-181717?logo=github&logoColor=white)](https://docs.github.com/en/rest)
[![Deployment](https://img.shields.io/badge/Deployment-Local_Only-inactive?logo=render&logoColor=white)](https://github.com/)

> **Notice:** This version of the project is configured and prepared for local execution and offline evaluation. It has not been deployed to any remote cloud hosting provider. All interactive features, responsive styles, and API integrations run locally via Vite.

---

## 1. Project Overview & Problem Statement

### Problem Statement
Many junior developers struggle to create portfolio websites that stand out to potential employers. Static portfolios often fail to showcase dynamic capabilities, asynchronous operations, and API integration skills essential for modern frontend engineering roles.

### Solution
This project addresses that gap by delivering an interactive, fully responsive single-page application built with **React** and **Vite**. In addition to standard portfolio sections (Hero, About, Categorized Skills, Featured Projects, Contact), it features a **live, dynamic GitHub REST API integration** that communicates directly with GitHub's servers to fetch and render user metrics and repository data in real time.

---

## 2. Technology Stack

- **Frontend Framework:** React.js (Functional components, Hooks, Context-free modular state)
- **Build Tool:** Vite (Next-generation frontend tooling with instant HMR and optimized Rolldown/Rollup builds)
- **Language:** JavaScript (ES6+ with async/await, arrow functions, destructuring, modules)
- **Styling:** Modular CSS3 with CSS Custom Properties (Design tokens), Flexbox, CSS Grid, and responsive media queries
- **Icons:** SVG vector icons and Lucide React icons
- **Dynamic Content:** Public GitHub REST API v3
- **Local Version Control:** Git (incremental, semantic commits)
- **Deployment Status:** Local Development Only (Undeployed)

---

## 3. Key Features

1. **Responsive Navigation Bar**
   - Active section scrollspy indication
   - Mobile responsive drawer with backdrop blur and escape/click-outside dismiss
   - Smooth anchor scrolling with fixed navigation offset calculation
   - Accessible keyboard focus and skip-to-content mechanism

2. **Professional Hero Section**
   - Developer introduction with dynamic status badge
   - Actionable CTAs (*View Projects*, *Contact Me*)
   - Interactive terminal window preview card with code syntax styling

3. **About & Background Section**
   - Short authentic professional biography
   - Technical focus areas and career goals
   - Academic milestones timeline with clear, configurable placeholders

4. **Categorized Skills Section**
   - Organized into 5 distinct categories: *Frontend Development*, *Programming Languages*, *Backend Fundamentals*, *Databases & Storage*, *Developer Tools & Workflow*
   - Badged competency tags (intentionally unrated to prevent fabricated metrics)

5. **Featured Projects Section**
   - Cards displaying project title, description, technology stack tags, source code link, and live demonstration links
   - Realistic placeholders for unverified third-party projects

6. **Live GitHub REST API Integration (Mandatory Core Feature)**
   - **Endpoints Consumed:**
     - `GET https://api.github.com/users/{username}`
     - `GET https://api.github.com/users/{username}/repos?sort=updated&per_page=6`
   - **Async/Await Data Pipeline:** Fully asynchronous fetching with status code validation
   - **Loading States:** Shimmering animated skeleton loaders for avatar, user statistics, and repo cards
   - **Rate Limit Resilience:** Automatically parses `x-ratelimit-remaining` and `x-ratelimit-reset` headers; displays quota alert when remaining calls drops below threshold
   - **Smart Client-Side Caching:** Utilizes `sessionStorage` with a 10-minute TTL to prevent unauthenticated IP rate limiting (60 requests/hr)
   - **Error Handling & Retry:** Comprehensive handling of 404 (User Not Found), 403 (Rate Limit), and offline network errors with an interactive *Retry Request* button
   - **Interactive Switcher:** Built-in username input bar and quick-test buttons (`@Dhanraj146`, `@octocat`, test 404) for evaluators to test API behavior dynamically

7. **Contact Section**
   - One-click email copy widget with feedback indicator
   - Validated contact form (name, email, subject, message constraints)
   - Direct `mailto:` client invocation ensuring honest delivery without misleading fake success states

8. **Semantic Footer**
   - Dynamic current year calculation
   - Quick navigation links and back-to-top scroll trigger

---

## 4. Project Directory Structure

```
portfolio-website/
├── public/
│   └── favicon.svg              # Custom developer SVG favicon
├── src/
│   ├── assets/                  # Static vector graphics
│   ├── components/
│   │   ├── Icons.jsx            # Lightweight SVG brand icons (GitHub, LinkedIn)
│   │   ├── Navbar.jsx           # Responsive header & mobile drawer
│   │   ├── Navbar.css
│   │   ├── Footer.jsx           # Dynamic footer component
│   │   └── Footer.css
│   ├── config/
│   │   └── portfolioConfig.js   # Centralized configuration (all personal placeholders)
│   ├── hooks/
│   │   ├── useGithub.js         # Custom hook for GitHub REST API lifecycle
│   │   └── useScrollSpy.js      # Scroll position observer for active nav links
│   ├── sections/
│   │   ├── HeroSection.jsx      # Hero banner & terminal card
│   │   ├── HeroSection.css
│   │   ├── AboutSection.jsx     # Bio, interests, and education timeline
│   │   ├── AboutSection.css
│   │   ├── SkillsSection.jsx    # Categorized skill cards
│   │   ├── SkillsSection.css
│   │   ├── ProjectsSection.jsx  # Portfolio projects grid
│   │   ├── ProjectsSection.css
│   │   ├── GithubSection.jsx    # Live GitHub API telemetry & switcher
│   │   ├── GithubSection.css
│   │   ├── ContactSection.jsx   # Contact channels & validated form
│   │   └── ContactSection.css
│   ├── services/
│   │   └── githubService.js     # GitHub API fetch, rate-limit, and cache service
│   ├── styles/
│   │   ├── variables.css        # CSS custom properties / design tokens
│   │   └── global.css           # CSS reset, utilities, and accessible focus styles
│   ├── App.jsx                  # Main root application layout
│   └── main.jsx                 # React DOM mount point
├── .env.example                 # Environment variables specification
├── .gitignore                   # Comprehensive git exclusions
├── GIT_HISTORY.txt              # Local Git commit trail
├── index.html                   # HTML5 shell with semantic SEO tags & typography
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite build configuration
└── README.md                    # Project documentation
```

---

## 5. Getting Started & Local Installation

### Prerequisites
- **Node.js:** v18.0.0 or higher (v24+ recommended)
- **npm:** v9.0.0 or higher

### Local Setup Instructions

1. **Extract the Project Archive:**
   ```bash
   cd Scenario_02_Project_Repository
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional):**
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   Set your GitHub username in `.env`:
   ```env
   VITE_GITHUB_USERNAME=your-github-username
   ```

4. **Launch Local Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000` (or the port specified in terminal).

5. **Create Production Build:**
   ```bash
   npm run build
   ```
   The compiled assets will be generated in the `dist/` directory.

6. **Preview Production Build Locally:**
   ```bash
   npm run preview
   ```

---

## 6. Centralized Personal Configuration

To personalize the entire website without modifying component code, edit `src/config/portfolioConfig.js`:

```javascript
export const portfolioConfig = {
  personal: {
    name: "Your Name",
    title: "Frontend Developer & Software Engineer",
    email: "your.email@example.com",
    githubUsername: "your-github-username",
    location: "City, Country",
    // ...
  },
  education: [ /* edit your school / degree */ ],
  skills: { /* edit your skills */ },
  projects: [ /* edit your projects */ ]
};
```

---

## 7. Responsive Design & Accessibility

The website is engineered across responsive viewport breakpoints:
- **Mobile Phones (375px):** Stacked single-column layout, touch-friendly navigation drawer, collapsible controls, minimum 44px tap targets, zero horizontal overflow.
- **Tablets (768px):** 2-column project and skills grid, responsive profile card, adjusted padding.
- **Laptops (1024px):** 3-column repository and skills layout, expanded navigation bar, balanced grid distribution.
- **Desktop Monitors (1440px):** Max container width constraint (1200px), rich multi-column layouts, ample whitespace.

**Accessibility Standards:**
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Visible high-contrast focus rings (`:focus-visible`) for all interactive elements
- Keyboard `Skip to main content` shortcut
- Accessible ARIA attributes (`aria-label`, `aria-expanded`, `aria-invalid`, `aria-describedby`, `role="alert"`)
- Safe color contrast compliant with WCAG 2.1 AA standards.

---

## 8. License & Attribution

This project was developed as an academic capstone portfolio project. Created with React.js, Vite, and the GitHub REST API.

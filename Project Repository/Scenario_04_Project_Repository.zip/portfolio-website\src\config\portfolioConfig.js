/**
 * Centralized Portfolio Configuration
 * 
 * All personal details, project details, skills, and API configurations
 * are consolidated here for easy customization without modifying component code.
 */

export const portfolioConfig = {
  // Personal & Professional Information (Editable Placeholders)
  personal: {
    name: "Dhanraj",
    title: "Frontend Developer & Software Engineer",
    tagline: "Building responsive, accessible, and data-driven web applications with modern frontend technologies.",
    bio: [
      "I am an enthusiastic Junior Software Engineer with a passion for building clean, user-centric web applications. My foundation is built on modern JavaScript, React, and responsive UI design, with a strong commitment to clean code and continuous learning.",
      "I enjoy bridging the gap between elegant design and robust frontend architecture, transforming requirements into smooth, accessible user experiences."
    ],
    avatarUrl: "", // Optional custom avatar; if empty, will use GitHub avatar or generated SVG avatar
    location: "Hyderabad, India (Open to Remote / Hybrid)",
    email: "bogadhanraj51@gmail.com",
    githubUsername: import.meta.env.VITE_GITHUB_USERNAME || "Dhanraj146",
    githubUrl: "https://github.com/Dhanraj146",
    linkedinUrl: "https://www.linkedin.com/in/dhanraj-boga-placeholder", // Editable placeholder
    resumeUrl: "#contact", // Editable placeholder or link to download CV
    statusBadge: "Available for New Opportunities",
  },

  // Education Section (Authentic & clearly identifiable placeholders)
  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "JNTUH Affiliated Engineering College",
      period: "2021 – 2025 (Expected)",
      details: "Focus on Data Structures, Algorithms, Web Technologies, Database Management Systems, and Software Engineering Principles.",
      status: "Final Year Undergraduate"
    },
    {
      degree: "Higher Secondary Education (Class XII - MPC)",
      institution: "State Board of Intermediate Education",
      period: "2019 – 2021",
      details: "Mathematics, Physics, and Chemistry foundation with distinction.",
      status: "Completed"
    }
  ],

  // Development Interests & Career Goals
  interests: [
    {
      title: "Interactive Web Interfaces",
      description: "Crafting fluid, accessible micro-interactions, responsive CSS layouts, and component-driven UI."
    },
    {
      title: "API & Data Integration",
      description: "Connecting frontend interfaces to RESTful APIs, optimizing state management, and handling asynchronous workflows."
    },
    {
      title: "Modern Frontend Tooling",
      description: "Leveraging Vite, React hooks, modular CSS architectures, and automated testing for rapid development."
    },
    {
      title: "Performance & Accessibility",
      description: "Ensuring web applications achieve high Core Web Vitals, semantic compliance, and keyboard navigation."
    }
  ],

  goals: [
    "Contribute to high-impact production web applications as a core frontend team member.",
    "Master advanced TypeScript, state machines, and micro-frontend design patterns.",
    "Continuously build open-source contributions and share technical insights through engineering writeups."
  ],

  // Categorized Skills (Cards & Tags - no fake proficiency percentages)
  skills: {
    frontend: {
      category: "Frontend Development",
      description: "Crafting modular, interactive, and responsive user interfaces",
      items: [
        { name: "React.js", badge: "Core" },
        { name: "JavaScript (ES6+)", badge: "Core" },
        { name: "HTML5 Semantic", badge: "Standard" },
        { name: "CSS3 / Flexbox / Grid", badge: "Advanced" },
        { name: "Responsive Web Design", badge: "Standard" },
        { name: "Vite", badge: "Tooling" },
        { name: "React Hooks & Context", badge: "State" }
      ]
    },
    programmingLanguages: {
      category: "Programming Languages",
      description: "Foundational and modern programming languages",
      items: [
        { name: "JavaScript", badge: "Primary" },
        { name: "Python", badge: "Proficient" },
        { name: "Java", badge: "Foundational" },
        { name: "C / C++", badge: "Academic" }
      ]
    },
    backendFundamentals: {
      category: "Backend Fundamentals",
      description: "Server-side concepts and API interaction",
      items: [
        { name: "RESTful API Integration", badge: "Core" },
        { name: "Node.js Basics", badge: "Runtime" },
        { name: "Express.js Fundamentals", badge: "Framework" },
        { name: "Async / Await / Fetch", badge: "Protocol" },
        { name: "HTTP / Status Codes", badge: "Standard" }
      ]
    },
    databases: {
      category: "Databases & Storage",
      description: "Relational and document storage fundamentals",
      items: [
        { name: "SQL (MySQL / PostgreSQL)", badge: "Relational" },
        { name: "MongoDB Basics", badge: "NoSQL" },
        { name: "Browser Storage (localStorage/sessionStorage)", badge: "Client" }
      ]
    },
    developerTools: {
      category: "Developer Tools & Workflow",
      description: "Modern development environment and collaboration tools",
      items: [
        { name: "Git & GitHub", badge: "Version Control" },
        { name: "VS Code", badge: "IDE" },
        { name: "Chrome DevTools", badge: "Debugging" },
        { name: "Postman", badge: "API Testing" },
        { name: "npm / package management", badge: "Build" },
        { name: "Vercel", badge: "Deployment" }
      ]
    }
  },

  // Featured Projects (Real-world architectural examples with working/demo placeholders)
  projects: [
    {
      id: "portfolio-app",
      title: "Interactive Developer Portfolio with GitHub REST API",
      description: "A production-grade, responsive single-page portfolio built with React and Vite. Features real-time GitHub API integration, loading skeletons, rate-limit fallback, and semantic accessibility.",
      technologies: ["React.js", "Vite", "JavaScript ES6+", "GitHub REST API", "CSS3 Variables"],
      githubUrl: "https://github.com/Dhanraj146/portfolio-website", // Configurable project link
      liveUrl: "#", // Updated post-deployment
      featured: true,
      tag: "Academic Capstone"
    },
    {
      id: "weather-dashboard",
      title: "Dynamic Weather & Forecast Analytics Hub",
      description: "Interactive weather dashboard consuming public OpenWeather APIs to render 5-day forecasts, geolocation data, interactive temperature trends, and responsive charts.",
      technologies: ["JavaScript ES6+", "Fetch API", "HTML5", "CSS3 Grid", "Chart.js"],
      githubUrl: "https://github.com/Dhanraj146/weather-dashboard-demo", // Editable placeholder
      liveUrl: "https://weather-demo-preview.example.com", // Realistic placeholder
      featured: false,
      tag: "API Integration"
    },
    {
      id: "task-tracker",
      title: "Agile Task & Sprint Management Board",
      description: "Kanban-inspired productivity application featuring drag-and-drop task manipulation, priority tagging, filterable categories, and client-side persistence via localStorage.",
      technologies: ["React.js", "React Hooks", "CSS Modules", "localStorage API"],
      githubUrl: "https://github.com/Dhanraj146/react-task-tracker", // Editable placeholder
      liveUrl: "https://task-tracker-preview.example.com", // Realistic placeholder
      featured: false,
      tag: "Productivity App"
    },
    {
      id: "ecommerce-catalog",
      title: "Modern E-Commerce Storefront & Cart System",
      description: "Responsive e-commerce UI featuring dynamic product filtering, price sorting, interactive shopping cart with item quantity adjustments, and mock checkout workflows.",
      technologies: ["React.js", "Context API", "CSS Flexbox", "REST API Integration"],
      githubUrl: "https://github.com/Dhanraj146/ecommerce-catalog", // Editable placeholder
      liveUrl: "https://ecommerce-preview.example.com", // Realistic placeholder
      featured: false,
      tag: "Frontend Architecture"
    }
  ],

  // GitHub REST API Integration Settings
  github: {
    defaultUsername: import.meta.env.VITE_GITHUB_USERNAME || "Dhanraj146",
    fallbackUsernames: ["Dhanraj146", "octocat", "torvalds"], // Useful for testing or demonstrations
    reposPerPage: 6,
    sort: "updated",
    cacheTimeMs: 10 * 60 * 1000, // 10 minutes cache in sessionStorage to prevent rate limits
  },

  // Contact Information & Direct Mailto
  contact: {
    email: "bogadhanraj51@gmail.com",
    subject: "Portfolio Inquiry / Job Opportunity",
    defaultMessage: "Hello Dhanraj, I reviewed your interactive portfolio and would like to connect regarding an opportunity.",
    notice: "This contact form provides client-side validation and generates a direct mailto connection. For full email delivery without a local mail client, you can also email directly at the address above."
  }
};

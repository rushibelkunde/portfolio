export const experiences = [
  {
    title: "Software Developer L1",
    company: "Algorisys Technologies Pvt. Ltd., Mumbai",
    period: "Jul 2024 – Present",
    tech: "Node.js, Express, React, Remix, Go (Fiber), MongoDB, PostgreSQL, Redis, RabbitMQ, WebRTC, Docker, LangChain",
    projects: [
      {
        name: "Enterprise Assessment Platform",
        highlights: [
          "Migrated legacy Angular monolith to modular Remix-React architecture, reducing feature development time by ~40%.",
          "Designed multi-tenant SaaS architecture with org-level data isolation, RBAC, and tiered subscription management via Razorpay.",
          "Built real-time video proctoring using MediaSoup (WebRTC) with multi-worker load balancing and uWebSockets.js signaling.",
          "Integrated AI/LLM features (LangChain with OpenAI, Anthropic, Google GenAI) for automated resume screening and report synthesis.",
          "Engineered sandboxed code execution via Piston (Docker) supporting 7+ languages for live coding assessments.",
          "Implemented event-driven architecture using Redis Pub/Sub and BullMQ for async evaluation, email dispatch, and notifications.",
          "Containerized full infrastructure with Docker Compose for reproducible dev and production parity.",
        ],
      },
      {
        name: "HR Management System (HRMS)",
        highlights: [
          "Built a production PWA-enabled HR portal serving the entire organization with robust RBAC using Prisma ORM and PostgreSQL.",
          "Architected a dynamic payroll engine as a separate Go (Fiber) microservice with configurable rules engine (expr-lang/expr).",
          "Designed configurable salary structures with sequenced component evaluation, CTC breakdown, proration logic, and statutory compliance.",
          "Implemented concurrent bulk payslip generation using Go errgroups and semaphore-based concurrency with Redis Pub/Sub notifications.",
          "Integrated OpenTelemetry distributed tracing and Sentry error monitoring for production observability.",
          "Achieved 100% employee adoption; reduced HR team monthly effort by ~4 days by eliminating manual processes.",
        ],
      },
    ],
  },
  {
    title: "Full Stack Developer Trainee",
    company: "Algorisys Technologies Pvt. Ltd., Mumbai",
    period: "Jan 2024 – Jun 2024",
    tech: "Node.js, Express, React, Remix, MongoDB, PostgreSQL, TailwindCSS",
    projects: [],
    highlights: [
      "Trained in full-stack web development with hands-on exposure to React, Remix, Node.js, and PostgreSQL.",
      "Contributed to early development sprints on the assessment platform and HRMS, handling UI components and API integrations.",
      "Transitioned to independent feature ownership within 6 months.",
    ],
  },
];

export const education = [
  {
    degree: "Full Stack Web Development",
    institution: "Coding Ninjas",
    period: "2022 – 2023",
    detail:
      "Intensive 1-year program covering Data Structures & Algorithms, MERN Stack, frontend development, and backend engineering.",
  },
  {
    degree: "B.Tech in Electronics Engineering",
    institution: "M. S. Bidve Engineering College, Latur",
    period: "2019 – 2022",
    detail: "CGPA: 8.7 / 10",
  },
];

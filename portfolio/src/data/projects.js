export const projects = [
  {
    slug: "d2d",
    title: "D2D",
    subtitle: "Data to Decisions",
    classification: "flagship",
    featured: true,
    role: "Full-Stack Software Engineer",
    shortDescription:
      "A data-workflow application spanning organization controls, data-source management, dashboards, and AI-assisted interaction.",
    technologies: ["React", "Socket.IO", "Azure Blob", "Docker"],
    capabilities: ["RBAC", "Data integrations", "Dashboards", "AI integration"],
    architecture: {
      nodes: [
        ["ui", "Application UI", "frontend"],
        ["api", "Application API", "backend"],
        ["data", "Data sources", "external"],
        ["blob", "Azure Blob", "storage"],
        ["dremio", "Dremio", "external"],
      ],
      edges: [
        ["ui", "api", "requests & events"],
        ["api", "data", "connects"],
        ["api", "blob", "stores files"],
        ["api", "dremio", "query integration"],
      ],
    },
  },
  {
    slug: "lawgpt",
    title: "LawGPT",
    classification: "flagship",
    featured: true,
    role: "Full-Stack Software Engineer",
    shortDescription:
      "A legal-product workflow covering research, document work, case management, and AI-assisted experiences.",
    technologies: ["JWT", "Google OAuth", "Microsoft authentication", "Azure"],
    capabilities: [
      "Authentication",
      "Document workflows",
      "Service integration",
      "Streaming",
    ],
    boundaries: {
      built: [
        "Application workflows for legal research, documents, cases, clients, tasks, invitations, bookmarks, subscriptions, and payments.",
      ],
      integrated: [
        "Authentication providers, Azure storage, and application communication with specialized services.",
      ],
      external: [
        "Separate AI/RAG services and a separate legal-search service.",
      ],
    },
  },
  {
    slug: "vloghub",
    title: "VlogHub",
    classification: "flagship",
    featured: true,
    role: "Full-Stack Software Engineer",
    shortDescription:
      "An AI-assisted video-production workflow with research, scripting, media, browser editing, rendering, and publishing integrations.",
    technologies: ["Remotion", "AWS Lambda", "FFmpeg", "S3", "Supabase Auth"],
    capabilities: [
      "Media workflows",
      "Browser editor",
      "Cloud rendering",
      "AI integration",
    ],
    boundaries: {
      built: [
        "Product workflow for media, browser-based editing, timelines, layers, overlays, audio, effects, uploads, and project management.",
      ],
      integrated: [
        "Google Drive, Envato, social OAuth, YouTube, Facebook, rendering and storage services.",
      ],
      external: [
        "AI-assisted topic discovery, script generation, transcription, and image generation capabilities.",
      ],
    },
  },
  {
    slug: "wedding-planner",
    title: "Wedding Planner",
    classification: "supporting",
    shortDescription:
      "Supporting project. Detailed product, role, and technology documentation is required before publication.",
    technologies: [],
    capabilities: [],
  },
  {
    slug: "project-management-system",
    title: "Project Management System",
    classification: "history",
    shortDescription:
      "MERN project-management application with role-based access, task assignment, and a drag-and-drop task board.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    capabilities: ["Role-based access", "Task workflows", "Interactive UI"],
  },
  {
    slug: "blog-app",
    title: "Blog App",
    classification: "history",
    shortDescription:
      "Full-stack MERN blog platform with authentication, posts, comments, likes, and category-based filtering.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    capabilities: ["Authentication", "CRUD", "Content workflows"],
  },
  {
    slug: "pronouncer-pro",
    title: "PronouncerPro",
    classification: "history",
    shortDescription:
      "A React and .NET Core web app focused on improving English pronunciation.",
    technologies: ["React", ".NET Core"],
    capabilities: ["Frontend", "Backend"],
    boundaries: {
      built: ["Web application experience for English-pronunciation practice."],
    },
  },
];
export const featuredProjects = projects.filter((project) => project.featured);
export const getProject = (slug) =>
  projects.find((project) => project.slug === slug);

import PronouncerPro from "../assets/pronouncer.png";
import BlogPost from "../assets/blog.png";
import ProjectManagement from "../assets/pm.png";

export const projects = [
  {
    id: "d2d",
    name: "D2D — Data to Decisions",
    category: "Full-Stack",
    techStack:
      "Next.js, TypeScript, Node.js, Express, MongoDB, Socket.IO, Dremio, Vega-Lite",
    image: BlogPost,
    shortDesc:
      "Multi-tenant, AI-assisted data analytics platform unifying distributed business sources, natural-language exploration, and SQL querying.",
    github: "https://github.com/Umber-Mushtaq",
    overview:
      "D2D is a multi-tenant, AI-assisted data analytics platform that helps organizations turn distributed business data into usable insights. It provides a single web workspace where users can connect data sources, organize datasets, ask questions in natural language, run SQL, inspect lineage, build visual dashboards, and collaborate securely.",
    problem:
      "Organizations often have data split across databases, files, cloud storage, and productivity platforms. Extracting insight typically requires technical SQL skills, context switching between tools, and unclear visibility into how data is related.",
    features: [
      "Multi-tenant organization management with super-admin, admin, and user controls.",
      "Workspace-centric organization of data sources, tables, files, and knowledge-graph status.",
      "AI-assisted natural-language exploration alongside direct CodeMirror SQL editing.",
      "Interactive data lineage graphs rendered using React Flow.",
      "User-configurable dynamic dashboards and Vega/Vega-Lite chart schemas.",
      "Real-time notifications via authenticated Socket.IO rooms.",
    ],
  },
  {
    id: "lawgpt",
    name: "LawGPT — AI Legal Research Platform",
    category: "Full-Stack",
    techStack:
      "React, Node.js, Express, Azure Cosmos DB, Azure Blob Storage, RAG",
    image: BlogPost,
    shortDesc:
      "Full-stack legal-tech web application for researching Pakistani legal material, automated document drafting, RAG-based document chat, and contract analysis.",
    github: "https://github.com/Umber-Mushtaq",
    overview:
      "LawGPT is a full-stack legal-tech web application designed to help legal professionals research Pakistani legal material, generate legal documents, analyze contracts and uploaded documents, and manage day-to-day casework from one workspace.",
    problem:
      "Legal work is research-heavy, document-intensive, and often administratively fragmented. LawGPT centralizes these workflows into a single interface.",
    features: [
      "AI-powered legal conversation and research modes including hybrid, statute, and case-law workflows.",
      "Automated drafting for applications, petitions, and contracts with revision management.",
      "RAG-based document chat enabling users to query uploaded documents.",
      "Contract analysis for summaries, legality, bias, and template-related reviews.",
      "Comprehensive case-management system covering clients, lawyers, documents, tasks, calendars, and PSID/card payment workflows.",
    ],
  },
  {
    id: "vloghub",
    name: "VlogHub — AI Video Creator Platform",
    category: "Full-Stack",
    techStack:
      "Next.js, TypeScript, Supabase, Gemini AI, Remotion, AWS Lambda, FFmpeg",
    image: BlogPost,
    shortDesc:
      "Full-stack, AI-assisted video-production platform streamlining topic discovery, multilingual script generation, scene planning, timeline editing, and social publishing.",
    github: "https://github.com/Umber-Mushtaq",
    overview:
      "VlogHub is a full-stack, AI-assisted video-production platform for creators, researchers, and social-media teams that streamlines the workflow from finding a topic to generating a script, planning scenes, sourcing media, editing a timeline, rendering, and publishing.",
    problem:
      "Creating research-driven or social-media video content usually involves many disconnected tools: topic research, scripting, stock-media search, video editing, rendering, and publishing.",
    features: [
      "Gemini-powered trending-topic discovery with word-cloud visualizations.",
      "Multilingual, duration-aware AI script production with RTL support for Urdu, Arabic, and Hindi.",
      "Browser-based multi-layer video editor with timeline controls and real-time Remotion preview.",
      "Cloud-based rendering offloaded to AWS Lambda/Remotion and FFmpeg clip cutting.",
      "Direct OAuth publishing integrations for YouTube and Facebook.",
    ],
  },
  {
    id: "pronouncer",
    name: "PronouncerPro Web App",
    category: ".NET",
    techStack: "React.js, ASP.NET Core, SQL Server, Entity Framework Core",
    image: PronouncerPro,
    shortDesc:
      "Full-stack application helping non-native English speakers improve pronunciation through paragraph lessons, speech recognition, and word-level feedback.",
    github: "https://github.com/Umber-Mushtaq/Final_Year_Project",
    overview:
      "PronouncerPro is a full-stack web application designed to help non-native English speakers improve their pronunciation, vocabulary, and speaking confidence through interactive, paragraph-based lessons.",
    problem:
      "English learners often lack immediate, affordable feedback on spoken pronunciation.",
    features: [
      "Interactive paragraph lessons grouped by difficulty level with text-to-speech playback.",
      "Browser speech-recognition microphone input with automated word-level transcript diffing.",
      "Targeted re-practice module for individual difficult words.",
      "Vocabulary retention backed by the Free Dictionary API for phonetics and example sentences.",
    ],
  },
  {
    id: "blogpost",
    name: "BlogPost MERN Application",
    category: "MERN",
    techStack: "React.js, Node.js, Express, MongoDB, JWT",
    image: BlogPost,
    shortDesc:
      "Full-stack MERN blog platform featuring authentication, CRUD posts, comments, likes, and category filtering.",
    github: "https://github.com/Umber-Mushtaq/BlogPosts.git",
    overview:
      "Blog App is a full-stack, authenticated content-publishing platform where registered users can create a profile, publish blog posts, browse content, like posts, comment on articles, and view other authors’ public profiles.",
    problem:
      "Solves the core problem of giving multiple users a single space to publish and discover categorized written content while supporting community engagement.",
    features: [
      "JWT authentication with HTTP-only cookies and bcrypt password hashing.",
      "Post management with rich categories like Technology, Education, and Lifestyle.",
      "Community engagement through comments and post likes.",
      "Author profile management showcasing professional links.",
    ],
  },
  {
    id: "pm",
    name: "Project Management MERN App",
    category: "MERN",
    techStack: "React.js, Node.js, Express, MongoDB, Socket.IO",
    image: ProjectManagement,
    shortDesc:
      "MERN-based project management tool featuring role-based access, team administration, task assignments, and drag-and-drop Kanban boards.",
    github: "https://github.com/Umber-Mushtaq/ProjectManagement.git",
    overview:
      "A full-stack, role-based project management web application for organizing teams, projects, tasks, and collaboration in one place.",
    problem:
      "Teams often track projects, assignments, deadlines, and communication across disconnected spreadsheets and chat tools.",
    features: [
      "Drag-and-drop Kanban task board supporting To Do, In Progress, and Done workflow transitions.",
      "Automated project progress metrics synchronized with task completion states.",
      "Real-time global chat room powered by Socket.IO.",
      "Admin dashboard with team oversight and user management.",
    ],
  },
];

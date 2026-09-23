import { useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaTerminal,
  FaCheckCircle,
  FaChevronDown,
} from "react-icons/fa";

const experiences = [
  {
    id: "digifloat",
    type: "Work Experience",
    role: "Full-Stack Developer (Internship)",
    company: "Digifloat",
    period: "June 2026 - August 2026",
    status: "Completed 🚀",
    description:
      "Worked on enterprise-grade web applications including LawGPT, D2D, and VlogHub, handling full-stack feature development, cloud integrations, and secure API workflows.",
    tech: ["React.js", "Next.js", "Node.js", "Express", "MongoDB", "Azure"],
  },
  {
    id: "qalam",
    type: "Technical Training",
    role: "MERN Stack Developer (Training)",
    company: "Qalam Training Program",
    period: "Jan 2026 - June 2026",
    status: "Certified 🏆",
    description:
      "Completed rigorous hands-on MERN stack training. Built a comprehensive role-based Wedding Planner marketplace application featuring booking workflows and cloud storage.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    id: "university",
    type: "University Project",
    role: "Lead Full-Stack Developer",
    company: "University Final Year Project / Capstone",
    period: "2024",
    status: "Major Milestone 🎓",
    description:
      "Architected and developed a full-stack enterprise web application with secure authentication, role-based access control, real-time tracking, and automated reporting systems.",
    tech: ["React.js", "Node.js", "ASP.NET Core", "SQL Server / MongoDB"],
  },
  {
    id: "codealpha",
    type: "Work Experience",
    role: "Web Development Intern",
    company: "Code Alpha",
    period: "Nov 2025 - Dec 2025",
    status: "Completed ✅",
    description:
      "Developed full-stack web applications including an authenticated Blog App with category filtering and a Project Management System featuring Kanban task boards.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
  },
];

const Experience = () => {
  // State for Desktop Tab View
  const [activeTab, setActiveTab] = useState(experiences[0].id);
  const currentExp = experiences.find((item) => item.id === activeTab);

  // State for Mobile Accordion View (defaults to the first item open)
  const [expandedMobileId, setExpandedMobileId] = useState(experiences[0].id);

  const toggleMobileAccordion = (id) => {
    setExpandedMobileId(expandedMobileId === id ? null : id);
  };

  return (
    <section
      id='experience'
      className='w-full bg-background py-20 px-4 sm:px-8 md:px-16 relative overflow-hidden'
    >
      {/* Background ambient lighting blur */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-button/10 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-6xl mx-auto relative z-10'>
        {/* Section Header */}
        <div className='text-center space-y-3 mb-12 sm:mb-16'>
          <div className='inline-flex items-center space-x-2 bg-button/10 border border-button/30 px-3.5 py-1.5 rounded-full text-button text-xs font-mono tracking-wider uppercase'>
            <FaTerminal />
            <span>Career Path & Achievements</span>
          </div>
          <h2 className='text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight'>
            Experience & <span className='text-button'>Milestones</span>
          </h2>
          <p className='text-text text-xs sm:text-sm md:text-base max-w-xl mx-auto font-light'>
            An interactive look through my professional internships, technical
            training, and engineering capstones.
          </p>
        </div>

        {/* ====================================================
            MOBILE / TABLET VIEW: Accordion List (< lg screens)
           ==================================================== */}
        <div className='block lg:hidden space-y-4'>
          {experiences.map((item) => {
            const isExpanded = expandedMobileId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isExpanded
                    ? "bg-[#212b3d] border-button shadow-lg shadow-button/20"
                    : "bg-[#1a2230] border-white/15 hover:border-white/30"
                }`}
              >
                {/* Accordion Header / Click Trigger */}
                <button
                  onClick={() => toggleMobileAccordion(item.id)}
                  className='w-full text-left p-4 sm:p-5 flex items-center justify-between cursor-pointer'
                >
                  <div className='space-y-1 pr-3'>
                    <div className='flex flex-wrap items-center gap-2'>
                      <span className='text-[10px] sm:text-xs font-mono px-2.5 py-0.5 rounded-md bg-button text-black font-bold'>
                        {item.type}
                      </span>
                      <span className='text-[10px] sm:text-xs text-text/90 font-mono'>
                        {item.period}
                      </span>
                    </div>
                    <h3 className='text-sm sm:text-base font-bold text-white'>
                      {item.role}
                    </h3>
                    <p className='text-xs text-button font-medium'>
                      @ {item.company}
                    </p>
                  </div>

                  <div className='flex items-center gap-2 flex-shrink-0'>
                    <span
                      className={`w-3 h-3 rounded-full ${isExpanded ? "bg-button shadow-md shadow-button" : "bg-white/30"}`}
                    />
                    <FaChevronDown
                      className={`text-text text-xs transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-button" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Accordion Expandable Content */}
                {isExpanded && (
                  <div className='px-4 sm:px-5 pb-5 pt-2 border-t border-white/10 space-y-4 bg-[#18202c]'>
                    <div className='flex items-center justify-between pt-2'>
                      <span className='inline-flex items-center gap-1 text-[11px] font-mono text-green-400 bg-green-500/15 px-2.5 py-1 rounded-full border border-green-500/30'>
                        <FaCheckCircle /> {item.status}
                      </span>
                    </div>

                    <div className='space-y-1'>
                      <h4 className='text-[11px] font-mono text-text/90 uppercase tracking-widest'>
                        Overview
                      </h4>
                      <p className='text-white text-xs sm:text-sm leading-relaxed font-light'>
                        {item.description}
                      </p>
                    </div>

                    <div className='space-y-2 pt-2 border-t border-white/10'>
                      <h4 className='text-[11px] font-mono text-text/90 uppercase tracking-widest'>
                        Technologies
                      </h4>
                      <div className='flex flex-wrap gap-1.5'>
                        {item.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className='text-[11px] font-mono bg-[#212b3d] text-white px-2.5 py-1 rounded-md border border-white/20'
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ====================================================
            DESKTOP VIEW: Side-by-Side Tab Layout (lg+ screens)
           ==================================================== */}
        <div className='hidden lg:grid lg:grid-cols-12 gap-8 items-start'>
          {/* Left Column: Selectors / Tabs */}
          <div className='lg:col-span-5 flex flex-col space-y-3.5'>
            {experiences.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-[#212b3d] border-button shadow-xl shadow-button/10 scale-[1.02]"
                      : "bg-[#1a2230] border-white/15 hover:border-white/30 hover:bg-[#202938]"
                  }`}
                >
                  <div className='space-y-1.5'>
                    <div className='flex items-center space-x-2'>
                      <span
                        className={`text-xs font-mono px-2.5 py-0.5 rounded-md ${
                          isActive
                            ? "bg-button text-black font-bold"
                            : "bg-white/15 text-white"
                        }`}
                      >
                        {item.type}
                      </span>
                      <span className='text-xs text-text/90 font-mono'>
                        {item.period}
                      </span>
                    </div>
                    <h3
                      className={`text-base font-bold transition-colors ${isActive ? "text-white" : "text-text group-hover:text-white"}`}
                    >
                      {item.role}
                    </h3>
                    <p className='text-xs text-button font-medium'>
                      @ {item.company}
                    </p>
                  </div>

                  <div
                    className={`w-3.5 h-3.5 rounded-full transition-all ${isActive ? "bg-button shadow-md shadow-button" : "bg-white/30 group-hover:bg-white/50"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Card with Rotating Animated Glowing Border */}
          <div className='lg:col-span-7'>
            <div className='relative p-[2px] rounded-3xl overflow-hidden shadow-2xl group'>
              {/* Animated Rotating Gradient Border Layer */}
              <div
                className='absolute inset-0 bg-gradient-to-r from-button via-transparent to-button animate-spin-slow opacity-70 filter blur-[1px]'
                style={{ animationDuration: "8s" }}
              />

              {/* Inner Card Content Wrapper */}
              <div className='relative bg-[#1a2230] rounded-[22px] p-8 md:p-10 z-10 h-full border border-white/10'>
                <div className='space-y-6'>
                  {/* Header Meta */}
                  <div className='flex items-center justify-between gap-4 border-b border-white/10 pb-6'>
                    <div>
                      <span className='text-xs font-mono text-button bg-button/10 border border-button/30 px-3 py-1 rounded-full inline-block mb-3'>
                        {currentExp.type}
                      </span>
                      <h3 className='text-2xl font-extrabold text-white'>
                        {currentExp.role}
                      </h3>
                      <p className='text-text text-base font-medium mt-1 flex items-center gap-2'>
                        <span className='text-button'>@</span>{" "}
                        {currentExp.company}
                      </p>
                    </div>

                    <div className='text-right'>
                      <div className='text-xs font-mono text-text/90 flex items-center gap-1.5 justify-end'>
                        <FaCalendarAlt className='text-button' />
                        <span>{currentExp.period}</span>
                      </div>
                      <span className='inline-flex items-center gap-1 text-xs font-mono text-green-400 mt-2 bg-green-500/15 px-3 py-1 rounded-full border border-green-500/30'>
                        <FaCheckCircle /> {currentExp.status}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className='space-y-2'>
                    <h4 className='text-xs font-mono text-text/90 uppercase tracking-widest'>
                      Key Contributions & Overview
                    </h4>
                    <p className='text-white text-base leading-relaxed font-light'>
                      {currentExp.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className='space-y-3 pt-4 border-t border-white/10'>
                    <h4 className='text-xs font-mono text-text/90 uppercase tracking-widest'>
                      Technologies & Tools Used
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {currentExp.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className='text-xs font-mono bg-[#212b3d] text-white px-3.5 py-1.5 rounded-lg border border-white/20 shadow-sm hover:border-button transition-colors'
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

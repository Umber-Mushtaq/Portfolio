import React, { useState } from "react";
import { projects } from "./projects";
import {
  FaGithub,
  FaCode,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaLayerGroup,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [slideDirection, setSlideDirection] = useState(
    "translate-x-0 opacity-100 scale-100",
  );

  const currentProject = projects[currentIndex];

  const handleNext = () => {
    setSlideDirection("-translate-x-10 opacity-0 scale-95");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setSlideDirection("translate-x-10 opacity-0 scale-95");
      setTimeout(() => {
        setSlideDirection("translate-x-0 opacity-100 scale-100");
      }, 50);
    }, 250);
  };

  const handlePrev = () => {
    setSlideDirection("translate-x-10 opacity-0 scale-95");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setSlideDirection("-translate-x-10 opacity-0 scale-95");
      setTimeout(() => {
        setSlideDirection("translate-x-0 opacity-100 scale-100");
      }, 50);
    }, 250);
  };

  return (
    <section
      id='projects'
      className='bg-[#0f172a] py-20 px-4 sm:px-8 md:px-16 relative overflow-hidden'
    >
      {/* Background ambient lighting */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-button/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none' />

      <div className='max-w-4xl mx-auto relative z-10'>
        {/* Section Header */}
        <div className='text-center space-y-3 mb-12 sm:mb-16'>
          <div className='inline-flex items-center space-x-2 bg-button/20 border border-button/50 px-3.5 py-1.5 rounded-full text-button text-xs font-mono tracking-wider uppercase font-semibold'>
            <FaCode />
            <span>Interactive Project Deck</span>
          </div>
          <h2 className='text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight'>
            Featured <span className='text-button'>Projects</span>
          </h2>
          <p className='text-slate-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-light'>
            Slide through the stacked card deck below. Inspect quick specs or
            slide open the full architecture breakdown.
          </p>
        </div>

        {/* Responsive Scattered Deck Container */}
        <div className='relative pt-6 pb-8 px-2 sm:px-8 md:px-12 flex items-center justify-center my-6'>
          {/* Background Card 3 (Bottom Stack Layer) */}
          <div className='absolute inset-x-2 sm:inset-x-8 md:inset-x-12 top-6 bottom-[-16px] bg-[#1e293b] border-2 border-button/25 rounded-2xl sm:rounded-3xl transform -rotate-4 sm:-rotate-6 -translate-x-3 sm:-translate-x-6 -translate-y-3 sm:-translate-y-4 shadow-2xl pointer-events-none' />

          {/* Background Card 2 (Mid Stack Layer) */}
          <div className='absolute inset-x-2 sm:inset-x-8 md:inset-x-12 top-4 bottom-[-8px] bg-[#1e293b] border-2 border-button/45 rounded-2xl sm:rounded-3xl transform -rotate-2 sm:-rotate-3 -translate-x-2 sm:-translate-x-3 -translate-y-2 shadow-2xl pointer-events-none' />

          {/* Background Card 1 (Top Background Stack Layer) */}
          <div className='absolute inset-x-2 sm:inset-x-8 md:inset-x-12 top-2 bottom-[-4px] bg-[#1e293b] border-2 border-button/65 rounded-2xl sm:rounded-3xl transform -rotate-1 sm:-rotate-1 -translate-x-1 sm:-translate-x-1.5 -translate-y-1 shadow-2xl pointer-events-none' />

          {/* Active Front Card with Slide Transition */}
          <div
            className={`w-full bg-[#1e293b] border-2 border-button rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.6)] relative z-25 transition-all duration-400 ease-out transform ${slideDirection}`}
          >
            {/* Top Bar: Counter & Category */}
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700 pb-5 mb-6'>
              <div className='flex items-center space-x-3'>
                <span className='text-[11px] sm:text-xs font-mono text-button bg-button/20 px-3 py-1 rounded-full border border-button/40 font-bold'>
                  Card {currentIndex + 1} of {projects.length}
                </span>
                <span className='text-[11px] sm:text-xs font-mono text-slate-200 uppercase tracking-widest font-semibold'>
                  {currentProject.category}
                </span>
              </div>

              {/* <button
                onClick={() => window.open(currentProject.github, "_blank")}
                className='inline-flex items-center justify-center gap-2 text-xs font-mono text-black bg-button hover:bg-button/90 font-bold rounded-xl py-2 px-4 transition-all duration-300 shadow-md cursor-pointer self-start sm:self-auto'
              >
                <FaGithub className='text-base' />
                <span>Repository</span>
              </button> */}
            </div>

            {/* Card Main Info */}
            <div className='space-y-4 sm:space-y-6'>
              <div>
                <h3 className='text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2 sm:mb-3'>
                  {currentProject.name}
                </h3>
                <div className='text-[11px] sm:text-xs font-mono text-button bg-button/20 inline-block px-3 py-1.5 rounded-lg border border-button/40 font-semibold'>
                  {currentProject.techStack}
                </div>
              </div>

              <div className='space-y-1.5 sm:space-y-2'>
                <h4 className='text-slate-300 font-mono text-[10px] sm:text-xs uppercase tracking-wider font-bold'>
                  Quick Overview
                </h4>
                <p className='text-slate-100 text-xs sm:text-sm md:text-base font-light leading-relaxed line-clamp-3 sm:line-clamp-2'>
                  {currentProject.overview}
                </p>
              </div>

              {/* Trigger Sliding Drawer Button */}
              <div className='pt-2 sm:pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3'>
                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className='inline-flex items-center justify-center gap-2 text-xs font-mono text-black bg-button hover:bg-button/90 font-bold rounded-xl py-3 px-5 transition-all shadow-md group cursor-pointer w-full sm:w-auto'
                >
                  <span>Inspect Architecture & Modules</span>
                  <FaArrowRight className='group-hover:translate-x-1 transition-transform' />
                </button>
                <span className='text-[11px] font-mono text-slate-400 hidden md:block'>
                  Click to slide open details
                </span>
              </div>
            </div>

            {/* Deck Footer Controls */}
            <div className='pt-6 sm:pt-10 mt-6 sm:mt-10 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4'>
              {/* Dot Indicators */}
              <div className='flex items-center space-x-1.5 sm:space-x-2'>
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                      currentIndex === idx
                        ? "w-6 sm:w-8 bg-button"
                        : "w-2 bg-slate-600 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to card ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className='flex items-center space-x-3'>
                <button
                  onClick={handlePrev}
                  className='w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#131b2e] hover:bg-button hover:text-black text-white border border-slate-600 flex items-center justify-center transition-colors shadow-md cursor-pointer'
                  aria-label='Previous project card'
                >
                  <FaChevronLeft className='text-xs' />
                </button>
                <button
                  onClick={handleNext}
                  className='w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#131b2e] hover:bg-button hover:text-black text-white border border-slate-600 flex items-center justify-center transition-colors shadow-md cursor-pointer'
                  aria-label='Next project card'
                >
                  <FaChevronRight className='text-xs' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Sliding Drawer & Backdrop Container */}
      <div
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end transition-opacity duration-300 ${
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop click to close */}
        <div
          onClick={() => setIsDrawerOpen(false)}
          className='absolute inset-0'
        />

        {/* Sliding Drawer Panel with smooth slide-in/out transform */}
        <div
          className={`bg-[#1e293b] border-l border-slate-700 w-full max-w-xl h-full overflow-y-auto shadow-2xl relative z-10 p-6 sm:p-10 space-y-6 transform transition-transform duration-300 ease-out ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className='flex items-start justify-between border-b border-slate-700 pb-5'>
            <div className='space-y-2 pr-3'>
              <span className='text-[11px] font-mono bg-button/20 text-button px-3 py-1 rounded-full border border-button/40 font-bold uppercase'>
                {currentProject.category}
              </span>
              <h2 className='text-xl sm:text-2xl font-extrabold text-white pt-1'>
                {currentProject.name}
              </h2>
              <p className='text-xs font-mono text-button font-medium'>
                {currentProject.techStack}
              </p>
            </div>

            <button
              onClick={() => setIsDrawerOpen(false)}
              className='bg-slate-700 hover:bg-button hover:text-black text-white p-2.5 rounded-full transition-colors flex-shrink-0 cursor-pointer'
            >
              <FaTimes />
            </button>
          </div>

          {/* Overview & Problem Solved */}
          <div className='space-y-4 text-slate-100 text-xs sm:text-sm font-light leading-relaxed'>
            <div className='space-y-1.5'>
              <h4 className='text-white font-mono text-[11px] uppercase tracking-wider font-bold'>
                System Overview
              </h4>
              <p className='text-slate-300'>{currentProject.overview}</p>
            </div>
            <div className='space-y-1.5'>
              <h4 className='text-white font-mono text-[11px] uppercase tracking-wider font-bold'>
                Problem Solved
              </h4>
              <p className='text-slate-300'>{currentProject.problem}</p>
            </div>
          </div>

          {/* Core Modules Architecture Box */}
          <div className='bg-[#0f172a] p-5 rounded-2xl border border-slate-800 space-y-3'>
            <h4 className='text-button font-mono text-[11px] uppercase tracking-wider flex items-center gap-2 font-bold'>
              <FaLayerGroup /> Core Modules & Architecture
            </h4>
            <ul className='space-y-2.5'>
              {currentProject.features.map((feat, idx) => (
                <li
                  key={idx}
                  className='flex items-start gap-2 text-xs text-slate-300 font-light'
                >
                  <FaCheckCircle className='text-button mt-0.5 flex-shrink-0' />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Drawer Footer GitHub Action */}
          {/* <div className='pt-4 border-t border-slate-700'>
            <button
              onClick={() => window.open(currentProject.github, "_blank")}
              className='inline-flex items-center justify-center gap-2 text-xs font-mono text-black bg-button hover:bg-button/90 font-bold rounded-xl py-3 px-6 w-full transition-all shadow-md cursor-pointer'
            >
              <FaGithub className='text-base' />
              <span>View Source Repository</span>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

Works.displayName = "Works";

export default Works;

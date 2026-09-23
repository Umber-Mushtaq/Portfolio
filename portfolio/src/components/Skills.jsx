import { SkillsData } from "./skillsdata";

const Skills = () => {
  return (
    <section
      id='skills'
      className='w-full bg-background py-20 px-4 sm:px-8 md:px-16 relative overflow-hidden text-white'
    >
      {/* Background ambient lighting blur */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-button/10 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-6xl mx-auto relative z-10'>
        {/* Section Header */}
        <div className='text-center space-y-3 mb-12 sm:mb-16'>
          <h2 className='text-3xl md:text-5xl font-extrabold tracking-tight'>
            Tech <span className='text-button'>Skills</span>
          </h2>
          <p className='text-text text-sm md:text-base max-w-xl mx-auto font-light'>
            A comprehensive summary of the languages, databases, cloud tools,
            and architectures that form the foundation of my engineering
            journey.
          </p>
        </div>

        {/* Category Grid Cards */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {SkillsData.map((group) => (
            <div
              key={group.category}
              className='p-6 sm:p-8 bg-[#161b22] border border-white/10 rounded-3xl shadow-xl hover:border-button/50 transition-colors'
            >
              <h3 className='text-center text-button text-xl sm:text-2xl font-bold mb-6 tracking-wide border-b border-white/10 pb-3'>
                {group.category}
              </h3>

              <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4'>
                {group.items.map((item, idx) => (
                  <div
                    key={idx}
                    className='flex items-center gap-3 bg-[#1c2333] border border-white/10 py-3 px-3.5 rounded-xl hover:border-button hover:scale-[1.02] transition-all duration-300 shadow-sm'
                  >
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt={item.name}
                        className='w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0'
                      />
                    )}
                    <span className='text-xs sm:text-sm font-medium text-white truncate'>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

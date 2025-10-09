import { SkillsData } from "./skillsdata";
import Reactjs from "../assets/reactjs.png";

const Styles = {
  outgrid:
    "grid grid-cols-1 md:grid-cols-2 gap-6 p-6 shadow-md shadow-text/50 rounded-lg",
  ingrid: "grid grid-cols-2 md:grid-cols-3 gap-3 p-3",
};

const Skills = () => {
  return (
    <section id='skills' className=' text-white px-5 mt-10'>
      <h1 className='text-white font-bold tracking-wide text-3xl mb-6  text-center'>
        Tech <span className='text-button'>Skills</span>
      </h1>
      <p className='text-text text-center'>
        A summary of the languages, frameworks, and tools that form the
        foundation of my development journey.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-10 md:mx-20'>
        {SkillsData.map((group) => (
          <div
            key={group.category}
            className='p-6 border-text rounded-2xl border-2'
          >
            <h1 className='text-center text-button text-2xl py-3'>
              {group.category}
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className='flex items-center justify-center overflow-hidden border-1 border-text py-3 px-2 rounded-full hover:animate-floatY'
                >
                  <img src={item.logo} className='w-10 h-10 object-center' />
                  <h1 className='mx-2 text-1xl'>{item.name}</h1>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

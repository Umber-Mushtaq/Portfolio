import { projects } from "./projects";

const Works = () => {
  return (
    <section id='projects' className='bg-foregrounddark py-5 px-10'>
      <h1 className='text-white font-bold tracking-wide text-3xl mb-6 mt-10 text-center'>
        Academic <span className='text-button'>Projects</span>
      </h1>
      <p className='text-text text-center'>
        A collection of academic projects demonstrating my skills in full-stack
        development and software design.
      </p>
      <div className='mx-3 grid grid-cols-1 md:grid-cols-4 lg-grid-cols-4 gap-6 p-6'>
        {projects.map((project) => (
          <div
            className='overflow-hidden rounded-lg text-center md:text-left border-2 border-button hover:animate-floatY'
            key={project.name}
          >
            <img
              src={project.image}
              className='w-full h-48 object-center'
              alt='img here'
            />
            <div className='p-3 flex-col items-center'>
              <h1 className='text-button py-4 text-bold'>{project.name}</h1>
              <p className='text-text'>{project.description}</p>
              <button
                onClick={() => window.open(project.github, "_blank")}
                className='border-button border-2 text-text rounded-md text-center py-1 px-2 my-3 hover:text-black hover:bg-button transition-colors duration-700'
              >
                Github Link
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;

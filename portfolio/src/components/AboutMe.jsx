import AboutImg from "../assets/img2rm.png";

const Styles = {
  aboutSection:
    "flex-col md:flex md:flex-row justify-around items-center my-15 mx-15",
  leftSection:
    "w-full md:w-[50%] text-text flex-col text-center md:text-left space-y-3 md:mr-4",
  title: "text-white font-bold tracking-wide text-2xl",
  heading: "text-button tracking-wide text-1xl",
  para: "text-text leading-relaxed",
  refBtn:
    "text-text border-2 border-button py-2 px-3 m-2 rounded-md cursor-pointer hover:bg-button hover:text-black transition-colors duration-700 ",
};

const AboutMe = () => {
  return (
    <section id='about' className={Styles.aboutSection}>
      <div className={Styles.leftSection}>
        <h1 className={Styles.title}>
          About <span className='text-button'>Me</span>
        </h1>
        <p className={Styles.para}>
          I am an entry-level full-stack developer who loves creating modern web
          solutions using ASP.NET Core and React.js. I focus on crafting
          maintainable code, optimizing UI/UX, and learning continuously. I aim
          to contribute to impactful software solutions in collaborative
          environments.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-0 my-7'>
          <div className='py-2'>
            <span className={Styles.heading}>Name: </span>
            <span>Umber Mushtaq</span>
          </div>

          <div className='py-2'>
            <span className={Styles.heading}>Email: </span>
            <span>umber22j@gmail.com</span>
          </div>

          <div className='py-2'>
            <span className={Styles.heading}>From: </span>
            <span>Lahore, Punjab</span>
          </div>

          <div className='py-2'>
            <span className={Styles.heading}>Phone: </span>
            <span>+923498875900</span>
          </div>
        </div>

        <button
          className={Styles.refBtn}
          onClick={() =>
            window.open("http://www.linkedin.com/in/umber-mushtaq/", "_blank")
          }
        >
          LinkedIn
        </button>
        <button
          className={Styles.refBtn}
          onClick={() => window.open("http://www.github.com/Umber-Mushtaq/")}
        >
          GitHub
        </button>
      </div>
      <div className='hidden md:block mt-5 md:mt-0'>
        <img
          className='border-4 rounded-lg border-[#facc16] mx-auto '
          src={AboutImg}
        />
      </div>
    </section>
  );
};

export default AboutMe;

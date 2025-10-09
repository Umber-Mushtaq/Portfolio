import HomeImage from "../assets/homeimg.png";
import Resume from "../assets/Umber_Mushtaq_Resume.pdf";

const Styles = {
  backStyle: "bg-foregrounddark py-5 px-10 mt-20",
  heroSection: " flex-col md:flex md:flex-row justify-around items-center",
  rightSection: "text-center md:text-left text-white md:w-[50%] space-y-4",
  leftSection: "animate-zoomIn",
  headLine: "text-bold text-2xl text-button",
  title: "text-white animate-blink",
  para: "text-text",
  resumeBtn:
    "text-text border-1 border-button py-2 px-3 rounded-md text-center cursor-pointer hover:bg-button hover:text-black transition-colors duration-700 ",
};

const Home = () => {
  return (
    <section id='home' className={Styles.backStyle}>
      <div className={Styles.heroSection}>
        <div className={Styles.leftSection}>
          <img src={HomeImage} className='mx-auto' />
        </div>
        <div className={Styles.rightSection}>
          <h1 className={Styles.headLine}>Hi, I'm Umber Mushtaq</h1>
          <h1 className={Styles.title}>
            .NET & React Developer | Full-Stack Developer (Entry Level)
          </h1>
          <p className={Styles.para}>
            Passionate about building modern web applications using ASP.NET Core
            and React.js. I love clean architecture, UI/UX optimization, and
            solving real-world problems through code.
          </p>
          <button
            className={Styles.resumeBtn}
            onClick={() => window.open(Resume, "_blank")}
          >
            Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

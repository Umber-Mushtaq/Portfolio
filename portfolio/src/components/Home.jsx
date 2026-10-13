import Resume from "../assets/Umber_Mushtaq_CV.pdf";
import { FaCode, FaServer, FaDatabase, FaCloud } from "react-icons/fa";

const Styles = {
  backStyle:
    "bg-foregrounddark min-h-screen flex items-center pt-28 pb-16 px-6 md:px-16",
  heroSection:
    "max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 w-full",
  rightSection: "text-center lg:text-left text-white lg:w-[55%] space-y-6",
  leftSection: "lg:w-[42%] w-full flex justify-center",
  headLine:
    "text-button font-semibold tracking-wider text-sm uppercase bg-button/10 px-4 py-1.5 rounded-full inline-block border border-button/20",
  title:
    "text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight",
  para: "text-text text-base md:text-lg leading-relaxed font-light",
  btnContainer: "flex flex-wrap justify-center lg:justify-start gap-4 pt-3",
  resumeBtn:
    "bg-button text-black font-semibold py-3 px-7 rounded-lg text-center cursor-pointer hover:bg-yellow-400 transition-all shadow-lg shadow-button/20",
  secondaryBtn:
    "text-text border border-button/40 bg-button/5 py-3 px-7 rounded-lg text-center cursor-pointer hover:bg-button hover:text-black transition-all",

  // Terminal card styling
  terminalCard:
    "w-full bg-[#0d1117] border border-white/10 rounded-2xl shadow-2xl p-6 relative overflow-hidden group hover:border-button/40 transition-colors",
  terminalHeader:
    "flex items-center space-x-2 pb-4 mb-4 border-b border-white/10",
  dotRed: "w-3 h-3 rounded-full bg-red-500/80",
  dotYellow: "w-3 h-3 rounded-full bg-yellow-500/80",
  dotGreen: "w-3 h-3 rounded-full bg-green-500/80",
  terminalTitle: "text-xs text-text font-mono pl-2",
  codeSnippet: "font-mono text-sm text-text/90 space-y-2",
  highlightKeyword: "text-purple-400",
  highlightString: "text-green-400",
  highlightProp: "text-blue-400",
  techGrid:
    "grid grid-cols-2 gap-3 pt-4 mt-4 border-t border-white/10 text-xs font-mono text-text",
  techBadge:
    "flex items-center space-x-2 bg-white/5 px-3 py-2 rounded-lg border border-white/5",
};

const Home = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id='home' className={Styles.backStyle}>
      <div className={Styles.heroSection}>
        {/* Left text column */}
        <div className={Styles.rightSection}>
          <span className={Styles.headLine}>Full-Stack Software Engineer</span>
          <h1 className={Styles.title}>
            Building Scalable Web Apps & AI Workflows
          </h1>
          <p className={Styles.para}>
            Specialized in building high-performance web applications,
            enterprise platforms, and AI-assisted tools using React, Next.js,
            Node.js, and ASP.NET Core. Passionate about clean architecture and
            great user experience.
          </p>
          <div className={Styles.btnContainer}>
            <button
              className={Styles.resumeBtn}
              onClick={() => window.open(Resume, "_blank")}
            >
              View Resume
            </button>
            <button className={Styles.secondaryBtn} onClick={scrollToProjects}>
              Explore Projects
            </button>
          </div>
        </div>

        {/* Right graphic column (Replaced cartoon with a sleek Developer Terminal Card) */}
        <div className={Styles.leftSection}>
          <div className={Styles.terminalCard}>
            <div className={Styles.terminalHeader}>
              <div className={Styles.dotRed} />
              <div className={Styles.dotYellow} />
              <div className={Styles.dotGreen} />
              <span className={Styles.terminalTitle}>
                umber-mushtaq-profile.ts
              </span>
            </div>

            <div className={Styles.codeSnippet}>
              <p>
                <span className={Styles.highlightKeyword}>const</span> developer
                = &#123;
              </p>
              <p className='pl-4'>
                <span className={Styles.highlightProp}>name</span>:{" "}
                <span className={Styles.highlightString}>"Umber Mushtaq"</span>,
              </p>
              <p className='pl-4'>
                <span className={Styles.highlightProp}>role</span>:{" "}
                <span className={Styles.highlightString}>
                  "Full-Stack Engineer"
                </span>
                ,
              </p>
              <p className='pl-4'>
                <span className={Styles.highlightProp}>focus</span>: [
                <span className={Styles.highlightString}>".NET Core"</span>,{" "}
                <span className={Styles.highlightString}>"React/Next.js"</span>,{" "}
                <span className={Styles.highlightString}>"MERN"</span>],
              </p>
              <p className='pl-4'>
                <span className={Styles.highlightProp}>status</span>:{" "}
                <span className={Styles.highlightString}>
                  "Building impactful software 🚀"
                </span>
              </p>
              <p>&#125;;</p>
            </div>

            <div className={Styles.techGrid}>
              <div className={Styles.techBadge}>
                <FaCode className='text-button text-base' />
                <span>React / Next.js</span>
              </div>
              <div className={Styles.techBadge}>
                <FaServer className='text-button text-base' />
                <span>Node.js & Express</span>
              </div>
              <div className={Styles.techBadge}>
                <FaDatabase className='text-button text-base' />
                <span>MongoDB / SQL</span>
              </div>
              <div className={Styles.techBadge}>
                <FaCloud className='text-button text-base' />
                <span>Azure & Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

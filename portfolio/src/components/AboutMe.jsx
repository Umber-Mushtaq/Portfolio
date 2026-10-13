import AboutImg from "../assets/img2rm.png";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Styles = {
  // Full-width background wrapper matching Home and Navbar
  aboutSection: "w-full bg-foregrounddark py-24 px-6 md:px-16",

  // Centered inner container
  container:
    "max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16",

  leftSection: "lg:w-[55%] text-text space-y-6",
  rightSection: "lg:w-[45%] flex justify-center",
  title: "text-3xl md:text-4xl font-extrabold text-white tracking-tight",
  para: "text-text text-base md:text-lg leading-relaxed font-light",

  // Info Grid Styling
  infoGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4 my-6",
  infoCard:
    "flex items-center space-x-3 bg-white/[0.03] border border-white/5 p-3.5 rounded-xl hover:border-button/30 transition-colors",
  infoIcon: "text-button text-lg flex-shrink-0",
  infoLabel: "text-xs text-text/60 block uppercase tracking-wider font-mono",
  infoValue: "text-sm text-white font-medium",

  // Buttons Styling
  btnContainer: "flex flex-wrap gap-4 pt-2",
  primaryBtn:
    "flex items-center space-x-2 bg-button text-black font-semibold py-2.5 px-6 rounded-lg cursor-pointer hover:bg-yellow-400 transition-all shadow-lg shadow-button/20",
  secondaryBtn:
    "flex items-center space-x-2 text-text border border-button/40 bg-button/5 py-2.5 px-6 rounded-lg cursor-pointer hover:bg-button hover:text-black transition-all",

  // Image Frame Styling
  imageWrapper: "relative group",
  imageGlow:
    "absolute -inset-1 bg-gradient-to-r from-button to-yellow-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500",
  imageMain:
    "relative rounded-2xl border border-white/10 bg-[#0d1117] object-cover max-h-[420px] shadow-2xl",
};

const AboutMe = () => {
  return (
    <section id='about' className={Styles.aboutSection}>
      <div className={Styles.container}>
        {/* Left text column */}
        <div className={Styles.leftSection}>
          <h2 className={Styles.title}>
            About <span className='text-button'>Me</span>
          </h2>

          <p className={Styles.para}>
            I am a passionate{" "}
            <span className='text-white font-medium'>
              Full-Stack Software Engineer
            </span>{" "}
            dedicated to building scalable web applications, enterprise
            platforms, and clean architectures. Working across{" "}
            <span className='text-white font-medium'>
              React, Next.js, Node.js, and ASP.NET Core
            </span>
            , I focus on optimizing user experiences and writing maintainable,
            production-ready code.
          </p>

          {/* Structured Info Cards Grid */}
          <div className={Styles.infoGrid}>
            <div className={Styles.infoCard}>
              <FaUser className={Styles.infoIcon} />
              <div>
                <span className={Styles.infoLabel}>Name</span>
                <span className={Styles.infoValue}>Umber Mushtaq</span>
              </div>
            </div>

            <div className={Styles.infoCard}>
              <FaEnvelope className={Styles.infoIcon} />
              <div>
                <span className={Styles.infoLabel}>Email</span>
                <span className={Styles.infoValue}>umber22j@gmail.com</span>
              </div>
            </div>

            <div className={Styles.infoCard}>
              <FaMapMarkerAlt className={Styles.infoIcon} />
              <div>
                <span className={Styles.infoLabel}>Location</span>
                <span className={Styles.infoValue}>Lahore, Punjab, PK</span>
              </div>
            </div>

            <div className={Styles.infoCard}>
              <FaPhoneAlt className={Styles.infoIcon} />
              <div>
                <span className={Styles.infoLabel}>Phone</span>
                <span className={Styles.infoValue}>+92 3228073533</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={Styles.btnContainer}>
            <button
              className={Styles.primaryBtn}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/umber-mushtaq/",
                  "_blank",
                )
              }
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </button>
            <button
              className={Styles.secondaryBtn}
              onClick={() =>
                window.open("https://github.com/Umber-Mushtaq", "_blank")
              }
            >
              <FaGithub />
              <span>GitHub</span>
            </button>
          </div>
        </div>

        {/* Right image column with a modern glow container */}
        <div className={Styles.rightSection}>
          <div className={Styles.imageWrapper}>
            <div className={Styles.imageGlow} />
            <img
              className={Styles.imageMain}
              src={AboutImg}
              alt='Umber Mushtaq'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

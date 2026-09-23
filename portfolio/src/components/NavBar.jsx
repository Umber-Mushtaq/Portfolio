import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaX, FaLinkedin, FaGithub } from "react-icons/fa6";

const NavLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

const Styles = {
  nav: "fixed top-0 left-0 z-40 w-full py-4 shadow-xl shadow-black/30 text-text bg-background/95 backdrop-blur-md transition-all duration-300 border-b border-white/5",
  div: "max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center",
  logo: "flex items-center space-x-3 cursor-pointer group",
  logoBadge:
    "w-10 h-10 rounded-xl bg-gradient-to-br from-button to-yellow-600 flex items-center justify-center text-black font-extrabold text-lg shadow-lg shadow-button/20 group-hover:scale-105 transition-transform",
  logoText: "font-bold text-white tracking-wide text-lg",
  listmd: "hidden md:flex items-center space-x-8 text-sm font-medium",
  listsm:
    "md:hidden absolute top-full left-0 w-full bg-background border-b border-text/10 flex flex-col items-center space-y-4 py-6 shadow-2xl",
  activeItem: "text-button font-semibold border-b-2 border-button pb-1",
  icons:
    "hover:text-button hover:scale-110 transition-all duration-300 text-xl",
  socialContainer: "hidden md:flex items-center space-x-3",
  iconButton:
    "w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text hover:text-black hover:bg-button hover:border-button transition-all duration-300 shadow-sm",
  icons: "text-lg",
};

const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [activeLink, setActiveSection] = useState("home");

  const sections = [
    "home",
    "about",
    "experience",
    "projects",
    "skills",
    "contact",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (sectionid) => {
    setActiveSection(sectionid);
    setIsOpenMenu(false);
    const element = document.getElementById(sectionid);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={Styles.nav}>
      <div className={Styles.div}>
        <div onClick={() => handleNavClick("home")} className={Styles.logo}>
          <div className={Styles.logoBadge}>UM</div>
          <span className={Styles.logoText}>Umber Mushtaq</span>
        </div>

        <ul className={Styles.listmd}>
          {NavLinks.map((link) => (
            <li
              key={link.id}
              className={
                activeLink === link.id
                  ? Styles.activeItem
                  : "hover:text-button transition-colors"
              }
            >
              <button onClick={() => handleNavClick(link.id)}>
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Social Links */}
        <div className={Styles.socialContainer}>
          <a
            className={Styles.iconButton}
            href='https://www.linkedin.com/in/umber-mushtaq/'
            target='_blank'
            rel='noopener noreferrer'
            title='LinkedIn Profile'
          >
            <FaLinkedin className={Styles.icons} />
          </a>
          <a
            className={Styles.iconButton}
            href='https://github.com/Umber-Mushtaq'
            target='_blank'
            rel='noopener noreferrer'
            title='GitHub Profile'
          >
            <FaGithub className={Styles.icons} />
          </a>
        </div>

        <button
          className='md:hidden text-2xl text-white focus:outline-none'
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          {isOpenMenu ? <FaX /> : <GiHamburgerMenu />}
        </button>
      </div>

      {isOpenMenu && (
        <ul className={Styles.listsm}>
          {NavLinks.map((link) => (
            <li
              key={link.id}
              className={
                activeLink === link.id
                  ? Styles.activeItem
                  : "hover:text-button transition-colors"
              }
            >
              <button onClick={() => handleNavClick(link.id)}>
                {link.name}
              </button>
            </li>
          ))}
          <div className='flex space-x-6 pt-2'>
            <a
              className={Styles.icons}
              href='https://www.linkedin.com/in/umber-mushtaq/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin />
            </a>
            <a
              className={Styles.icons}
              href='https://github.com/Umber-Mushtaq'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
            </a>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;

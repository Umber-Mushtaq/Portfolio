import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaX, FaLinkedin, FaGithub, FaGraduationCap } from "react-icons/fa6";

const NavLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

const Styles = {
  nav: "fixed top-0 left-0 z-40 w-full py-3 shadow-md shadow-text/50 text-text bg-background",
  div: "flex justify-around items-center",
  logo: "flex items-center text-bold text-white",
  listmd: "hidden md:flex items-center space-x-3",
  listsm: "md:hidden flex-col items-center space-y-3 p-5",
  activeItem: "border-b-2 border-button",
  icons:
    "hover:text-button hover:scale-110 transition-all duration-700 text-2xl",
};

const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [activeLink, setActiveSection] = useState("home");

  const sections = ["home", "about", "projects", "skills", "contact"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // how much of the section must be visible
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
    const section = document.getElementById(sectionid).scrollIntoView();
    if (sectionid) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={Styles.nav}>
      <div className={Styles.div}>
        <h1 className={Styles.logo}>
          <FaGraduationCap className='mx-2 text-5xl text-button' />
          Umber Mushtaq
        </h1>

        <ul className={Styles.listmd}>
          {NavLinks.map((link) => (
            <li
              key={link.id}
              className={
                activeLink === link.id ? Styles.activeItem : "hover:text-button"
              }
            >
              <button onClick={() => handleNavClick(link.id)}>
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        <div className='hidden md:flex space-x-5'>
          <a
            className={Styles.icons}
            href='https://www.linkedin.com/in/umber-mushtaq/'
            target='_blank'
          >
            <FaLinkedin />
          </a>
          <a
            className={Styles.icons}
            href='https://github.com/Umber-Mushtaq'
            target='_blank'
          >
            <FaGithub />
          </a>
        </div>

        <button
          className='md:hidden'
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
                activeLink === link.id ? Styles.activeItem : "hover:text-button"
              }
            >
              <button onClick={() => handleNavClick(link.id)}>
                {link.name}
              </button>
            </li>
          ))}
          <div className='flex space-x-5'>
            <a
              className={Styles.icons}
              href='https://www.linkedin.com/in/umber-mushtaq/'
              target='_blank'
            >
              <FaLinkedin />
            </a>
            <a
              className={Styles.icons}
              href='https://github.com/Umber-Mushtaq'
              target='_blank'
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

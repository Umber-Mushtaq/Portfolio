import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import { Toaster } from "react-hot-toast";

function App() {
  console.log(
    "black-color:",
    getComputedStyle(document.documentElement).getPropertyValue("--black-color")
  );

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <Navbar />
      <Home />
      <AboutMe />
      <Works />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

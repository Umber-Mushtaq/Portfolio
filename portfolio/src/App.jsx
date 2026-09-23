import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <Navbar />
      <Home />
      <Experience />
      <AboutMe />
      <Works />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

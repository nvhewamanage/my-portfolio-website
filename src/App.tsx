import Navbar from "./components/layout/Navbar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Certifications from "./sections/Certifications/Certifications";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />

        <About />

        <Experience />

        <Skills />

        <Projects />

        <Certifications />

        <Contact />
      </main>
    </>
  );
}

export default App;
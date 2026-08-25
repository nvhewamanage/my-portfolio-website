import Navbar from "./components/layout/Navbar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";

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

        <section id="certifications" className="section">
          <div className="container">
            <h2 className="section-title">
              Certifications
            </h2>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title">
              Contact
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
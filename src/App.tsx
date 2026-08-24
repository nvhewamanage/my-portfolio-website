import Navbar from "./components/layout/Navbar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />

        <About />

        <section id="experience" className="section">
          <div className="container">
            <h2 className="section-title">
              Experience
            </h2>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h2 className="section-title">
              Skills
            </h2>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title">
              Projects
            </h2>
          </div>
        </section>

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
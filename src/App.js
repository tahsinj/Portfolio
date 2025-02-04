import Navbar from "./components/Navbar";
import About from "./components/About";
import Timeline from "./components/Timeline";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Timeline />
      <ProjectsCarousel />
      <Skills />
      <Awards />
      <Contact />
    </div>
  );
}

export default App;
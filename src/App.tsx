import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import MLOps from "./components/MLOps"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="px-6 md:px-20 relative">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <MLOps />
      <Contact />
    </div>
  )
}
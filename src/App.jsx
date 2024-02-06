import { ToastContainer } from 'react-toastify';
import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hero from "./components/Hero/Hero";
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

const App = () => {
  return(
    <>
    <section className="section">
      <Hero />
    </section>
    <section className="section">
      <About />
    </section>
    <section className="section">
      <Skills />
    </section>
    <section id='projects' className="section">
      <Projects />
    </section>
    <section id='contact' className="section">
      <Contact />
      <ToastContainer theme='light'/>
    </section>
    </>
  )
};

export default App;
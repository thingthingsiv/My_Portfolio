import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Qualification from "./components/Qualification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Qualification />
      <Contact />
    </main>
    <Footer />
    </>
  )
}

export default App;
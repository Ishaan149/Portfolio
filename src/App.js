import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      <About></About>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

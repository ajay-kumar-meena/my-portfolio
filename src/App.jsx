import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = ()=>{
  return(<>
     <Navbar />
     <Home />
     <About />
     <Projects />
     <Skills />
     <Contact />
     <Footer/>
     <Toaster />
  </>)
}



export default App;
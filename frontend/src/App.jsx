import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import './App.css'
import { Projects } from './components/Project';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
     <NavBar />
     <Banner />
     <Skills />
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App

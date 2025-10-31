import Navbar from './Component/Navbar/Navbar.jsx';
import Hero from './Component/Hero/Hero.jsx';
import Portfolio from './Component/Portfolio/Portfolio.jsx';
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import  Footer from './Component/Footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

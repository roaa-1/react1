import Navbar from './Component/Navbar/Navbar.jsx';
import Hero from './Component/Hero/Hero.jsx';
import Portfolio from './Component/Portfolio/Portfolio.jsx';
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import  Footer from './Component/Footer/Footer.jsx';

function App() {

  return (
    <>
    // Displays the top navigation bar and allows users to move between page sections
      <Navbar />
      
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App

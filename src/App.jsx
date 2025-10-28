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
    // The main section that provides an overview of the website or the person
      <Hero />
    // Shows previous projects or works in an organized and attractive way
      <Portfolio />
    // Informational section about the website owner or individual
      <About />
    // Informational section about the website owner or individual
      <Contact />
    // Appears at the bottom of the page and includes links or copyright info
      <Footer />
    </>
  )
}

export default App

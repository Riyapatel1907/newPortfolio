
import './App.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Portfolio } from './components/Portfolio/Portfolio';
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
    <div>
    
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
    <Toaster />
    </>
  );
}

export default App;

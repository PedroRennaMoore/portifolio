import './App.css';

import Header from './components/header';
import PedroMoore from './sections/pedromoore';
import Github from './sections/github';
import LeetCode from './sections/leetcode';
import Projects from './sections/projects';
import Contact from './sections/contact';
import Footer from './components/footer';
import DarkLightMode from './components/DarkLightMode';
import ScrollEffect from './scrollEffect';

function App() {
  return (
    <div className="App">
        <Header />
        <PedroMoore />    
        <Github />    
        <LeetCode />   
        <Projects />  
        <Contact />
        <Footer />
        <DarkLightMode />
        <ScrollEffect />
    </div>
  );
}

export default App;

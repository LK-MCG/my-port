import React from 'react'
import reactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './components/Header.css';
import './components/Navbartop.css';
import './components/TechJourney.css'
import Navbartop from './components/Navbartop.js'
import Header from './components/Header.js'
import Skills from './components/Skills.js'
import TechJourney from './components/TechJourney.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Projectpage from './components/Projectpage.js'
import Footer from './components/Footer.js'
import Projectone from './pages/Projectone.js'

// add the props in projects for the router

function App() {
  return (
    <Router>
      <div>
        <div id="header-bg-color">
          <Navbartop />
          <Header />
        </div> 
          
          <Routes>
             <Route path="/" element={
             <div>
             <Skills />
          <TechJourney />
          <About />
          <Projects /> 
          </div>} />
          <Route path="/projectpage" element={<Projectpage />} />
          </Routes>
          <Footer />
      </div> 
      </Router>
  );
}

export default App;

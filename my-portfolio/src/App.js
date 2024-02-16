import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header'; 
import Home from './pages/Home';
import ProjectGallery from './pages/ProjectGallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectGallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

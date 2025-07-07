import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Props from './components/Props';

function App() {

  const Home = () => <div className="p-4">🏠 Home Page</div>;
  const About = () => <div className="p-4">ℹ️ About Page</div>;
  const Contact = () => <div className="p-4">📞 Contact Page</div>;


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Props />
      </Router>
    </>
  )
}

export default App

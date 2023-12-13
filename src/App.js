import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import About from './components/pages/About';
import Courses from './components/pages/Courses';
import Brokers from './components/pages/Brokers';
import ContactUs from './components/pages/ContactUs';
import Mentorship from './components/pages/Mentorship';
import FAQ from './components/pages/FAQ';
//import Footer from './components/pages/Footer';
function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/brokers" element={<Brokers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>    
  );
}

export default App;

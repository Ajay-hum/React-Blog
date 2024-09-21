import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Blogs from './components/Blogs';
import About from './components/About';
import Contact from './components/Contact';
import LoginForm from './components/LoginForm'; // Import your LoginForm component
import './index.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />  {/* Add this Route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;


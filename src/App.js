import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import SignUpModal from './components/SignUpModal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoursesSection from './components/CoursesSection';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import LoginPage from './components/LoginPage';
import CoursesPage from './pages/CoursesPage';
import SignUpPage from './pages/SignUpPage'; // ✅ Make sure this file exists

function HomePage() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <nav style={{ padding: '1rem', backgroundColor: '#f8f8f8' }}>
        <span style={{ fontWeight: 'bold', fontSize: '1.5rem', marginRight: '1rem' }}>
          Coding Ninjas
        </span>
        <button
          onClick={() => setShowSignUp(true)}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#ff6600',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Sign Up
        </button>
      </nav>

      <SignUpModal isOpen={showSignUp} onClose={() => setShowSignUp(false)} />
      <Navbar />
      <Hero />
      <CoursesSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* ✅ Route for signup */}
      </Routes>
    </Router>
  );
}

export default App;

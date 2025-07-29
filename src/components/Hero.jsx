import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section style={{ padding: '4rem', backgroundColor: '#fff3e6', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
        Learn to Code with Coding Ninjas
      </h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
        Join millions of learners to become job-ready.
      </p>
      <button
        onClick={() => navigate('/courses')} // ✅ This enables routing
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#e65100',
          color: 'white',
          fontSize: '1rem',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Explore Courses
      </button>
    </section>
  );
};

export default Hero;

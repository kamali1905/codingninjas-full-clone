import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Simulate success
    console.log('User Registered:', form);
    onClose(); // close modal
    navigate('/dashboard'); // redirect
  };

  return (
    <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#00000088', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="modal-content" style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', minWidth: '300px' }}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" onChange={handleChange} required />
          <br /><br />
          <input name="email" placeholder="Email" onChange={handleChange} required />
          <br /><br />
          <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
          <br /><br />
          <input name="confirmPassword" placeholder="Confirm Password" type="password" onChange={handleChange} required />
          <br /><br />
          <button type="submit">Register</button>
        </form>
        <button onClick={onClose} style={{ marginTop: '1rem' }}>Close</button>
      </div>
    </div>
  );
};

export default SignUpModal;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Coding Ninjas Clone</p>
        <p className="text-sm text-gray-400">For demo purposes only</p>
      </div>
    </footer>
  );
};

export default Footer;
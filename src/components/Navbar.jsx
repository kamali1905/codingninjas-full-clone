import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-orange-500">Coding Ninjas</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="/">Home</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup" className="text-orange-500">Sign Up</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

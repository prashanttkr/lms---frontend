// src/components/Navbar.js
import React from 'react';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-sky-600">EduHub LMS</h1>
      {isLoggedIn && (
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#00CFFF] px-6 py-4 shadow-md flex items-center justify-between">
      <h1 className="text-white text-2xl font-bold tracking-wide">
        Edu<span className="bg-white text-[#00CFFF] px-2 py-1 rounded">Hub</span>
      </h1>
      <ul className="hidden md:flex space-x-6 text-white font-medium">
        <li className="hover:underline cursor-pointer">Dashboard</li>
        <li className="hover:underline cursor-pointer">Courses</li>
        <li className="hover:underline cursor-pointer">Assignments</li>
        <li className="hover:underline cursor-pointer">Profile</li>
      </ul>
    </nav>
  );
};

export default Navbar;


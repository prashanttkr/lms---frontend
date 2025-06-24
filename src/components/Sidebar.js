import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Courses", path: "/courses" },
    { name: "Assignments", path: "/assignments" },
    { name: "Profile", path: "/profile" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy", path: "/privacy" },
    { name: "Terms", path: "/terms" },
  ];

  return (
    <div className="w-64 bg-sky-600 min-h-screen p-4 text-white fixed left-0 top-0">
      <div className="mb-10 flex justify-center text-3xl font-bold">
        <span className="text-white">Edu</span>
        <span className="bg-white text-sky-600 px-2 rounded">Hub</span>
      </div>

      <nav className="flex flex-col space-y-4 text-lg">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`hover:font-semibold ${
              location.pathname === item.path ? "underline font-bold" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

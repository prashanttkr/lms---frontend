import React from "react";
import { LayoutDashboard, BookOpen, ClipboardList, User } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { name: "Dashboard", icon: <LayoutDashboard />, path: "/dashboard" },
    { name: "Courses", icon: <BookOpen />, path: "/courses" },
    { name: "Assignments", icon: <ClipboardList />, path: "/assignments" },
    { name: "Profile", icon: <User />, path: "/profile" },
  ];

  return (
    <div className="h-screen w-64 bg-white shadow-lg p-6 hidden md:block">
      <h2 className="text-2xl font-bold text-[#00CFFF] mb-8">EduHub</h2>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="flex items-center text-gray-700 hover:text-[#00CFFF] transition-colors"
            >
              <span className="mr-3">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;


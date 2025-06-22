import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, FileText, User } from 'lucide-react';

const SidebarLink = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
        isActive ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-600'
      }`}
    >
      <Icon className="w-5 h-5" />
      {label}
    </Link>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col p-4 space-y-8 shadow-lg">
        <h1 className="text-2xl font-bold text-center">📚 LMS Portal</h1>
        <nav className="flex flex-col space-y-2">
          <SidebarLink to="/" icon={LayoutDashboard} label="Dashboard" />
          <SidebarLink to="/courses" icon={BookOpen} label="Courses" />
          <SidebarLink to="/assignments" icon={FileText} label="Assignments" />
          <SidebarLink to="/profile" icon={User} label="Profile" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Hi, Prashant 👋</span>
            <img
              src="https://api.dicebear.com/7.x/thumbs/svg?seed=Prashant"
              alt="avatar"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </div>

        {/* Page Content */}
        <div className="bg-white p-6 rounded-xl shadow">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;

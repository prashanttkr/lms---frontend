import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 ml-64 p-4 bg-gray-50 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

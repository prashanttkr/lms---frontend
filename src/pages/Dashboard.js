import React from "react";
import { BookOpen, ClipboardList, User } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-[#00CFFF]">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Courses Card */}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <div className="flex items-center space-x-4">
            <div className="bg-[#00CFFF] p-3 rounded-lg text-white">
              <BookOpen size={28} />
            </div>
            <div>
              <p className="text-lg font-semibold">Courses</p>
              <p className="text-gray-500 text-sm">8 Active</p>
            </div>
          </div>
        </div>

        {/* Assignments Card */}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <div className="flex items-center space-x-4">
            <div className="bg-[#00CFFF] p-3 rounded-lg text-white">
              <ClipboardList size={28} />
            </div>
            <div>
              <p className="text-lg font-semibold">Assignments</p>
              <p className="text-gray-500 text-sm">12 Pending</p>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <div className="flex items-center space-x-4">
            <div className="bg-[#00CFFF] p-3 rounded-lg text-white">
              <User size={28} />
            </div>
            <div>
              <p className="text-lg font-semibold">Profile</p>
              <p className="text-gray-500 text-sm">Updated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

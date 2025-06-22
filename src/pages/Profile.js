import React from "react";

const Profile = () => {
  return (
    <div className="text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-[#00CFFF]">Profile</h1>

      <div className="bg-white rounded-xl shadow p-6 max-w-md mx-auto">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="https://i.pravatar.cc/100"
            alt="User Avatar"
            className="w-20 h-20 rounded-full border-2 border-[#00CFFF]"
          />
          <div>
            <h2 className="text-xl font-semibold text-[#00CFFF]">Prashant Kumar</h2>
            <p className="text-gray-500 text-sm">masterprashant1040@gmail.com</p>
            <p className="text-gray-400 text-xs">Role: Student</p>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <p><span className="font-medium text-gray-700">Joined:</span> June 2025</p>
          <p><span className="font-medium text-gray-700">Enrolled Courses:</span> 3</p>
          <p><span className="font-medium text-gray-700">Completed Assignments:</span> 6</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

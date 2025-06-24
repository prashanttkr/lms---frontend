import React from "react";
import AnimatedPage from "../components/AnimatedPage";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const courseProgressData = [
    { name: "Completed", value: 70 },
    { name: "Remaining", value: 30 },
  ];

  const COLORS = ["#0284c7", "#e5e7eb"]; // Sky blue and light gray

  return (
    <AnimatedPage>
      <div className="p-6 space-y-6">
        <h1 className="text-4xl font-bold text-sky-700">Welcome to EduHub Dashboard</h1>
        <p className="text-gray-600">This is your personalized dashboard.</p>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="text-xl font-semibold text-sky-700">🎓 Enrolled Courses</h2>
            <p className="text-2xl mt-2 font-bold text-gray-800">6</p>
          </div>
          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="text-xl font-semibold text-sky-700">📄 Pending Assignments</h2>
            <p className="text-2xl mt-2 font-bold text-gray-800">2</p>
          </div>
          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="text-xl font-semibold text-sky-700">✅ Profile Completion</h2>
            <p className="text-2xl mt-2 font-bold text-gray-800">80%</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-sky-700 mb-2">🎯 Weekly Study Goal</h2>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-sky-600 h-4 rounded-full"
              style={{ width: "60%" }} // 60% Progress
            ></div>
          </div>
          <p className="mt-1 text-sm text-gray-600">3/5 hours completed this week</p>
        </div>

        {/* Course Progress Pie Chart */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-sky-700 mb-4">📈 Course Completion</h2>
          <div className="h-64 w-full md:w-1/3">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={courseProgressData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {courseProgressData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Continue Learning */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-sky-700 mb-4">📚 Continue Learning</h2>
          <ul className="space-y-3">
            <li className="bg-white p-4 shadow rounded-xl flex justify-between">
              <span>Data Science</span>
              <button className="bg-sky-600 text-white px-4 py-1 rounded hover:bg-sky-700">Resume</button>
            </li>
            <li className="bg-white p-4 shadow rounded-xl flex justify-between">
              <span>MySQL</span>
              <button className="bg-sky-600 text-white px-4 py-1 rounded hover:bg-sky-700">Resume</button>
            </li>
          </ul>
        </div>

        {/* Daily Motivation */}
        <div className="mt-8 bg-sky-100 text-sky-900 border-l-4 border-sky-600 p-4 rounded-xl italic">
          💡 “Learning never exhausts the mind.” – Leonardo da Vinci
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Dashboard;

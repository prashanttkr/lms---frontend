import React from 'react';
import Layout from '../components/Layout';
import AnimatedPage from '../components/AnimatedPage';

const Dashboard = () => {
  return (
    <Layout>
      <AnimatedPage>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-100 text-blue-800 p-4 rounded-xl shadow">
            <h3 className="text-sm font-medium">Total Courses</h3>
            <p className="text-2xl font-bold mt-2">6</p>
          </div>
          <div className="bg-green-100 text-green-800 p-4 rounded-xl shadow">
            <h3 className="text-sm font-medium">Pending Assignments</h3>
            <p className="text-2xl font-bold mt-2">2</p>
          </div>
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-xl shadow">
            <h3 className="text-sm font-medium">Profile Completion</h3>
            <p className="text-2xl font-bold mt-2">80%</p>
          </div>
          <div className="bg-purple-100 text-purple-800 p-4 rounded-xl shadow">
            <h3 className="text-sm font-medium">Enrolled Programs</h3>
            <p className="text-2xl font-bold mt-2">3</p>
          </div>
        </div>
      </AnimatedPage>
    </Layout>
  );
};

export default Dashboard;

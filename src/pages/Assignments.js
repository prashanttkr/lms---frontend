import React from 'react';
import Layout from '../components/Layout';
import AnimatedPage from '../components/AnimatedPage';

const Assignments = () => {
  return (
    <Layout>
      <AnimatedPage>
        <h2 className="text-xl font-semibold mb-4">Your Assignments</h2>
        <div className="space-y-4">
          <div className="p-4 bg-white shadow rounded-xl">
            <p className="font-medium">Assignment 1: React Props</p>
            <p className="text-sm text-gray-600">Due: 25th June</p>
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <p className="font-medium">Assignment 2: API Integration</p>
            <p className="text-sm text-gray-600">Due: 28th June</p>
          </div>
        </div>
      </AnimatedPage>
    </Layout>
  );
};

export default Assignments;

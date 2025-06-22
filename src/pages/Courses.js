import React from 'react';
import Layout from '../components/Layout';
import AnimatedPage from '../components/AnimatedPage';

const Courses = () => {
  return (
    <Layout>
      <AnimatedPage>
        <h2 className="text-xl font-semibold mb-4">Your Courses</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-white shadow rounded-xl">React for Beginners</li>
          <li className="p-4 bg-white shadow rounded-xl">Advanced JavaScript</li>
          <li className="p-4 bg-white shadow rounded-xl">UI/UX Design Basics</li>
        </ul>
      </AnimatedPage>
    </Layout>
  );
};

export default Courses;

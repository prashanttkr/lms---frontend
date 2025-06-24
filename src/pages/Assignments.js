import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

const Assignments = () => {
  return (
    <AnimatedPage>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-sky-600">Assignments</h1>
        <p className="mt-2 text-gray-700">Check your assignment submissions here.</p>
      </div>
    </AnimatedPage>
  );
};

export default Assignments;


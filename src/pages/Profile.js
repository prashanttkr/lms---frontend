import React from 'react';
import Layout from '../components/Layout';
import AnimatedPage from '../components/AnimatedPage';

const Profile = () => {
  return (
    <Layout>
      <AnimatedPage>
        <div className="p-6 bg-white rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-bold">Your Profile</h2>
          <p><strong>Name:</strong> Prashant Kumar</p>
          <p><strong>Email:</strong> prashant@example.com</p>
          <p><strong>Enrolled Since:</strong> Jan 2024</p>
        </div>
      </AnimatedPage>
    </Layout>
  );
};

export default Profile;


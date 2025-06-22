import React from 'react';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">LMS Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-600">Email</label>
            <input type="email" placeholder="you@example.com" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-600">Password</label>
            <input type="password" placeholder="••••••••" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

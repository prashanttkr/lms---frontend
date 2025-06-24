import React, { useState, useEffect } from "react";
import AnimatedPage from "../components/AnimatedPage";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    setName(localStorage.getItem("eduName") || "");
    setEmail(localStorage.getItem("eduEmail") || "");
    setPhone(localStorage.getItem("eduPhone") || "");
    setEducation(localStorage.getItem("eduEducation") || "");
    setImage(localStorage.getItem("eduImage") || null);
  }, []);

  const handleSave = () => {
    localStorage.setItem("eduName", name);
    localStorage.setItem("eduEmail", email);
    localStorage.setItem("eduPhone", phone);
    localStorage.setItem("eduEducation", education);
    toast.success("Profile updated successfully! 🎉");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        localStorage.setItem("eduImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <AnimatedPage>
      <Toaster position="top-right" />
      <div className="p-6 max-w-xl mx-auto bg-white shadow rounded-xl">
        <h2 className="text-3xl font-bold text-sky-700 mb-6">User Profile</h2>

        {/* Profile Image Upload */}
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 rounded-full border-2 border-sky-500 flex items-center justify-center overflow-hidden text-center text-sm text-gray-500 bg-gray-100">
            {image ? (
              <img src={image} alt="Profile" className="object-cover w-full h-full" />
            ) : (
              "No Image"
            )}
          </div>
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <div className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition">
              Upload Image
            </div>
          </label>
        </div>

        {/* Profile Form */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Phone Number</label>
            <input
              type="tel"
              className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone"
            />
          </div>

          {/* Highest Education */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Highest Education</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="e.g. B.Sc Computer Science"
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="mt-4 bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Profile;

import React from "react";

const courses = [
  {
    title: "React for Beginners",
    instructor: "John Doe",
    duration: "6 weeks",
  },
  {
    title: "Data Structures in JS",
    instructor: "Jane Smith",
    duration: "4 weeks",
  },
  {
    title: "UI/UX Fundamentals",
    instructor: "Alex Johnson",
    duration: "3 weeks",
  },
];

const Courses = () => {
  return (
    <div className="text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-[#00CFFF]">Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-[#00CFFF]">{course.title}</h2>
            <p className="text-sm text-gray-500 mb-1">Instructor: {course.instructor}</p>
            <p className="text-sm text-gray-500">Duration: {course.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

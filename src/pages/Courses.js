import React from "react";
import AnimatedPage from "../components/AnimatedPage";

const courseData = [
  {
    title: "Data Science",
    desc: "Learn data analysis, visualization, and machine learning techniques.",
  },
  {
    title: "AI / ML",
    desc: "Master artificial intelligence and machine learning algorithms.",
  },
  {
    title: "Advanced Python",
    desc: "Enhance your Python skills with real-world applications.",
  },
  {
    title: "MySQL",
    desc: "Understand relational databases and SQL queries.",
  },
  {
    title: "Mathematics",
    desc: "Strengthen your mathematical foundations for tech careers.",
  },
  {
    title: "Verbal Aptitude",
    desc: "Improve language skills for competitive exams and interviews.",
  },
];

const Courses = () => {
  return (
    <AnimatedPage>
      <div className="p-6">
        <h1 className="text-4xl font-bold text-sky-700 mb-2">Explore Courses</h1>
        <p className="text-gray-600 mb-6">
          Choose a course to start learning and enhance your skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all p-6"
            >
              <h2 className="text-2xl font-semibold text-sky-700">{course.title}</h2>
              <p className="text-gray-500 mt-2 text-sm">{course.desc}</p>
              <button className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 text-sm">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Courses;

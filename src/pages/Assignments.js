import React from "react";

const Assignments = () => {
  const assignments = [
    {
      id: 1,
      title: "React Components",
      dueDate: "June 30, 2025",
      status: "Pending",
    },
    {
      id: 2,
      title: "JavaScript ES6 Quiz",
      dueDate: "June 25, 2025",
      status: "Submitted",
    },
    {
      id: 3,
      title: "DSA Assignment",
      dueDate: "July 5, 2025",
      status: "Pending",
    },
  ];

  return (
    <div className="text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-[#00CFFF]">Assignments</h1>

      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{assignment.title}</h2>
              <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
            </div>
            <span
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                assignment.status === "Submitted"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {assignment.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;

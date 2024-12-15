/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
        <p className="text-gray-200 mt-2">
          Manage your appointments, notes, and communication history in one place.
        </p>
      </header>

      {/* Main Content */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Appointments Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Upcoming Appointments</h2>
            <ul className="space-y-3">
              <li className="p-4 bg-gray-100 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Dr. John Doe</h3>
                <p className="text-gray-600">Mental Health Session</p>
                <p className="text-sm text-gray-500">Date: Dec 15, 2024 | Time: 3:00 PM</p>
              </li>
              <li className="p-4 bg-gray-100 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Ms. Jane Smith</h3>
                <p className="text-gray-600">Career Counseling</p>
                <p className="text-sm text-gray-500">Date: Dec 20, 2024 | Time: 1:00 PM</p>
              </li>
            </ul>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              View All Appointments
            </button>
          </div>

          {/* Notes Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Session Notes</h2>
            <div className="space-y-3">
              <div className="p-4 bg-gray-100 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Session with Dr. John Doe</h3>
                <p className="text-gray-600">
                  Discussed stress management strategies. Action plan for next session.
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Session with Ms. Jane Smith</h3>
                <p className="text-gray-600">
                  Reviewed career goals and developed a step-by-step plan.
                </p>
              </div>
            </div>
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              Add New Note
            </button>
          </div>

          {/* Communication History Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Communication History</h2>
            <ul className="space-y-3">
              <li className="p-4 bg-gray-100 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Chat with Dr. John Doe</h3>
                <p className="text-gray-600">Last message: Let s confirm next week's session.</p>
              </li>
              <li className="p-4 bg-gray-100 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Email from Ms. Jane Smith</h3>
                <p className="text-gray-600">
                  Subject: "Follow-up on career goals."
                </p>
              </li>
            </ul>
            <button className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900">
              View All History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function AppointmentPage() {
  const [appointments, setAppointments] = useState([
    { id: 1, name: "Mental Health", time: "10:00 AM" },
    { id: 2, name: "Career Counseling", time: "2:00 PM" },
    { id: 3, name: "Relationship Advice", time: "12:00 PM" },
  ]);

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Filter appointments based on search query
  const filteredAppointments = appointments.filter((appt) =>
    appt.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort appointments by time
  const sortedAppointments = [...filteredAppointments].sort((a, b) => {
    const timeA = new Date(`1970/01/01 ${a.time}`);
    const timeB = new Date(`1970/01/01 ${b.time}`);
    return sortOrder === "asc" ? timeA - timeB : timeB - timeA;
  });

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600">Book an Appointment</h1>
        <p className="text-gray-600 mt-2">
          Choose from a variety of counseling sessions to suit your needs.
        </p>
      </header>

      {/* Search and Sort Controls */}
      <div className="container mx-auto mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Search Box */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name..."
            className="w-full md:w-1/3 p-3 border rounded shadow"
          />

          {/* Sort Dropdown */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full md:w-1/3 p-3 border rounded shadow"
          >
            <option value="asc">Sort by Time (Ascending)</option>
            <option value="desc">Sort by Time (Descending)</option>
          </select>
        </div>
      </div>

      {/* Appointments Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedAppointments.map((appt) => (
          <div
            key={appt.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform transition hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold text-blue-700">{appt.name}</h3>
            <p className="text-gray-600">{appt.time}</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

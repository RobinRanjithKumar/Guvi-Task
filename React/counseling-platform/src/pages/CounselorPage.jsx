/* eslint-disable no-unused-vars */
import React from "react";

export default function CounselorPage() {
  const counselors = [
    { id: 1, name: "Dr. John Doe", expertise: "Mental Health", image: "https://st2.depositphotos.com/1005682/9634/i/450/depositphotos_96348180-stock-photo-indian-male-doctor.jpg" },
    { id: 2, name: "Ms. Jane Smith", expertise: "Career Counseling", image: "https://png.pngtree.com/png-vector/20230929/ourmid/pngtree-indian-doctor-hair-png-image_10130118.png" },
    { id: 3, name: "Dr. Emily Carter", expertise: "Relationship Advice", image: "https://png.pngtree.com/png-vector/20230929/ourmid/pngtree-indian-doctor-portrait-female-png-image_10050576.png" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Page Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600">Meet Our Counselors</h1>
        <p className="text-gray-600 mt-2">
          Select from a variety of experienced professionals to support your journey.
        </p>
      </header>

      {/* Counselors Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {counselors.map((counselor) => (
          <div
            key={counselor.id}
            className="bg-white rounded-lg shadow-lg p-6 transform transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={counselor.image}
              alt={counselor.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center text-blue-700">{counselor.name}</h3>
            <p className="text-center text-gray-600">{counselor.expertise}</p>
            <div className="mt-4 text-center">
              <button className="px-4 py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

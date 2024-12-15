/* eslint-disable no-unused-vars */
import React from "react";

export default function HomePage() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-screen items-center container mx-auto px-6">
        {/* Text Content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-blue-600 leading-tight">
            Your Journey to Better Mental Health Starts Here
          </h1>
          <p className="text-lg mt-4 text-gray-600">
            Connect with licensed counselors for mental health, relationships, and career guidance.
          </p>
          <div className="mt-6 space-x-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700">
              Get Started
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded shadow-md hover:bg-gray-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://5.imimg.com/data5/GZ/VX/SL/SELLER-46924163/doctor-consultation-services-500x500.png"
            alt="Counseling Illustration"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">
                Mental Health
              </h3>
              <p className="mt-2 text-gray-600">
                Professional counseling to improve your mental well-being.
              </p>
            </div>

            {/* Service Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">
                Relationship Advice
              </h3>
              <p className="mt-2 text-gray-600">
                Guidance to strengthen and improve your relationships.
              </p>
            </div>

            {/* Service Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">
                Career Counseling
              </h3>
              <p className="mt-2 text-gray-600">
                Expert advice to help you achieve your career goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-12 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make a Positive Change?
          </h2>
          <p className="text-lg mb-6">
            Start your counseling journey today with our trusted professionals.
          </p>
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-100">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

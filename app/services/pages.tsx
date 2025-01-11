// pages/services.js
import React from 'react';
import { services } from '@/data'; // Adjust the path to where your data file is stored

export default function ServicesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

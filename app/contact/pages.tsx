// pages/contact.js
import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Feel free to get in touch with us for any inquiries or assistance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Type your message here"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              Reach out to us through the following channels:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-blue-500 mr-3 text-xl">📍</span>
                <p>123 Engineering Way, Construction City, CC 45678</p>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-3 text-xl">📞</span>
                <p>(123) 456-7890</p>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-3 text-xl">✉️</span>
                <p>contact@greatwesternengineering.com</p>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-3 text-xl">🌐</span>
                <p>www.greatwesternengineering.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

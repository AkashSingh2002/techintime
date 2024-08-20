import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit form data to backend
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="container mx-auto p-4">
      {/* Contact Us Heading */}
      <h1 className="text-4xl mb-6 text-center font-bold text-gray-800">
        Contact Us
      </h1>

      {/* Additional Message with Styling */}
      <div className="text-center mb-8">
        <div className="border-t border-blue-500 mb-4"></div> {/* Blue line above the message */}
        <p className="text-blue-600 text-lg font-semibold">
          Happy to serve you! Send us your technical requirements
        </p>
        <div className="border-t border-blue-500 mt-4"></div> {/* Blue line below the message */}
      </div>

      {/* Contact Form */}
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-blue rounded-lg px-8 pt-6 pb-8 mb-8 max-w-lg w-full"
        >
          {/* Name Input */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="bg-gray-100 shadow-inner appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="bg-gray-100 shadow-inner appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="bg-gray-100 shadow-inner appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="6"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Contact Details */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Better yet, see us in person!
        </h2>
        <p className="text-gray-700 mb-4">
          For any technical requirement, feel free to contact us:
        </p>
        <p className="text-blue-600 mb-4">
          <a href="mailto:contact@techintime.co.in">contact@techintime.co.in</a>
        </p>
        <p className="text-blue-600 mb-4">
          <a href="tel:+919289199700">+91 92891 99700</a>
        </p>
        <a
          href="https://wa.me/919289199700"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
            alt="WhatsApp Logo"
            className="w-5 h-5 mr-2"
          />
          Message us on WhatsApp
        </a>
        <h1 className="text-2xl font-bold text-blue-600  mt-9 font-semibold">
          Techintime Enterprises (OPC) Pvt Ltd.
          </h1>

          <p>
          Regd Office: 16 GF, Lilac-2, Sector 49, Gurugram - 122018, Haryana, India
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p className="text-sm">
          Copyright © 2024 TECHinTIME Enterprises (OPC) Pvt Ltd - All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default ContactForm;

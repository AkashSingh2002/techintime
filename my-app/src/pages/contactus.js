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
      <h1 className="text-4xl mb-8 text-center font-bold text-gray-800">
        Contact Us
      </h1>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4 max-w-xl w-full" // Increased width
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
    </div>
  );
}

export default ContactForm;

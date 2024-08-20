import React, { useState, useEffect } from 'react';
import ContactUs from './pages/contactus';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/ind1.jpg",
    "/ind2.jpg",
    "/ind3.jpg",
    // Add more images as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full">
      {/* Image Carousel */}
      <div className="relative w-full h-[75vh] overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                style={{ maxHeight: '100%' }} // Adjust the max height of the images
              />
            </div>
          ))}
        </div>
        {/* Overlay content */}
        <div className="absolute top-0 left-0 w-full p-4 text-center bg-white bg-opacity-75">
          <h1 className="text-3xl font-bold">Welcome to TECHinTIME</h1>
          <p className="mt-2 text-lg">Explore our Products and Services.</p>
        </div>
      </div>

      {/* Contact Us Section */}
      <div id="contactus" className="p-4 ">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;

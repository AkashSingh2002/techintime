import React, { useState, useEffect } from 'react';
import ContactUs from './pages/contactus';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: "/image.png", description: "valve" },
    { src: "/image4.png", description: "Advanced Equipment and Tools" },
    { src: "/cable3.jpg", description: "High-Quality Industrial Products" },
    { src: "/image5.png", description: "Comprehensive Consultancy Services" },
    { src: "/img9.jpg", description: "Expert Technical Services" },
    { src: "/led.jpg", description: "Tailored Solutions for Your Needs" },
    // Add more images and descriptions as needed
  ];

  const slidesToShow = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % Math.ceil(slides.length / slidesToShow));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full">
      {/* About Us Section */}
      <section className="container mx-auto my-12">
        <h1 className="text-center text-4xl font-bold mb-8">Technical Solutions Delivered in Time</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://img1.wsimg.com/isteam/ip/c43c367a-a7e5-4f46-83a0-da85970be876/IMG-20230221-WA0028.jpg/:/cr=t:0%25,l:12.5%25,w:75%25,h:100%25/rs=w:1095,h:1095,cg=true"
              alt="Technical Products"
              className="mx-auto rounded-full mb-4 w-48 h-48" // Increased size to 12rem x 12rem
            />
            <h2 className="text-xl font-semibold mb-2">Consultancy</h2>
            <p>
              At TECHinTIME, we have a pool of expert consultants and trainers for ASNT Level-II certifications,
              quality management systems, and documentations for ISO certification.
            </p>
          </div>

          <div className="text-center">
            <img
              src="https://img1.wsimg.com/isteam/ip/c43c367a-a7e5-4f46-83a0-da85970be876/istockphoto-618651576-612x612.jpg/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:365,h:365,cg=true"
              alt="Technical Services"
              className="mx-auto rounded-full mb-4 w-48 h-48" // Increased size to 12rem x 12rem
            />
            <h2 className="text-xl font-semibold mb-2">Technical Services</h2>
            <p>
              At TECHinTIME, through our channel partners, we provide specialized technical services like
              contractor for mechanical & electrical packages of infra projects, welding and NDT services, and more.
            </p>
          </div>

          <div className="text-center">
            <img
              src="https://img1.wsimg.com/isteam/ip/c43c367a-a7e5-4f46-83a0-da85970be876/images%20(1).jpg/:/cr=t:0%25,l:18.95%25,w:62.11%25,h:100%25/rs=w:365,h:365,cg=true"
              alt="Consultancy"
              className="mx-auto rounded-full mb-4 w-48 h-48" // Increased size to 12rem x 12rem
            />
            <h2 className="text-xl font-semibold mb-2">Technical Products</h2>
            <p>
              At TECHinTIME, our mission is to be your trusted supplier of high-quality industrial products,
              equipment, tools, instruments, consumables, and spares to meet all your urgent and critical
              requirements in time.
            </p>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <div className="relative w-full h-[75vh] overflow-hidden">
        {/* Explore Our Products and Services - Top Overlay */}
        <div className="absolute top-0 left-0 w-full p-4 text-center bg-white bg-opacity-75 z-10">
          <h1 className="text-3xl font-bold">Explore our Products and Services</h1>
        </div>

        <div className="flex transition-transform duration-1000 ease-in-out mt-9"
             style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-1/3 h-full flex flex-col items-center p-4">
              <div className="relative w-full flex-1 flex items-center justify-center">
                <img
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="mt-4 text-center text-lg font-semibold bg-black text-white px-4 py-2 rounded w-full">
                {slide.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us Section */}
      <div id="contactus" className="p-4">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;

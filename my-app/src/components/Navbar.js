import React, { useState } from 'react';

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSparesOpen, setIsSparesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <>
      {/* Contact Information with Blue Line */}
      <div className="bg-blue-600 text-white py-3 text-center text-base">
        Contact : +91 9289199700
      </div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              {/* Logo */}
              <img 
                className="h-20 w-auto" 
                src="https://img1.wsimg.com/isteam/ip/c43c367a-a7e5-4f46-83a0-da85970be876/techin%20time%20logo-6bc657c.jpg/:/rs=h:118,cg=true,m/qt=q:95" 
                alt="TechinTime Logo" 
              />
            </div>
            <div className="hidden md:flex space-x-12">
              <a href="/" className="text-gray-900 inline-flex items-center px-2 pt-2 text-lg font-medium hover:text-gray-700">
                Home
              </a>
              <a href="/about" className="text-gray-900 inline-flex items-center px-2 pt-2 text-lg font-medium hover:text-gray-700">
                About Us
              </a>
              {/* Products Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsProductsOpen(!isProductsOpen)} 
                  className="text-gray-500 hover:text-gray-700 inline-flex items-center px-2 pt-2 text-lg font-medium"
                >
                  Products {isProductsOpen ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="ml-2" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 15l-7-7-7 7" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="ml-2" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {isProductsOpen && (
                  <div className="absolute mt-2 bg-white shadow-lg rounded-md p-4 w-64 z-10">
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Pipes and Fittings</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Fastners & Gaskets</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Industrial Valves</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Electrical Cables, Panels</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Industrial Tools</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Measuring Instruments</p>
                  </div>
                )}
              </div>
              {/* Spares Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsSparesOpen(!isSparesOpen)} 
                  className="text-gray-500 hover:text-gray-700 inline-flex items-center px-2 pt-2 text-lg font-medium"
                >
                  Spares {isSparesOpen ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="ml-2" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 15l-7-7-7 7" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="ml-2" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {isSparesOpen && (
                  <div className="absolute mt-2 bg-white shadow-lg rounded-md p-4 w-48 z-10">
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Major & OEM Supplied</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Off the Shelf Spares</p>
                  </div>
                )}
              </div>
              {/* Services Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)} 
                  className="text-gray-500 hover:text-gray-700 inline-flex items-center px-2 pt-2 text-lg font-medium"
                >
                  Services {isServicesOpen ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="ml-2" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 15l-7-7-7 7" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="ml-2" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {isServicesOpen && (
                  <div className="absolute mt-2 bg-white shadow-lg rounded-md p-4 w-80 z-10">
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Erection & Commissioning</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">ISO Certification</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Welding & NDT Services</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Crane Hiring Services</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">NDT Services</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Manpower Outsourcing</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Special Tech Services</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Supply chain management</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Expediting & Inspection</p>
                  </div>
                )}
              </div>
              {/* More Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsMoreOpen(!isMoreOpen)} 
                  className="text-gray-500 hover:text-gray-700 inline-flex items-center px-2 pt-2 text-lg font-medium"
                >
                  More {isMoreOpen ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="ml-2" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 15l-7-7-7 7" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="ml-2" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {isMoreOpen && (
                  <div className="absolute mt-2 bg-white shadow-lg rounded-md p-4 w-80 z-10">
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Consulting Services</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Contract Management</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Project management</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Quality Management</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Materials Management</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Project Mgmt. Training</p>
                    <p className="text-gray-700 text-base py-2 px-4 hover:bg-gray-100 cursor-pointer">Documentation/ SOPs</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-6">
              {/* User Icon */}
              <button className="text-gray-700 focus:outline-none">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  width="48" 
                  height="48" 
                  className="text-gray-700" 
                  xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.056 8.255a4.254 4.254 0 1 1-8.507 0 4.254 4.254 0 0 1 8.507 0zm3.052 11.71H4.496a.503.503 0 0 1-.46-.693 8.326 8.326 0 0 1 7.766-5.328 8.326 8.326 0 0 1 7.766 5.328.503.503 0 0 1-.46.694z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

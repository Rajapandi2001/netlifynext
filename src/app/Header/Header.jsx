// src/app/components/Header.jsx

"use client"; // This line marks the component as a client component

import React, { useState } from "react";
import Link from "next/link"; // Import Link for client-side navigation

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Function to close the menu
  };

  return (
    <>
      <title>KLM</title>
      <link rel="icon" href="img\logo.png" />
      <div className="bg-white">
        <img
          alt="Logo"
          src="./img/logo.png"
          width={200} // Adjusted for better visibility
          height={50} // Adjusted for better visibility
          className="max-h-20 w-full object-contain lg:col-span-1"
        />
      </div>
      <div className="bg-red-500 drop-shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* You can add branding or additional elements here */}
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-white hover:text-black hover:cursor-pointer focus:outline-none"
                onClick={toggleMenu}
                aria-expanded={isOpen} // Accessibility improvement
                aria-label="Toggle menu" // Added label for clarity
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden lg:flex lg:space-x-20 font-bold text-white text-xl">
              <ul className="flex space-x-20 text-center">
                {['/', '/Preownedcars', '/Esl_page', '/LedDisplays', '/Blogs', '/AboutUs', '/ContactUs'].map((path, index) => (
                  <li key={index} className="hover:text-black relative transition-all duration-300 after:block after:absolute after:bg-white after:h-[3px] after:w-full after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
                    <Link href={path} onClick={closeMenu}>
                      {path === '/' ? 'Home' : path.split('/')[1].replace(/([A-Z])/g, ' $1').trim()}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col text-center space-y-2 p-4 font-bold text-white bg-red-500">
              {['/', '/Preownedcars', '/Esl_page', '/LedDisplays', '/Blogs', '/AboutUs', '/ContactUs'].map((path, index) => (
                <li key={index} className="hover:text-black">
                  <Link href={path} onClick={closeMenu}> {/* Close menu on link click */}
                    {path === '/' ? 'Home' : path.split('/')[1].replace(/([A-Z])/g, ' $1').trim()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

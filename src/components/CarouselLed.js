"use client";
import React, { useState, useEffect } from "react";

const CarouselLed = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = 3; // Adjust to the number of images in the array

    const images = [
        "img/LED Display/2213.jpg",
        "img/LED Display/4Z_2101.w020.n001.1016B.p15.1016.jpg",
        "img/LED Display/Screenshot 2024-10-19 111111.png",
    ];

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext(); // Move to the next slide automatically
        }, 5000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clean up on unmount
    }, [activeIndex]); // Re-run if activeIndex changes

    return (
        <div id="indicators-carousel" className="relative w-full">
            {/* Carousel wrapper */}
            <div className="relative h-56 md:h-96 overflow-hidden flex items-center justify-center">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`${activeIndex === index ? "block" : "hidden"
                            } duration-700 ease-in-out w-full h-full flex items-center justify-center`}
                    >
                        <img
                            src={src}
                            className="object-cover w-full h-full"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-5 left-1/2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-white" : "bg-gray-500"
                            }`}
                        aria-current={activeIndex === index}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handlePrev}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handleNext}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 9l4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default CarouselLed;

"use client";

import { useEffect, useState, useRef } from "react";

const images = [
  "/pic1.jpg",
  "/pic2.jpg",
  "/pic3.jpg",
];

export default function AutoCarousel() {
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const startSlider = () => {
    slideInterval.current = setInterval(nextSlide, 4000);
  };

  const stopSlider = () => {
    clearInterval(slideInterval.current);
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  return (
    <div
      className="relative w-[400px] h-[500px] mx-auto overflow-hidden rounded-2xl"
      onMouseEnter={stopSlider}
      onMouseLeave={startSlider}
    >
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 object-cover h-full"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

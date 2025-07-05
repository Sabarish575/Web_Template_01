"use client";

import React, { useState, useEffect } from "react";
import AutoCarousel from "./AutoSlider";
import { motion } from "framer-motion";

const boxVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function HeroSection() {
  const [index, setIndex] = useState(0);
  const [blur, setBlur] = useState(false);

  const words = [
    "Reimagined",
    "Smart",
    "Secure",
    "Effortless",
    "Accessible",
    "Reliable",
    "Stylish",
    "Compact",
    "Flexible",
    "Connected",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBlur(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setBlur(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full min-h-[550px] px-4 md:px-8 py-8">
      {/* Left Text */}
      <div className="hidden md:flex md:w-1/2 justify-center">
        <h1 className="text-5xl font-bold flex gap-4">
          Lockers
          <span
            className={`transition-all duration-500 ease-in-out text-black ${
              blur ? "opacity-0 blur-sm" : "opacity-100 blur-0"
            }`}
          >
            {words[index]}
          </span>
        </h1>
      </div>

      {/* Right Grid for md+ */}
      <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-4 md:w-1/2 p-4">
        {/* Large Video Left */}
        <motion.div
          className="row-span-2"
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/locker.mp4"
            ></video>
            <div className="absolute bottom-0 p-4">
              <button className="bg-[#fff0f5] px-4 py-2 rounded-xl font-bold transition text-xl">
                How to use
              </button>
            </div>
          </div>
        </motion.div>

        {/* Top Right */}
        <motion.div
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative h-[190px] rounded-2xl overflow-hidden shadow-lg">
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/locker.mp4"
            ></video>
            <div className="absolute bottom-0 p-4">
              <button className="bg-[#fff0f5] px-4 py-2 rounded-xl font-bold transition text-xl">
                How to use
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Right */}
        <motion.div
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative h-[190px] rounded-2xl overflow-hidden shadow-lg">
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/locker.mp4"
            ></video>
            <div className="absolute bottom-0 p-4">
              <button className="bg-[#fff0f5] px-4 py-2 rounded-xl font-bold transition text-xl">
                How to use
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Carousel */}
      <div className="block md:hidden w-full">
        <AutoCarousel />
      </div>
    </section>
  );
}

export default HeroSection;

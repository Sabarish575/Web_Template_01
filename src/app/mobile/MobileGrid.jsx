"use client";
import React, { useState } from "react";
import MobileBaggageCard from "./MobileCard";
import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const storageData = {
  small: [{ size: "Small", slots: 2 }],
  medium: [{ size: "Medium", slots: 4 }],
  large: [{ size: "Large", slots: 8 }],
};

function MobileLockerGrid() {
  const [popupData, setPopupData] = useState(null);

  const handleClick = (sizeKey) => {
    setPopupData(storageData[sizeKey]);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-10 px-4">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] p-4 rounded-xl">
        {/* Top Row */}
        <div className="rounded-md h-20 border-2 shadow-md bg-gray-100" />
        <div className="rounded-md h-20 border-2 shadow-md bg-gray-100" />
        <motion.div
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick("small")}
          className="cursor-pointer col-span-1 rounded-md flex items-center justify-center h-20 border-2 shadow-xl hover:scale-90 transition-all duration-300 bg-white"
        >
          <h1 className={`font-bold text-lg ${bebas.className}`}>Small</h1>
        </motion.div>
        <div className="rounded-md h-20 border-2 shadow-md bg-gray-100 hidden sm:block" />
        <div className="rounded-md h-20 border-2 shadow-md bg-gray-100 hidden sm:block" />

        {/* Middle Row (Medium) */}
        <div className="col-span-2 border-2 shadow-md rounded-md h-20 bg-gray-100 hidden sm:block" />
        <motion.div
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick("medium")}
          className="cursor-pointer col-span-2 border-2 flex items-center justify-center rounded-md h-20 hover:scale-90 transition-all duration-300 shadow-xl bg-white"
        >
          <h1 className={`font-bold text-xl ${bebas.className}`}>Medium</h1>
        </motion.div>
        <div className="col-span-1 border-2 shadow-md rounded-md h-20 bg-gray-100 hidden sm:block" />

        {/* Bottom Row (Large) */}
        <motion.div
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick("large")}
          className="cursor-pointer col-span-3 sm:col-span-4 md:col-span-5 flex items-center justify-center rounded-md h-24 shadow-xl hover:scale-90 transition-all duration-300 border-2 bg-white"
        >
          <h1 className={`font-bold text-2xl md:text-3xl ${bebas.className}`}>Large</h1>
        </motion.div>
      </div>

      {popupData && (
        <MobileBaggageCard details={popupData} setOpen={() => setPopupData(null)} />
      )}
    </section>
  );
}

export default MobileLockerGrid;

"use client";
import React, { useState } from "react";
import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";
import StorageDetailsPopup from "../../../Components/StorageDetailsPopup";
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

import {
  Backpack,
  Briefcase,
  ShoppingBag,
  Luggage,
  HardHat,
  Package,
  Bag,
  BaggageClaim
} from "lucide-react";

const storageData = {
  small: {
    description: "Ideal for personal and small travel essentials.",
    items: [
      { icon: HardHat, label: "Helmet" },
      { icon: Backpack, label: "Backpack" },
      { icon: Package, label: "Laptop Bag" },
    ],
  },
  medium: {
    description: "Suitable for short trips and compact storage.",
    items: [
      { icon: Package, label: "Shopping Bags" },
      { icon: BaggageClaim, label: "Cabin Bag" },
      { icon: HardHat, label: "2–3 Helmets" },
    ],
  },
  large: {
    description: "Spacious enough for travel luggage and duffel bags.",
    items: [
      { icon: Package, label: "Duffel Bag" },
      { icon: Backpack, label: "Backpack" },
      { icon: BaggageClaim, label: "Suitcase" },
    ],
  },
  xlarge: {
    description: "Perfect for bulk storage and long-term travel needs.",
    items: [
      { icon: Package, label: "1–2 Duffel Bags" },
      { icon: BaggageClaim, label: "Cabin Bag" },
      { icon: Luggage, label: "2–3 Suitcases" },
    ],
  },
};



function StorageSize() {
  const [popupInfo, setPopupInfo] = useState(null);

  const handleClick = (sizeKey) => {
    setPopupInfo(storageData[sizeKey]);
  };

  return (
    <section className="w-full flex flex-col items-center py-10 px-4">
      <h1 className={`${bebas.className} text-4xl md:text-5xl mb-8 text-center`}>
        Storage Service
      </h1>

      <div className="grid grid-cols-2 gap-3 w-full max-w-[600px] md:max-w-[700px] h-[450px] md:h-[550px]">
        {/* Small */}
        <motion.div
          onClick={() => handleClick("small")}
          initial={{ opacity: 0, x: -90 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="cursor-pointer col-span-1 h-[80px] md:h-[100px] rounded-xl border-2 flex justify-center items-center shadow-xl hover:scale-95 transition-all duration-300 ease-in border-[#006400] bg-gradient-to-br from-[#e9ecef] to-[#dee2e6] relative"
        >
          <div className="absolute right-2 top-2 w-4 h-6 bg-[#444] rounded-sm" />
          <h1 className={`${bebas.className} text-xl md:text-2xl`}>Small</h1>
        </motion.div>

        {/* Medium */}
        <motion.div
          onClick={() => handleClick("medium")}
          initial={{ opacity: 0, y: -90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="cursor-pointer row-span-2 rounded-xl border-2 flex justify-center items-center shadow-xl hover:scale-95 transition-all duration-300 ease-in border-[#006400] bg-gradient-to-br from-[#e9ecef] to-[#dee2e6] relative"
        >
          <div className="absolute right-2 top-2 w-4 h-6 bg-[#444] rounded-sm" />
          <h1 className={`${bebas.className} text-xl md:text-2xl`}>Medium</h1>
        </motion.div>

        {/* Large */}
        <motion.div
          onClick={() => handleClick("large")}
          initial={{ opacity: 0, x: -90 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="cursor-pointer h-[130px] md:h-[150px] rounded-xl border-2 flex justify-center items-center shadow-xl hover:scale-95 transition-all duration-300 ease-in border-[#006400] bg-gradient-to-br from-[#e9ecef] to-[#dee2e6] relative"
        >
          <div className="absolute right-2 top-2 w-4 h-6 bg-[#444] rounded-sm" />
          <h1 className={`${bebas.className} text-xl md:text-2xl`}>Large</h1>
        </motion.div>

        {/* Extra Large */}
        <motion.div
          onClick={() => handleClick("xlarge")}
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
          className="cursor-pointer col-span-2 h-[180px] md:h-[220px] rounded-xl border-2 flex justify-center items-center shadow-xl hover:scale-95 transition-all duration-300 ease-in border-[#006400] bg-gradient-to-br from-[#e9ecef] to-[#dee2e6] relative"
        >
          <div className="absolute right-2 top-2 w-4 h-6 bg-[#444] rounded-sm" />
          <h1 className={`${bebas.className} text-xl md:text-2xl`}>Extra Large</h1>
        </motion.div>
      </div>

      {popupInfo && (
        <StorageDetailsPopup setOpen={() => setPopupInfo(null)} info={popupInfo} />
      )}
    </section>
  );
}

export default StorageSize;

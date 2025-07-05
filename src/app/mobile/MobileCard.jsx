"use client";
import React from "react";
import { Bebas_Neue, Inter } from "next/font/google";
import { Smartphone } from "lucide-react";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

function MobileBaggageCard({ setOpen, details }) {
  return (
    <div className="fixed h-full inset-0 backdrop-blur-xl flex items-center justify-center z-50 p-4">
      <div className="relative flex flex-col justify-start p-4 space-y-4 items-center w-full max-w-[360px] rounded-xl shadow-md border-2 border-black bg-white">
        <div
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 text-3xl px-3 font-bold cursor-pointer hover:text-red-500 transition-colors"
        >
          ×
        </div>

        <h1 className={`text-3xl ${bebas.className} mt-16 text-center`}>
          Devices You Can Store
        </h1>

        <p className={`text-sm text-center text-gray-500 ${inter.className}`}>
          This locker can securely store the following mobile items.
        </p>

        <div className="flex justify-evenly w-full px-2 space-x-6">
          {details?.map((element, i) => (
            <div key={i} className="flex flex-col items-center space-y-1">
              <Smartphone size={40} />
              <h1 className={`${bebas.className} text-2xl font-bold text-center`}>
                SIZE: {element.size}
              </h1>
              <p className="text-2xl font-bold">SLOT: {element.slots}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileBaggageCard;

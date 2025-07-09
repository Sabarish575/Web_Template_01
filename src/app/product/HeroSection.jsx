import React from 'react'
import Button from '../../../Components/Button';
import {
  Backpack,
  Luggage,
  HardHat,
  Package,
  BaggageClaim,
  ShoppingBagIcon,
  Smartphone
} from "lucide-react";

function HeroSection() {
  return (
    <section className="w-full min-h-[550px] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 gap-8">

      {/* Left Text Block */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-center justify-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          What are you storing today?
        </h1>
        <Button detail="Explore lockers" />
      </div>

      {/* Right Icon Grid */}
      <div className="w-full md:w-1/2 flex flex-col space-y-5 items-center md:space-y-0 md:space-x-8 md:justify-center md:flex-row">

        <div className="w-[300px] border-2 border-[#006400] rounded-2xl p-4 shadow-lg bg-[#f8f9fa]">
          <h1 className="text-2xl font-semibold mb-4 text-center rounded-2xl py-2  bg-[#006400] text-[#fff0f5]">Baggage</h1>

          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="p-3 border-2 rounded-xl hover:bg-[#e9ecef] transition">
              <Backpack size={36} className="mx-auto text-[#006400]" />
            </div>
            <div className="p-3 border-2 rounded-xl hover:bg-[#e9ecef] transition">
              <BaggageClaim size={36} className="mx-auto text-[#006400]" />
            </div>
            <div className="p-3 border-2 rounded-xl hover:bg-[#e9ecef] transition">
              <Luggage size={36} className="mx-auto text-[#006400]" />
            </div>
            <div className="p-3 border-2 rounded-xl hover:bg-[#e9ecef] transition">
              <HardHat size={36} className="mx-auto text-[#006400]" />
            </div>
            <div className="p-3 border-2 rounded-xl hover:bg-[#e9ecef] transition">
              <Package size={36} className="mx-auto text-[#006400]" />
            </div>
            <div className="p-3 border-2 rounded-xl hover:bg-[#e9ecef] transition">
              <ShoppingBagIcon size={36} className="mx-auto text-[#006400]" />
            </div>
          </div>
        </div>

        <div className="w-[300px] border-2 border-[#006400] rounded-2xl p-4 shadow-lg bg-[#f8f9fa]">
          <h1 className="text-2xl font-semibold mb-4 text-center rounded-2xl py-2  bg-[#006400] text-[#fff0f5]">Mobile</h1>

          <div className="flex justify-center">
            <div className="p-3 border-2 rounded-xl hover:bg-[#e9ecef] transition">
              <Smartphone size={36} className="mx-auto text-[#006400]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

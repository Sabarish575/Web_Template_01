import React from 'react'
import { HandshakeIcon, PhoneCall, MailIcon } from 'lucide-react'

function Partner() {
  return (
    <section className="w-full bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">

        <HandshakeIcon size={72} className="text-[#006400]" />

        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          Host Lockers in Your Space
        </h1>

        <p className="text-lg md:text-xl text-gray-600">
          Drive Footfall. Earn Passive Revenue.
        </p>
        <p className="text-md md:text-lg text-gray-500 max-w-xl">
          Ideal for: Stores, Malls, Colleges, Stations, Event Spaces.
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-3 sm:space-y-0 items-center justify-center mt-6">
          <div className="flex items-center space-x-2 text-gray-700">
            <PhoneCall size={20} className="text-[#006400]" />
            <p className="text-sm md:text-base font-medium">+91 90803 30074</p>
          </div>

          <div className="flex items-center space-x-2 text-gray-700">
            <MailIcon size={20} className="text-[#006400]" />
            <p className="text-sm md:text-base font-medium">partnerships@yatigo.com</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Partner

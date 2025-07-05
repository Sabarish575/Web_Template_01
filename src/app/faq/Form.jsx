import React from 'react';
import Button from '../../../Components/Button';

function Form() {
  return (
    <section className="w-full flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">Get in Touch</h1>

      <div className="w-full max-w-7xl bg-[#fff0f5] p-8 rounded-xl shadow-xl  border-2">
        <form className="space-y-8">
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2 font-medium uppercase">First Name *</label>
              <input
                type="text"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006400]"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-medium  uppercase">Last Name *</label>
              <input
                type="text"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006400]"
              />
            </div>
          </div>

          {/* Contact Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2 font-medium uppercase">Email *</label>
              <input
                type="email"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006400]"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-medium uppercase">Phone *</label>
              <input
                type="tel"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006400]"
              />
            </div>
          </div>

          {/* Checkbox Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["Mobile Locker", "Baggage", "Smart Storage", "Short Term", "Long Term", "Corporate"].map((item, i) => (
              <label key={i} className="flex items-center space-x-2 uppercase">
                <input
                  type="checkbox"
                  className="accent-[#006400] w-4 h-4"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>

          {/* Message Area */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium uppercase">Write your message *</label>
            <textarea
              rows={5}
              className="p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#006400]"
              placeholder="Let us know how we can help you..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button detail={"Submit"}/>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;

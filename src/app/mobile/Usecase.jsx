import React from 'react';

function UseCase({ Icon, title, desc }) {
  return (
    <div className="flex items-start sm:items-center w-full max-w-lg p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 space-x-4">
      
      {/* Icon Container */}
      <div className="p-3 bg-[#fff0f5] rounded-full shadow-sm flex items-center justify-center">
        <Icon size={28} className="text-[#006400]" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold tracking-wider">{title}</h1>
        <p className="text-sm text-gray-600 mt-1">{desc}</p>
      </div>
    </div>
  );
}

export default UseCase;

"use client";
import React from 'react';

function StorageDetailsPopup({ setOpen, info }) {
  if (!info || !info.items) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10 px-4">
      <div className="relative w-full max-w-sm bg-white border-2 border-[#006400] rounded-xl shadow-lg p-6 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-600"
          aria-label="Close popup"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-[#006400]">Storage Details</h2>

        {/* Description */}
        {info.description && (
          <p className="text-gray-600 text-sm leading-relaxed">{info.description}</p>
        )}

        {/* Storage Items */}
        <div className="space-y-4">
          {info.items.map(({ icon: Icon, label }, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-left text-gray-800"
            >
              <Icon size={28} className="text-[#006400]" />
              <span className="text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StorageDetailsPopup;

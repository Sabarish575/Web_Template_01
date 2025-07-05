import React from 'react';

function Button({ detail }) {
  return (
    <button
      className="px-5 py-2 rounded-2xl cursor-pointer uppercase tracking-wide font-medium text-[#006400] border-2 border-[#006400] bg-transparent shadow-sm hover:bg-[#006400] hover:text-[#fff0f5] transition-all duration-300 ease-in-out"
    >
      {detail}
    </button>
  );
}

export default Button;

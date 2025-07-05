import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-[#0f172a] text-[#fff0f5] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between items-center gap-10">
        {/* Brand */}
        <h1 className="text-5xl font-bold tracking-wide">YATIGO</h1>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-8 text-md md:text-base">
          <div className="space-y-2">
            <p className="hover:underline cursor-pointer">Home</p>
            <p className="hover:underline cursor-pointer">Products</p>
          </div>
          <div className="space-y-2">
            <p className="hover:underline cursor-pointer">How to Use</p>
            <p className="hover:underline cursor-pointer">FAQ</p>
            <p className="hover:underline cursor-pointer">About Us</p>
            <p className="hover:underline cursor-pointer">News</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-[#fff0f5]/20" />

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-center gap-4 text-sm">
        <p>📞 +91 90803 30074</p>
        <p>✉️ support@yatigo.com</p>
      </div>

      {/* Divider */}
      <hr className="my-6 border-[#fff0f5]/20" />

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-gray-300">
        <p>© 2025 Yatigo. All rights reserved.</p>
        <p className="italic">Lobster Forged. Yatigo Awakened.</p>
      </div>
    </footer>
  );
}

export default Footer;

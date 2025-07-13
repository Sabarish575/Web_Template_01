import React from 'react';
import Link from 'next/link';
function Footer() {
  return (
    <footer className="w-full bg-[#0f172a] text-[#fff0f5] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between items-center gap-10">
        {/* Brand */}
        <h1 className="text-5xl font-bold tracking-wide">YOUR TITLE</h1>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-8 text-md md:text-base">
          <div className="flex flex-col space-y-2">
            <Link href={'/home'} className="hover:underline cursor-pointer">Home</Link>
            <Link href={'/product'} className="hover:underline cursor-pointer">Products</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link href={'/howtouse'} className="hover:underline cursor-pointer">How to Use</Link>
            <Link href={'/faq'} className="hover:underline cursor-pointer">FAQ</Link>
            <Link href={'/about'} className="hover:underline cursor-pointer">About Us</Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-[#fff0f5]/20" />

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-center gap-4 text-sm">
        <p>Your contact num goes here</p>
        <p>✉️Your gmail goes here</p>
      </div>

      {/* Divider */}
      <hr className="my-6 border-[#fff0f5]/20" />

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-gray-300">
        <p>Copyright</p>
        <p className="italic">Tagline</p>
      </div>
    </footer>
  );
}

export default Footer;

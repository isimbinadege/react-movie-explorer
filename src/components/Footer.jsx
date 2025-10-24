import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-black  backdrop-blur-sm text-white py-8 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Branding */}
        <div className="text-red-500 font-bold text-lg">
          MovieX
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
          <Link to="/" className="hover:text-red-500 transition">Home</Link>
          <Link to="/favorites" className="hover:text-red-500 transition">Favorites</Link>
          <Link to="/about" className="hover:text-red-500 transition">About</Link>
          
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm mt-2 md:mt-0">
          &copy; {new Date().getFullYear()} MovieX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

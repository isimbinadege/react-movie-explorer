// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Film, Star, Home, Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const activeLink = "text-red-500 font-semibold";
  const normalLink = "text-gray-300 hover:text-red-400 transition";

  return (
    <nav className="bg-black shadow-md border-b border-gray-800 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-5 py-3">
        
        <Link to="/" className="flex items-center gap-2">
          <Film className="text-red-500 w-6 h-6" />
          <span className="text-white font-bold text-lg tracking-wide">
            Movi<span className="text-red-500">X</span>
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-300 md:hidden focus:outline-none"
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* Links */}
        <div
          className={`flex flex-col md:flex-row items-start md:items-center gap-4 absolute md:static bg-[#0a0a0f] md:bg-transparent w-full md:w-auto left-0 top-14 md:top-0 px-5 md:px-0 py-4 md:py-0 transition-all duration-300 ${
            open ? "block" : "hidden md:flex"
          }`}
        >
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? activeLink : normalLink
            }
          >
            <div className="flex items-center gap-1">
              <Home size={18} />
              Home
            </div>
          </NavLink>

          <NavLink
            to="/Favorites"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? activeLink : normalLink
            }
          >
            <div className="flex items-center gap-1">
              <Star size={18} />
              Favorites
            </div>
          </NavLink>

          <NavLink
            to="/About"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? activeLink : normalLink
            }
          >
            About
          </NavLink>

         
         
        </div>
      </div>
    </nav>
  );
}
export default Navbar
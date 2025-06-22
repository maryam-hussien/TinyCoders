import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 overflow-visible z-50">
      <div className="relative sourGummyFont">
        <div className="bg-[var(--babyBlue)] h-full sm:h-24 px-4 py-3 flex justify-between items-center flex-wrap">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/dwhn5gjgf/image/upload/t_transparent logo/v1750613150/photo_2025-06-22_20-24-54_vyvoum.jpg"
              alt="TinyCoders"
              className="w-14 h-14"
            />
            <span className="text-white font-bold text-xl sm:text-3xl">TinyCoders</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-white text-lg sm:text-2xl">
            <a href="#">Home</a>
            <a href="#">Pages</a>
            <a href="#">Elements</a>
            <a href="#">Gallery</a>
            <a href="#">Events</a>
            <a href="#">News</a>
            <a href="#">Shop</a>
          </nav>

          {/* Right Side: Button + Hamburger */}
          <div className="flex items-center gap-4">
            <CustomButton
              text="Log In"
              color="var(--white)"
              className="text-lg text-[#9b3d95]"
            />

            {/* Hamburger icon (only visible on small screens) */}
            <button
              className="text-white text-2xl md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[var(--babyBlue)] text-white px-4 py-2 space-y-2 text-lg">
            <a href="#" className="block">Home</a>
            <a href="#" className="block">Pages</a>
            <a href="#" className="block">Elements</a>
            <a href="#" className="block">Gallery</a>
            <a href="#" className="block">Events</a>
            <a href="#" className="block">News</a>
            <a href="#" className="block">Shop</a>
          </div>
        )}

        {/* Bottom Curve */}
        <div className="absolute w-full h-6 bg-[var(--babyBlue)] rounded-b-[200%] z-[1] pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Header;

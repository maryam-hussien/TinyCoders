import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[var(--babyBlue)] text-white  sourGummyFont mt-4 py-2">
      {/* Top Curve */}
      <div className="absolute  w-full h-8 -top-8 bg-[var(--babyBlue)] rounded-t-[200%] z-[1] pointer-events-none"></div>

      {/* Content */}
      <div className="container mx-auto px-6 z-[2] relative">
        <div className="flex flex-col md:flex-row  items-start gap-10 md:gap-20 justify-around">

          {/* Logo + Description */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 ">
              <img
                src="https://res.cloudinary.com/dwhn5gjgf/image/upload/t_transparent logo/v1750613150/photo_2025-06-22_20-24-54_vyvoum.jpg"
                alt="TinyCoders"
                className="w-14 h-14"
              />
              <span className="font-bold text-xl sm:text-3xl">TinyCoders</span>
            </div>
            <p className="max-w-xs text-[14] sm:text-[16] ml-4">
              Empowering kids to code creatively with fun lessons and games designed just for them.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col text-[16] sm:text-lg">
            <h3 className="font-bold text-lg sm:text-2xl mb-1">Quick Links</h3>
            <a href="#">Profile</a>
            <a href="#">Levels</a>
            <a href="#">Games</a>
            <a href="#">Challanges</a>
          </div>

          {/* Contact Info */}
          <div className="text-[14] sm:text-[16]">
            <h3 className="font-bold text-lg sm:text-2xl ">Contact</h3>
            <p>Email: contact@tinycoders.com</p>
            <p>Phone: +1 (800) 123-4567</p>
            <p>Location: Cairo, Egypt</p>

        {/* Bottom Text */}
        <div className=" text-start text-[12] sm:text-[16] mt-4 text-[var(--darkLavender)]">
          © {new Date().getFullYear()} TinyCoders. All rights reserved.
        </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

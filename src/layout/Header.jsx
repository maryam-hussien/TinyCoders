import {  useMemo } from "react";
import { Link, useLocation ,useNavigate} from "react-router-dom";
import CustomButton from "../components/CustomButton";

const Header = () => {
  const location = useLocation();
const navigate = useNavigate();
  const navLinks = useMemo(() => [
    { name: "Home", path: "/" },
    { name: "Levels", path: "/levels" },
    { name: "Games", path: "/games" },
    { name: "Challanges", path: "/challanges" },
    { name: "Profile", path: "/profile" },
    { name: "AboutUs", path: "/about-us" },
    { name: "ContactUs", path: "/contact-us" },
  ], []);
  const signin =() => {
   navigate("/sign-in");
  }
  return (
    <div className="sticky top-0 overflow-visible z-50">
      <div className="relative sourGummyFont bg-[var(--babyBlue)]">
        <div className=" px-4 py-3 flex justify-between items-center flex-wrap ">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/dwhn5gjgf/image/upload/t_transparent logo/v1750613150/photo_2025-06-22_20-24-54_vyvoum.jpg"
              alt="TinyCoders"
              className="w-14 h-14"
            />
            <span className="text-white font-bold text-xl sm:text-3xl">TinyCoders</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="flex gap-6 text-white text-lg sm:text-2xl  p-10 sm:p-0">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`hover:underline hover:opacity-90 ${location.pathname === item.path ? "underline font-bold" : ""} outline-none`}
              >
                {item.name}
              </Link>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <CustomButton
              text="Log In"
              color="var(--white)"
              className="text-lg text-[var(--darkLavender)]"
             onClick={signin}/>

          </div>
        </div>

      

        {/* Bottom Curve */}
        <div className="absolute w-full h-7 bg-[var(--babyBlue)] rounded-b-[200%] z-[1] pointer-events-none -bottom-6  "></div>
      </div>
    </div>
  );
};

export default Header;

import CustomButton from "../components/CustomButton";

const Header = () => {
  return (
    <div className="relative sourGummyFont">
      {/* Header content here */}
      <div className="bg-[var(--babyBlue)]">
        

        {/* Main Nav Bar */}
        <div className="flex justify-between items-center px-6 py-2">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Superowl" className="w-10 h-10" />
            <span className="text-white font-bold text-2xl">TinyCoders</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-6 text-white text-xl">
            <a href="#">Home</a>
            <a href="#">Pages</a>
            <a href="#">Elements</a>
            <a href="#">Gallery</a>
            <a href="#">Events</a>
            <a href="#">News</a>
            <a href="#">Shop</a>
          </nav>

          {/* Search + Inquire Button */}
          <div className="flex items-center gap-4">
           <CustomButton 
           text='Log In'
           color="var(--white)"
           className="text-lg text-[var(--popy)]"/>
          </div>
        </div>
      </div>

      <div className="absolute w-full h-6 bg-[var(--babyBlue)] rounded-b-[200%] z-[1]"></div>
    </div>
  );
};

export default Header;

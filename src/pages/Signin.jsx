import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sourGummyFont"
    >
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-5xl h-[600px] m-6">
        
        {/* Left: Image */}
        <Link to="/signup" className="md:w-1/2 w-full h-full block group transition-transform duration-300 hover:scale-105">
          <img
            src="https://res.cloudinary.com/drxaf5tun/image/upload/v1750715608/cloud_g8uew6.jpg"
            alt="Sign In"
            className="w-full h-full object-cover"
          />
        </Link>

        {/* Right: Form */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-[var(--lavender)] font-bold text-xl sm:text-3xl">Welcome to TinyCoders</span>
          </div>
          <h2 className="text-5xl font-bold text-[var(--forest)] mb-6 text-center">Sign In</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--darkLavender)]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--darkLavender)]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer text-lg"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>

            <CustomButton
              type="submit"
              text="Log In"
              className="w-full bg-[var(--darkLavender)] text-white py-2 rounded-xl hover:bg-purple-700 transition"
            />

            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="staySignedIn"
                className="w-4 h-4 text-[var(--darkLavender)] border-gray-300 rounded"
              />
              <label htmlFor="staySignedIn" className="ml-2 text-sm text-[var(--lavender)]">Stay signed in</label>
            </div>

            <p className="mt-4 text-sm text-center text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[var(--darkLavender)] hover:underline font-medium">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default SignIn;

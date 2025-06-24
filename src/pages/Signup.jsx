import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sourGummyFont"
    >
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-5xl h-[650px] m-6">
        
        {/* Left: Image */}
        <Link to="/signin" className="md:w-1/2 w-full h-full block group transition-transform duration-300 hover:scale-105">
          <img
            src="https://res.cloudinary.com/drxaf5tun/image/upload/v1750780154/cloud1_dluxqf.jpg"
            alt="Go to Sign In"
            className="w-full h-full object-cover"
          />
        </Link>

        {/* Right: Form */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-[var(--lavender)] font-bold text-xl sm:text-3xl">Join TinyCoders</span>
          </div>
          <h2 className="text-5xl font-bold text-[var(--forest)] mb-6 text-center">Sign Up</h2>

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

            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-1">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--darkLavender)]"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <CustomButton
              type="submit"
              text="Create Account"
              className="w-full bg-[var(--darkLavender)] text-white py-2 rounded-xl hover:bg-purple-700 transition"
            />

            <p className="mt-4 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/sign-in" className="text-[var(--darkLavender)] hover:underline font-medium">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;

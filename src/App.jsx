import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Levels from "./pages/Levels";
import Games from "./pages/Games";

// This part handles ONLY animated page content
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/levels' element={<Levels/>}/>
        <Route path="/games" element={<Games/>}/>
        <Route path="*" element={<h1 className="text-center text-2xl font-bold mt-20">404 - Page Not Found</h1>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="relative">
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

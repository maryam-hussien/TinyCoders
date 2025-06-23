import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SignIn from "./pages/Signin";
function App() {
  return (
    <div className="relative">
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/sign-in" element={<SignIn  />} />
         </Routes>
         <Footer/>
    </Router>    
    </div>
  );
}

export default App;

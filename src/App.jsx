import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./layout/Header";
function App() {
  return (
    <div className="relative">
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
         </Routes>
    </Router>    
    </div>
  );
}

export default App;

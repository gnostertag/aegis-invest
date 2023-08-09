import React from "react";
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Approach from "./pages/Approach";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <Router>
        <div className="App"></div>

        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
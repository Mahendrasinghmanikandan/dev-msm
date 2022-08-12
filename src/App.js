import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/profile/Profile";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/footer/Footer";

const App = () => {
  const themeStatus = useSelector((res) => res.themeSlice.value.bg);
  return (
    <div data-theme={themeStatus} className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/resume" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

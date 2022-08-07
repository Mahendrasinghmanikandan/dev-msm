import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";

const App = () => {
  const themeStatus = useSelector((res) => res.themeSlice.value.bg);
  return (
    <div data-theme={themeStatus}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;

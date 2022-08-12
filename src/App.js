import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/profile/Profile";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

const App = () => {
  const themeStatus = useSelector((res) => res.themeSlice.value.bg);
  return (
    <div data-theme={themeStatus} className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Profile />
            </>
          }
        />
        <Route
          path="/resume"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

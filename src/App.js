import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { useSelector } from "react-redux";


const App = () => {
  const themeStatus = useSelector((res) => res.themeSlice.value.bg);
  return (
    <div data-theme={themeStatus}>
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;

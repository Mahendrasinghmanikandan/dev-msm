import React, { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../features/themeSlice";
import SubNav from "./Navbar/SubNav";

const Navbar = () => {
  const themeStatus = useSelector((res) => res.themeSlice.value.bg);
  const dispatchTheme = useDispatch();
  const [status, setStatus] = useState(false);
  return (
    <div>
      <div className="navbar  shadow-md fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              className="btn btn-ghost btn-circle"
              onClick={() => setStatus(!status)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
          {status ? <SubNav status={status} setStatus={setStatus} /> : ""}
        </div>
        <div className="navbar-end">
          {themeStatus === "wireframe" ? (
            <button
              className="btn btn-ghost btn-circle  text-primary"
              onClick={() => {
                dispatchTheme(changeTheme({ bg: "black" }));
              }}
            >
              <DarkModeIcon />
            </button>
          ) : (
            <button
              className="btn btn-ghost btn-circle  text-white"
              onClick={() => {
                dispatchTheme(changeTheme({ bg: "wireframe" }));
              }}
            >
              <LightModeIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

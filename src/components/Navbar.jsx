import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import "./navbar.css";
import { Typography } from "@mui/material";
import { themes } from "../helper/themeHelper";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../features/themeSlice";

const Navbar = () => {
  const [textStatus, setTextStatus] = useState(true);
  const [theme, setTheme] = useState(false);
  const themeStatus = useSelector((res) => res.themeSlice.value.bg);
  const dispatchTheme = useDispatch();
  setTimeout(() => {
    setTextStatus(!textStatus);
  }, 3000);
  return (
    <div>
      <div className="navbar bg-base-100 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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

            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <h1 className="animate__animated animate__zoomInDown animate__faster">
            {textStatus ? (
              <Typography variant="h5">Manikandan M</Typography>
            ) : (
              <Typography variant="h5">Web developer</Typography>
            )}
          </h1>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <SettingsIcon
              onClick={() => {
                setTheme(!theme);
              }}
            />
          </button>
          {theme ? (
            <div className="theme">
              {themes.map((theme) => {
                return (
                  <div
                    className={`themes animate__animated animate__rollIn animate__faster  ${
                      themeStatus === theme.theme ? "theme-active" : ""
                    }`}
                    style={{ backgroundColor: theme.bg }}
                    onClick={() => {
                      dispatchTheme(changeTheme({ bg: theme.theme }));
                    }}
                  >
                    &nbsp;
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
const SubNav = ({ setStatus, status }) => {
  return (
    <div onClick={() => setStatus(!status)}>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-40"
      >
        <li>
          <Link to="/">
            <HomeIcon />
            Home
          </Link>
        </li>
        <li>
          <Link to="/resume">
            <ArticleIcon />
            Resume
          </Link>
        </li>
        <li>
          <Link to="/works">
            <HomeRepairServiceIcon />
            Works
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <ConnectWithoutContactIcon />
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SubNav;

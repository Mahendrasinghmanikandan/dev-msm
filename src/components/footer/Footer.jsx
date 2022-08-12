import React from "react";
import { Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footers">
      <video preload="auto" autoplay={"autoplay"} loop muted>
        <source src="./assets/video/bg.mp4" />
      </video>
      <footer class="footer footer-center p-10 text-base-content rounded text-white">
        <div class="grid grid-flow-col gap-10">
          <Link to="/">
            <HomeIcon className="footer-icon" />
            Home
          </Link>
          <Link to="/resume">
            <ArticleIcon className="footer-icon" />
            Resume
          </Link>
          <Link to="/works">
            <HomeRepairServiceIcon className="footer-icon" />
            Works
          </Link>
          <Link to="/contact">
            <ConnectWithoutContactIcon className="footer-icon" />
            Contact
          </Link>
        </div>
        <div>
          <div class="grid grid-flow-col gap-4">
            <a>
              <GitHubIcon className="footer-icon" />
            </a>
            <a>
              <DownloadForOfflineIcon className="footer-icon" />
            </a>
            <a>
              <CallIcon className="footer-icon" />
            </a>
            <a>
              <LinkedInIcon className="footer-icon" />
            </a>
          </div>
        </div>
        <div>
          <p>
            Copyright © 2022 - All right reserved by MahendraSinghManikandan
            Creatives
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

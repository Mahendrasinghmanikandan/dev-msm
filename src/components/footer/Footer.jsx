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
    <div className="footers ">
      <video preload="auto" autoplay={"autoplay"} loop muted>
        <source src="./assets/video/bg.mp4" />
      </video>
      <footer className="footer  p-5 text-white text-base-content">
        <div>
          <span className="footer-title ">Pages</span>
          <Link to="/" className="btn btn-sm btn-link gap-2">
            <HomeIcon className="footer-icon " />
            <span className="text-white">Home</span>
          </Link>
          <Link to="/resume" className="btn btn-sm btn-link gap-2">
            <ArticleIcon className="footer-icon" />
            <span className="text-white">Resume</span>
          </Link>
          <Link to="/works" className="btn btn-sm btn-link gap-2">
            <HomeRepairServiceIcon className="footer-icon" />
            <span className="text-white">Works</span>
          </Link>
          <Link to="/contact" className="btn btn-sm btn-link gap-2">
            <ConnectWithoutContactIcon className="footer-icon" />
            <span className="text-white">Contact</span>
          </Link>
        </div>
        <div>
          <span class="footer-title">Social</span>
          <a className="btn btn-sm btn-link gap-2">
            <GitHubIcon className="footer-icon" />
            <span className="text-white">GitHub</span>
          </a>
          <a className="btn btn-sm btn-link gap-2">
            <DownloadForOfflineIcon className="footer-icon" />
            <span className="text-white">Resume</span>
          </a>
          <a className="btn btn-sm btn-link gap-2">
            <CallIcon className="footer-icon" />
            <span className="text-white">Contact</span>
          </a>
          <a className="btn btn-sm btn-link gap-2">
            <LinkedInIcon className="footer-icon" />
            <span className="text-white">LinkedIn</span>
          </a>
        </div>
        <div>
          <span className="footer-title">Powered by </span>
          <div>
            <p className="footer-title lowercase">
              Copyright © 2022 - All right reserved by MahendraSinghManikandan
              Creatives
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

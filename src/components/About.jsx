import { Stack, Typography } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import Educations from "./About/Educations";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";

const About = () => {
  return (
    <div className="AboutSection">
      <div className="top shadow-lg ">
        <div className="About_left">
          <div class="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to="/" className="links">
                  <HomeIcon className="icons" />
                  home
                </Link>
              </li>
              <li>
                <InfoIcon className="icons" />
                About Me
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about_middle">
        <div className="shadow-2xl rounded-2xl about_middle_items animate__animated animate__backInUp animate__slower 3s">
          <h1 className="about_title">
            About Me
            <InfoIcon className="about_icon" />
          </h1>
          <Typography variant="h5" className="text">
            I am a qualified and professional web developer with two years of
            experience in website design and development. I am a kind of guy who
            likes programming at its core. plus good team player.
          </Typography>
        </div>
        <div className="shadow-2xl rounded-2xl about_middle_items animate__animated animate__backInDown animate__slower 3s invisible"></div>
        <div className="shadow-2xl rounded-2xl about_middle_items animate__animated animate__backInLeft animate__slower 3s">
          <h1 className="about_title">
            Educations
            <SchoolIcon className="about_icon" />
          </h1>
          <Typography variant="h5" className="text">
            <Stack spacing={3}>
              <Educations
                Icons={EngineeringIcon}
                primaryText="Computer Science and Engineering"
                secondaryText="N. S. N. College of
Engineering and technology &nbsp;
2016 to 2020"
              />
              <Educations
                Icons={HouseSidingIcon}
                primaryText="Higher Secondary Certificate"
                secondaryText="Rangasamy Gounder Higher
Secondary School &nbsp; 2015 to 2016"
              />
              <Educations
                Icons={HouseSidingIcon}
                primaryText="Secondary School Leaving
Certificate"
                secondaryText="Rangasamy Gounder Higher
Secondary School &nbsp; 2013 to 2014"
              />
            </Stack>
          </Typography>
        </div>
        <div className="shadow-2xl rounded-2xl about_middle_items animate__animated animate__backInDown animate__slower 3s">
          <Typography variant="h5" className="text">
            I am a qualified and professional web developer with two years of
            experience in website design and development. I am a kind of guy who
            likes programming at its core. plus good team player.
          </Typography>
        </div>
        <div className="shadow-2xl rounded-2xl about_middle_items animate__animated animate__backInDown animate__slower 3s">
          <Typography variant="h5" className="text">
            I am a qualified and professional web developer with two years of
            experience in website design and development. I am a kind of guy who
            likes programming at its core. plus good team player.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;

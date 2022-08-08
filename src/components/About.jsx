/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import Educations from "./About/Educations";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Experience from "./About/Experience";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import SettingsIcon from "@mui/icons-material/Settings";
const About = () => {
  return (
    <div className="AboutSection">
      <div className="about_middle">
        <div
          id="abouts"
          className="about shadow-2xl rounded-2xl about_middle_items animate__animated animate__backInUp animate__slower 3s"
        >
          <h1 className="about_title">
            About Me
            <InfoIcon className="about_icon" />
          </h1>
          <Typography variant="h6" className="text">
            I am a qualified and professional web developer with two years of
            experience in website design and development. I am a kind of guy who
            likes programming at its core. plus good team player.
          </Typography>
        </div>
        {/* <div className="shadow-2xl rounded-2xl about_middle_items animate__animated animate__backInDown animate__slower 3s invisible"></div> */}
        <div
          id="education"
          className="shadow-2xl rounded-2xl about_middle_items animate__animated animate__backInLeft animate__slower 3s"
        >
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
        <div
          id="experience"
          className="shadow-2xl rounded-2xl about_middle_items animate__animated animate__backInLeft animate__slower 3s"
        >
          <h1 className="about_title">
            Experience
            <AccountBalanceIcon className="about_icon" />
          </h1>
          <Typography variant="h5" className="text">
            <Stack spacing={3}>
              <Experience
                Icons={EngineeringIcon}
                primaryText="Web Developer "
                extraPrimary="&nbsp; (Node & React Js)"
                secondaryText="Kaay Labs &nbsp; 2021 - 2022"
                extraSecondaryText={
                  <ul>
                    <li className="mt-1">
                      <Brightness1Icon style={{ fontSize: "10px" }} />
                      &nbsp;Working on E-commerce Application
                    </li>
                    <li className="mt-1">
                      <Brightness1Icon style={{ fontSize: "10px" }} />
                      &nbsp;Developed and implemented software solutions based
                      on client requirements.
                    </li>
                    <li className="mt-1">
                      <Brightness1Icon style={{ fontSize: "10px" }} />
                      &nbsp;Handling both frontend and backend.(react,node,
                      sequelize, antdesign and much more.., ){" "}
                    </li>
                    <li className="mt-1">
                      <Brightness1Icon style={{ fontSize: "10px" }} />
                      &nbsp;Bug fixing
                    </li>
                  </ul>
                }
              />
              <Experience
                Icons={HouseSidingIcon}
                primaryText="Associate Software Developer"
                extraPrimary="&nbsp; (php ,codeigniter and mysql)"
                secondaryText="SG Software Solutions &nbsp; 2020 - 2021"
                extraSecondaryText={
                  <ul>
                    <li>
                      <Brightness1Icon style={{ fontSize: "10px" }} />
                      &nbsp;This company is like Project center,working on
                      E-commerce, management Applications
                    </li>
                    <li>
                      <Brightness1Icon style={{ fontSize: "10px" }} />
                      &nbsp;Developed and implemented web projects for clients
                      and College Students.
                    </li>
                    <li>
                      <Brightness1Icon style={{ fontSize: "10px" }} />
                      &nbsp;Handling both frontend and backend.(php,mysql,
                      codeigniter, bootstrap and much more.., ){" "}
                    </li>
                    <li>
                      <Brightness1Icon style={{ fontSize: "10px" }} />
                      &nbsp;Bug fixing
                    </li>
                  </ul>
                }
              />
            </Stack>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;

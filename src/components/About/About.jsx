/* eslint-disable jsx-a11y/anchor-is-valid */
import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import Educations from "./Educations";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import WorkIcon from "@mui/icons-material/Work";
import Experience from "./Experience";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import DevicesIcon from "@mui/icons-material/Devices";
import "./about.css";
const About = () => {
  return (
    <Stack spacing={1}>
      <div className="Resume_Sections">
        <Stack spacing={3}>
          <Stack className="title_text" spacing={1}>
            <Typography variant="h4">Resume</Typography>
            <hr />
          </Stack>
          <Stack direction="row" className="title_content">
            <div
              id="education"
              className="shadow-2xl rounded-2xl about_middle_items animate__animated animate__backInLeft animate__slower 3s"
            >
              <h1 className="about_title">
                <Typography variant="h4">Educations</Typography>

                <SchoolIcon className="about_icon" />
              </h1>
              <Typography variant="h5" className="text">
                <Stack spacing={3}>
                  <Educations
                    Icons={EngineeringIcon}
                    primaryText="Computer Science and Engineering"
                    secondaryText="N.S.N. College of
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
              className="shadow-2xl rounded-2xl about_middle_items animate__animated animate__backInRight animate__slower 3s"
            >
              <h1 className="about_title">
                <Typography variant="h4">Experience</Typography>
                <WorkIcon className="about_icon" />
              </h1>
              <Typography variant="h5" className="text">
                <Stack spacing={3}>
                  <Experience
                    Icons={DevicesIcon}
                    primaryText="Web Developer "
                    extraPrimary="&nbsp;(Node & React Js)"
                    secondaryText="Kaay Labs&nbsp;2021 - 2022"
                    extraSecondaryText={
                      <ul>
                        <li className="mt-1">
                          <Brightness1Icon style={{ fontSize: "10px" }} />
                          &nbsp;Working on E-commerce Application
                        </li>
                        <li className="mt-1">
                          <Brightness1Icon style={{ fontSize: "10px" }} />
                          &nbsp;Developed and implemented software solutions
                          based on client requirements.
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
                    Icons={DevicesIcon}
                    primaryText="Associate Software Developer"
                    extraPrimary="&nbsp;(php,codeigniter and mysql)"
                    secondaryText="SG Software Solutions&nbsp;2020 - 2021"
                    extraSecondaryText={
                      <ul>
                        <li>
                          <Brightness1Icon style={{ fontSize: "10px" }} />
                          &nbsp;This company is like Project center,working on
                          E-commerce, management Applications
                        </li>
                        <li>
                          <Brightness1Icon style={{ fontSize: "10px" }} />
                          &nbsp;Developed and implemented web projects for
                          clients and College Students.
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
          </Stack>
        </Stack>
      </div>
      <div className="Resume_Sections">
        <Stack spacing={3}>
          <Stack className="title_text" spacing={1}>
            <Typography variant="h4">Resume</Typography>
            <hr />
          </Stack>
          <Stack direction="row" className="title_content">
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
                    secondaryText="N.S.N. College of
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
                <WorkIcon className="about_icon" />
              </h1>
              <Typography variant="h5" className="text">
                <Stack spacing={3}>
                  <Experience
                    Icons={DevicesIcon}
                    primaryText="Web Developer "
                    extraPrimary="&nbsp;(Node & React Js)"
                    secondaryText="Kaay Labs&nbsp;2021 - 2022"
                    extraSecondaryText={
                      <ul>
                        <li className="mt-1">
                          <Brightness1Icon style={{ fontSize: "10px" }} />
                          &nbsp;Working on E-commerce Application
                        </li>
                        <li className="mt-1">
                          <Brightness1Icon style={{ fontSize: "10px" }} />
                          &nbsp;Developed and implemented software solutions
                          based on client requirements.
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
                    Icons={DevicesIcon}
                    primaryText="Associate Software Developer"
                    extraPrimary="&nbsp;(php,codeigniter and mysql)"
                    secondaryText="SG Software Solutions&nbsp;2020 - 2021"
                    extraSecondaryText={
                      <ul>
                        <li>
                          <Brightness1Icon style={{ fontSize: "10px" }} />
                          &nbsp;This company is like Project center,working on
                          E-commerce, management Applications
                        </li>
                        <li>
                          <Brightness1Icon style={{ fontSize: "10px" }} />
                          &nbsp;Developed and implemented web projects for
                          clients and College Students.
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
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
};

export default About;

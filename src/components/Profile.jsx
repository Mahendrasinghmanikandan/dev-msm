import {
  Avatar,
  Button,
  ButtonGroup,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Profile = () => {
  const [textStatus, setTextStatus] = useState(true);
  setTimeout(() => {
    setTextStatus(!textStatus);
  }, 3000);
  return (
    <>
      <div className="profileDetails">
        <div className="top">
          <video preload="auto" autoplay={"autoplay"} loop muted>
            <source src="./assets/video/bg.mp4" />
          </video>
          <div className="profile-content">
            <div className="hero min-h-screen">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <Stack justifyContent="center" direction="row">
                    <img
                      src="./assets/images/profiles.jpg"
                      alt=""
                      width="100"
                      className="mask mask-circle text-center rounded"
                    />
                  </Stack>
                  <h3 className="text-3xl font-bold text-slate-200 mt-2">
                    Hello there
                  </h3>
                  <p className="py-4 font-md text-slate-200">
                    This is Manikandan web developer with two years of
                    experience in website design and development. from India, I
                    love to talk with you about my unique.
                  </p>
                  <Stack
                    spacing={3}
                    direction="row"
                    justifyContent="center"
                    margin="20px 0px"
                  >
                    <div>
                      <GitHubIcon className="icon text-slate-200" />
                    </div>
                    <div>
                      <DownloadForOfflineIcon className="icon text-slate-200" />
                    </div>
                    <div>
                      <CallIcon className="icon text-slate-200" />
                    </div>
                    <div>
                      <LinkedInIcon className="icon text-slate-200" />
                    </div>
                  </Stack>
                  {/* <button class="btn btn-primary">Get Started</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="middle">
          <img src="./assets/images/profile.jpg" alt="" />
        </div>
        <div className="end">
          <Stack spacing={1} textAlign="center" marginTop="35px">
            <h1 className="animate__animated animate__zoomInDown animate__faster">
              {textStatus ? (
                <Typography variant="h5">Manikandan M</Typography>
              ) : (
                <Typography variant="h5">Web developer</Typography>
              )}
            </h1>
          </Stack>
        </div>
        <div className="end">
          <Stack
            spacing={3}
            direction="row"
            justifyContent="center"
            marginTop="40px"
          >
            <div>
              <GitHubIcon className="icon" />
            </div>
            <div>
              <DownloadForOfflineIcon className="icon" />
            </div>
            <div>
              <CallIcon className="icon" />
            </div>
            <div>
              <LinkedInIcon className="icon" />
            </div>
          </Stack>
        </div> */}
      </div>
    </>
  );
};

export default Profile;

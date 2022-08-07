import { Button, ButtonGroup, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Profile = () => {
  return (
    <>
      <div className="profileDetails">
        <div className="top">
          <video preload="auto" autoplay={"autoplay"} loop muted>
            <source src="./assets/video/bg.mp4" />
          </video>
        </div>
        <div className="middle">
          <img src="./assets/images/profile.jpg" alt="" />
        </div>
        <div className="end">
          <Stack spacing={1} textAlign="center" marginTop="35px">
            <Typography variant="h3">Manikandan M</Typography>
            <Typography variant="h6">web developer</Typography>
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
        </div>
      </div>
    </>
  );
};

export default Profile;

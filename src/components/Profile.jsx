import { Button, ButtonGroup, Stack, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <>
      <div className="profileDetails">
        <div className="top">
          <video preload="auto" autoplay={"autoplay"} loop muted>
            <source src="https://player.vimeo.com/external/357563488.sd.mp4?s=b1cfbc7c4eb11d8a10dc5dfe36ed63466cb3da61&profile_id=164&oauth2_token_id=57447761" />
          </video>
        </div>
        <div className="middle">
          <img src="./assets/images/123.jpeg" alt="" />
        </div>
        <div className="end">
          <Stack spacing={2}>
            <Typography variant="h3" className="text-center ">
              Manikandan M
            </Typography>
            <Typography variant="h6" className="text-center text-warning">
              web developer
            </Typography>
          </Stack>
        </div>
        <div className="super_end">
          <Stack direction="row" align="center" justifyContent="space-around">
            <Typography variant="h5" className="text-center">
              click
            </Typography>
            <Typography variant="h5" className="text-center text-warning">
              click
            </Typography>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Profile;

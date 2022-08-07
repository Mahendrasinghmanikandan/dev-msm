import React from "react";
import Avatar from "@mui/material/Avatar";
import { Stack, Typography } from "@mui/material";

const Educations = ({ Icons, primaryText, secondaryText }) => {
  return (
    <div>
      <Stack direction="row" gap="20px" alignItems="center">
        <span>
          <Avatar className="education-icons">
            <Icons />
          </Avatar>
        </span>
        <span>
          <Typography variant="h5">{primaryText}</Typography>
          <Typography variant="body1">{secondaryText}</Typography>
        </span>
      </Stack>
    </div>
  );
};

export default Educations;

import React from "react";
import Avatar from "@mui/material/Avatar";
import { Stack, Typography } from "@mui/material";

const Educations = ({ Icons, primaryText, secondaryText }) => {
  return (
    <div>
      <Stack direction="row" gap="20px" alignItems="start">
        <span>
          <Avatar className="education-icons">
            <Icons />
          </Avatar>
        </span>
        <span>
          <Typography variant="h6">{primaryText}</Typography>
          <Typography variant="body2">{secondaryText}</Typography>
        </span>
      </Stack>
    </div>
  );
};

export default Educations;

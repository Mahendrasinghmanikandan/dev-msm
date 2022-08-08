import React from "react";
import Avatar from "@mui/material/Avatar";
import { Stack, Typography } from "@mui/material";

const Experience = ({
  Icons,
  primaryText,
  secondaryText,
  extraPrimary,
  extraSecondaryText,
}) => {
  return (
    <div>
      <Stack direction="row" gap="20px" alignItems="start">
        <span>
          <Avatar className="education-icons">
            <Icons />
          </Avatar>
        </span>
        <Stack spacing={1}>
          <span>
            <Typography variant="h5">
              {primaryText}
              <Typography variant="p" sx={{ fontSize: "17px" }}>
                {extraPrimary}
              </Typography>
            </Typography>
            <Typography variant="body2">{secondaryText}</Typography>
          </span>
          <span>
            <Typography variant="body1" sx={{ textAlign: "start" }}>
              {extraSecondaryText}
            </Typography>
          </span>
        </Stack>
      </Stack>
    </div>
  );
};

export default Experience;

import { Avatar, Rating, Stack, Typography } from "@mui/material";
import React from "react";

const Skills = ({ language, range, logo }) => {
  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" gap="10px">
          <Avatar src={logo} alt="" sx={{ width: 40, height: 40 }} />
          <Typography variant="h5" sx={{ fontWeight: "500" }}>
            {language}
          </Typography>
        </Stack>
        <Typography variant="h6">
          <Rating value={range} readOnly sx={{ color: "#78cc6d" }} />
        </Typography>
      </Stack>
    </div>
  );
};

export default Skills;

import { IconButton, Typography } from "@material-ui/core";
import React from "react";

function InputOption({ icon, type, color }) {
  return (
    <>
      <IconButton style={{ color: `${color}` }}>{icon}</IconButton>
      <Typography variant="caption" style={{ fontWeight: "bold" }}>
        {type}
      </Typography>
    </>
  );
}

export default InputOption;

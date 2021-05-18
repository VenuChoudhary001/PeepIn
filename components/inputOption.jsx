import { IconButton, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ImageUpload from "../helpers/imageUpload";
function InputOption({ icon, type, color, bucket }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton style={{ color: `${color}` }} onClick={() => setOpen(!open)}>
        {icon}
      </IconButton>
      <Typography
        variant="caption"
        // className="px-1"
        style={{ fontWeight: "bold" }}
      >
        {type}
      </Typography>
      {type == "Photo" ? (
        <ImageUpload open={open} close={setOpen} bucket={bucket} />
      ) : (
        ""
      )}
    </>
  );
}

export default InputOption;

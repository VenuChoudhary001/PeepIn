import { Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
function CreatePostModal() {
  return (
    <div style={{ backgroundColor: "#fff", width: "100%" }}>
      <Grid container justify="flex-start" alignItems="center">
        <Grid item container justify="space-between" alignItems="center">
          <Grid item>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5">Create Post</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default CreatePostModal;

import { Grid, Container } from "@material-ui/core";
import React from "react";

function Thumbnails({ image, content }) {
  return (
    <>
      <Grid item xs={4} sm={4} className="mb-4">
        <div className="thumbnail__root">
          <div className="thumbnail__content">{content}</div>
          <img src={image} className="thumbnail__image" />
        </div>
      </Grid>
    </>
  );
}

export default Thumbnails;

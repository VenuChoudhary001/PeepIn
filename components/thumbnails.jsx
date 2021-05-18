import { Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect, useContext } from "react";
import { db } from "../lib/firebase";
import Loading from "./loading";

function Thumbnails({ id }) {
  const [thumbs, setThumbs] = useState();
  useEffect(() => {
    db.collection("posts").onSnapshot((querySnapshot) => {
      setThumbs(
        querySnapshot.docs.map((item) => {
          if (item.data().creator === id) return item.data();
        })
      );
    });
  }, []);
  if (!thumbs) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      {thumbs.map((item) => {
        if (item) {
          return (
            <Grid item xs={12} sm={4} className="mb-4">
              <div className="thumbnail__root">
                <div className="thumbnail__content">
                  <Typography variant="subtitle1">{item.content}</Typography>
                </div>
                <img
                  src={item.image || "/thumbs.png"}
                  className="thumbnail__image"
                />
              </div>
            </Grid>
          );
        }
      })}
    </>
  );
}

export default Thumbnails;

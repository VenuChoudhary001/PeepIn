import {
  Button,
  Dialog,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { storage, db } from "../lib/firebase";
import ProfileContext from "../context/user";
import { v4 as uuidv4 } from "uuid";
import ALL_POSTS from "../context/post-context";
function ImageUpload({ open, close, bucket }) {
  const [file, setFile] = useState();
  const [url, setURL] = useState();
  const { user, setUser } = useContext(ProfileContext);
  const { myPost, setMyPost, setPicURL } = useContext(ALL_POSTS);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      let storageRef = storage.ref();
      let uploadTask = storageRef.child(`${bucket}/${uuidv4()}`).put(file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("File available at", downloadURL);
            if (bucket == "profile") {
              db.collection("Users")
                .doc(user.uid)
                .set({
                  ...user,
                  imageURL: downloadURL,
                });
              setUser({
                ...user,
                imageURL: downloadURL,
              });
            }

            if (bucket === "post") {
              setPicURL(downloadURL);
              console.log("This is from imageUpload :", myPost);
            }
          });
        }
      );
      close(false);
    }
  };

  return (
    <>
      <Dialog fullWidth maxWidth="sm" onClose={() => close(false)} open={open}>
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          direction="column"
          spacing={2}
          className="px-2 my-1"
        >
          <Grid item container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6">Uplaod Image</Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={() => close(false)}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Grid item>
            <input
              type="file"
              className="image__upload"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Grid>
          <Grid item>
            <Typography variant="caption" style={{ color: "red" }}>
              ***DO not upload images of size greater than 1MB
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              style={{ color: "#fff" }}
              disabled={file ? false : true}
              onClick={handleSubmit}
            >
              Upload
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}

export default ImageUpload;

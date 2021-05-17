import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useState, useContext } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { db } from "../lib/firebase";
import ProfileContext from "../context/user";
function UploadText({ open, close, type }) {
  const [content, setContent] = useState();
  const { setUser, user } = useContext(ProfileContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (type == "bio") {
      db.collection("Users")
        .doc(user.uid)
        .set({
          ...user,
          bio: content,
        });
      setUser({ ...user, bio: content });
      close(false);
      setContent("");
    }
  };

  return (
    <>
      <Dialog
        onClose={() => close(false)}
        open={open}
        style={{ width: "50%", height: "auto", margin: "1px auto" }}
        maxWidth="sm"
        fullWidth
      >
        {" "}
        <DialogContent>
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            // direction="column"
            spacing={1}
          >
            <Grid
              item
              container
              justify="space-between"
              alignItems="center"
              xs={12}
            >
              <Grid item>
                <Typography variant="h6">UPDATE</Typography>
              </Grid>
              <Grid item>
                <IconButton onClick={() => close(false)}>
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
            <hr style={{ border: "1px solid grey", width: "100%" }} />
            <Grid item container xs={12}>
              <textarea
                className="post__modal__input"
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Type here"
              />
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                style={{ color: "#fff" }}
                disabled={content ? false : true}
                onClick={handleUpdate}
              >
                UPDATE
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default UploadText;

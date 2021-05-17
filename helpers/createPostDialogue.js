import { Button, Dialog, Grid, Typography } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import InputOption from "../components/inputOption";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import VideocamIcon from "@material-ui/icons/Videocam";
import ALL_POSTS from "../context/post-context";
import { db, serverTime } from "../lib/firebase";
import ProfileContext from "../context/user";
import { v4 as uuidv4 } from "uuid";

function CreatePostDialogue({ open, close }) {
  const [content, setContent] = useState();

  const { myPost, setMyPost, setAllPost, allPost, picURL } = useContext(
    ALL_POSTS
  );

  const { user } = useContext(ProfileContext);

  const handlePost = () => {
    setMyPost({
      uid: uuidv4(),
      creator: user.uid,
      content: content,
      image: picURL ? picURL : null,
      publishedAt: serverTime(),
      share: {
        shareCount: "",
        shareLink: "",
      },
      likes: {
        likesCount: "",
        usersLiked: [],
      },
      comments: [],
    });
    setContent();
    console.log("This is my post", myPost);
    close(false);
  };
  useEffect(() => {
    if (myPost) {
      console.log("From use effect create post", myPost);

      db.collection("posts").add({ ...myPost });

      setMyPost();
    }
  }, [myPost]);
  return (
    <div>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={() => close(false)}>
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          className="my-2 py-2 px-2"
        >
          <Grid
            item
            xs={12}
            container
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h6">CREATE POST</Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                className="mx-1"
                style={{ color: "#fff" }}
                onClick={() => close(false)}
              >
                DISCard
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                disabled={content ? false : true}
                style={{ color: "#fff" }}
                onClick={handlePost}
              >
                POST
              </Button>
            </Grid>
          </Grid>
          <hr
            style={{
              border: "1px solid black",
              width: "100%",
              backgroundColor: "grey",
            }}
          />
          <Grid item xs={12}>
            <textarea
              rows={8}
              className=""
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="post__modal__input"
              placeholder="Type here"
            />
          </Grid>
          <Grid item xs={12} container justify="flex-start" alignItems="center">
            <Grid item>
              <InputOption
                icon={<PhotoSizeSelectActualIcon />}
                type="Photo"
                color="rgb(29,161,242)"
                bucket="post"
              />
            </Grid>
            <Grid item>
              <InputOption
                icon={<VideocamIcon />}
                type="Video"
                color="rgb(127,193,94)"
                bucket="post"
              />
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}

export default CreatePostDialogue;

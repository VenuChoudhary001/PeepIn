import {
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import InputOption from "../../components/inputOption";
import VideocamIcon from "@material-ui/icons/Videocam";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import Link from "next/link";
import ALL_POSTS from "../../context/post-context";
import ProfileContext from "../../context/user";
import { db, serverTime } from "../../lib/firebase";
import { useRouter } from "next/router";
function PostModal() {
  const route = useRouter();
  const { myPost, setMyPost, setAllPost, allPost, picURL } =
    useContext(ALL_POSTS);

  const { user } = useContext(ProfileContext);
  const [content, setContent] = useState();
  if (!user) {
    return (
      <>
        <Container
          className=" my-4 py-2 text-center"
          style={{ margin: "1px auto" }}
        >
          <Typography variant="h5">
            Oops...Seems you aren't logged in...Please Log In
          </Typography>
          <Link href="/login">
            <Typography
              variant="body1"
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              LOG IN
            </Typography>
          </Link>
          <Link href="/signup">
            <Typography
              variant="body1"
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Create new account
            </Typography>
          </Link>
        </Container>
      </>
    );
  }

  const handlePost = () => {
    setMyPost({
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
  };
  useEffect(() => {
    if (myPost) {
      db.collection("posts").add({
        ...myPost,
      });
      setMyPost();
      route.replace("/home/home");
    }
  }, [myPost]);

  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "100%",
        margin: "1px auto",
        maxWidth: "800px",
        height: window.innerHeight,
      }}
    >
      <Container>
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          direction="row"
        >
          <Grid
            item
            container
            justify="space-between"
            alignItems="center"
            xs={12}
          >
            <Grid item>
              <Link href="/home/home">
                <IconButton>
                  <ArrowBackIcon />
                </IconButton>
              </Link>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                disabled={content ? false : true}
                size="small"
                style={{ color: "#fff" }}
                onClick={handlePost}
              >
                POSt
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <div>
              <textarea
                className="post__modal__input"
                type="text"
                rows={10}
                placeholder="Share your thoughts . Add photos or videos"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </Grid>
          <Grid item container xs={12} justify="flex-start" alignItems="center">
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
              />
            </Grid>
            {/* <Grid item>
              <InputOption
                icon={<ArtTrackIcon />}
                type="Write an article"
                color="rgb(245,152,126)"
              />
            </Grid> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PostModal;

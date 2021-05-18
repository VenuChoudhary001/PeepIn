import {
  Avatar,
  Grid,
  Typography,
  Container,
  makeStyles,
  Icon,
  IconButton,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import {
  addArray,
  db,
  increment,
  removeArray,
  serverTime,
} from "../lib/firebase";
import ProfileContext from "../context/user";
import Loading from "./loading";
const useStyles = makeStyles((theme) => ({
  largeAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

function Post({ data }) {
  const classes = useStyles();
  const [avatar, setAvatar] = useState();
  const { user } = useContext(ProfileContext);
  const [like, setLike] = useState(true);
  const [showComment, setShowComment] = useState(false);
  const [myComment, setMyComment] = useState();
  const [allCommetns, setAllComments] = useState();
  const [postComment, setPostComment] = useState(false);
  const { likes } = data;
  const { likesCount, usersLiked } = likes;

  useEffect(() => {
    db.collection("Users")
      .doc(data.creator)
      .get()
      .then((doc) => {
        setAvatar({ ...doc.data() });
      });
    if (data.likes.usersLiked) {
      data.likes.usersLiked.forEach((item) => {
        if (item === user.uid) setLike(!like);
      });
    }
  }, []);

  if (!avatar) {
    return (
      <>
        <Loading />
      </>
    );
  }

  const handleLike = () => {
    setLike(!like);
    db.collection("posts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().uid === data.uid) {
            db.collection("posts")
              .doc(doc.id)
              .update({
                likes: {
                  likesCount: like
                    ? increment(likesCount + 1)
                    : increment(likesCount - 1),
                  usersLiked: like
                    ? [...usersLiked, user.uid]
                    : removeArray(user.uid),
                },
              });
          }
        });
      });
  };
  const updateComment = (e) => {
    e.preventDefault();
    db.collection("posts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().uid === data.uid) {
            db.collection("posts")
              .doc(doc.id)
              .update({
                comments: addArray({
                  user: user.uid,
                  content: myComment,
                  userName: user.userName,
                }),
              });
          }
        });
      });

    setMyComment();
    setShowComment(!showComment);
  };
  const handleComment = () => {
    setShowComment(!showComment);
    db.collection("posts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().uid === data.uid) {
            db.collection("posts")
              .doc(doc.id)
              .get()
              .then((querySnapshot) => {
                setAllComments(querySnapshot.data().comments);
              });
          }
        });
      });
  };

  return (
    <>
      <div className="post__container my-2 pt-3">
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          direction="column"
          spacing={2}
        >
          <Container className="my-1">
            <Grid
              item
              container
              justify="flex-start"
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <Avatar
                  src={avatar.imageURL}
                  className={classes.largeAvatar}
                  alt={avatar.userName}
                />
              </Grid>
              <Grid item xs>
                <Link href={`/profile/${avatar.uid}`}>
                  <Typography variant="subtitle1" style={{ cursor: "pointer" }}>
                    {avatar.userName}
                  </Typography>
                </Link>
                <Typography variant="body2" style={{ lineHeight: "0.95" }}>
                  {avatar.bio}
                </Typography>
                <Typography variant="caption">
                  {data.publishedAt
                    ? new Date(data.publishedAt.toMillis()).toDateString()
                    : "Just now"}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography>{data.content}</Typography>
            </Grid>
          </Container>
          <Grid item className="post__image__container">
            {data.image !== null ? (
              <img
                src={data.image}
                alt="hi"
                className="post__image"
                onDoubleClick={handleLike}
              />
            ) : (
              ""
            )}
          </Grid>
          <Container>
            <Grid
              item
              container
              justify="space-between"
              alignItems="center"
              direction="row"
              className="my-1"
            >
              <Grid item>
                <Icon color="secondary">
                  <FavoriteIcon style={{ fontSize: "20", color: "black" }} />
                </Icon>
                <Typography variant="caption" style={{ fontWeight: "bold" }}>
                  {data.likes.likesCount > 0 ? data.likes.likesCount : 0}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ fontWeight: "bold" }}>
                  {data.comments ? data.comments.length : 0} comments
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
              className="mx-1 text-center pb-1 mb-1"
            >
              <Grid item xs={4}>
                <IconButton onClick={handleLike}>
                  {like ? (
                    <FavoriteBorderIcon />
                  ) : (
                    <FavoriteIcon style={{ color: "red", border: "none" }} />
                  )}
                </IconButton>

                <Typography variant="caption">Like</Typography>
              </Grid>
              <Grid item xs={4}>
                <IconButton onClick={handleComment}>
                  <MessageOutlinedIcon />
                </IconButton>

                <Typography variant="caption">Comment</Typography>
              </Grid>
              <Grid item xs={4}>
                <IconButton>
                  <ShareOutlinedIcon />
                </IconButton>

                <Typography variant="caption">Share</Typography>
              </Grid>
            </Grid>
            {showComment ? (
              <Grid
                item
                justify="flex-start"
                alignItems="center"
                container
                className="my-1"
              >
                {allCommetns
                  ? allCommetns.map((item) => (
                      <Grid
                        item
                        container
                        justify="flex-start"
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item>
                          <Typography variant="h6" style={{ fontSize: "1rem" }}>
                            {item.userName}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="caption"
                            style={{ fontWeight: 600 }}
                          >
                            {item.content}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))
                  : ""}

                <Grid
                  item
                  container
                  justify="flex-start"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item xs={9}>
                    <input
                      type="text"
                      value={myComment}
                      onChange={(e) => setMyComment(e.target.value)}
                      className="post__comment__input mx-1 px-2"
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <Button
                      variant="contained"
                      color="secondary"
                      disableElevation
                      size="small"
                      style={{ color: "#fff", margin: "1px 1px" }}
                      onClick={updateComment}
                    >
                      POST
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              ""
            )}
          </Container>
        </Grid>
      </div>
    </>
  );
}

export default Post;

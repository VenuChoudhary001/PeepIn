import {
  Avatar,
  Grid,
  Typography,
  Container,
  makeStyles,
  Icon,
  IconButton,
} from "@material-ui/core";
import React from "react";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
const useStyles = makeStyles((theme) => ({
  largeAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

function Post() {
  const classes = useStyles();
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
                  src="https://source.unsplash.com/random"
                  className={classes.largeAvatar}
                  alt="Venu"
                />
              </Grid>
              <Grid item xs>
                <Typography variant="subtitle1">Venu Choudhary</Typography>
                <Typography variant="body2" style={{ lineHeight: "0.95" }}>
                  Front End Web developer, Freshman@NIT Durgapur
                </Typography>
                <Typography variant="caption">1d</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                consequatur cumque culpa mollitia totam incidunt porro sequi
                quae earum itaque!
              </Typography>
            </Grid>
          </Container>
          <Grid item>
            <img
              src="https://source.unsplash.com/random"
              alt="hi"
              className="post__image"
            />
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
                  <ThumbUpOutlinedIcon
                    style={{ fontSize: "20" }}
                    // color="secondary"
                  />
                </Icon>
                <Typography variant="caption" style={{ fontWeight: "bold" }}>
                  21
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ fontWeight: "bold" }}>
                  2 comments
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
              className="mx-2 text-center pb-1 mb-1"
            >
              <Grid item xs={4}>
                <IconButton>
                  <ThumbUpOutlinedIcon />
                </IconButton>

                <Typography variant="caption">Like</Typography>
              </Grid>
              <Grid item xs={4}>
                <IconButton>
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
          </Container>
        </Grid>
      </div>
    </>
  );
}

export default Post;

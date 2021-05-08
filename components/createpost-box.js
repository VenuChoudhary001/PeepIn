import React from "react";
import {
  Avatar,
  Container,
  Grid,
  Icon,
  useMediaQuery,
  useTheme,
  makeStyles,
} from "@material-ui/core";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import InputOption from "../components/inputOption";
import VideocamIcon from "@material-ui/icons/Videocam";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import Link from "next/link";
const useStyles = makeStyles((theme) => ({
  largeAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
function CreatePost() {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = useStyles();
  return (
    <>
      {!smUp ? (
        <div className="home__share__thoughts mt-2 px-2 py-2 mb-0  ">
          <Grid container justify="flex-start" alignItems="flex-start">
            <Grid item>
              <Icon>
                <EmojiFoodBeverageIcon />
              </Icon>
            </Grid>
            <Grid item xs>
              <Link href="/home/post-modal">
                <input
                  type="text"
                  placeholder="Share your thoughts"
                  className="mx-2 px-2 py-1 home__share__thoughts__input"
                />
              </Link>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div className="home__share__thoughts  mt-2 px-2 py-2 mb-0 ">
          <Container>
            <Grid
              container
              justify="flex-start"
              alignItems="center"
              direction="column"
              spacing={2}
            >
              <Grid item container justify="flex-start" alignItems="flex-start">
                <Grid item>
                  <Avatar
                    src="https://source.unsplash.com/random"
                    alt="venu"
                    className={classes.largeAvatar}
                  />
                </Grid>
                <Grid item xs>
                  <input
                    type="text"
                    className="home__share__thoughts__input__wide__screen mx-2 px-3"
                    placeholder="Start a post"
                  />
                </Grid>
                <hr style={{ border: "1px solid grey" }} />
              </Grid>
              <Grid
                item
                container
                justify="space-evenly"
                alignItems="flex-start"
              >
                <Grid item>
                  <InputOption
                    icon={<PhotoSizeSelectActualIcon />}
                    type="Photo"
                    color="rgb(29,161,242)"
                  />
                </Grid>
                <Grid item>
                  <InputOption
                    icon={<VideocamIcon />}
                    type="Video"
                    color="rgb(127,193,94)"
                  />
                </Grid>
                <Grid item>
                  <InputOption
                    icon={<ArtTrackIcon />}
                    type="Write an article"
                    color="rgb(245,152,126)"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      )}
    </>
  );
}

export default CreatePost;

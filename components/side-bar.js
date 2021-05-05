import {
  Grid,
  Container,
  Avatar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  rootAvatar: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    position: "absolute",
    top: "40%",
    left: "35%",
  },
  root: {
    position: "relative",
  },
}));

function SideBar({ imageURL, user, bio }) {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <div className="side__bar__root mt-3">
          <Grid
            container
            // justify="flex-start"
            // alignItems="center"
            direction="column"
            className="text-center"
          >
            <Grid item xs={12}>
              <div className="side__bar__avatar ">
                <div className="side__bar__avatar__background"></div>
                <Avatar
                  src={imageURL}
                  alt="user"
                  className={classes.rootAvatar}
                  //   style={{ position: "absolute", top: "50%", left: "50%" }}
                />
              </div>
            </Grid>
            <Grid item>
              <Typography variant="h6" className="mx-1">
                {user}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" className="mx-1">
                {bio}
              </Typography>
            </Grid>
            <hr style={{ border: "2px solid darkgrey" }} />
            <Grid
              item
              container
              justify="space-between"
              className="px-2 mb-2"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="caption" style={{ fontWeight: "bold" }}>
                  Connections
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="caption"
                  style={{ color: "rgb(29,161,242)", fontWeight: "bold" }}
                >
                  47
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default SideBar;

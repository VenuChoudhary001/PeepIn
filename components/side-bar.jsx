import {
  Grid,
  Container,
  Avatar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import ProfileContext from "../context/user";
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

function SideBar({ imageURL, user, bio, connections }) {
  const classes = useStyles();
  const route = useRouter();
  const { setUser } = useContext(ProfileContext);
  const handleSignOut = (e) => {
    e.preventDefault();
    setUser();
    route.replace("/login");
  };

  return (
    <>
      <Container className={classes.root}>
        <div className="side__bar__root mt-3">
          <Grid container direction="column" className="text-center">
            <Grid item xs={12}>
              <div className="side__bar__avatar ">
                <div className="side__bar__avatar__background"></div>
                <Avatar
                  src={imageURL}
                  alt={user}
                  className={classes.rootAvatar}
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
                  {connections}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                style={{ backgroundColor: "#123456", color: "#fff" }}
                className="my-2"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default SideBar;

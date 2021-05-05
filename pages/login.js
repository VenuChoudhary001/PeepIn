import React from "react";
import { Button, Container, Grid, Icon, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import MailIcon from "@material-ui/icons/Mail";
import Link from "next/link";
import LockIcon from "@material-ui/icons/Lock";
const useStyles = makeStyles((theme) => ({
  iconButton: {
    "& .MuiSvgIcon-root": {
      fontSize: "4rem",
      animationName: "$rotate",
      animationIterationCount: "infinite",
    },
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  "@keyframes rotate": {
    from: { transition: "all 0.225s linear", transform: "rotate(180deg)" },
    to: { transition: "all 0.225s linear", transform: "rotate(360deg)" },
  },
}));

function Login() {
  const classes = useStyles();
  return (
    <>
      <Container className="my-4 py-4">
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          direction="row"
        >
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            direction="column"
            spacing={2}
          >
            <Grid item>
              {/* <Icon
                color="secondary"
                fontSize="100"
                className={classes.iconButton}
              >
                <ControlCameraIcon className="logo" />
              </Icon> */}
              <img
                src="/welcome-sign-in.png"
                alt="welcome"
                className="sign__up__image"
              />
              <hr style={{ border: "2px solid darkgrey" }} />
            </Grid>
            <Grid item>
              {/* <Typography variant="h4">Log In</Typography> */}
              <hr />
            </Grid>
            <Grid
              item
              container
              justify="center"
              spacing={2}
              alignItems="center"
            >
              <Grid item>
                <Icon>
                  <MailIcon style={{ fontSize: "30" }} />
                </Icon>
              </Grid>
              <Grid item>
                <input
                  type="email"
                  className="login__input"
                  placeholder="email"
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              justify="center"
              spacing={2}
              alignItems="center"
            >
              <Grid item>
                <Icon>
                  <LockIcon style={{ fontSize: "30" }} />
                </Icon>
              </Grid>
              <Grid item>
                <input
                  type="password"
                  className="login__input"
                  placeholder="password"
                />
              </Grid>
            </Grid>
            <Grid item className="my-3 text-center">
              <Button
                color="secondary"
                variant="contained"
                style={{ color: "white" }}
                fullWidth
                className="mb-3"
              >
                LOG IN
              </Button>
              <Typography variant="subtitle2">
                Do not have an account?
              </Typography>
              <Link href="/signup">
                <Typography
                  variant="subtitle1"
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Create one
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Login;

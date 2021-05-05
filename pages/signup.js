import { Button, Container, Grid, Icon, Typography } from "@material-ui/core";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import MailIcon from "@material-ui/icons/Mail";
import Link from "next/link";

function Signup() {
  return (
    <div>
      <Container>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          spacing={2}
        >
          <Grid item>
            <img
              src="/welcome-sign-in.png"
              alt="welcome"
              className="sign__up__image"
            />
            <hr style={{ border: "2px solid darkgrey" }} />
          </Grid>
          <Grid item>
            <Typography variant="h4">Sign Up</Typography>
            <hr style={{ border: "2px solid darkgrey" }} />
          </Grid>
          <Grid item container justify="center" alignItems="center" spacing={2}>
            <Grid item>
              <Icon>
                <AccountCircleIcon style={{ fontSize: "30" }} />
              </Icon>
            </Grid>
            <Grid item>
              <input type="text" className="sign__up__input" />
            </Grid>
          </Grid>
          <Grid item container justify="center" alignItems="center" spacing={2}>
            <Grid item>
              <Icon>
                <MailIcon style={{ fontSize: "30" }} />
              </Icon>
            </Grid>
            <Grid item>
              <input type="email" className="sign__up__input" />
            </Grid>
          </Grid>
          <Grid item container justify="center" alignItems="center" spacing={2}>
            <Grid item>
              <Icon>
                <LockIcon style={{ fontSize: "30" }} />
              </Icon>
            </Grid>
            <Grid item>
              <input type="password" className="sign__up__input" />
            </Grid>
          </Grid>
          <Grid item className="text-center">
            <Button
              variant="contained"
              style={{ color: "white" }}
              fullWidth
              color="secondary"
              className="mb-3"
            >
              SIGN IN
            </Button>
            <Typography variant="subtitle2">
              Already have an account?
            </Typography>
            <Link href="login">
              <Typography
                variant="subtitle1"
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Log In
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Signup;

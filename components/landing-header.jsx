import {
  AppBar,
  Button,
  Container,
  Grid,
  Icon,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import { useRouter } from "next/router";
const useStyles = makeStyles((theme) => ({
  iconButton: {
    "& .MuiSvgIcon-root": {
      fontSize: "2.4rem",
      fontWeight: "bold",
    },
  },
}));
function LandingHeader() {
  const classes = useStyles();
  const route = useRouter();
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        style={{ backgroundColor: "transparent" }}
      >
        <Toolbar>
          <Container>
            <Grid container justify="space-between" alignItems="center">
              <Grid item container xs justify="flex-start" alignItems="center">
                {/* <Grid item>
                  <Icon color="secondary" className={classes.iconButton}>
                    <ControlCameraIcon />
                  </Icon>
                </Grid> */}
                <Grid item>
                  <Link href="/">
                    <Typography variant="h3" style={{ cursor: "pointer" }}>
                      Peep
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h3"
                    color="secondary"
                    // style={{ fontWeight: "700" }}
                  >
                    In
                  </Typography>
                </Grid>
              </Grid>

              <Grid item className="d-flex">
                {/* <button className="header__button">Sign In</button> */}

                {route.pathname == "/login" ? (
                  <Link href="/signup">
                    <Button variant="outlined" color="secondary">
                      SIGN UP
                    </Button>
                  </Link>
                ) : (
                  <Link href="/login">
                    <Button variant="outlined" color="secondary">
                      SIGN IN
                    </Button>
                  </Link>
                )}
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default LandingHeader;

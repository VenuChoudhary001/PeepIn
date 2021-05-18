import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import Link from "next/link";
function NavWideScreen() {
  const useStyles = makeStyles({
    root: {
      marginLeft: "auto",
    },
    iconButton: {
      "& .MuiSvgIcon-root": {
        fontSize: "2rem",
      },
    },
    tabsGrid: {
      color: "darkgrey",
      marginLeft: "auto",
      "& .MuiGrid-item": {
        marginTop: 0,
        paddingTop: 0,
        "&:hover": {
          transition: "all 0.2s ease-in",
          // borderBottom: "2px solid black",
          cursor: "pointer",
          color: "black",
          fontWeight: "bolder",
        },
        "&:active": {
          // borderBottom: "2px solid black",
        },
      },
      "& .MuiSvgIcon-root": {
        color: "#686565",
        "&:hover": {
          color: "black",
        },
      },
    },
  });
  const classes = useStyles();
  return (
    <>
      <AppBar position="sticky" className={classes.appBarRoot}>
        <Toolbar>
          <Container className="mx-4 px-4">
            <Grid
              container
              justify="center"
              alignItems="center"
              spacing={1}
              className={classes.root}
            >
              <Grid
                item
                xs
                container
                justify="flex-start"
                alignItems="center"
                // className="d-flex"
              >
                <Grid item>
                  <Link href="/home">
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
              <Grid item xs={4}>
                <input
                  type="text"
                  placeholder="search"
                  className="search__input"
                />
              </Grid>
              <Grid item>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </Grid>

              <Grid
                item
                xs
                container
                justify="space-evenly"
                alignItems="center"
                className={classes.tabsGrid}
              >
                <Grid item className="text-center" xs={4}>
                  <Link href="/home/home">
                    <HomeIcon />
                  </Link>
                  <Typography variant="body2">Home</Typography>
                </Grid>
                <Grid item className="text-center" xs={4}>
                  <Link href="/network">
                    <SupervisorAccountIcon />
                  </Link>

                  <Typography variant="body2">My Network</Typography>
                </Grid>

                <Grid item className="text-center" xs={4}>
                  <Link href="/profile/account">
                    <AccountCircleIcon />
                  </Link>

                  <Typography variant="body2">Me</Typography>
                </Grid>
              </Grid>
              {/* <Grid item xs></Grid> */}
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavWideScreen;

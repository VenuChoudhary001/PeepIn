import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
  Icon,
  IconButton,
  makeStyles,
  Box,
} from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/Add";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";

import Link from "next/link";
function NavWideScreen() {
  const useStyles = makeStyles((theme) => ({
    root: {
      marginLeft: "auto",
    },
    iconButton: {
      "& .MuiSvgIcon-root": {
        fontSize: "2rem",
      },
    },
    tabsGrid: {
      marginRight: "auto",
      "& .MuiGrid-item": {
        marginTop: 0,
        paddingTop: 0,
        "&:hover": {
          transition: "all 0.2s ease-in",
          // borderBottom: "2px solid black",
          cursor: "pointer",
          color: "black",
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
  }));
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
              <Grid item>
                <Icon color="secondary" className={classes.iconButton}>
                  <ControlCameraIcon />
                </Icon>
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
              {/* <Grid item xs></Grid> */}
              <Grid
                item
                xs
                container
                justify="space-evenly"
                alignItems="center"
                className={classes.tabsGrid}
              >
                <Grid item className="text-center" xs={4}>
                  <Link href="/">
                    <HomeIcon />
                  </Link>
                  {/* <Typography variant="body2">Home</Typography> */}
                </Grid>
                <Grid item className="text-center" xs={4}>
                  <SupervisorAccountIcon />

                  {/* <Typography variant="body2">My Network</Typography> */}
                </Grid>

                <Grid item className="text-center" xs={4}>
                  <Link href="/profile/account">
                    <AccountCircleIcon />
                  </Link>

                  {/* <Typography variant="body2">Me</Typography> */}
                </Grid>
              </Grid>
              <Grid item xs></Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavWideScreen;

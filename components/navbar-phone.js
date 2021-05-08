import {
  AppBar,
  Container,
  Fab,
  Grid,
  Icon,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/Add";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Link from "next/link";
function Navbar() {
  const [active, setActive] = useState();
  const useStyles = makeStyles({
    appBarRoot: {
      zIndex: 99,
      top: "auto",
      bottom: 0,
      "& .MuiIconButton-root": {
        "&:hover": {
          color: "black",
        },
        "&:active": {
          color: "black",
        },
      },
    },
    iconButton: {
      "& .MuiSvgIcon-root": {
        fontSize: "1.8rem",
      },
    },
    tabsGrid: {
      "& .MuiGrid-item": {
        marginTop: 0,
        paddingTop: 0,
        "&:hover": {
          transition: "all 0.2s ease-in",
          borderTop: "2px solid black",
        },
        "&:active": {
          borderTop: "2px solid black",
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
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="center" alignItems="center" spacing={1}>
            <Grid item>
              <Icon color="secondary" className={classes.iconButton}>
                <ControlCameraIcon />
              </Icon>
            </Grid>
            <Grid item xs>
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
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar position="fixed" className={classes.appBarRoot} elevation={8}>
        <Toolbar>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.tabsGrid}
          >
            <Grid item xs={4} className="text-center">
              <Link href="/home/home">
                <HomeIcon />
              </Link>
              <Typography variant="subtitle2">Home</Typography>
            </Grid>
            <Grid item xs={4} className="text-center">
              <SupervisorAccountIcon />

              <Typography variant="subtitle2">My Network</Typography>
            </Grid>

            <Grid item xs={4} className="text-center">
              <Link href="/profile/account">
                <AccountCircleIcon />
              </Link>

              <Typography variant="subtitle2">Me</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* <div className="navbar__fab">
        <Fab color="secondary">
          <AddIcon style={{ color: "#fff" }} />
        </Fab>
      </div> */}
    </>
  );
}

export default Navbar;

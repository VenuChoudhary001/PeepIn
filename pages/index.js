import { Grid, Typography } from "@material-ui/core";
import React from "react";
import LandingHeader from "../components/landing-header";
import Link from "next/link";
function Landing() {
  return (
    <div style={{ backgroundColor: "#fff", height: "750px" }}>
      <LandingHeader />
      {/* <hr style={{ border: "3px solid darkgrey" }} /> */}
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        className="my-2 py-2"
      >
        <Grid item xs={12} className="text-center">
          <Typography
            variant="h6"
            color="secondary"
            style={{ fontWeight: "bold" }}
          >
            Open JOBS.People Hiring !
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="/landing-page.png" className="landing__page__image" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          justify="flex-start"
          alignItems="center"
          direction="column"
          className="text-center my-4 py-2"
        >
          <Grid item>
            <Typography
              variant="h4"
              color="secondary"
              // style={{ fontWeight: "bold" }}
            >
              Welcome to Our Community
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" color="secondary">
              Let the right people know you’re open to work{" "}
              {/* <Typography variant="body1">
                Join your colleagues, classmates, and friends on PeepIn.
              </Typography> */}
            </Typography>
          </Grid>
          <Grid item className="my-2 py-2">
            <Link href="/signup">
              <button className="header__button">JOIN US</button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;

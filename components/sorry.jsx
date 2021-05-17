import { Typography } from "@material-ui/core";
import React from "react";
import Link from "next/link";
function Sorry() {
  return (
    <div>
      <div className="sorry__image__root">
        <img src="/sorry-page.png" className="sorry__background" />
      </div>
      <div className="sorry__content text-center">
        <Typography variant="h5">
          Oops...Seems you aren't logged in !
        </Typography>
        <Link href="/login">
          <Typography
            variant="h5"
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Log In
          </Typography>
        </Link>
        <Link href="/signup">
          <Typography
            variant="h5"
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Sign Up
          </Typography>
        </Link>
      </div>
    </div>
  );
}

export default Sorry;

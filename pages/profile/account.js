import { Container, Grid } from "@material-ui/core";
import React from "react";
import AccountHeader from "../../components/account-header";
import Post from "../../components/post";
import Thumbnails from "../../components/thumbnails";

function Account() {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <AccountHeader />
        </Grid>
        <Container>
          <div className="mb-2">
            <Grid
              item
              container
              justify="flex-start"
              alignItems="center"
              direction="row"
            ></Grid>
          </div>
        </Container>
      </Grid>
    </>
  );
}

export default Account;

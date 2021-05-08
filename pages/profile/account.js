import { Container, Grid } from "@material-ui/core";
import React from "react";
import AccountHeader from "../../components/account-header";
import Post from "../../components/post";
import Thumbnails from "../../components/thumbnails";

function Account() {
  return (
    <div style={{ backgroundColor: "#e6e4e4" }}>
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
              spacing={2}
            >
              <Thumbnails
                image="https://source.unsplash.com/random"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate provident, nesciunt quo perferendis eius in dolor quos, molestiae explicabo sit veritatis, nemo vero ducimus quisquam!"
              />
            </Grid>
          </div>
        </Container>
      </Grid>
    </div>
  );
}

export default Account;

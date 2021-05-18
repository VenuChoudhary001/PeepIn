import { Button, Container, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import AccountHeader from "../../components/account-header";
import Sorry from "../../components/sorry";
import Thumbnails from "../../components/thumbnails";
import ProfileContext from "../../context/user";
function Account() {
  const { setUser, user } = useContext(ProfileContext);
  if (!user) {
    return <Sorry />;
  }
  return (
    <div style={{ backgroundColor: "#e6e4e4" }}>
      <Grid container direction="column">
        <Grid item>
          <AccountHeader user={user} type="self" />
        </Grid>

        <Container>
          <div className="mb-2">
            <Grid
              item
              container
              justify="flex-start"
              alignItems="center"
              direction="row"
              spacing={1}
            >
              <Thumbnails id={user.uid} />
            </Grid>
          </div>
        </Container>
      </Grid>
    </div>
  );
}

export default Account;

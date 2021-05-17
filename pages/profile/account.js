import { Container, Grid } from "@material-ui/core";
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

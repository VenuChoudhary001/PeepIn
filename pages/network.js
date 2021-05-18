import { Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import ListNetwork from "../components/list";
import Loading from "../components/loading";
import Sorry from "../components/sorry";
import ProfileContext from "../context/user";
import { db } from "../lib/firebase";
import Link from "next/link";
function Network() {
  const { user } = useContext(ProfileContext);
  const [list, setList] = useState();
  if (!user) {
    return <Sorry />;
  }
  useEffect(() => {
    db.collection("Users")
      .doc(user.uid)
      .onSnapshot((querySnapshot) => {
        setList(querySnapshot.data().followers.followersList);
      });
  }, []);
  console.log("this is list", list);

  if (!list) {
    return <Loading />;
  }
  if (list.length == 0) {
    return (
      <div style={{ margin: "1px auto", width: "100%" }}>
        <Typography variant="h5">No Connections</Typography>
      </div>
    );
  }
  return (
    <div className="my-4">
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        direction="column"
      >
        <Grid item className="my-1">
          <Typography variant="h5">Your Connections</Typography>
        </Grid>
        <hr
          style={{
            border: "1px solid black",
            width: "80%",
            margin: "1px auto",
          }}
        />
        {list.map((item) => {
          if (item) {
            return (
              <Link href={`/profile/${item}`}>
                <ListNetwork id={item} />
              </Link>
            );
          }
        })}
      </Grid>
    </div>
  );
}

export default Network;

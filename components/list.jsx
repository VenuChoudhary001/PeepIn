import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import Loading from "./loading";
import Link from "next/link";

function ListNetwork({ id }) {
  const [data, setData] = useState();
  useEffect(() => {
    db.collection("Users")
      .doc(id)
      .get()
      .then((querySnapshot) => {
        setData(querySnapshot.data());
      });
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <>
      <Grid item xs={12} sm={8} className="my-1">
        <List style={{ backgroundColor: "#fff", minWidth: "300px" }}>
          <ListItem button alignItems="flex-start">
            <ListItemAvatar>
              <Link href={`/profile/${id}`}>
                <Avatar
                  src={data.imageURL}
                  alt={data.userName}
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </ListItemAvatar>
            <Link href={`/profile/${id}`}>
              <ListItemText
                primary={data.userName}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {data.bio || ""}
                    </Typography>
                  </React.Fragment>
                }
              />
            </Link>
          </ListItem>
        </List>
      </Grid>
    </>
  );
}

export default ListNetwork;

import React, { useState, useContext, useEffect } from "react";
import {
  Avatar,
  Badge,
  Button,
  Container,
  Grid,
  Icon,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import CreateIcon from "@material-ui/icons/Create";
import ProfileContext from "../context/user";
import ImageUpload from "../helpers/imageUpload";
import UploadText from "../helpers/uploadText";
import { db } from "../lib/firebase";

const useStyles = makeStyles((theme) => ({
  rootAvatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),

    border: "4px solid white",
  },
  badgeRoot: {
    right: "10px",
    bottom: "26px",
  },
}));

function AccountHeader({ user, type }) {
  // const { setUser, user } = useContext(ProfileContext);
  const [open, setOpen] = useState(false);
  const [addBio, setAddBio] = useState(false);
  const classes = useStyles();
  const [connect, setConnect] = useState();
  useEffect(() => {
    db.collection("Users")
      .doc(user.uid)
      .onSnapshot((querySnapshot) => {
        setConnect(querySnapshot.data().followers.followersCount);
      });
  }, []);
  return (
    <div className="account__header mt-4">
      <Grid
        container
        justify="flex-start"
        alignItems="flex-start"
        direction="column"
      >
        <Grid item container justify="flex-start" alignItems="flex-start">
          <div className="account__header__banner__root ">
            <div className="account__header__banner"></div>
            <div className="account__header__avatar">
              <Badge
                badgeContent={
                  type !== "other" ? (
                    <PhotoCameraIcon onClick={() => setOpen(!open)} />
                  ) : (
                    ""
                  )
                }
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                classes={{
                  anchorOriginBottomRightCircle: classes.badgeRoot,
                }}
                overlap="circle"
                style={{ cursor: "pointer" }}
              >
                <Avatar
                  src={user.imageURL}
                  alt={user.userName}
                  className={classes.rootAvatar}
                />
              </Badge>
            </div>
          </div>
        </Grid>
        <Container>
          <Grid item className="px-3">
            <Typography variant="h5">{user.userName}</Typography>
          </Grid>
          <Grid
            item
            container
            justify="space-between"
            alignItems="center"
            className="px-3"
          >
            <Grid item>
              <Typography variant="subtitle2">
                {user.bio || "ADD BIO"}
                {type !== "other" ? (
                  <Icon
                    style={{ cursor: "pointer" }}
                    onClick={() => setAddBio(!addBio)}
                  >
                    <CreateIcon />
                  </Icon>
                ) : (
                  ""
                )}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            justify="space-between"
            alignItems="center"
            className="px-3"
          >
            <Grid item>
              <Typography variant="subtitle1">
                {connect > 0 ? connect : "0"}
                Connections
              </Typography>
            </Grid>
          </Grid>

          <hr style={{ border: "2px solid darkgrey" }} />
        </Container>
      </Grid>
      <ImageUpload open={open} close={setOpen} bucket="profile" />
      <UploadText open={addBio} close={setAddBio} type="bio" />
    </div>
  );
}

export default AccountHeader;

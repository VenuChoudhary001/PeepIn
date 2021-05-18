import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { db, increment, removeArray } from "../../lib/firebase";
import AccountHeader from "../../components/account-header";
import { Button, Container, Grid } from "@material-ui/core";
import ProfileContext from "../../context/user";
import Sorry from "../../components/sorry";

function Particulars() {
  const [data, setData] = useState();
  const { user } = useContext(ProfileContext);
  const route = useRouter();

  const [follow, setFollower] = useState(true);
  if (!user) {
    return (
      <>
        <Sorry />
      </>
    );
  }
  if (user.uid === route.query.id) {
    route.push("/profile/account");
  }

  const { following } = user;
  const { followingCount, followingList } = following;

  const handleFollow = (e) => {
    e.preventDefault();
    setFollower(!follow);
    db.collection("Users")
      .doc(route.query.id)
      .update({
        followers: {
          followersCount: follow
            ? increment(data.followers.followersCount + 1)
            : increment(data.followers.followersCount - 1),
          followersList: follow
            ? [...data.followers.followersList, user.uid]
            : removeArray(user.uid),
        },
      });
    db.collection("Users")
      .doc(user.uid)
      .update({
        following: {
          followingCount: follow
            ? increment(followingCount + 1)
            : increment(followingCount - 1),
          followingList: follow
            ? [...followingList, data.uid]
            : removeArray(data.uid),
        },
      });
  };

  const getUserInfo = async () => {
    const getData = await db.collection("Users").doc(route.query.id).get();

    const info = await getData.data();

    setData(info);
  };
  useEffect(() => {
    getUserInfo();
    if (user.following.followingList) {
      user.following.followingList.forEach((item) => {
        if (item === route.query.id) setFollower(!follow);
      });
    }
  }, []);
  if (!data) {
    return <></>;
  }

  return (
    <>
      <Container>
        <Grid
          container
          justify="flex-start"
          direction="column"
          alignItems="flex-start"
        >
          <Grid item>
            <AccountHeader user={data} type="other" />
          </Grid>
          <Grid item>
            <Button
              variant="contaiend"
              style={{ backgroundColor: "#d81b60", color: "#fff" }}
              onClick={handleFollow}
            >
              {follow ? "Connect" : "Following"}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Particulars;

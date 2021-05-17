import React, { useState, useEffect, useContext } from "react";
import { db } from "../../lib/firebase";
import Post from "../../components/post";
import CreatePost from "../../components/createpost-box";
import { Container, Grid, Typography, useMediaQuery } from "@material-ui/core";
import SideBar from "../../components/side-bar";
import { useTheme } from "@material-ui/core";
import Widgets from "../../components/widgets";
import ProfileContext from "../../context/user";
import ALL_POSTS from "../../context/post-context";
import Link from "next/link";
import Sorry from "../../components/sorry";
function Home() {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { setUser, user } = useContext(ProfileContext);
  const { allPost, setAllPost, myPost, setMyPost } = useContext(ALL_POSTS);

  if (!user) {
    return (
      <>
        <Sorry />
      </>
    );
  }

  /*if (allPost.length === 0) {
    return (
      <>
        <h2>Loading.....</h2>
      </>
    );
  }*/

  useEffect(() => {
    db.collection("posts")
      .orderBy("publishedAt", "desc")
      .onSnapshot((snapshot) => {
        setAllPost(
          snapshot.docs.map((item) => {
            return { ...item.data() };
          })
        );
      });
  }, [myPost]);

  console.log("All posts from home", allPost);
  return (
    <>
      <Container className="home_layout_root ">
        <Grid container justify="flex-start" direction="row" spacing={1}>
          {mdUp ? (
            <Grid item xs={3}>
              <SideBar
                imageURL={user.imageURL}
                bio={user.bio}
                user={user.userName || "----"}
                connections={user.followers.followersCount || "0"}
              />
            </Grid>
          ) : (
            ""
          )}

          <Grid item xs container justify="flex-start" direction="column">
            <Grid item>
              <CreatePost />
            </Grid>
            {allPost.length !== 0
              ? allPost.map((item) => {
                  return (
                    <Grid item key={item.publishedAt}>
                      <Post data={item} />
                    </Grid>
                  );
                })
              : ""}
          </Grid>
          {mdUp ? (
            <Grid item xs={3}>
              <Widgets />
            </Grid>
          ) : (
            ""
          )}
        </Grid>
      </Container>
    </>
  );
}

export default Home;

/**
 
 */

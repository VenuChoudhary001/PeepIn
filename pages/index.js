import React, { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import Post from "../components/post";
import CreatePost from "../components/createpost-box";
import { Container, Grid, useMediaQuery } from "@material-ui/core";
import SideBar from "../components/side-bar";
import { useTheme } from "@material-ui/core";
import Widgets from "../components/widgets";
function Home() {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  /*
  const [post, setPost] = useState();
  const [inputpost, setInputPost] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: inputpost,
    });
  };
  /*
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPost(
        snapshot.docs.map((item) => {
          return { ...item.data() };
        })
      );
    });
  }, []);*/
  return (
    <>
      <Container className="home_layout_root ">
        <Grid container justify="flex-start" direction="row" spacing={1}>
          {mdUp ? (
            <Grid item xs={3}>
              <SideBar
                imageURL="https://source.unsplash.com/random"
                bio="Front End Web Developer, Freshman@ NIT Durgapur"
                user="Venu Choudhary"
              />
            </Grid>
          ) : (
            ""
          )}

          <Grid item xs container justify="flex-start" direction="column">
            <Grid item>
              <CreatePost />
            </Grid>
            <Grid item>
              <Post />
            </Grid>
            <Grid item>
              <Post />
            </Grid>
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

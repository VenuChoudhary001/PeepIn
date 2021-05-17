import { Button, Container, Grid, Icon, Typography } from "@material-ui/core";
import React, { useState, useContext } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import MailIcon from "@material-ui/icons/Mail";
import Link from "next/link";
import LandingHeader from "../components/landing-header";
import { auth, db } from "../lib/firebase";
import ProfileContext from "../context/user";
import SnackbarDisplay from "../helpers/snackbar";
import { useRouter } from "next/router";
function Signup() {
  const route = useRouter();
  const { setUser, user } = useContext(ProfileContext);
  const [display, setDisplay] = useState(false);
  const [displayMessage, setDisplayMessage] = useState({
    mess: "hi",
    code: "rgb(44  196 123)",
  });
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userName && email && password) {
      try {
        const USER = await auth.createUserWithEmailAndPassword(email, password);
        console.log("this is user", user);
        const data = await USER.user;
        console.log("this is data", data);
        setDisplay(!display);
        setDisplayMessage({
          mess: `WELCOME ${userName} 🚀`,
          code: "rgb(44  196 123)",
        });
        db.collection("Users")
          .doc(data.uid)
          .set({
            userName: userName,
            uid: data.uid,
            imageURL: "",
            bio: "",
            followers: {
              followersCount: 0,
              followersList: [],
            },
            following: {
              followingCount: 0,
              followingList: [],
            },
          });
        setUser({
          uid: data.uid,
          userName: userName,
          profileURL: "",
          imageURL: "",
          bio: "",
          followers: {
            followersCount: 0,
            followersList: [],
          },
          following: {
            followingCount: 0,
            followingList: [],
          },
        });
        console.log(user);
        route.replace("/home/home");
      } catch (error) {
        setDisplay(!display);
        setDisplayMessage({
          mess: `Please fill all the details`,
          code: "#e53935",
        });
      }
    } else {
      setDisplay(!display);
      setDisplayMessage({ mess: `${error.message}`, code: "#e53935" });
    }
  };

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "900px" }}>
      <LandingHeader />
      <Container className="my-4 py-4">
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          direction="row"
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <img src="/sign-in.png" alt="welcome" className="sign__up__image" />
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            xs={12}
            sm={6}
            spacing={2}
          >
            <Grid item>
              <Typography variant="h4" color="secondary">
                Sign Up
              </Typography>
              <hr style={{ border: "2px solid darkgrey" }} />
            </Grid>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Icon>
                  <AccountCircleIcon style={{ fontSize: "30" }} />
                </Icon>
              </Grid>
              <Grid item>
                <input
                  type="text"
                  className="sign__up__input"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Icon>
                  <MailIcon style={{ fontSize: "30" }} />
                </Icon>
              </Grid>
              <Grid item>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="sign__up__input"
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Icon>
                  <LockIcon style={{ fontSize: "30" }} />
                </Icon>
              </Grid>
              <Grid item>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="sign__up__input"
                />
              </Grid>
            </Grid>
            <Grid item className="text-center">
              <Button
                variant="contained"
                style={{ color: "white" }}
                fullWidth
                color="secondary"
                className="mb-3"
                onClick={handleSubmit}
              >
                SIGN IN
              </Button>
              <Typography variant="subtitle2">
                Already have an account?
              </Typography>
              <Link href="login">
                <Typography
                  variant="subtitle1"
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Log In
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <SnackbarDisplay
        open={display}
        close={setDisplay}
        message={displayMessage}
      />
    </div>
  );
}

export default Signup;

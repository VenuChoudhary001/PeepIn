import React, { useState, useContext } from "react";
import { Button, Container, Grid, Icon, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import MailIcon from "@material-ui/icons/Mail";
import Link from "next/link";
import LockIcon from "@material-ui/icons/Lock";
import LandingHeader from "../components/landing-header";
import { useRouter } from "next/router";
import { db, auth } from "../lib/firebase";
import ProfileContext from "../context/user";
import SnackbarDisplay from "../helpers/snackbar";
const useStyles = makeStyles((theme) => ({
  iconButton: {
    "& .MuiSvgIcon-root": {
      fontSize: "4rem",
      animationName: "$rotate",
      animationIterationCount: "infinite",
    },
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  "@keyframes rotate": {
    from: { transition: "all 0.225s linear", transform: "rotate(180deg)" },
    to: { transition: "all 0.225s linear", transform: "rotate(360deg)" },
  },
}));

function Login() {
  const route = useRouter();
  const { setUser, user } = useContext(ProfileContext);
  const [display, setDisplay] = useState(false);
  const [displayMessage, setDisplayMessage] = useState({
    mess: "hi",
    code: "rgb(44  196 123)",
  });
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const USER = await auth.signInWithEmailAndPassword(email, password);

        const data = await USER.user;

        setDisplay(!display);
        setDisplayMessage({
          mess: `WELOME BACK `,
          code: "#e53935",
        });
        const getUSER_DATA = await db.collection("Users").doc(data.uid).get();
        const USER_INFO = await getUSER_DATA.data();

        setUser({ ...USER_INFO });
        route.replace("/home/home");
      } catch (error) {
        setDisplay(!display);
        setDisplayMessage({
          mess: `${error.message}`,
          code: "#e53935",
        });
      }
    }
  };

  return (
    <div style={{ backgroundColor: "#fff", height: "900px" }}>
      <LandingHeader />
      <Container className="">
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          direction="row"
        >
          <Grid item xs={12} sm={6}>
            <img src="/welcome.png" alt="welcome" className="sign__up__image" />
          </Grid>
          <Grid
            item
            container
            justify="center"
            spacing={2}
            alignItems="center"
            xs={12}
            sm={6}
            direction="column"
          >
            <Grid item>
              <Typography variant="h4" color="secondary">
                Log In
              </Typography>
              <hr
                style={{ border: "3px solid #123456", background: "#123456" }}
              />
            </Grid>
            <Grid
              item
              container
              justify="center"
              spacing={2}
              alignItems="center"
            >
              <Grid item>
                <Icon>
                  <MailIcon style={{ fontSize: "30" }} />
                </Icon>
              </Grid>
              <Grid item>
                <input
                  type="email"
                  className="login__input"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              justify="center"
              spacing={2}
              alignItems="center"
            >
              <Grid item>
                <Icon>
                  <LockIcon style={{ fontSize: "30" }} />
                </Icon>
              </Grid>
              <Grid item>
                <input
                  type="password"
                  className="login__input"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item className="my-3 text-center">
              <Button
                color="secondary"
                variant="contained"
                style={{ color: "white" }}
                fullWidth
                className="mb-3"
                onClick={handleSubmit}
              >
                LOG IN
              </Button>
              <Typography variant="subtitle2">
                Do not have an account?
              </Typography>
              <Link href="/signup">
                <Typography
                  variant="subtitle1"
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Create one
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

export default Login;

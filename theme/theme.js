import { createMuiTheme } from "@material-ui/core";

const THEME = createMuiTheme({
  typography: {
    h6: {
      fontFamily: "Poppins",
      fontWeight: 400,
    },
    //   FOR TABS
    subtitle2: {
      fontFamily: "Raleway",
      fontWeight: 500,
      fontSize: "1rem",
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontWeight: 400,
    },
    caption: {
      fontFamily: "Raleway",
      fontWeight: 200,
    },
    body1: {
      fontFamily: "Raleway",
      fontWeight: 500,
    },
    body2: {
      fontFamily: "Raleway",
      fontWeight: 200,
    },
    //For headings
    h4: {
      fontFamily: "Raleway",
      fontWeight: 500,
    },
    h3: {
      fontFamily: "Antonio",
      fontWeight: 700,
    },
    h5: { fontFamily: "Poppins", fontWeight: 200 },
  },
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "rgb(29,161,242)",
    },
    // type: "dark",
  },
});

export default THEME;

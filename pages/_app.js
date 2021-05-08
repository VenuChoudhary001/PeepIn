import Layout from "../components/layout";
import "../styles/globals.css";
import THEME from "../theme/theme";
import { ThemeProvider } from "@material-ui/core";
import { ProfileContextProvider } from "../context/user";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={THEME}>
      <ProfileContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProfileContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;

import Layout from "../components/layout";
import "../styles/globals.css";
import THEME from "../theme/theme";
import { ThemeProvider } from "@material-ui/core";
import { ProfileContextProvider } from "../context/user";
import { ALL_POST_PROVIDER } from "../context/post-context";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={THEME}>
      <ProfileContextProvider>
        <ALL_POST_PROVIDER>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ALL_POST_PROVIDER>
      </ProfileContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;

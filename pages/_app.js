import Layout from "../components/layout";
import "../styles/globals.css";
import THEME from "../theme/theme";
import { ThemeProvider } from "@material-ui/core";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={THEME}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
